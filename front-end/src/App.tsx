import React from "react";
import { defaultTheme } from "./themes/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./themes/globalStyles";
import Header from "./components/Header";
function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
