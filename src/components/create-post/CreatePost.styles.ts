import { createStyles } from "antd-style";

export const useStyles = createStyles(({ css, token }) => ({
  create: css`
    margin-bottom: 20px;
    padding: 16px;
    border-radius: ${token.borderRadius}px;
    background: ${token.colorBgBase};
  `,

  input: css`
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 16px;

    .ant-avatar {
      flex-shrink: 0;
    }
  `,
}));
