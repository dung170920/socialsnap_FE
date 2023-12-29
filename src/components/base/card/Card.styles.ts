import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token, css }) => ({
  card: css`
    background-color: ${token.colorBgBase};
    border-radius: ${token.borderRadius}px;
  `,
}));
