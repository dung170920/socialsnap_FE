import { createStyles } from "antd-style";

export const useStyles = createStyles(() => ({
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    height: "48px",
    boxShadow: "none",
    fontWeight: 500,
  },

  buttonLg: {
    height: "56px",
  },

  buttonSm: {
    fontSize: "14px",
    height: "40px",
  },
}));
