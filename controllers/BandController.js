import BandService from "../services/BandService.js";

export default class BandController {
  constructor() {
    this.bandService = new BandService();
  }

  getBands = async (req, res) => {
    try {
      const bandas = await this.bandService.getBands();
      res.json(bandas);
    } catch (error) {
      console.error("Error getting bands with get", error);
    }
  };

  createBand = async (req, res) => {
    console.log(Object.keys(req.body).length);
    if (Object.keys(req.body).length <= 0) {
      res.status(400).send("Empty object");
    }
    try {
      const newBand = await this.bandService.createBand(req.body);
      res.json(newBand);
    } catch (error) {
      console.error("Error creating band with post");
      res.status(500).send("Check your fields");
    }
  };
}
