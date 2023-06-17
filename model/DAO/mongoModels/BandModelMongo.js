import BandModel from "../../mongoDbValidations/BandModel.js";

export default class BandModelMongo {
  getBands = () => {
    const bands = BandModel.find().select("-__v").exec();
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

  updateBand = (id, band) => {
    const updatedBand = BandModel.findByIdAndUpdate(id, band, {
      returnDocument: "after",
    }).exec();
    return updatedBand;
  };

  deleteBand = (id) => {
    const deletedBand = BandModel.findByIdAndDelete(id);
    return deletedBand;
  };
  getBandByUsername = (username) => {
    const band = BandModel.findOne({ username }).exec();
    return band;
  };
}
