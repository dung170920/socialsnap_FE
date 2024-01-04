import { createStyles } from "antd-style";

export const useStyles = createStyles(() => ({
  home: {
    display: "flex",
    gap: "40px",
  },

  left: {
    flex: 2,
    overflowY: "scroll",
  },

  right: {
    flex: 1,
  },

  posts: {
    display: "flex",
    gap: "20px",
    flexDirection: "column",
  },
}));
