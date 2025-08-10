import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, Container, IconButton, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { sign } from "../api/serviceApi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Login() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = async () => {
        const response = await sign({ email, password });
        if(response.status == 200){
            login(response.data);
            navigate("/")
        } else {
            setError(true);
        }
    }

    return (
        <>
        <Box display="flex" justifyContent="center" minHeight="100vh" alignItems="center">
            <Container maxWidth="xs">
                <Paper sx={{ p:4 }} elevation={3}>
                    <Typography variant="h5">
                        Login
                    </Typography>
                    <TextField
                        label="Email"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                        label="Senha"
                        fullWidth
                        type={show ? 'text' : 'password'}
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <IconButton onClick={() => setShow(!show)}>
                                        {show ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                ),
                            }
                        }}/>
                        <Button variant="contained" fullWidth sx={{ mt: 2}}
                        onClick={handleLogin}>
                            Entrar
                        </Button>
                        {error && <p color="red">Usuário ou e-mail inválidos</p>}
                    </Paper>
            </Container>
        </Box>
        </>
    )

}