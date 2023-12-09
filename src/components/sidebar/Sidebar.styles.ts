import { COLORS } from "@/constants";
import { Layout } from "antd";
import styled, { css } from "styled-components";

export const Sider = styled(Layout.Sider)`
  position: relative;

  ${({ theme }) => css`
    background: ${theme.colors.card} !important;
  `}

  .ant-menu {
    overflow: hidden;
    padding: 0;
    background-color: inherit;

    &.ant-menu-inline-collapsed .ant-menu-item {
      svg {
        min-width: 24px;
      }
    }

    .ant-menu-item {
      margin: 0 0 12px !important;
      border-radius: 0;
      width: 100%;
      display: flex;
      align-items: center;
      line-height: 48px;
      height: 48px;
      color: ${COLORS.neutral[500]};

      a {
        transition: none;
      }

      &.ant-menu-item-selected {
        color: ${COLORS.primary};

        a:hover {
          filter: brightness(1);
        }
      }
    }
  }
`;

export const CollapseButton = styled.button<{ $collapsed: boolean }>`
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

  ${({ theme, $collapsed }) =>
    css`
      background: ${theme.colors.card};
      border: 1px solid ${theme.colors.border};
      transform: ${$collapsed ? "rotate(180deg)" : "rotate(0)"};
    `};
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 16px 0;
  overflow: hidden;

  .ant-avatar {
    flex-shrink: 0;
  }
`;

export const Info = styled.div`
  h4 {
    font-size: 16px;
    margin-bottom: 6px;
  }
  span {
    font-size: 12px;
    color: ${COLORS.neutral[500]};
  }
`;
