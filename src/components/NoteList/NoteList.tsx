import { Button, Container, Dialog, DialogContent } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import NoteForm from "../NoteForm/NoteForm";
import { useState } from "react";
import { FormAction } from "../NoteForm/model/FormAction";
import Note from "../Note/Note";
import { Note as NoteInterface } from "../../redux/notes/notesSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const defaultNote: NoteInterface = {id: 0, title: '', checked: false};

const NoteList: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [formAction, setFormAction] = useState<FormAction>(FormAction.ADD);
    const [editedNote, setEditedNote] = useState<NoteInterface>(defaultNote)
    const notes = useSelector((state: RootState) => state.notes.notes);

    const handleOpen = (action: FormAction, note?: NoteInterface) => {
        setFormAction(action);
        if(action === FormAction.EDIT) {
            if(note)
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
            <Container
                maxWidth="md"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'scroll', height: '60vh', marginTop: '50px' }}
            >
                {notes.map((note, index) => <Note key={index} note={note} openForm={handleOpen}></Note>)}
            </Container>

            <Button
                variant="contained"
                style={{ alignSelf: 'end', width: '50px', height: '50px' }}
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
