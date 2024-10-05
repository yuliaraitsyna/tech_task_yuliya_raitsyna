import { Container, TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar: React.FC = () => {
    return (
        <Container>
            <TextField
                fullWidth
                placeholder="Search note..."
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </Container>
    );
}

export default SearchBar;
