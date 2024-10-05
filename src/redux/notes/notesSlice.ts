import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Note {
  id: number;
  title: string;
  checked: boolean;
}

interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: [],
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<string>) => {
      const newNote: Note = {
        id: state.notes.length + 1,
        title: action.payload,
        checked: false,
      };
      state.notes.push(newNote);
    },
    toggleNote: (state, action: PayloadAction<number>) => {
      const note = state.notes.find(note => note.id === action.payload);
      if (note) {
        note.checked = !note.checked;
      }
    },
    editNote: (state, action: PayloadAction<Note>) => {
        const index = state.notes.findIndex(note => note.id === action.payload.id);
        if (index !== -1) {
            state.notes[index] = action.payload;
        }
    },
    removeNote: (state, action: PayloadAction<number>) => {
      state.notes = state.notes.filter(note => note.id !== action.payload);
    },
    removeAllNotes: (state) => {
        state.notes = [];
    }
  },
});

export const { addNote, editNote, toggleNote, removeNote } = notesSlice.actions;
export default notesSlice.reducer;
