import m2s from "mongoose-to-swagger";
import UserModel from "./model/mongoDbValidations/UserModel.js";

export default {
  user: m2s(UserModel)
};
