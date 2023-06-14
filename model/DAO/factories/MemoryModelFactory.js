import BandModelMemory from "../memoryModels/BandModelMemory.js";

export default class MemoryModelFactory {
  createBandModel() {
    return new BandModelMemory();
  }
  createBarModel() {}
  createEventModel() {}
  createUserModel() {}
}
