const express = require('express');
const router = express.Router();
const ToDo = require('../models/to-do');

// GET /to-do - list all to-dos
router.get('/to-do', (req, res) => {
  ToDo.find({}, (err, todos) => {
    if (err) {
      return res.status(500).json({ message: 'Error retrieving to-dos' });
    }
    return res.status(200).json({ todos });
  });
});

// POST /to-do - create a new to-do
router.post('/to-do', (req, res) => {
  const todo = new ToDo(req.body);
  todo.save((err, todo) => {
    if (err) {
      return res.status(500).json({ message: 'Error creating to-do' });
    }
    return res.status(201).json({ todo });
  });
});

// GET /to-do/:id - fetch a specific to-do
router.get('/to-do/:id', (req, res) => {
  ToDo.findById(req.params.id, (err, todo) =>
  {if (err) {
    return res.status(500).json({ message: 'Error retrieving to-do' });
  }
  if (!todo) {
    return res.status(404).json({ message: 'To-do not found' });
  }
  return res.status(200).json({ todo });
});

// PUT /to-do/:id - edit existing to-do
router.put('/to-do/:id', (req, res) => {
ToDo.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, todo) => {
  if (err) {
    return res.status(500).json({ message: 'Error updating to-do' });
  }
  return res.status(200).json({ todo });
});
});

// PATCH /to-do/:id - mark an existing to-do as complete
router.patch('/to-do/:id', (req, res) => {
ToDo.findByIdAndUpdate(req.params.id, { status: 'complete' }, { new: true }, (err, todo) => {
  if (err) {
    return res.status(500).json({ message: 'Error updating to-do status' });
  }
  return res.status(200).json({ todo });
});
});

// DELETE /to-do/:id - delete existing to-do
router.delete('/to-do/:id', (req, res) => {
ToDo.findByIdAndRemove(req.params.id, (err, todo) => {
  if (err) {
    return res.status(500).json({ message: 'Error deleting to-do' });
  }
  return res.status(200).json({ message: 'To-do deleted successfully' });
}); //syntax
}); //syntax
}); //for syntax issues only

module.exports = router;

const express = require('express');
const app = express();
const toDoRoutes = require('./routes/to-do');

app.use('/', toDoRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});


