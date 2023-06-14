import BandModelMongo from '../mongoModels/BandModelMongo.js';
import EventModelMongo from '../mongoModels/EventModelMongo.js';
import BarModelMongo from '../mongoModels/BarModelMongo.js';

export default class MongoDBModelFactory {
  createBandModel() {
    return new BandModelMongo();
  }
  createEventModel() {
    return new EventModelMongo();
  }
  createBarModel() {
    return new BarModelMongo();
  }
  createUserModel() {}
}
