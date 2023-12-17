import { createStyles } from "antd-style";

export const useStyles = createStyles(({ css }) => ({
  body: {
    width: "100%",
  },

  forgotPassword: {
    textAlign: "right",
    width: "100%",
    display: "block",
  },

  buttons: css`
    width: 100%;
    text-align: center;
    margin-top: 24px;

    p {
      color: inherit;
      margin-top: 12px;
    }
  `,
}));
