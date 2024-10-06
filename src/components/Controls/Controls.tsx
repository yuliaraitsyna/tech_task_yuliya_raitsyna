import { Container, Select, MenuItem, IconButton, SelectChangeEvent } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';
import { NoteStatus } from "./model/NoteStatus";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/theme/themeSlice";
import { setFilter } from "../../redux/notes/notesSlice";

const Controls: React.FC = () => {
    const [noteStatus, setNoteStatus] = useState<NoteStatus>(NoteStatus.ALL);
    const dispatch = useDispatch();

    const handleNoteStatusChange = (event: SelectChangeEvent) => {
        const selectedStatus = event.target.value as NoteStatus;
        setNoteStatus(selectedStatus);
        dispatch(setFilter(selectedStatus));
    }

    const handleThemeChange = () => {
        dispatch(toggleTheme());
    }

    return (
        <Container style={{display: "flex", flexDirection: "row"}}>
            <SearchBar />
            <Select  variant="outlined" value={noteStatus} onChange={handleNoteStatusChange}>
                <MenuItem value={NoteStatus.ALL}>{NoteStatus.ALL}</MenuItem>
                <MenuItem value={NoteStatus.COMPLETED}>{NoteStatus.COMPLETED}</MenuItem>
                <MenuItem value={NoteStatus.PENDING}>{NoteStatus.PENDING}</MenuItem>
            </Select>
            <IconButton onClick={handleThemeChange}>
                <DarkModeIcon style={{fill: 'white'}}/>
            </IconButton>
        </Container>
    );
}

export default Controls;
