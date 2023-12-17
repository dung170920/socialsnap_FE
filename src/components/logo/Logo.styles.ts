import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token, css }) => ({
  wrapper: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
  },
  label: css`
    font-size: 20px;
    font-weight: 700;
    color: ${token.colorText};
  `,
  icon: css`
    flex-shrink: 0;
    color: ${token.colorPrimary};
  `,
}));
