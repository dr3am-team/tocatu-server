import BandService from "../services/BandService.js";

export default class BandController {
  constructor() {
    this.bandService = new BandService();
  }

  getBands = async (req, res) => {
    try {
      const bandas = await this.bandService.getBands();
      return res.json(bandas);
    } catch (error) {
      console.error("Error getting bands with get", error);
    }
  };

  getBandById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send("Empty id");
    }
    try {
      const banda = await this.bandService.getBandById(id);
      return res.json(banda);
    } catch (error) {
      console.error("Error getting band by id get", error);
      return res.status(500).send("Check id");
    }
  };

  createBand = async (req, res) => {
    if (Object.keys(req.body).length <= 0) {
      return res.status(400).send("Empty object");
    }
    try {
      const newBand = await this.bandService.createBand(req.body);
      return res.json(newBand);
    } catch (error) {
      console.error("Error creating band with post");
      return res.status(500).send("Check your fields");
    }
  };

  updateBand = async (req, res) => {
    if (Object.keys(req.body).length <= 0) {
      return res.status(400).send("Empty object");
    }
    try {
      const { id } = req.params;
      const updatedBand = await this.bandService.updateBand(id, req.body);
      return res.json(updatedBand);
    } catch (err) {
      console.log("Error updating band with PUT: ", err);
      return res.status(500).send("Check your fields..");
    }
  };
  deleteBand = async (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send("Id not found");
    }
    try {
      const deletedBand = await this.bandService.deleteBand(id);
      return res.json(deletedBand);
    } catch (error) {
      console.log("Error deleting band: ", err);
      return res.status(500).send("Check the id");
    }
  };
  loginBand = async (req, res) => {
    try {
      const { username, password } = req.body;
      const band = await this.bandService.getBandByUsername(username, password);
      if (!band) {
        return res
          .status(404)
          .json({ message: "Usuario o contraseña invalida" });
      }
      return res.status(200).json(band);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Check your credentials");
    }
  };
}
