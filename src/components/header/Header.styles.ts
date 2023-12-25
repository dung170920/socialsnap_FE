import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token, css }) => ({
  header: css`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 16px;
    background-color: ${token.colorBgBase};
    border: 1px solid ${token.colorBorder};
    border-left: 0;
  `,

  profile: {
    maxWidth: "220px",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    gap: "12px",
    cursor: "pointer",
  },

  avatar: {
    flexShrink: 0,
  },

  info: css`
    line-height: 1;
    flex: 1;
    overflow: hidden;

    h4 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
      margin-bottom: 6px;
    }

    span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block;
      font-size: 12px;
    }
  `,

  popoverContent: {
    width: 260,
  },
}));
