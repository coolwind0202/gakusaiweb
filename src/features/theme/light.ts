import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const lightTheme = createTheme({
  typography: {
    fontFamily: "'Noto Sans JP', sans-serif",
    h1: {
      fontSize: "1.5rem",
      lineHeight: "normal",
    },
    h3: {
      fontSize: "1rem",
      lineHeight: "normal",
      color: grey[900],
    },
    body1: {
      fontSize: "1rem",
      lineHeight: "normal",
    },
    caption: {
      fontSize: "0.875rem",
      lineHeight: "normal",
      color: grey[700],
    },
  },
});
