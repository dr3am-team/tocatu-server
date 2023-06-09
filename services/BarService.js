import BarModel from "../model/DAO/mongooseModels/BarModel";

class Service {
  constructor() {
    this.barModel = new UserModel();
  }

  getUsers = async () => {
    const users = await this.barModel.getUsers();
    return users;
  };
  addUser = async (user) => {
    const userAdded = await this.barModel.addUser(user);
    return userAdded;
  };
  editUser = async (user) => {
    const userEdited = await this.barModel.editUser(user);
    return userEdited;
  };
}

export default Service;
