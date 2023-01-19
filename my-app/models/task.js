//task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    description: { type: String, required: true },
    timestamps: { type: Date, default: Date.now },
    status: { type: String, required: true }
    taskId: { type: String, required: true },
});

module.exports = mongoose.model('Task', taskSchema);