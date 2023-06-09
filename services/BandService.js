import MongoDBModelFactory from "../model/DAO/MongoDBModelFactory.js";

export default class BandService {
  constructor() {
    this.bandModel = new MongoDBModelFactory().createBandModel();
  }

  getBands = async () => {
    const bands = await this.bandModel.getBands();
    return bands;
  };
}
