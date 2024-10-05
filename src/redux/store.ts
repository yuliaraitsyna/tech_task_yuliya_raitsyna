import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './notes/notesSlice';
import themeReducer from './theme/themeSlice';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
