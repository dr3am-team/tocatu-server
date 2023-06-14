//import MongoDBModelFactory from "../model/DAO/factories/MongoDBModelFactory.js";
import MemoryModelFactory from "../model/DAO/factories/MemoryModelFactory.js";
import Factory from "../model/DAO/factories/Factory.js";
import config from "../config.js";

export default class BarService {
  constructor() {
    //this.bandModel = new MongoDBModelFactory().createBandModel();
    //this.bandModel = new MemoryModelFactory().createBandModel();

    this.barModel = Factory.get(config.MODO_PERSISTENCIA()).createBarModel();
  }

  getBars = async () => {
    const bars = await this.barModel.getBars();
    return bars;
  };
  getBarById = async (id) => {
    const bar = await this.barModel.getBarById(id);
    return bar;
  };
  createBar = async (bar) => {
    const newBar = await this.barModel.createBar(bar);
    return newBar;
  };
  updateBar = async (id, bar) => {
    const updatedBar = await this.barModel.updateBar(id, bar);
    return updatedBar;
  };
  deleteBar = async (id) => {
    const deletedBar = await this.barModel.deleteBar(id);
    return deletedBar;
  };
}
