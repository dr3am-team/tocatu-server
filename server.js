import express from "express";
import UserRoute from "./routes/UserRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/users", new UserRoute().start());

const PORT = 8080;
const server = app.listen(PORT, () =>
  console.log("Servidor http express escuchando en http://127.0.0.1:8080")
);
server.on("error", (error) =>
  console.log("Error en servidor: " + error.message)
);
