import { createStyles } from "antd-style";

export const useStyles = createStyles(({ css, token }) => ({
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

  create: css`
    margin-bottom: 20px;
    padding: 16px;
    border-radius: ${token.borderRadius}px;
    background: ${token.colorBgBase};
  `,

  input: css`
    display: flex;
    gap: 20px;
    font-size: 16px;

    input {
      flex: 1;
    }
  `,

  posts: {
    display: "flex",
    gap: "20px",
    flexDirection: "column",
  },
}));
