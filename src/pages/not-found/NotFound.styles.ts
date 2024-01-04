import { createStyles } from "antd-style";

export const useStyles = createStyles(({ css, token }) => ({
  notFound: css`
    background-color: ${token.colorBgContainer};
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `,

  header: css`
    color: ${token.colorText};
    font-size: 128px;
    font-weight: bold;
    letter-spacing: 0.1em;
    margin-bottom: 20px;
  `,

  label: css`
    padding: 4px 8px;
    border-radius: 4px;
    background-color: ${token.colorPrimary};
    transform: rotate(12deg);
    position: absolute;
    color: white;
  `,
}));
