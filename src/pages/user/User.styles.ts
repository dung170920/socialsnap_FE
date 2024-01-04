import { createStyles } from "antd-style";

export const useStyles = createStyles(({ css, token }) => ({
  user: {
    height: "100%",
    overflow: "scroll",
  },

  info: css`
    position: absolute;
    bottom: -80px;
    left: 0;
    z-index: 100;
    margin: 0 64px;
    padding: 20px;
    background-color: ${token.colorBgBase};
    border-radius: ${token.borderRadius}px;
    display: flex;
    align-items: center;
    gap: 28px;
    width: calc(100% - 128px);

    .ant-avatar {
      flex-shrink: 0;
      font-size: 32px !important;
    }

    h2 {
      font-size: 28px;
      margin-bottom: 8px;
    }
  `,

  cover: css`
    position: relative;
    width: 100%;
    height: 400px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    a {
      border-radius: ${token.borderRadius}px;
      background-color: rgba(23, 23, 37, 0.5);
      border: 1px solid white;
      padding: 12px 16px;
      position: absolute;
      color: white;
      right: 20px;
      top: 20px;
    }
  `,

  title: {
    fontSize: "28px",
    marginBottom: "16px",
  },

  subTitle: css`
    font-size: 18px;
    color: ${token.colorTextDescription};
  `,

  content: css`
    padding-top: 100px;
    display: flex;
    gap: 40px;
  `,

  about: css`
    flex: 1;
    background-color: ${token.colorBgBase};
    border-radius: ${token.borderRadius}px;
    height: fit-content;
    padding: 24px;

    h4 {
      font-size: 18px;
      margin-bottom: 24px;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 16px;

      li {
        display: flex;
        align-items: center;
        gap: 16px;

        svg {
          font-size: 24px;
          color: ${token.colorTextDescription};
        }
      }
    }
  `,

  posts: css`
    flex: 2;
  `,
}));
