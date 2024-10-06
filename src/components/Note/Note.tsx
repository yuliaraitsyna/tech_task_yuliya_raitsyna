import { useState } from "react";
import { Checkbox, Container, ListItem, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { Note as NoteInterface, removeNote, toggleNote } from "../../redux/notes/notesSlice"
import { FormAction } from "../NoteForm/model/FormAction";
import { useDispatch } from "react-redux";
import styles from "./styles/Note.module.css"

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
        <ListItem
            sx={{ display: 'flex', alignItems: 'center', padding: '10px', borderBottom: '1px solid #6C63FF'}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Checkbox checked={note.checked} onChange={handleCheck} />
            <Typography variant="h4">
                {note.title}
            </Typography>
            {hovered && (
                <Container style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <EditIcon onClick={handleOpenForm} className={styles.edit}/>
                    <DeleteIcon onClick={handleDelete} className={styles.delete}/>
                </Container>
            )}
        </ListItem>
    );
};

export default Note;
