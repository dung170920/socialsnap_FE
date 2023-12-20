import { createStyles } from "antd-style";

export const useStyles = createStyles(({ css }) => ({
  menu: css`
    overflow: hidden;
    padding: 10px 0 0;
    background-color: inherit;

    &.ant-menu-inline-collapsed .ant-menu-item {
      svg {
        min-width: 24px;
      }
    }

    .ant-menu-item {
      font-weight: 500;
      margin: 0 0 12px !important;
      border-radius: 0;
      width: 100%;
      display: flex;
      align-items: center;
      line-height: 48px;
      height: 48px;

      a {
        transition: none;
      }

      &.ant-menu-item-selected {
        a:hover {
          filter: brightness(1);
        }
      }
    }
  `,
}));
