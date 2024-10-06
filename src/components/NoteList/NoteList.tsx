import { Button, Container, Dialog, DialogContent, List, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import NoteForm from "../NoteForm/NoteForm";
import { useEffect, useState } from "react";
import { FormAction } from "../NoteForm/model/FormAction";
import Note from "../Note/Note";
import { Note as NoteInterface } from "../../redux/notes/notesSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { NoteStatus } from "../Controls/model/NoteStatus";

const defaultNote: NoteInterface = { id: 0, title: '', checked: false };

const NoteList: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [formAction, setFormAction] = useState<FormAction>(FormAction.ADD);
    const [editedNote, setEditedNote] = useState<NoteInterface>(defaultNote);
    
    const storeNotes = useSelector((state: RootState) => state.notes.notes);
    const searchTerm = useSelector((state: RootState) => state.notes.searchTerm);
    const filter = useSelector((state: RootState) => state.notes.filter);

    const [filteredNotes, setFilteredNotes] = useState<NoteInterface[]>(storeNotes);
    
    useEffect(() => {
        const filterNotes = (filter: NoteStatus, term: string) => {
            let filtered = [...storeNotes];
        
            switch (filter) {
                case NoteStatus.COMPLETED:
                    filtered = storeNotes.filter(note => note.checked === true);
                    break;
                case NoteStatus.PENDING:
                    filtered = storeNotes.filter(note => note.checked === false);
                    break;
                case NoteStatus.ALL:
                    filtered = [...storeNotes];
                    break;
            }
        
            if (term) {
                filtered = filtered.filter(note =>
                    note.title.toLowerCase().includes(term.toLowerCase())
                );
            }
        
            return filtered;
        };

        setFilteredNotes(filterNotes(filter, searchTerm));
    }, [filter, searchTerm, storeNotes]);

    const handleOpen = (action: FormAction, note?: NoteInterface) => {
        setFormAction(action);
        if (action === FormAction.EDIT && note) {
            setEditedNote(note);
        } else {
            setEditedNote(defaultNote);
        }
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container style={{ display: 'flex', flexDirection: 'column' }}>
            <List sx={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', overflowY: 'scroll', height: '60vh', width: '60vw' }}>
                {filteredNotes.length > 0 ? (
                    filteredNotes.map((note, index) => <Note key={index} note={note} openForm={handleOpen} />)
                ) : (
                    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
                        <img src="/tech_task_yuliya_raitsyna/public/empty_logo.png" style={{ maxHeight: '300px', maxWidth: '300px' }} alt="Empty"/>
                        <Typography variant="h6" color="textSecondary" sx={{ mt: 3 }}>
                            Empty...
                        </Typography>
                    </Container>
                )}
            </List>

            <Button
                variant="contained"
                style={{ 
                    alignSelf: 'end', 
                    borderRadius: '50%', 
                    maxWidth: '70px',
                    maxHeight: '70px',
                    minHeight: '70px',
                    minWidth: '70px', }}
                onClick={() => handleOpen(FormAction.ADD)}
            >
                <AddIcon />
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <NoteForm action={formAction} note={editedNote} close={handleClose}/>
                </DialogContent>
            </Dialog>
        </Container>
    );
};

export default NoteList;
