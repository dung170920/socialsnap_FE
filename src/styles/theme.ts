import { DefaultTheme } from "styled-components";

const neutral = {
  0: "#ffffff",
  100: "#fafafa",
  200: "#FCFCFC",
  300: "#F4F4F4",
  400: "#EFEFEF",
  500: "#6F767E",
  600: "#33383F",
  700: "#272B30",
  800: "#1A1D1F",
  900: "#111315",
};

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
  primary: "#7065F0",
  scrollbar: neutral[500],
  background: neutral[300],
  card: neutral[0],
  text: neutral[900],
  border: neutral[400],
  info: "#4D67EB",
  success: "#59CC3D",
  warning: "#ECA214",
  error: "#FF5347",
};

const darkColors = {
  primary: "#7065F0",
  scrollbar: neutral[100],
  background: neutral[900],
  card: neutral[800],
  text: neutral[0],
  border: neutral[700],
  info: "",
  success: "",
  warning: "",
  error: "",
};
