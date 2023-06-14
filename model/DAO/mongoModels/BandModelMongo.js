import BandModel from "../../mongoDbValidations/BandModel.js";

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

  updateBand = async (id, band) => {
    const updatedBand = await BandModel.findByIdAndUpdate(id, band, {
      returnDocument: "after"
    }).exec();
    //const updatedBand = await BandModel.findById(id).exec();
    console.log("Banda updateada", updatedBand);
    return updatedBand;
  };

  deleteBand = async (id) => {
    const deletedBand = await BandModel.findByIdAndDelete(id);
    return deletedBand;
  };
}
