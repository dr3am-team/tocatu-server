import BandModel from "./mongooseModels/BandModel.js";

export default class BandModelMongo {
  getBands = () => {
    const bands = BandModel.find().exec();
    return bands;
  };

  createBand = (band) => {
    const newBand = new BandModel(band);
    return newBand.save();
  };
}
