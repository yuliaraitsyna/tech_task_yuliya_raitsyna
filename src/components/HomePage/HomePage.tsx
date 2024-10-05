import { Container, Typography } from "@mui/material"
import Controls from "../Controls/Controls";

const HomePage: React.FC = () => {
    return (
        <Container style={{marginTop: '50px'}} maxWidth="lg">
            <Typography variant="h4" textAlign={"center"}>
                TODO LIST
            </Typography>
            <Controls/>
        </Container>
    )
}

export default HomePage;