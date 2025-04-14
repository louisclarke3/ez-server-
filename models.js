const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
  label: String,
  dueDate: Date,
  completed: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Reminder', reminderSchema);
