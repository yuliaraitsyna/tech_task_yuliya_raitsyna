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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50%',
          maxWidth: '70px',
          maxHeight: '70px',
          minHeight: '70px',
          minWidth: '70px',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          minWidth: '150px',
          backgroundColor: '#6C63FF',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: '#534CC2',
            border: 'solid 2 px #6C63FF',
          },
          boxShadow: 'none',
        },
        select: {
          padding: '10px',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
            width: '150px',
          '&:hover': {
            backgroundColor: '#E0E0E0',
          },
          '&.Mui-selected': {
            backgroundColor: '#6C63FF33',
            color: '#6C63FF',
          },
          boxShadow: ''
        },
      },
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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50%',
          maxWidth: '70px',
          maxHeight: '70px',
          minHeight: '70px',
          minWidth: '70px',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          minWidth: '150px',
          backgroundColor: '#6C63FF',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: '#534CC2',
            border: 'solid 2 px #6C63FF',
          },
          boxShadow: 'none',
        },
        select: {
          padding: '10px',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
            width: '150px',
          '&:hover': {
            backgroundColor: '#',
          },
          '&.Mui-selected': {
            backgroundColor: '#333',
            color: '#6C63FF',
          },
          boxShadow: ''
        },
      },
    },
  },
});
