import { createStyles } from "antd-style";

export const useStyles = createStyles(({ css }) => ({
  dropdown: css`
    .ant-dropdown-menu {
      padding: 8px;

      .ant-dropdown-menu-item-divider {
        margin: 6px 0;
      }
      .ant-dropdown-menu-item {
        padding: 12px;

        svg {
          font-size: 24px;
        }
      }
    }
  `,
}));
