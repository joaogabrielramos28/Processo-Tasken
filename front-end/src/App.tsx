import React from "react";
import { defaultTheme } from "./themes/theme";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import GlobalStyles from "./themes/globalStyles";
import Home from "./pages/Home";
import { client } from "./services/apollo-client";
function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={defaultTheme}>
        <Home />
        <GlobalStyles />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
