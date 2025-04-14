const mongoose = require("mongoose");

const ReminderSchema = new mongoose.Schema({
  title: String,
  dueDate: Date,
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Reminder", ReminderSchema);
