import { Container } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { UserForm } from "../components/UserForm";

export function UserFormPage() {
    return (
        <>
        <Navbar />
        <Container sx={{mt: 4}}>
            <UserForm />
        </Container>
        <Footer />
        </>
    )
}