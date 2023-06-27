import express from "express";
import path from "path";

const Router = express.Router();

export default Router.get("/:id", (req, res) => {
  const imagePath = path.resolve(`public/uploads/${req.params.id}`);
  res.sendFile(imagePath);
});
