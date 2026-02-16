import React from "react";
import { DEMO_POSTS_VIDEO } from "@/data/posts";
import SectionSubscribe2 from "@/components/SectionSubscribe2/SectionSubscribe2";
import SectionGridPosts from "@/components/Sections/SectionGridPosts";
import { getSeason3Episodes } from "@/utils/youtube-service";
import BuyMeACoffeeWidget from "@/components/BuyMeACoffeeWidget/BuyMeACoffeeWidget";

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
                <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase">Tecnología e innovación sin estereotipos</span>
                <h2 className="mt-2 text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100">
                 Mi podcast: Coffee Tech Insights
                </h2>
                <div className="mt-6 space-y-6">
                  <p className="text-lg text-neutral-600 dark:text-neutral-400">
                    Te comparto uno de mis proyectos que me apasiona, con +80 episodios analizando el futuro de la tecnología y la innovación, buscando eliminar estereotipos.
                    <br />
                    Cada episodio es un insight que te ayudará a descubrir nuevas oportunidades en el mundo Tech.
                  </p>
                  <div className="flex flex-col items-center gap-4">
                     <p className="text-sm text-neutral-500">
                        Únete a esta comunidad con contenido exclusivo simplemente aportando con tu cafecito! ☕️
                     </p>
                     <a href="https://www.buymeacoffee.com/coffeetechinsights" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity">
                        <img 
                          src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=coffeetechinsights&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" 
                          alt="Buy Me A Coffee" 
                          className="h-12"
                        />
                     </a>
                  </div>
                </div>
             </div>
             
              <SectionGridPosts
                headingIsCenter
                postCardName="card10V2"
                heading="Episodios recientes"
                subHeading={subHeading}
                posts={posts}
                gridClass="sm:grid-cols-2 lg:grid-cols-3"
              />
             
               <BuyMeACoffeeWidget />
              
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
