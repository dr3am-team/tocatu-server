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
}
