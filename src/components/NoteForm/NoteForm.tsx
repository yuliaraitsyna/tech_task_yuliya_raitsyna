import {Button, Container, DialogActions, TextField, Typography } from "@mui/material";
import { FormAction } from "./model/FormAction";
import { addNote, editNote, Note } from "../../redux/notes/notesSlice"
import { useDispatch } from "react-redux";
import { useState } from "react";

interface NoteFormProps {
    action: FormAction,
    note: Note,
    close: (status: boolean) => void
}

const NoteForm: React.FC<NoteFormProps> = ({action, note, close}) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState<string>(note.title);

    const handleApplyNote = () => {
        switch(action) {
            case FormAction.ADD: {
                dispatch(addNote(title))
                break;
            }
            case FormAction.EDIT: {
                dispatch(editNote({...note, title: title}));
            }
        }
    }

    const handleClose = () => {
        handleApplyNote();
        close(false);
    };

    return (
        <form style={{display: 'flex', flexDirection: 'column'}}>
            <Typography variant="h4">{action}</Typography>
            <TextField value={title} onChange={(e) => setTitle(e.target.value)}></TextField>
            <Container>
                <DialogActions>
                    <Button onClick={handleClose}>CANCEL</Button>
                    <Button variant="contained" onClick={handleClose}>APPLY</Button>
                </DialogActions>
            </Container>
        </form>
    );
};

export default NoteForm;
