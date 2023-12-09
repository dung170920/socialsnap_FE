import { Home, LocationDiscover, Bookmark, Additem } from "iconsax-react";
import { PATH } from ".";

export const SIDEBAR_LINKS = [
  {
    key: PATH.home,
    title: "Home",
    icon: Home,
  },
  {
    key: PATH.explore,
    title: "Explore",
    icon: LocationDiscover,
  },
  {
    key: PATH.bookmarks,
    title: "Bookmarks",
    icon: Bookmark,
  },
  {
    key: PATH.createPost,
    title: "Create Post",
    icon: Additem,
  },
];
