const PORT = 3000;

/**
 * Devuelve el modo de persistencia especificado, que por defecto es 'MONGODB'.
 * @param {string} [MODO="MONGODB"] - El modo de persistencia deseado. Los valores posibles son 'MEM', 'FILE' y 'MONGODB'.
 * @returns {string} - El modo de persistencia especificado.
 */
const MODO_PERSISTENCIA = (MODO = "MONGODB") => MODO; // 'MEM' - 'FILE' - 'MONGODB'
const MONGO_URL = "mongodb://127.0.0.1";
const BASE = "tocatu";

export default {
  PORT, // es igual a -> PORT : PORT
  MODO_PERSISTENCIA,
  MONGO_URL,
  BASE
};
