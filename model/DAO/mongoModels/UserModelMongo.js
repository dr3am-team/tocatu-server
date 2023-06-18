import UserModel from "../../mongoDbValidations/UserModel.js";

export default class UserModelMongo {
  getUsers = () => {
    const users = UserModel.find().select("-__v").exec();
    return users;
  };

  getUserById = (id) => {
    const user = UserModel.findById(id).exec();
    return user;
  };

  createUser = (user) => {
    const newUser = new UserModel(user);
    return newUser.save();
  };

  editUser = (id, user) => {
    const updatedUser = UserModel.findByIdAndUpdate(id, user, {
      returnDocument: "after",
    }).exec();
    return updatedUser;
  };

  deleteUser = (id) => {
    const deletedUser = UserModel.findByIdAndDelete(id);
    return deletedUser;
  };
  getUserByUsername = (username) => {
    const user = UserModel.findOne({ username }).exec();
    return user;
  };
}
