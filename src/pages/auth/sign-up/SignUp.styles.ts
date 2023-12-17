import { createStyles } from "antd-style";

export const useStyles = createStyles(({ css }) => ({
  body: {
    width: "100%",
  },
  buttons: css`
    width: 100%;
    text-align: center;
    margin-top: 32px;

    p {
      margin-top: 12px;
    }
  `,
}));
