import { useState } from "react";
import { Checkbox, Container, IconButton, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Note as NoteInterface, removeNote, toggleNote} from "../../redux/notes/notesSlice"
import { FormAction } from "../NoteForm/model/FormAction";
import { useDispatch } from "react-redux";

interface NoteProps {
    note: NoteInterface;
    openForm: (action: FormAction, note: NoteInterface) => void;
}

const Note: React.FC<NoteProps> = ({ note, openForm }) => {
    const [hovered, setHovered] = useState(false);
    const dispatch = useDispatch();

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    const handleOpenForm = () => {
        openForm(FormAction.EDIT, note);
    }

    const handleDelete = () => {
        dispatch(removeNote(note.id));
    }

    const handleCheck = () => {
        dispatch(toggleNote(note.id));
    }

    return (
        <Container
            maxWidth="lg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ display: 'flex', alignItems: 'center', padding: '10px' }}
        >
            <Checkbox checked={note.checked} onChange={handleCheck}/>
            <Typography variant="h4">
                {note.title}
            </Typography>
            {hovered && (
                <Container style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton onClick={handleOpenForm}>
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                </Container>
            )}
        </Container>
    );
};

export default Note;
