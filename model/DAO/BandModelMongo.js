import BandModel from "./mongooseModels/BandModel.js";

export default class BandModelMongo {
  getBands = () => {
    const bands = BandModel.find().exec();
    return bands;
  };
}
