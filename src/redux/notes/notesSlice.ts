import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NoteStatus } from '../../components/Controls/model/NoteStatus';

export interface Note {
  id: number;
  title: string;
  checked: boolean;
}

interface NotesState {
  notes: Note[];
  searchTerm: string;
  filter: NoteStatus;
}

const initialState: NotesState = {
  notes: [],
  searchTerm: '',
  filter: NoteStatus.ALL,
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
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
        state.searchTerm = action.payload;
    },
    setFilter: (state, action: PayloadAction<NoteStatus>) => {
        state.filter = action.payload;
    },
  },
});

export const { addNote, editNote, toggleNote, removeNote, setSearchTerm, setFilter } = notesSlice.actions;
export default notesSlice.reducer;
