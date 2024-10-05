import { useSelector } from 'react-redux';
import './App.css'
import HomePage from './components/HomePage/HomePage'
import { RootState } from './redux/store';
import { darkTheme, lightTheme } from './theme/ThemePalete';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

function App() {
  const themeMode = useSelector((state: RootState) => state.theme.darkMode);
  const appliedTheme = themeMode ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <HomePage></HomePage>
    </ThemeProvider>
  )
}

export default App
