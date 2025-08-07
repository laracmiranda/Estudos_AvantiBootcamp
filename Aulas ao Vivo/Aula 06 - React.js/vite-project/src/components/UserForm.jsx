import { Box, Button, Container, FormControlLabel, Paper, Switch, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function UserForm (){
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        isAdmin: false
    })

    const handleSubmit = async () => {
        const response = await axios.post("http://localhost:8080/usuarios", form);
        navigate("/");
    }

    return (
        <Container maxWidth="sm" sx={{mt : 4}}>
            <Paper elevation={3} sx={{p: 4}}>
                <Typography variant="h5">
                    Criar Usuário
                </Typography>
                <TextField
                label="Nome"
                fullWidth
                margin="normal"
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value })}
                />
                <TextField
                label="Telefone"
                fullWidth
                margin="normal"
                value={form.phone}
                onChange={(e) => setForm({...form, phone: e.target.value })}
                />
                <TextField
                label="Email"
                fullWidth
                margin="normal"
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value })}
                />
                <TextField
                label="Senha"
                fullWidth
                type="password"
                margin="normal"
                value={form.password}
                onChange={(e) => setForm({...form, password: e.target.value })}
                />
                <FormControlLabel
                    label="Admin"
                    control={
                        <Switch checked={form.isAdmin} 
                        onChange={(e) => setForm({...form, isAdmin: e.target.checked })}
                        />
                    }
                />
            <Box mt={3}>
                <Button variant="contained" onClick={handleSubmit}>Cadastrar</Button>
            </Box>
            </Paper>
        </Container>
    )
}