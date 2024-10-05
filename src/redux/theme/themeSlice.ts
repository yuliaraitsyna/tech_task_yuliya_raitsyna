import { Theme } from '@emotion/react';
import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  darkMode: Theme;
}

const initialState: ThemeState = {
  darkMode: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
