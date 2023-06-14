import BandModelMongo from "../mongoModels/BandModelMongo.js";

export default class MongoDBModelFactory {
  createBandModel() {
    return new BandModelMongo();
  }
  createBarModel() {}
  createEventModel() {}
  createUserModel() {}
}
