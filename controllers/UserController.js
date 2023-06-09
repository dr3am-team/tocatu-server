import UserService from "../services/UserService.js";

class Controller {
  constructor() {
    this.service = new UserService();
  }
  getUsers = async (req, res) => {
    try {
      const users = await this.service.getUsers();
      res.json(users);
    } catch (err) {
      console.log("Error en getUsers", err);
    }
  };
  addUser = async (req, res) => {
    try {
      const user = req.body;
      const userAdded = await this.service.addUser(user);
      res.json(userAdded);
    } catch (err) {
      console.log("Error adding user", err);
    }
  };
  editUser = async (req, res) => {
    try {
      const user = req.body;
      const userEdited = await this.service.editUser(user);
      res.json(userEdited);
    } catch (err) {
      console.log("error editing user");
    }
  };
}

export default Controller;
