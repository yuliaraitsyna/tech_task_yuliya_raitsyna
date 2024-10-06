import { Container, Typography } from "@mui/material"
import Controls from "../Controls/Controls";
import NoteList from "../NoteList/NoteList";

const HomePage: React.FC = () => {
    return (
        <Container style={{marginTop: '50px', alignItems: 'center'}} maxWidth="lg">
            <Typography variant="h4" textAlign={"center"}>
                TODO LIST
            </Typography>
            <Controls/>
            <NoteList></NoteList>
        </Container>
    )
}

export default HomePage;