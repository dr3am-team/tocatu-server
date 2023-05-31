import UserModel from "../models/UserModel.js";

class Service {
  constructor() {
    this.usersMem = new UserModel();
  }

  getUsers = async () => {
    const users = await this.usersMem.getUsers();
    return users;
  };
  addUser = async (user) => {
    const userAdded = await this.usersMem.addUser(user);
    return userAdded;
  };
  editUser = async (user) => {
    const userEdited = await this.usersMem.editUser(user);
    return userEdited;
  };
}

export default Service;
