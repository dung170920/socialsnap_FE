import { createStyles } from "antd-style";

export const useStyles = createStyles(({ css, token }) => ({
  item: {
    marginTop: "4px",
    fontWeight: 500,
    width: "100%",
  },

  input: css`
    border-radius: ${token.borderRadius}px;
    margin-bottom: 4px;
    font-size: 14px;
  `,

  inputMd: {
    padding: "8px 16px",
  },

  inputLg: {
    padding: "12px 16px",
  },
}));
