import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token, css }) => ({
  wrapper: {
    height: "100vh",
  },

  content: css`
    overflow: auto;
    padding: 32px;
    background-color: ${token.colorBgContainer};
    color: ${token.colorText};
  `,
}));
