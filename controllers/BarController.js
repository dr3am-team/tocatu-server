import BarService from "../services/BarService.js";

export default class BarController {
  constructor() {
    this.barService = new BarService();
  }

  getBars = async (req, res) => {
    try {
      const bars = await this.barService.getBars();
      res.json(bars);
    } catch (error) {
      console.error("Error getting bars with get", error);
    }
  };

  getBarById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).send("Empty id");
    }
    try {
      const bar = await this.barService.getBarById(id);
      res.json(bar);
    } catch (error) {
      console.error("Error getting bar by id get", error);
      res.status(500).send("Check id");
    }
  };

  createBar = async (req, res) => {
    console.log(Object.keys(req.body).length);
    if (Object.keys(req.body).length <= 0) {
      res.status(400).send("Empty object");
    }
    try {
      const newBar = await this.barService.createBar(req.body);
      res.json(newBar);
    } catch (error) {
      console.error("Error creating bar with post", error);
      res.status(500).send("Check your fields");
    }
  };

  updateBar = async (req, res) => {
    if (Object.keys(req.body).length <= 0) {
      res.status(400).send("Empty object");
    }
    try {
      const { id } = req.params;
      const updatedBar = await this.barService.updateBar(id, req.body);
      res.json(updatedBar);
    } catch (err) {
      console.log("Error updating bar with PUT: ", err);
      res.status(500).send("Check your fields..");
    }
  };
  deleteBar = async (req, res) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).send("Id not found");
    }
    try {
      const deletedBar = await this.barService.deleteBar(id);
      res.json(deletedBar);
    } catch (error) {
      console.log("Error deleting bar: ", err);
      res.status(500).send("Check the id");
    }
  };
}
