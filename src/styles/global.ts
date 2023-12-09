import { createGlobalStyle, css } from "styled-components";
import { reset } from "./reset";

export default createGlobalStyle`
  ${reset}

  * {
    font-family: 'Poppins', sans-serif;
  }
  
  ${({ theme }) => css`
    body {
      font-weight: 400;
      font-size: 14px;
      line-height: 1;
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};
    }

    a {
      text-decoration: none;
      color: ${theme.colors.primary};
      font-weight: 600;

      &:hover {
        color: ${theme.colors.primary};
        filter: brightness(1.2);
      }
    }
  `}

  
`;
