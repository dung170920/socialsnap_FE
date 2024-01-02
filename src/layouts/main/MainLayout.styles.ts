import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token, css }) => ({
  wrapper: {
    height: "100vh",
    overflow: "hidden",
  },

  content: css`
    padding: 40px;
    background-color: ${token.colorBgContainer};
    color: ${token.colorText};
    overflow-y: scroll;
  `,
}));
