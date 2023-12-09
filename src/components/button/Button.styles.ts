import styled, { css } from "styled-components";
import { Button as AntButton } from "antd";
import { IButtonProps } from "./Button";

export const Button = styled(AntButton)<IButtonProps>`
  height: 48px;
  box-shadow: none;
  font-weight: 500;

  &.ant-btn-lg {
    font-size: 16px;
    height: 56px;
  }

  &.ant-btn-sm {
    font-size: 16px;
    height: 40px;
  }

  ${({ type, theme }) => css`
    ${type === "primary" &&
    css`
      //background-color: ${theme.primary};
    `}
  `}
`;
