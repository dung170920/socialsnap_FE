import { Router } from "@/routes";
import { darkTheme, lightTheme } from "@/styles";
import { useAppSelector } from "@/store";
import { ThemeProvider } from "antd-style";
import Global from "./styles/global";

function App() {
  const { theme } = useAppSelector((state) => state.setting);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Global />
      <Router />
    </ThemeProvider>
  );
}

export default App;
