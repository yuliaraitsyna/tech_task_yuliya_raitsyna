import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6C63FF',
    },
    secondary: {
      main: '#F7F7F7',
    },
    background: {
      default: '#F7F7F7',
    },
    text: {
      primary: '#333',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6C63FF',
    },
    secondary: {
      main: '#F7F7F7',
    },
    background: {
      default: '#252525',
    },
    text: {
      primary: '#FFFFFF',
    },
  },
});
