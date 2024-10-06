import { Container, TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setSearchTerm } from "../../redux/notes/notesSlice";

const SearchBar: React.FC = () => {
    const dispatch = useDispatch();
    const [searchStr, setSearchStr] = useState<string>('');

    const handleSearch = () => {
        dispatch(setSearchTerm(searchStr));
    }

    return (
        <Container>
            <TextField
                fullWidth
                placeholder="Search note..."
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon onClick={handleSearch}/>
                        </InputAdornment>
                    ),
                }}
                onChange={(e) => setSearchStr(e.target.value)}
            />
        </Container>
    );
}

export default SearchBar;
