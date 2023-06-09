import MemoryModelFactory from "./MemoryModelFactory.js";
import MongoDBModelFactory from "./MongoDBModelFactory.js";

class Factory {
  static get(tipo) {
    switch (tipo) {
      case "MEM":
        console.log("***** Persistiendo en Memoria *****");
        return new MemoryModelFactory();
      case "MONGODB":
        console.log("***** Persistiendo en MongoDB *****");
        return new MongoDBModelFactory();

      default:
        console.log("***** Persistiendo en Memoria (default) *****");
        return new MemoryModelFactory();
    }
  }
}
export default Factory;
