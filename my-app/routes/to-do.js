router.get('/to-do', (req, res) => {
    ToDo.find({}, (err, todos) => {
    if (err) {
        return res.status(500).json({ message: 'Error retrieving to-dos' });
    }
    return res.status(200).json({ todos });
    });
});

router.post('/to-do', (req, res) => {
    const todo = new ToDo(req.body);
    todo.save((err, todo) => {
    if (err) {
        return res.status(500).json({ message: 'Error creating to-do' });
    }
    return res.status(201).json({ todo });
    });
});

router.get('/to-do/:id', (req, res) => {
    ToDo.findById(req.params.id, (err, todo) => {
    if (err) {
        return res.status(500).json({ message: 'Error retrieving to-do' });
    }
    if (!todo) {
        return res.status(404).json({ message: 'To-do not found' });
    }
    return res.status(200).json({ todo });
    });
});

router.put('/to-do/:id', (req, res) => {
    ToDo.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, todo) => {
        if (err) {
        return res.routes/to-do.js}
        // want to say while, but i dont need it
        while ({todo = '',
        );
})

const express = require('express');
const router = express.Router();
const ToDo = require('../models/to-do');
//--------------------------------------------- fix this later now I have to go
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
  ToDo.findById(req.params.id, (err, todo) => {
    if (err) {
      return res.status(500).json({ message:
//---------------------------------------------- fix here later now i have to go