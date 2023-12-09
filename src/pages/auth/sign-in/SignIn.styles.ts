import { Form } from "antd";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Body = styled(Form)`
  width: 100%;
`;

export const ForgotPassword = styled(Link)`
  text-align: right;
  width: 100%;
  display: block;
`;

export const Buttons = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 24px;

  p {
    color: inherit;
    margin-top: 12px;
  }
`;
