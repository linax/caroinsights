import React from "react";
import Logo from "@/components/Logo/Logo";
import SocialsList1 from "@/components/SocialsList1/SocialsList1";
import { CustomLink } from "@/data/types";
import MusicPlayer from "../MusicPlayer/MusicPlayer";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      {/* music player */}
      <MusicPlayer />

      {/* footer */}
      <div className="nc-Footer relative py-8 border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
                <Logo />
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    © {new Date().getFullYear()} Caro Insights. All rights reserved.
                </span>
            </div>
            
            <div className="flex items-center space-x-4">
                 <SocialsList1 />
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
