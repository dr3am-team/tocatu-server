//import MongoDBModelFactory from "../model/DAO/factories/MongoDBModelFactory.js";
import MemoryModelFactory from "../model/DAO/factories/MemoryModelFactory.js";
import Factory from "../model/DAO/factories/Factory.js";
import config from "../config.js";

export default class UserService {
  constructor() {
    this.userModel = Factory.get(config.MODO_PERSISTENCIA()).createUserModel();
  }

  getUsers = async () => {
    const users = await this.userModel.getUsers();
    return users;
  };
  getUserById = async (id) => {
    const user = await this.userModel.getUserById(id);
    return user;
  };
  createUser = async (user) => {
    const newUser = await this.userModel.createUser(user);
    return newUser;
  };
  editUser = async (id, user) => {
    const updatedUser = await this.userModel.editUser(id, user);
    return updatedUser;
  };
  deleteUser = async (id) => {
    const deletedUser = await this.userModel.deleteUser(id);
    return deletedUser;
  };
  getUserByUsername = async (username, password) => {
    const user = await this.userModel.getUserByUsername(username);
    if (user) {
      if (user.password === password) {
        const noPasswordUser = {
          username: user.username,
          mail: user.mail,
        };
        return noPasswordUser;
      }
    } else {
      return null;
    }
  };
}
