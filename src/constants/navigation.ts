import { Home, LocationDiscover, Bookmark, Additem, User } from "iconsax-react";
import { path } from ".";

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
    key: path.bookmarks,
    title: "Bookmarks",
    icon: Bookmark,
  },
  {
    key: path.createPost,
    title: "Create Post",
    icon: Additem,
  },
];

export const profilePopoverLinks = [
  {
    key: path.profile,
    title: "Profile",
    icon: User,
  },
];
