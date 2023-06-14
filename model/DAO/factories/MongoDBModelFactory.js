import BandModelMongo from "../mongoModels/BandModelMongo.js";
import BarModelMongo from "../mongoModels/BarModelMongo.js";

export default class MongoDBModelFactory {
  createBandModel() {
    return new BandModelMongo();
  }
  createBarModel() {
    return new BarModelMongo();
  }
  createEventModel() {}
  createUserModel() {}
}
