import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token, css }, props: { collapsed: boolean }) => ({
  sidebar: css`
    position: relative;
    background: ${token.colorBgBase} !important;
    border-right: 1px solid ${token.colorBorder};
  `,
  collapseButton: css`
    position: absolute;
    border-radius: 50% !important;
    right: -16px;
    top: 16px;
    height: 32px;
    width: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    color: ${token.colorText};
    border: 1px solid ${token.colorBorder};
    background: ${token.colorBgBase};
    transform: ${props.collapsed ? "rotate(180deg)" : "rotate(0)"};

    &:hover {
      background: ${token.colorBgContainer};
    }
  `,
}));
