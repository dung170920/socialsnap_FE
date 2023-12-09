import { Layout } from "antd";
import styled, { css } from "styled-components";

export const Header = styled(Layout.Header)`
  ${({ theme }) => css`
    background: ${theme.colors.card};
    border: 1px solid ${theme.colors.border};
  `}
`;
