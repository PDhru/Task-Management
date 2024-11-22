const Task = require("../models/Task");
const User = require("../models/User");

// Create a Task
const createTask = async (req, res) => {
  const { title, description, status, priority, dueDate } = req.body;

  try {
    // Restrict regular users to max 10 tasks
    const user = req.user;
    if (user.role === "User") {
      const taskCount = await Task.countDocuments({ user: user.id });
      if (taskCount >= 10) {
        return res.status(400).json({ message: "You can only create up to 10 tasks." });
      }
    }

    const task = await Task.create({
      title,
      description,
      status,
      priority,
      dueDate,
      user: req.user.id,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Tasks (Admin: all tasks, User: own tasks)
const getTasks = async (req, res) => {
  try {
    const user = req.user;
    const tasks =
      user.role === "Admin"
        ? await Task.find().populate("user", "name email")
        : await Task.find({ user: user.id });

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a Task
const updateTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found." });
    }

    // Check permissions
    if (req.user.role !== "Admin" && task.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "You are not authorized to update this task." });
    }

    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a Task
const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found." });
    }

    // Check permissions
    if (req.user.role !== "Admin" && task.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "You are not authorized to delete this task." });
    }

    await task.remove();
    res.status(200).json({ message: "Task deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
