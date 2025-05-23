import { createTheme } from "@mui/material";
import Cursor from "../assets/cursor.png";

const mainGradient = "linear-gradient(268deg, #FD8CFF 0.44%, #8196FF 48.96%, #239DFF 97.51%)"


// background
// TODO: update colors to match figma
const bgColor1 = '238 85% 80%';
const bgColor2 = '252 86% 75%';
const bgColor3 = '178 56% 80%';
const bgColor4 = '21 80% 70%';

// bg gradient
const bgTopLeft = `radial-gradient(calc(70vw) circle at top left, hsl(${bgColor1}), hsl(${bgColor1} / 0%))`;
const bgTopRight = `radial-gradient(calc(70vw) circle at top right, hsl(${bgColor2}), hsl(${bgColor2} / 0%))`;
const bgBottomLeft = `radial-gradient(calc(70vw) circle at bottom left, hsl(${bgColor3}), hsl(${bgColor3} / 0%))`;
const bgBottomRight = `radial-gradient(calc(70vw) circle at bottom right, hsl(${bgColor4}), hsl(${bgColor4} / 0%))`;


export let theme = createTheme({
  palette: {
    primary: {
      main: "#222831",
    },
    secondary: {
      main: "#393E46",
    },
    tertiary: {
      main: "#EEEEEE",
    },
    grey: {
      500: "#ba68c8",
    },
  },
  shape: {
    borderRadius: 25,
  },
  typography: {
    fontFamily: "'Outfit', 'Helvetica', 'Arial', sans-serif",
  },
});

theme = createTheme(theme, {
  typography: {
    h1: {
      fontSize: "3rem",
    },
    h2: {
      fontSize: "2.5rem",
    },
    h3: {
      fontSize: "2rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h5: {
      fontSize: "1.25rem",
    },
    h6: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
        	background: `${bgTopLeft}, ${bgTopRight}, ${bgBottomLeft}, ${bgBottomRight}`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        text: {
          border: "none",
          paddingLeft: 25,
          paddingRight: 25,
          fontSize: "1rem",
          fontWeight: 500,
          color: theme.palette.tertiary.main,
          textTransform: "uppercase",
          cursor: `url(${Cursor}) 10 10, pointer`,
          [`&.MuiButton-textPrimary:hover`]: {
            color: theme.palette.common.white,
            boxShadow: "none",
          },
        },
        contained: {
          color: theme.palette.tertiary.main,
          backgroundColor: theme.palette.secondary.main,
          border: `2px solid ${theme.palette.secondary.main}`,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 10,
          paddingBottom: 10,
          textTransform: "none",
          fontSize: "1rem",
          cursor: `url(${Cursor}) 10 10, pointer`,
          [`&.MuiButton-containedPrimary:hover`]: {
            color: theme.palette.tertiary.main,
            backgroundColor: theme.palette.primary.main,
            boxShadow: "none",
            border: `2px solid ${theme.palette.tertiary.main}`,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: 20,
          height: "80%",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          paddingTop: 10,
          paddingBottom: 10,
          paddingRight: 10,
          paddingLeft: 10,
          width: "100%",
          borderRadius: 15,
          border: `1px solid ${theme.palette.primary.main}`,
          "&:hover": {
            border: `1px solid ${theme.palette.tertiary.main}`,
          },
          "&.Mui-focused": {
            border: `1px solid ${theme.palette.primary.main}`,
          },
          
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          padding: 10,
        },
      },
    },
  },
});
