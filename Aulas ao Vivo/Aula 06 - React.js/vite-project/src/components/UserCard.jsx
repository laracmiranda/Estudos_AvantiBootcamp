import { useEffect, useState } from "react";
import { Typography, Grid, CardContent, Card, CardActions, IconButton } from '@mui/material';
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"

 export function UserCard(props) {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const { data } = await axios.get("http://localhost:8080/usuarios")
        setUsers(data);
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
                                <Typography>{user.name}</Typography>
                                <Typography>{user.email}</Typography>
                                <Typography>{user.phone}</Typography>
                                <Typography>{user.isAdmin}</Typography>
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