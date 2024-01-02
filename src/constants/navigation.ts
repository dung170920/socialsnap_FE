import { Home, LocationDiscover, Bookmark } from "iconsax-react";
import { path } from "@/constants";

export const sidebarLinks = [
  {
    key: path.home,
    title: "Home",
    icon: Home,
  },
  {
    key: path.explore,
    title: "Explore",
    icon: LocationDiscover,
  },
  {
    key: path.saved,
    title: "Saved",
    icon: Bookmark,
  },
];
