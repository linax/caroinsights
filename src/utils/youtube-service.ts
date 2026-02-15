import { PostDataType } from "@/data/types";
import { DEMO_AUTHORS } from "@/data/authors";
import { DEMO_CATEGORIES } from "@/data/taxonomies";
import { Route } from "@/routers/types";

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || "";
// Season 3 Playlist ID - User should replace this with their actual playlist ID
const PLAYLIST_ID = process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_ID || "PL_PLACEHOLDER_SEASON_3"; 

// Using ID 4 for "Coffee Tech Insights" as per user data
const DEFAULT_AUTHOR = DEMO_AUTHORS.find((a) => a.id === 4) || DEMO_AUTHORS[0];
const DEFAULT_CATEGORY = DEMO_CATEGORIES[0]; // You might want to map this dynamically if needed

interface YouTubePlaylistItem {
  id: string;
  snippet: {
    publishedAt: string;
    title: string;
    description: string;
    resourceId: {
      videoId: string;
    };
    thumbnails: {
      high?: { url: string };
      maxres?: { url: string };
      medium?: { url: string };
      standard?: { url: string };
    };
  };
  status: {
    privacyStatus: string;
  };
}

interface YouTubeResponse {
  items: YouTubePlaylistItem[];
  pageInfo?: {
    totalResults: number;
    resultsPerPage: number;
  };
}

export async function getSeason3Episodes(): Promise<PostDataType[]> {
  if (!YOUTUBE_API_KEY) {
    console.warn("YouTube API Key is missing. Returning empty array.");
    return [];
  }

  // If using the placeholder, we might want to return empty or mock data to avoid API errors
  // but for now let's attempt fetch if key exists, or warn user.
   if (PLAYLIST_ID === "PL_PLACEHOLDER_SEASON_3") {
      console.warn("YouTube Playlist ID is set to placeholder. Please update env variables.");
      // We could return mock data here if specific behavior is desired when not configured
   }

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,status&maxResults=10&playlistId=${PLAYLIST_ID}&key=${YOUTUBE_API_KEY}`,
      { next: { revalidate: 3600 } } // Revalidate every hour
    );

    if (!res.ok) {
      console.error(`YouTube API returned ${res.status}: ${res.statusText}`);
      return [];
    }

    const data: YouTubeResponse = await res.json();

    if (!data.items) {
        return [];
    }

    // Filter only public videos
    const publicItems = data.items.filter(item => item.status?.privacyStatus === 'public');

    return publicItems.slice(0, 6).map((item): PostDataType => {
      const videoId = item.snippet.resourceId.videoId;
      const thumbnail =
        item.snippet.thumbnails.maxres?.url ||
        item.snippet.thumbnails.standard?.url ||
        item.snippet.thumbnails.high?.url ||
        item.snippet.thumbnails.medium?.url ||
        "";

      return {
        id: videoId,
        author: DEFAULT_AUTHOR,
        date: item.snippet.publishedAt,
        href: `/single-video/${videoId}` as Route, // Using video ID as slug for now
        categories: [DEFAULT_CATEGORY],
        title: item.snippet.title,
        featuredImage: thumbnail,
        desc: item.snippet.description,
        like: { count: 0, isLiked: false },
        bookmark: { count: 0, isBookmarked: false },
        commentCount: 0,
        viewdCount: 0, // Typo in original type retained
        readingTime: 5,
        postType: "video",
        videoUrl: `https://www.youtube.com/watch?v=${videoId}`,
      };
    });
  } catch (error) {
    console.error("Error fetching YouTube episodes:", error);
    return [];
  }
}

export async function getVideoById(id: string): Promise<PostDataType | null> {
  if (!YOUTUBE_API_KEY) return null;

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${id}&key=${YOUTUBE_API_KEY}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) return null;

    const data = await res.json();
    if (!data.items || data.items.length === 0) return null;

    const item = data.items[0];
    const thumbnail =
        item.snippet.thumbnails.maxres?.url ||
        item.snippet.thumbnails.standard?.url ||
        item.snippet.thumbnails.high?.url ||
        item.snippet.thumbnails.medium?.url ||
        "";

    return {
      id: item.id,
      author: DEFAULT_AUTHOR,
      date: item.snippet.publishedAt,
      href: `/single-video/${item.id}` as Route,
      categories: [DEFAULT_CATEGORY],
      title: item.snippet.title,
      featuredImage: thumbnail,
      desc: item.snippet.description,
      like: { count: parseInt(item.statistics?.likeCount || "0"), isLiked: false },
      bookmark: { count: 0, isBookmarked: false },
      commentCount: parseInt(item.statistics?.commentCount || "0"),
      viewdCount: parseInt(item.statistics?.viewCount || "0"),
      readingTime: 5,
      postType: "video",
      videoUrl: `https://www.youtube.com/watch?v=${item.id}`,
    };
  } catch (error) {
    console.error("Error fetching video details:", error);
    return null;
  }
}
