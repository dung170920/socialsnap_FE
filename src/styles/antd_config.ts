import { ThemeConfig } from "antd/es/config-provider";
import { themeVariables } from "./themeVariables";
import { theme } from "antd";

export const lightTheme: ThemeConfig = {
  token: {
    fontFamily: themeVariables.fontFamily,
    borderRadius: themeVariables.borderRadius,
    colorPrimary: themeVariables.colors.primary,
    colorIcon: themeVariables.colors.neutral[900],
    colorText: themeVariables.colors.neutral[900],
    colorTextDescription: themeVariables.colors.neutral[500],
    colorTextPlaceholder: themeVariables.colors.neutral[500],
    colorBgContainer: themeVariables.colors.neutral[300],
    colorBgBase: themeVariables.colors.neutral[0],
    colorBorder: themeVariables.colors.neutral[400],
    boxShadow: themeVariables.boxShadow.primary.light,
    colorError: themeVariables.colors.error,
    colorWarning: themeVariables.colors.warning,
    colorSuccess: themeVariables.colors.success,
    colorInfo: themeVariables.colors.info,
    colorSplit: themeVariables.colors.neutral[400],
  },
  // components: {
  //   Button: {},
  //   Input: {
  //     activeShadow: "none",
  //     errorActiveShadow: "none",
  //   },
  //   Divider: {
  //     colorSplit: theme.colors.border,
  //   },
  // },
  algorithm: theme.defaultAlgorithm,
};

export const darkTheme: ThemeConfig = {
  token: {
    fontFamily: themeVariables.fontFamily,
    borderRadius: themeVariables.borderRadius,
    colorPrimary: themeVariables.colors.primary,
    colorIcon: themeVariables.colors.neutral[0],
    colorTextBase: themeVariables.colors.neutral[0],
    colorText: themeVariables.colors.neutral[0],
    colorTextDescription: themeVariables.colors.neutral[500],
    colorTextPlaceholder: themeVariables.colors.neutral[500],
    colorBgContainer: themeVariables.colors.neutral[900],
    colorBgBase: themeVariables.colors.neutral[800],
    colorBorder: themeVariables.colors.neutral[700],
    boxShadow: themeVariables.boxShadow.primary.dark,
    colorError: themeVariables.colors.error,
    colorWarning: themeVariables.colors.warning,
    colorSuccess: themeVariables.colors.success,
    colorInfo: themeVariables.colors.info,
    colorSplit: themeVariables.colors.neutral[700],
  },
  // components: {
  //   Button: {},
  //   Input: {
  //     activeShadow: "none",
  //     errorActiveShadow: "none",
  //   },
  //   Divider: {
  //     colorSplit: theme.colors.border,
  //   },
  // },
  algorithm: theme.darkAlgorithm,
};
