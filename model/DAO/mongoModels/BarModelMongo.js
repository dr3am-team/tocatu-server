import BarModel from "../../mongoDbValidations/BarModel.js";
import mongoose from "mongoose";

export default class BarModelMongo {
  getBars = () => {
    const bars = BarModel.find().select("-password").exec();
    return bars;
  };

  getBarById = (id) => {
    const bar = BarModel.findById(id).exec();
    return bar;
  };

  createBar = (bar) => {
    const newBar = new BarModel(bar);
    return newBar.save();
  };

  updateBar = (id, bar) => {
    const updatedBar = BarModel.findByIdAndUpdate(id, bar, {
      returnDocument: "after"
    }).exec();
    return updatedBar;
  };

  deleteBar = (id) => {
    const deletedBar = BarModel.findByIdAndDelete(id);
    return deletedBar;
  };
  getBarByUsername = (username) => {
    const bar = BarModel.findOne({ username }).exec();
    return bar;
  };
  updateBarByUsername = (username, id) => {
    const bar = BarModel.findOneAndUpdate(
      { username },
      { $push: { eventId: id } },
      { new: true }
    );
    return bar;
  };
  removeEventsIdAsociated = (eventId) => {
    const updatedBar = BarModel.findOneAndUpdate(
      { eventId: eventId },
      { $pull: { eventId: eventId } },
      { new: true }
    );
    return updatedBar;
  };
}
