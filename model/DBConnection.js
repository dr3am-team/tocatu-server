//https://www.npmjs.com/package/mongodb

import { MongoClient } from "mongodb";
import config from "../config.js";

class DBConnection {
  static client = null;
  static connectOk = false;
  static db = null;

  static conectar = async () => {
    try {
      if (config.MODO_PERSISTENCIA() === "MONGODB") {
        this.client = new MongoClient(config.MONGO_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        await this.client.connect();
      }

      this.db = this.client.db(config.BASE);
      this.connectOk = true;
    } catch (error) {
      console.log(`Error en la conexión de base de datos: ${error.message}`);
    }
  };

  static desconectar = async () => {
    if (!this.connectOk) return;
    await this.client.close();
    this.connectOk = false;
  };
}

export default DBConnection;
