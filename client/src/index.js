//libraries
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

// mui
import { ThemeProvider, createTheme } from "@mui/material";
import { orange, red, blue } from "@mui/material/colors";

// styles
import "./index.css";

// components
import App from "./App";
import MyContextProvider from "./components/MyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * How to customize the default setting of material UI.
 * 1. import themeprovider, creatheme
 * 2. call the createtheme method and do your customization
 * 3. wrapp the App with the themeprovider - and add the prop theme in which u saved the cvreatheme varibale
 */

const theme = createTheme({
  palette: {
    primary: {
      main: "#38A7A8",
    }
   
  },
});

root.render(
  <BrowserRouter>
    <MyContextProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MyContextProvider>
  </BrowserRouter>
);
