const express = require("express");
const router = express.Router();

// ✅ Import Reminder model from models.js
const Reminder = require("../models");

router.get("/", async (req, res) => {
  const data = await Reminder.find().sort({ createdAt: -1 });
  res.json(data);
});

router.post("/", async (req, res) => {
  const reminder = new Reminder({
    label: req.body.label,
    dueDate: req.body.dueDate,
  });
  await reminder.save();
  res.json(reminder);
});

module.exports = router;
