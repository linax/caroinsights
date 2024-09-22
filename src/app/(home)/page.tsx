import React from "react";
import becomAuthorImg from "@/images/BecomeAnAuthorImg.png";
import { DEMO_POSTS, DEMO_POSTS_VIDEO } from "@/data/posts";
import { DEMO_AUTHORS } from "@/data/authors";
import SectionSubscribe2 from "@/components/SectionSubscribe2/SectionSubscribe2";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionSliderNewAuthors from "@/components/SectionSliderNewAthors/SectionSliderNewAuthors";
import SectionBecomeAnAuthor from "@/components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import { TaxonomyType } from "@/data/types";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories/SectionSliderNewCategories";
import SectionHero2 from "@/components/Sections/SectionHero2";
import SectionTrending from "@/components/Sections/SectionTrending";
import { Route } from "@/routers/types";
import SectionMagazine6 from "@/components/Sections/SectionMagazine6";
import SectionVideos from "@/components/Sections/SectionVideos";
import SectionAds from "@/components/Sections/SectionAds";
import SectionGridPosts from "@/components/Sections/SectionGridPosts";

const TRAVEL_SUBCATS: TaxonomyType[] = [
  {
    id: 1,
    name: "New York",
    href: "/archive/the-demo-archive-slug" as Route,
    thumbnail:
      "https://images.pexels.com/photos/2179602/pexels-photo-2179602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    count: 132,
    color: "pink",
    taxonomy: "category",
  },
  {
    id: 2,
    name: "Dubai",
    href: "/archive/the-demo-archive-slug" as Route,
    thumbnail:
      "https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    count: 122,
    color: "pink",
    taxonomy: "category",
  },
  {
    id: 3,
    name: "Paris",
    href: "/archive/the-demo-archive-slug" as Route,
    thumbnail:
      "https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    count: 112,
    color: "pink",
    taxonomy: "category",
  },
  {
    id: 6,
    name: "London",
    href: "/archive/the-demo-archive-slug" as Route,
    thumbnail:
      "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    count: 218,
    color: "pink",
    taxonomy: "category",
  },
  {
    id: 4,
    name: "Tokyo",
    href: "/archive/the-demo-archive-slug" as Route,
    thumbnail:
      "https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    count: 311,
    color: "pink",
    taxonomy: "category",
  },
  {
    id: 5,
    name: "Maldives",
    href: "/archive/the-demo-archive-slug" as Route,
    thumbnail:
      "https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    count: 112,
    color: "pink",
    taxonomy: "category",
  },
];

const PageHomeDemo4: React.FC = () => {
  return (
    <div className="nc-PageHomeDemo4 relative">
      <div className="relative">
        <SectionHero2 />
        <div className="relative overflow-hidden">
          <div className="container relative">
          <div className="relative py-16">
              <BackgroundSection />
              <SectionGridPosts
                headingIsCenter
                postCardName="card10V2"
                heading="Coffee Tech Insights - Videopodcast"
                subHeading="Revisa los últimos episodios de la temporada 1! 🥡"
                posts={DEMO_POSTS_VIDEO}
                gridClass="sm:grid-cols-2 lg:grid-cols-3"
              />
            </div>
      

            <SectionMagazine6
              className="py-16 lg:py-28"
              heading="🧩 Editor Picks"
            />
            <SectionSubscribe2 className="py-16 lg:py-28" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHomeDemo4;
