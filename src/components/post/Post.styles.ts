import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token, css }) => ({
  header: css`
    display: flex;
    justify-content: space-between;
    gap: 16px;
  `,
}));
