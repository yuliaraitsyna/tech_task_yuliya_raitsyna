import { Container, Select, MenuItem, IconButton, SelectChangeEvent } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { NoteStatus } from "./model/NoteStatus";
import { useState } from "react";

const Controls: React.FC = () => {
    const [noteStatus, setNoteStatus] = useState<NoteStatus>(NoteStatus.ALL);

    const handleNoteStatusChange = (event: SelectChangeEvent) => {
        setNoteStatus(event.target.value as NoteStatus);
    }

    return (
        <Container style={{display: "flex", flexDirection: "row"}}>
            <SearchBar></SearchBar>
            <Select  variant="filled" value={noteStatus} onChange={handleNoteStatusChange}>
                <MenuItem value={NoteStatus.ALL}>{NoteStatus.ALL}</MenuItem>
                <MenuItem value={NoteStatus.COMPLETED}>{NoteStatus.COMPLETED}</MenuItem>
                <MenuItem value={NoteStatus.PENDING}>{NoteStatus.PENDING}</MenuItem>
            </Select>
            <IconButton>
                <DarkModeIcon />
            </IconButton>
        </Container>
    );
}

export default Controls;
