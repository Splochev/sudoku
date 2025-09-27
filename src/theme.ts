import { createTheme, type ThemeOptions } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: `'Press Start 2P', cursive, sans-serif`,
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#8A00C4",
      light: "#A600EB",
      dark: "#6E009D",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#00FFFF",
      light: "#80FFFF",
      dark: "#00CFCF",
      contrastText: "#000000",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255,255,255,0.7)",
      disabled: "rgba(255,255,255,0.5)",
    },
    background: {
      default: "#121212",
      paper: "#1D1D1D",
    },
    error: {
      main: "#FF073A",
      light: "#FF435A",
      dark: "#E00030",
      contrastText: "#000000",
    },
    warning: {
      main: "#FF5C00",
      light: "#FF7E26",
      dark: "#E04F00",
      contrastText: "#000000",
    },
    success: {
      main: "#39FF14",
      light: "#6CFF47",
      dark: "#2BCF11",
      contrastText: "#000000",
    },
    divider: "rgba(255, 255, 255, 0.12)",
  },
};

const theme = createTheme(themeOptions);
export default theme;
