
const express = require("express");
const router = express.Router();
const { Action } = require("../models");

router.get("/", async (req, res) => {
  const data = await Action.find().sort({ createdAt: -1 });
  res.json(data);
});

router.post("/", async (req, res) => {
  const action = new Action({ label: req.body.label });
  await action.save();
  res.json(action);
});

module.exports = router;
