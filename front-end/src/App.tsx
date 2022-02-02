import React from "react";
import { defaultTheme } from "./themes/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./themes/globalStyles";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Home />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
