const mongoose = require('mongoose');

// Define the TaskList schema
const taskListSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  userStory: {
    type: String, // You can change the data type as needed, e.g., ObjectId if linked to User Story documents
    required: true,
  },
  createdBy: {
    type: String, // You can change the data type as needed, e.g., ObjectId if linked to User documents
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'To do', 'In Progress', 'In Test', 'In Review', 'Done'], // Define possible status values
    required: true,
  },
});

// Create the TaskList model
const TaskList = mongoose.model('TaskList', taskListSchema);

module.exports = TaskList;
