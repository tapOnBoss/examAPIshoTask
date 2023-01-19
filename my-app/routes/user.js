const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  // handle user registration
});

router.get('/tasks', (req, res) => {
  // handle task retrieval
});

module.exports = router;

// routes/users.js
//user registration
router.post('/register', (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Error registering user' });
    }
    const token = authHelper.generateToken(user);
    return res.status(200).json({ message: 'User registered successfully', token });
  });
});

//user login
// routes/users.js
router.post('/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Error logging in user' });
    }
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (!user.validatePassword(req.body.password)) {
      return res.status(401).json({ message: 'Invalid login credentials' });
    }
    const token = authHelper.generateToken(user);
    return res.status(200).json({ message: 'User logged in successfully', token });
  });
});

// Retrieve tasks for a user
// routes/users.js
router.get('/tasks', (req, res) => {
  Task.find({ userId: req.decoded.id }, (err, tasks) => {
    if (err) {
      return res.status(500).json({ message: 'Error retrieving tasks' });
    }
    return res.status(200).json({ tasks });
  });
});

// create task for a user
// routes/users.js
router.post('/tasks', (req, res) => {
  const task = new Task({ ...req.body, userId:req.decoded.id });
  task.save((err, task) => {
  if (err) {
  return res.status(500).json({ message: 'Error creating task' });
  }
  return res.status(201).json({ task });
  });
  });