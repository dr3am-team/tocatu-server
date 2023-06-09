import ModelMongoDB from "./productosMongoDB.js";

class ModelFactory {
  static get(type) {
    switch (type) {
      case "MEM":
        console.log("***** Persistiendo en Memoria *****");
        return new ModelMem();

      case "FILE":
        console.log("***** Persistiendo en File System *****");
        return new ModelFile();

      case "MONGODB":
        console.log("***** Persistiendo en MongoDB *****");
        return new ModelMongoDB();

      default:
        console.log("***** Persistiendo en Memoria (default) *****");
        return new ModelMem();
    }
  }
}

export default ModelFactory;
