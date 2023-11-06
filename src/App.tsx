import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/sacramento";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./components/Home.tsx";
import { CssBaseline } from "@mui/material";
import "./App.css"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <BrowserRouter>
        <Home/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
