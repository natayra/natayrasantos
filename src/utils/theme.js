import { createTheme } from "@mui/material";

export let theme = createTheme({
  palette: {
    primary: {
      main: "#fff6e5",
    },
    secondary: {
      main: "#8A3100",
    },
    tertiary: {
      main: "#333333",
    },
  },
  shape: {
    borderRadius: 25,
  },
  typography: {
    fontFamily: "Poppins, 'Helvetica', 'Arial', sans-serif",
  },
});

theme = createTheme(theme, {
  typography: {
    h1: {
      fontSize: "5rem",
    },
    h2: {
      fontSize: "2.8rem",
    },
    h3: {
      fontSize: "2.3rem",
    },
    h4: {
      fontSize: "1.8rem",
    },
    h5: {
      fontSize: "1.3rem",
    },
    h6: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.tertiary.main,
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
          color: theme.palette.tertiary.main,
          textTransform: "uppercase",
          [`&.MuiButton-textPrimary:hover`]: {
            color: theme.palette.secondary.main,
            boxShadow: "none",
          },
        },
        contained: {
          color: theme.palette.secondary.main,
          backgroundColor: theme.palette.primary.main,
          border: "none",
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 10,
          paddingBottom: 10,
          textTransform: "none",
          fontSize: "1rem",
          boxShadow: `0 0 20px 2px #CAA5C4`,
          [`&.MuiButton-textPrimary:hover`]: {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.primary.main,
            boxShadow: "none",
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
  },
});
