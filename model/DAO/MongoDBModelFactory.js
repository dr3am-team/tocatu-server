import AbstractFactory from "./AbstractFactory.js";
import BandModelMongo from "./BandModelMongo.js";

export default class MongoDBModelFactory extends AbstractFactory {
  createBandModel() {
    return new BandModelMongo();
  }
}
