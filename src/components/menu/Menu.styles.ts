import styled from "styled-components";
import { Menu as AntMenu } from "antd";
import { IMenuProps } from "..";

export const Menu = styled(AntMenu)<IMenuProps>`
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
`;
