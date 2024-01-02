import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token, css }) => ({
  header: css`
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 20px;
  `,

  images: css`
    margin-top: 16px;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 16px;
  `,

  image: css`
    border-radius: ${token.borderRadius}px;
    overflow: hidden;

    :first-child {
      grid-row: 1 / 3;
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  `,

  footer: css``,

  buttons: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
}));
