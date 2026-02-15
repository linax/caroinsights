import React from "react";
import { DEMO_POSTS_VIDEO } from "@/data/posts";
import SectionSubscribe2 from "@/components/SectionSubscribe2/SectionSubscribe2";
import SectionGridPosts from "@/components/Sections/SectionGridPosts";
import { getSeason3Episodes } from "@/utils/youtube-service";

// Portfolio Components
import SectionHeroPortfolio from "@/components/SectionHeroPortfolio/SectionHeroPortfolio";
import SectionAboutPortfolio from "@/components/SectionAboutPortfolio/SectionAboutPortfolio";
import SectionServicesPortfolio from "@/components/SectionServicesPortfolio/SectionServicesPortfolio";
import SectionProjectsPortfolio from "@/components/SectionProjectsPortfolio/SectionProjectsPortfolio";

const PageHomeDemo4 = async () => {
  const youtubePosts = await getSeason3Episodes();
  const posts = youtubePosts.length > 0 ? youtubePosts : DEMO_POSTS_VIDEO;
  const subHeading = youtubePosts.length > 0 
    ? "Revisa los últimos episodios de la temporada 3! 🥡" 
    : "Revisa los últimos episodios de la temporada 1! 🥡";

  return (
    <div className="nc-PageHomeDemo4 relative">
      <div className="relative">
        <SectionHeroPortfolio />
        
        <SectionAboutPortfolio />
        
        <SectionServicesPortfolio />
        
        <SectionProjectsPortfolio />

        <div className="relative overflow-hidden bg-neutral-50 dark:bg-neutral-900/30 py-16 lg:py-28">
           {/* Noise texture overlay could be added here via CSS */}
          <div className="container relative">
             <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase">Content Creation</span>
                <h2 className="mt-2 text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100">
                  Host of Coffee Tech Insights
                </h2>
             </div>
             
              <SectionGridPosts
                headingIsCenter
                postCardName="card10V2"
                heading=""
                subHeading={subHeading}
                posts={posts}
                gridClass="sm:grid-cols-2 lg:grid-cols-3"
              />
              
               <div className="flex justify-center mt-12">
                   <SectionSubscribe2 />
               </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHomeDemo4;
