var express = require('express');
var router = express.Router();

router.post('/', async (req, res) => {
    try {
      const taskData = await taskSchema.validate(req.body);
  
      const newTask = new taskModel(taskData);
      await newTask.save();
  
      res.status(201).json(newTask);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  router.get('/', async (req, res) => {
    const tasks = await taskModel.find();
    res.json(tasks);
  });
  
  router.get('/:id', async (req, res) => {
    try {
      const task = await taskModel.findById(req.params.id);
      if (!task) throw new Error('Task not found');
      res.json(task);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  });
  
  router.put('/:id', async (req, res) => {
    try {
      const taskData = await taskSchema.validate(req.body);
  
      const task = await taskModel.findByIdAndUpdate(req.params.id, taskData, {
        new: true
      });
      if (!task) throw new Error('Task not found');
  
      res.json(task);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  });
  
  router.delete('/:id', async (req, res) => {
    try {
      const task = await taskModel.findByIdAndDelete(req.params.id);
      if (!task) throw new Error('Task not found');
  
      res.json({ message: 'Task deleted' });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  });
  
  module.exports = router;