import express from "express";
import UserRoute from "./routes/UserRoute.js";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/users", new UserRoute().start());

mongoose
  .connect("mongodb://localhost:27017/tocatu")
  .then(console.log("connected to Tocatu"));

const PORT = 8080;
const server = app.listen(PORT, () =>
  console.log("Servidor http express escuchando en http://localhost:8080")
);
server.on("error", (error) =>
  console.log("Error en servidor: " + error.message)
);
