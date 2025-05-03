import "dotenv/config";
import express from "express";
import usersRoutes from "./routes/users.routes.js";
import cors from 'cors';


const app = express();

app.use(cors());
app.use(express.json());
app.use(usersRoutes);

const port = 5000;

app.listen(port, console.log("http://Localhost:" + port));