import { useState } from "react"

 
 export function UserCard(props) {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const { data } = await axios.get("http://localhost:8080/users")
    }

    return(
        <>
            <Typography variant="h4"> Usuários </Typography>
            <Grid>
                
            </Grid>
        </>
    )
 }