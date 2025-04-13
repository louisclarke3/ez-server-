
const express = require("express");
const router = express.Router();
const { Reminder } = require("../models");

router.get("/", async (req, res) => {
  const data = await Reminder.find().sort({ createdAt: -1 });
  res.json(data);
});

router.post("/", async (req, res) => {
  const reminder = new Reminder({ label: req.body.label });
  await reminder.save();
  res.json(reminder);
});

module.exports = router;
