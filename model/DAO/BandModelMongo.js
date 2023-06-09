import BandModel from "./mongooseModels/BandModel.js";

export default class BandModelMongo {
  getBands = () => {
    const bands = BandModel.find().select("-password -__v").exec();
    return bands;
  };

  getBandById = (id) => {
    const band = BandModel.findById(id).exec();
    return band;
  };

  createBand = (band) => {
    const newBand = new BandModel(band);
    return newBand.save();
  };
}
