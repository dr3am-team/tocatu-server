import express from 'express';
import UserRoute from './routes/UserRoute.js';
import cors from 'cors';
import { connect } from 'mongoose';
import config from './config.js';
import BandRoute from './routes/BandRoute.js';
import EventRoute from './routes/EventRoute.js';
import BarRoute from "./routes/BarRoute.js";

const PORT = config.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/users', new UserRoute().start());
app.use('/api/bands', new BandRoute().start());
app.use('/api/events', new EventRoute().start());
app.use("/api/bars", new BarRoute().start());

if (config.MODO_PERSISTENCIA() === "MONGODB") {
  //IIFE (Immediately Invoked Function Expression) para usar async/await en vez de .then
  (async () => {
    await connect(`${config.MONGO_URL}/${config.BASE}`);
    console.log("Connected to Tocatu");
  })();
}

const server = app.listen(PORT, () =>
  console.log(`Servidor http express escuchando en http://localhost:${PORT}`)
);
server.on("error", (error) =>
  console.log("Error en servidor: " + error.message)
);
