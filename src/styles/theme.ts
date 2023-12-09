import { DefaultTheme } from "styled-components";
import { COLORS } from "@/constants";

export function getTheme(mode: string) {
  const myTheme: DefaultTheme = {
    borderRadius: 8,
    boxShadow: {
      primary: "0px 12px 13px -6px rgba(0, 0, 0, 0.04)",
    },
    colors: mode === "light" ? lightColors : darkColors,
  };

  return myTheme;
}

const lightColors: DefaultTheme["colors"] = {
  primary: COLORS.primary,
  scrollbar: COLORS.neutral[500],
  background: COLORS.neutral[300],
  card: COLORS.white,
  text: COLORS.neutral[900],
  border: COLORS.neutral[400],
};

const darkColors = {
  primary: COLORS.primary,
  scrollbar: COLORS.neutral[100],
  background: COLORS.neutral[900],
  card: COLORS.neutral[800],
  text: COLORS.white,
  border: COLORS.neutral[700],
};
