import { createGlobalStyle, css } from "antd-style";

export default createGlobalStyle`
  body {
      font-weight: 400;
      font-size: 14px;
      line-height: 1;
      font-family: ${({ theme }) => theme.fontFamily};
    }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colorBgContainer};
    border-radius: 1.25rem;
    border: 0.375rem solid transparent;
    background-clip: content-box;
  }

  img,
  picture,
  svg,
  video {
    display: block;
    max-width: 100%;
  }
  input,
  select,
  textarea {
    background-color: transparent;
    outline: none;
  }
  button {
    cursor: pointer;
    background-color: transparent;
    outline: none;
    border: 0;
  }

  ${({ theme }) => css`
    a {
      color: ${theme.colorPrimary};
      font-weight: 600;

      &:hover {
        color: ${theme.colorPrimary};
        filter: brightness(1.2);
      }
    }
  `}

`;
