import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import "@fontSource/roboto/300.css";
import "@fontSource/roboto/400.css";
import "@fontSource/roboto/500.css";
import "@fontSource/roboto/700.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
