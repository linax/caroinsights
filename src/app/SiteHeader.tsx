"use client";

import React, { Fragment, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import HeaderLogged from "@/components/Header/HeaderLogged";
import Header from "@/components/Header/Header";
import Header2 from "@/components/Header/Header2";
import {
  ShoppingBagIcon as ShoppingCartIcon,
  Cog8ToothIcon as CogIcon,
} from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";
import SwitchDarkMode2 from "@/components/SwitchDarkMode/SwitchDarkMode2";
import { useThemeMode } from "@/hooks/useThemeMode";

const SiteHeader = () => {
  let pathname = usePathname();
  useThemeMode();
  //


  return (
    <>
    </>
  );
};

export default SiteHeader;
