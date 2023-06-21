import express from "express";
import EventController from "../controllers/EventController.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".jpg");
  },
});
const upload = multer({ storage: storage });

class Router {
  constructor() {
    this.router = express.Router();
    this.controller = new EventController();
  }

  start() {
    this.router.get("/", this.controller.getEvents);
    this.router.get("/:id", this.controller.getEventById);
    this.router.post("/", upload.single("avatar"), this.controller.createEvent);
    this.router.put("/:id", this.controller.updateEvent);
    this.router.delete("/:id", this.controller.deleteEvent);
    return this.router;
  }
}

export default Router;
