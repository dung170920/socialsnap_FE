import { COLORS } from "@/constants";
import { ThemeConfig } from "antd/es/config-provider";
import { DefaultTheme } from "styled-components";

export function overridesAntd(theme: DefaultTheme) {
  const antd: ThemeConfig = {
    token: {
      borderRadius: theme.borderRadius,
      colorPrimary: theme.colors.primary,
      colorIcon: COLORS.neutral[500],
      colorText: theme.colors.text,
      colorBgContainer: theme.colors.background,
      colorBgBase: theme.colors.card,
      colorBorder: theme.colors.border,
      boxShadow: theme.boxShadow.primary,
    },
    components: {
      Input: {
        colorTextPlaceholder: COLORS.neutral[500],
        activeShadow: "none",
        errorActiveShadow: "none",
      },
      Divider: {
        colorSplit: theme.colors.border,
      },
    },
  };
  return antd;
}
