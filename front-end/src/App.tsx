import React from "react";
import { defaultTheme } from "./themes/theme";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import GlobalStyles from "./themes/globalStyles";
import { client } from "./services/apollo-client";
import RoutesComponent from "./routes/index.routes";
function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={defaultTheme}>
        <RoutesComponent />
        <GlobalStyles />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
