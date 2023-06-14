import BandModelMongo from '../mongoModels/BandModelMongo.js';
import EventModelMongo from '../mongoModels/EventModelMongo.js';

export default class MongoDBModelFactory {
  createBandModel() {
    return new BandModelMongo();
  }
  createBarModel() {}
  createEventModel() {
    return new EventModelMongo();
  }
  createUserModel() {}
}
