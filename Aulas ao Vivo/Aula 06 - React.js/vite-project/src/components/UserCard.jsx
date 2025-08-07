import { useEffect, useState } from "react";
import { Typography, Grid, CardContent, Card, CardActions, IconButton, Switch } from '@mui/material';
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"

 export function UserCard(props) {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await axios.get("http://localhost:8080/usuarios");
        console.log(response)
        setUsers(response.data);
    }

    const handleDelete = async (id) => {
        if (window.confirm("Deseja realmente excluir o usuário?")) {
            await axios.delete(`http://localhost:8080/usuarios/${id}` );
        }
    }

    useEffect(() => {getUsers(); }, [])

    return(
        <>
            <Typography variant="h4"> Usuários </Typography>
            <Grid container spacing={3}>
                {users.map((user) => (
                    <Grid key={user.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{user.name}</Typography>
                                <Typography variant="body2">{user.email}</Typography>
                                <Typography variant="body2">{user.phone}</Typography>
                                <Typography variant="body2">
                                    Admin: <Switch checked={user.isAdmin} disabled/>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton color="primary">
                                    <EditIcon />
                                </IconButton>
                                <IconButton color="error">
                                    <DeleteIcon onClick={() => handleDelete(user.id)}/>
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
 }