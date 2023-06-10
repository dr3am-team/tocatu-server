//import MongoDBModelFactory from "../model/DAO/factories/MongoDBModelFactory.js";
import MemoryModelFactory from "../model/DAO/factories/MemoryModelFactory.js";
import Factory from "../model/DAO/factories/Factory.js";
import config from "../config.js";

export default class BandService {
  constructor() {
    //this.bandModel = new MongoDBModelFactory().createBandModel();
    //this.bandModel = new MemoryModelFactory().createBandModel();

    this.bandModel = Factory.get(config.MODO_PERSISTENCIA).createBandModel();
  }

  getBands = async () => {
    const bands = await this.bandModel.getBands();
    return bands;
  };
  getBandById = async (id) => {
    const band = await this.bandModel.getBandById(id);
    return band;
  };
  createBand = async (band) => {
    const newBand = await this.bandModel.createBand(band);
    return newBand;
  };
  updateBand = async (id, band) => {
    const updatedBand = await this.bandModel.updateBand(id, band);
    return updatedBand;
  };
  deleteBand = async (id) => {
    const deletedBand = await this.bandModel.deleteBand(id);
    return deletedBand;
  };
}
