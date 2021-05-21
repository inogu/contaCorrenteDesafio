import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { ptBR } from "@material-ui/core/locale";

const theme = createMuiTheme(
  {
    palette: {
      primary: { main: "#1976d2" },
    },
  },
  ptBR
);

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    ;
  </BrowserRouter>,
  document.getElementById("root")
);
