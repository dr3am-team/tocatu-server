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

  updateBand = async (id, band) => {
    const updateOptions = {
      returnDocument: "after",
    };

    const updatedBand = await BandModel.findByIdAndUpdate(
      id,
      band.eventsSubscribed ? { $push: band } : band,
      updateOptions
    ).exec();

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
  removeEventIdAsociated = (eventId) => {
    const updatedBand = BandModel.findOneAndUpdate(
      { eventsSubscribed: eventId },
      { $pull: { eventsSubscribed: eventId } },
      { new: true }
    );
    return updatedBand;
  };
}
