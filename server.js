import express from "express";
import cors from "cors";
import config from "./config.js";
import dotenv from "dotenv";

import UserRoute from "./routes/UserRoute.js";
import BandRoute from "./routes/BandRoute.js";
import EventRoute from "./routes/EventRoute.js";
import BarRoute from "./routes/BarRoute.js";
import PublicRoute from "./routes/PublicRoute.js";
import DBConnection from "./model/DBConnection.js";
import swaggerDocs from "./swagger.js";

class Server {
  constructor() {
    this.app = express();
    this.port = config.PORT;
  }

  async start() {
    dotenv.config();

    /* EXPRESS CONFIG */
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(express.static("public"));

    /* API REST ful */
    this.app.use("/api/users", new UserRoute().start());
    this.app.use("/api/bands", new BandRoute().start());
    this.app.use("/api/events", new EventRoute().start());
    this.app.use("/api/bars", new BarRoute().start());
    this.app.use("/public", PublicRoute, express.static("public"));

    /* DBConnection conectar */
    await DBConnection.conectar();

    const PORT = this.port;
    this.server = this.app.listen(PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
      swaggerDocs(this.app, this.port);
    });
    this.server.on("error", (error) =>
      console.log(`Error en el servidor: ${error.message}`)
    );

    return this.app;
  }

  async stop() {
    this.server.close();
    await DBConnection.desconectar();
  }
}

export default Server;
