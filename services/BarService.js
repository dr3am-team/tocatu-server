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
  updateBarByUsername = async (username, _id) => {
    const updatedBar = await this.barModel.updateBarByUsername(username, _id);
  };

  deleteBar = async (id) => {
    const deletedBar = await this.barModel.deleteBar(id);
    return deletedBar;
  };
  getBarByUsername = async (username, password) => {
    const bar = await this.barModel.getBarByUsername(username);
    if (bar) {
      if (bar.password === password) {
        const noPasswordBar = {
          username: bar.username,
          mail: bar.mail,
          name: bar.name,
          address: bar.address,
          capacity: bar.capacity,
          userType: bar.userType,
          eventIds: bar.eventId,
          _id: bar._id
        };
        return noPasswordBar;
      }
    } else {
      return null;
    }
  };
}
