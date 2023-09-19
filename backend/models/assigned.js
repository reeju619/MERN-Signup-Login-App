const mongoose = require('mongoose');

// Define the Assigned schema
const assignedSchema = new mongoose.Schema({
  user_story_id: {
    type: Number, // Change the data type as needed (e.g., String or ObjectId)
    required: true,
  },
  user_id: {
    type: Number, // Change the data type as needed (e.g., String or ObjectId)
    required: true,
  },
});

// Create the Assigned model
const Assigned = mongoose.model('Assigned', assignedSchema);

module.exports = Assigned;
