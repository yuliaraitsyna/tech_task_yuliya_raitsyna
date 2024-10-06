import { Button, Container, Dialog, DialogContent, List, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import NoteForm from "../NoteForm/NoteForm";
import { useState } from "react";
import { FormAction } from "../NoteForm/model/FormAction";
import Note from "../Note/Note";
import { Note as NoteInterface } from "../../redux/notes/notesSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const defaultNote: NoteInterface = { id: 0, title: '', checked: false };

const NoteList: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [formAction, setFormAction] = useState<FormAction>(FormAction.ADD);
    const [editedNote, setEditedNote] = useState<NoteInterface>(defaultNote)
    const notes = useSelector((state: RootState) => state.notes.notes);

    const handleOpen = (action: FormAction, note?: NoteInterface) => {
        setFormAction(action);
        if (action === FormAction.EDIT) {
            if (note)
                setEditedNote(note);
        }
        else {
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
                {notes.length > 0 ? (
                    notes.map((note, index) => <Note key={index} note={note} openForm={handleOpen} />)
                ) : (
                    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
                        <img src="/public/empty_logo.png" style={{maxHeight: '300px', maxWidth: '300px'}}/>
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
