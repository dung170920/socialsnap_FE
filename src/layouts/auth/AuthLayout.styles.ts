import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token, css }) => ({
  wrapper: css`
    display: flex;
    min-height: 100vh;

    @media (max-width: ${token.screenMDMax}) {
      flex-direction: column;
    }
  `,

  right: css`
    width: 50%;
    background-color: ${token.colorBgBase};
    padding-left: 16px;
    padding-right: 16px;

    @media (max-width: ${token.screenMDMax}) {
      width: 100%;
    }
  `,

  left: css`
    width: 50%;
    position: relative;
    background-color: ${token.colorBgContainer};

    @media (max-width: ${token.screenMDMax}) {
      width: 100%;
    }
  `,

  logo: css`
    position: absolute;
    top: 0;
    left: 0;
    margin: 64px;

    @media (max-width: ${token.screenMDMax}) {
      margin: 16px;
    }
  `,

  image: {
    height: "100%",
    paddingTop: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  form: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 60%;
    margin: 48px auto;
    gap: 20px;

    @media (max-width: ${token.screenMDMax}) {
      max-width: 100%;
    }
  `,

  heading: css`
    width: 100%;

    h1 {
      font-size: 42px;
      font-weight: 600;
      margin-bottom: 12px;

      @media (max-width: ${token.screenMDMax}) {
        font-size: 32px;
      }
    }
    p {
      font-size: 14px;
    }
  `,
}));
