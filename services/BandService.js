import Factory from "../model/DAO/factories/Factory.js";
import config from "../config.js";

export default class BandService {
  constructor() {
    this.bandModel = Factory.get(config.MODO_PERSISTENCIA()).createBandModel();
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
  getBandByUsername = async (username, password) => {
    const band = await this.bandModel.getBandByUsername(username);
    if (band) {
      if (band.password === password) {
        const noPasswordBand = {
          username: band.username,
          mail: band.mail,
          name: band.name,
          address: band.address,
          capacity: band.capacity,
          userType: band.userType,
          _id: band._id,
        };
        return noPasswordBand;
      }
    } else {
      return null;
    }
  };
  removeEventIdAsociated = async (id) => {
    const updatedBand = await this.bandModel.removeEventIdAsociated(id);
    return updatedBand;
  };
}
