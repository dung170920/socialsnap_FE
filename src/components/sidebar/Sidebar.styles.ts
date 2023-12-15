import { Layout } from "antd";
import styled, { css } from "styled-components";

export const Sider = styled(Layout.Sider)`
  position: relative;

  ${({ theme }) => css`
    background: ${theme.colors.card} !important;
    border-right: 1px solid ${theme.colors.border};
  `}
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
