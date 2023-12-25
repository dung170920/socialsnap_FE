import { createStyles } from "antd-style";

export const useStyles = createStyles(({ css }, props: { size: "lg" | "sm" }) => ({
  menu: css`
    overflow: hidden;
    background-color: inherit;
    border: 0 !important;

    &.ant-menu-inline-collapsed .ant-menu-item {
      svg {
        min-width: 24px;
      }
    }

    .ant-menu-item {
      padding: ${props.size === "lg" ? "12px 0" : "8px 0"};
      font-weight: 500;
      border-radius: 0;
      width: 100%;
      display: flex;
      align-items: center;
      line-height: 1;
      height: auto;
      margin: 8px 0 !important;

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
