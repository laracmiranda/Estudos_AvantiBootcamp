import express from "express"

const app = express();
app.use(express.json());

const usuarios = [
    {nome: "Lara", idade: 24},
    {nome: "Luci", idade: 55},
    {nome: "Agnaldo", idade: 58}
]

app.get("/usuarios", (request, response) => {
    return response.json(usuarios).status(200);
})


app.listen(8080, () => {
    console.log("Running on port 8080")
})

