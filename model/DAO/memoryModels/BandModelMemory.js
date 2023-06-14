class ModelMemory {
  constructor() {
    this.bands = [
      {
        id: 1,
        name: "ACDC",
        style: "Rock",
        mail: "acdc@acdc.com",
        password: "band123",
        username: "acdc123"
      },
      {
        id: 2,
        name: "KISS",
        style: "Rock",
        mail: "acdc@acdc.com",
        password: "band123",
        username: "acdc123"
      }
    ];
  }
  getBands = async () => {
    const bands = await Promise.resolve(this.bands);
    return bands;
  };
}
export default ModelMemory;
