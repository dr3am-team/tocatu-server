import BarModel from "../../mongoDbValidations/BarModel.js";

export default class BarModelMongo {
  getBars = () => {
    const bars = BarModel.find().select().exec();
    return bars;
  };

  getBarById = (id) => {
    const bar = BarModel.findById(id).exec();
    return bar;
  };

  createBar = (bar) => {
    const newBar = new BarModel(band);
    return newBar.save();
  };

  updateBar = (id, bar) => {
    const updatedBar = BarModel.findByIdAndUpdate(id, bar, {
      returnDocument: "after",
    }).exec();
    return updatedBar;
  };

  deleteBar = (id) => {
    const deletedBar = BarModel.findByIdAndDelete(id);
    return deletedBar;
  };
}
