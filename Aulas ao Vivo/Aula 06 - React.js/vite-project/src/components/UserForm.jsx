import { Box, Button, Container, FormControlLabel, Paper, Switch, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export function UserForm (){
    const navigate = useNavigate();

    // Assim que renderiza o usuário, busca dentro da URL o que é referente ao ID
    const { id } = useParams();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        isAdmin: false
    })

    const findUser = async () => {
        if(id){
            const response = await axios.get(`http://localhost:8080/usuario/${id}`)
            setForm(response.data);
        }
    }

    useEffect(() => { findUser(); }, [])

    const handleSubmit = async () => {
        if (id){
            const response = await axios.put(`http://localhost:8080/usuarios/${id}`, form);
        } else {
            const response = await axios.post("http://localhost:8080/usuarios", form);
        }
        navigate("/");
    }

    return (
        <Container maxWidth="sm" sx={{mt : 4}}>
            <Paper elevation={3} sx={{p: 4}}>
                <Typography variant="h5">
                    {id ? "Editar Usuário" : "Criar Usuário"}
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
                    <Button variant="contained" onClick={handleSubmit}>
                        {id ? "Salvar" : "Cadastrar"}
                    </Button>
                </Box>
            </Paper>
        </Container>
    )
}