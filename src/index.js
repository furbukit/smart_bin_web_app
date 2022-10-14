import React, {} from "react";
import { render } from "react-dom";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

const root = document.getElementById("root");
render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>,
    root
);
