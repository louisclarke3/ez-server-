
const mongoose = require("mongoose");

const ReminderSchema = new mongoose.Schema({
  label: String,
  createdAt: { type: Date, default: Date.now }
});

const ActionSchema = new mongoose.Schema({
  label: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = {
  Reminder: mongoose.model("Reminder", ReminderSchema),
  Action: mongoose.model("Action", ActionSchema)
};
