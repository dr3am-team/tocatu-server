//https://www.npmjs.com/package/mongodb

import mongoose, { connect } from "mongoose";
import config from "../config.js";

class DBConnection {
  static client = null;
  static connectOk = false;

  static conectar = async () => {
    try {
      if (config.MODO_PERSISTENCIA() === "MONGODB") {
        
          console.log("Conectando a la base de datos...");
         this.client = await connect(`${config.MONGO_URL}/${config.BASE}`);
          console.log("Connected to Tocatu");
      }

      this.connectOk = true;
    } catch (error) {
      console.log(`Error en la conexión de base de datos: ${error.message}`);
    }
  };

  static desconectar = async () => {
    if (!this.connectOk) return;
    // TODO - Revisar que el cierre de la conexión sea el apropiado.
    await mongoose.connection.close();
    this.connectOk = false;
  };
}

export default DBConnection;
