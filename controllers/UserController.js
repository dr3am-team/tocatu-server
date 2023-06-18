import UserService from "../services/UserService.js";

class Controller {
  constructor() {
    this.service = new UserService();
  }
  getUsers = async (req, res) => {
    try {
      const users = await this.service.getUsers();
      return res.json(users);
    } catch (error) {
      console.log("Error en getUsers", error);
    }
  };
  createUser = async (req, res) => {
    console.log(Object.keys(req.body).length);
    if (Object.keys(req.body).length <= 0) {
      return res.status(400).send("Empty object");
    }
    try {
      const newUser = await this.service.createUser(req.body);
      return res.json(newUser);
    } catch (error) {
      console.error("Error creating user with post", error);
      return res.status(500).send("Check your fields");
    }
  };
  editUser = async (req, res) => {
    if (Object.keys(req.body).length <= 0) {
      return res.status(400).send("Empty object");
    }
    try {
      const { id } = req.params;
      const updatedUser = await this.service.editUser(id, req.body);
      return res.json(updatedUser);
    } catch (err) {
      console.log("Error updating User with PUT: ", err);
      return res.status(500).send("Check your fields..");
    }
  };
  deleteUser = async (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send("Id not found");
    }
    try {
      const deletedUser = await this.service.deleteUser(id);
      return res.json(deletedUser);
    } catch (error) {
      console.log("Error deleting user: ", error);
      return res.status(500).send("Check the id");
    }
  };
  loginUser = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await this.service.getUserByUsername(username, password);
      if (!user) {
        return res
          .status(404)
          .json({ message: "Usuario o contraseña invalida" });
      }
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).send("Check your credentials");
    }
  };
}

export default Controller;
