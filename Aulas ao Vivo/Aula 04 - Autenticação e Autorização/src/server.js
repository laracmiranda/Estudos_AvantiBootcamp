import express from "express"
import { router } from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(router);

// Porta que está rodando
app.listen(8080, () => {
    console.log("Running on port 8080")
})

