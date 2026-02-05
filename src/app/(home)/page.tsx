import React from "react";
import { DEMO_POSTS_VIDEO } from "@/data/posts";
import SectionSubscribe2 from "@/components/SectionSubscribe2/SectionSubscribe2";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionHero2 from "@/components/Sections/SectionHero2";
import SectionMagazine6 from "@/components/Sections/SectionMagazine6";
import SectionGridPosts from "@/components/Sections/SectionGridPosts";

import { getSeason3Episodes } from "@/utils/youtube-service";

const PageHomeDemo4 = async () => {
  const youtubePosts = await getSeason3Episodes();
  const posts = youtubePosts.length > 0 ? youtubePosts : DEMO_POSTS_VIDEO;
  const subHeading = youtubePosts.length > 0 
    ? "Revisa los últimos episodios de la temporada 3! 🥡" 
    : "Revisa los últimos episodios de la temporada 1! 🥡";

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
                subHeading={subHeading}
                posts={posts}
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
