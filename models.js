const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema(
  {
    title: String,
    dueDate: Date,
    completed: Boolean,
  },
  { timestamps: true }
);

// Prevent OverwriteModelError
const Reminder = mongoose.models.Reminder || mongoose.model("Reminder", reminderSchema);

module.exports = { Reminder };
