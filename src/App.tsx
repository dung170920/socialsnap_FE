import { ConfigProvider } from "antd";
import { Router } from "@/routes";
import GlobalStyle from "@/styles/global";
import { ThemeProvider } from "styled-components";
import { overridesAntd, getTheme } from "@/styles";

function App() {
  const theme = "light";

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <GlobalStyle />
      <ConfigProvider theme={overridesAntd(getTheme(theme))}>
        <Router />
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;
