import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token, css }) => ({
  card: css`
    background: ${token.colorBgBase};
    border-radius: ${token.borderRadius}px;

    .ant-card-meta {
      align-items: center;
    }
  `,
}));
