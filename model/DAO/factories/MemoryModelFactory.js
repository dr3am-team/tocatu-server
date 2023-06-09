import AbstractFactory from "./AbstractFactory.js";
import BandModelMongo from "../BandModelMongo.js";
import BandModelMemory from "../BandModelMemory.js";

export default class MemoryModelFactory extends AbstractFactory {
  createBandModel() {
    console.log("hola");
    return new BandModelMemory();
  }
}
