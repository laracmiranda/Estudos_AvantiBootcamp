import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, Container, IconButton, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { login } from "../api/serviceApi";
import { useNavigate } from "react-router-dom";

export function Login() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        const response = await login({ email, password });
        if(response.status == 200){
            navigate("/")
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
                    </Paper>
            </Container>
        </Box>
        </>
    )

}