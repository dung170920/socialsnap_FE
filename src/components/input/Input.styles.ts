import styled, { css } from "styled-components";
import { Input as AntInput, Form } from "antd";

export const FormItem = styled(Form.Item)`
  margin-top: 4px;
  font-weight: 500;
  width: 100%;
`;

export const Input = styled(AntInput)`
  margin-bottom: 4px;

  ${({ size }) => css`
    ${size === "middle" &&
    css`
      padding: 8px 16px;
    `}

    ${size === "large" &&
    css`
      padding: 12px 16px;
    `}
  `}
`;

export const InputPassword = styled(AntInput.Password)`
  margin-bottom: 4px;

  ${({ size }) => css`
    ${size === "middle" &&
    css`
      padding: 8px 16px;
    `}

    ${size === "large" &&
    css`
      padding: 12px 16px;
    `}
  `}
`;
