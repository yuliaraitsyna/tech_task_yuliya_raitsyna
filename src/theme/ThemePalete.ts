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
                    '&.MuiButton-contained': {
                        backgroundColor: '#6C63FF',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#5850DD',
                        },
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    maxWidth: '56px',
                    maxHeight: '56px',
                    minHeight: '56px',
                    minWidth: '56px',
                    backgroundColor: '#6C63FF',
                    marginLeft: '10px',
                    '&:hover': {
                        backgroundColor: '#5850DD',
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    minWidth: '150px',
                    maxHeight: '56px',
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
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#6C63FF',
                        },
                        '&:hover fieldset': {
                            borderColor: '#6C63FF',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#6C63FF',
                            boxShadow: '0 0 0 3px rgba(108, 99, 255, 0.4)',
                        },
                    },
                    input: {
                        color: '#6C63FF',
                    },
                    borderRadius: '8px',
                    outline: 'none',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '20px',
                    borderRadius: '10px',
                    minHeight: '300px',
                    minWidth: '500px'
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    flexDirection: 'column',
                    height: '90%',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '50px',
                }
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }
            }
        }
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
                    '&.MuiButton-contained': {
                        backgroundColor: '#6C63FF',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#5850DD',
                        },
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    maxWidth: '56px',
                    maxHeight: '56px',
                    minHeight: '56px',
                    minWidth: '56px',
                    backgroundColor: '#6C63FF',
                    marginLeft: '10px',
                    '&:hover': {
                        backgroundColor: '#5850DD',
                    },
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
        MuiTextField: {
            styleOverrides: {
                root: {
                    backgroundColor: '#333',
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#B0B0B0',
                        },
                        '&:hover fieldset': {
                            borderColor: '#FFFFFF',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#FFFFFF',
                            boxShadow: '0 0 0 3px rgba(255, 255, 255, 0.4)',
                        },
                    },
                    input: {
                        color: '#FFFFFF',
                    },
                    borderRadius: '8px',
                    outline: 'none',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '20px',
                    borderRadius: '10px',
                    minHeight: '300px',
                    minWidth: '500px'
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    flexDirection: 'column',
                    height: '90%',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '50px',
                }
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }
            }
        }
    },
});
