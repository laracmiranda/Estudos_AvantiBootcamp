import { useEffect, useState } from "react";
import { Typography, Grid, CardContent, Card, CardActions, IconButton, Switch, TextField, Box, Avatar } from '@mui/material';
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
import { useNavigate } from "react-router-dom";
import { getUsers, deleteUser } from "../api/serviceApi";


 export default function UserCard(props) {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const fetchUsers = async () => {
        const response = await getUsers();
        console.log(response)
        setUsers(response.data);
    }

    const handleDelete = async (id) => {
        if (window.confirm("Deseja realmente excluir o usuário?")) {
            await deleteUser(id);
        }
        // Recarregar a página depois de realizada a ação de deletar
        fetchUsers();
    }

    useEffect(() => {fetchUsers(); }, [])

    const usuariosFiltrados = users.filter((user) => 
        // Cria um array com os campos referente à um usuário por vez
        [user.name, user.email, user.phone].some( field => 
            // Verifica se o campo está preenchido e converte tudo em lowCase
            field?.toLowerCase().includes(search.toLowerCase())
        )
    )

    return(
        <>
            <Typography variant="h4"> Usuários </Typography>
            <Box>
                <IconButton color="primary" onClick={() => navigate("/registro")}> 
                    <PersonAddIcon />
                </IconButton>
            </Box>
            <TextField
                label="Buscar"
                size="small"
                sx={{maxWidth: 700, mb: 2 }}
                fullWidth
                margin="normal"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Grid container spacing={3}>
                {usuariosFiltrados.map((user) => (
                    <Grid key={user.id}>
                        <Card sx={{width: 220}}>
                            <CardContent>
                                <Box sx={{display: "flex", alignItems: "center", mb: 1}}>
                                    <Avatar 
                                    alt={user.name}
                                    src={"https://via.placeholder.com/150"}
                                    sx={{ width: 48, height: 48, mr: 2}}/>
                                    <Typography variant="h6">{user.name}</Typography>
                                </Box> 
                                <Typography variant="body2">{user.email}</Typography>
                                <Typography variant="body2">{user.phone}</Typography>
                                <Typography variant="body2">
                                    Admin: <Switch checked={user.isAdmin} disabled/>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton color="primary" onClick={() => navigate(`/editar-usuario/${user.id}`)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton color="error" onClick={() => handleDelete(user.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
 }