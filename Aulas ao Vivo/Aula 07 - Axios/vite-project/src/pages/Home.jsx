import { Container } from "@mui/material";
import { Navbar } from "../components/Navbar";
import UserCard from "../components/UserCard";
import { Footer } from "../components/Footer";

export function Home() {
    return (
        <>
        <Navbar />
        <Container sx={{mt: 4}}>
            <UserCard />
        </Container>
        <Footer />
        </>
    )
}