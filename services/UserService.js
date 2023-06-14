import UserModel from "../model/mongoDbValidations/UserModel.js";

class Service {
  constructor() {
    this.userModel = new UserModel();
  }

  getUsers = async () => {
    const users = await this.userModel.getUsers();
    return users;
  };
  addUser = async (user) => {
    const userAdded = await this.userModel.addUser(user);
    return userAdded;
  };
  editUser = async (user) => {
    const userEdited = await this.userModel.editUser(user);
    return userEdited;
  };
}

export default Service;
