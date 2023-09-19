// Import the Project model at the top of your index.js
const User = require('./models/user');
const Project = require('./models/project');
const Team = require('./models/teamName');
const TeamRoster = require('./models/teamRoster');
const UserStory = require('./models/userStory');
const Task = require('./models/taskList');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



// Add a new route for creating a project
app.post('/createProject', async (req, res) => {
  try {
    console.log('Received signup request:', req.body); // Log the received data
    const newProject = new Project(req.body);
    await newProject.save();
    console.log('Project saved:', newProject);
    res.status(201).json(newProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/createTeam', async (req, res) => {
  try {
    console.log('Received signup request:', req.body); // Log the received data
    const newTeam = new Team(req.body);
    await newTeam.save();
    console.log('Team saved:', newTeam); // Log the saved user
    res.status(201).json(newTeam);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add a new route for creating a team roster
app.post('/createTeamRoster', async (req, res) => {
  try {
    console.log('Received signup request:', req.body); // Log the received data
    const newTeamRoster = new TeamRoster(req.body);
    await newTeamRoster.save();
    console.log('TeamRoster saved:', newTeamRoster); // Log the saved user
    res.status(201).json(newTeamRoster);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add a new route for creating a user story
app.post('/createUserStory', async (req, res) => {
  try {
    console.log('Received signup request:', req.body); // Log the received data
    const newUserStory = new UserStory(req.body);
    await newUserStory.save();
    console.log('UserStory saved:', newUserStory); // Log the saved user
    res.status(201).json(newUserStory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add a new route for creating a task
app.post('/createTask', async (req, res) => {
  try {
    console.log('Received signup request:', req.body); // Log the received data
    const newTask = new Task(req.body);
    await newTask.save();
    console.log('Task saved:', newTask); // Log the saved user
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/createUser', async (req, res) => {
  try {
    console.log('Received signup request:', req.body); // Log the received data
    const newUser = new User(req.body);
    await newUser.save();
    console.log('User saved:', newUser); // Log the saved user
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/getUser', async (req, res) => {
  const { username, password } = req.query;
  try {
    const user = await User.findOne({ username, password });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
