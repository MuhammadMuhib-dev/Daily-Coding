const express = require('express');

module.exports = function userRoutes(userService) {
  const router = express.Router();

  router.post('/users', (req, res) => {
    const { name, email } = req.body || {};
    try {
      const user = userService.registerUser(name, email);
      res.status(201).json({ message: 'User created', user });
    } catch (err) {
      const status = err.message === 'Email already registered' ? 409 : 400;
      res.status(status).json({ error: err.message });
    }
  });

  router.get('/users', (req, res) => {
    res.status(200).json({ users: userService.getAllUsers() });
  });

  router.get('/users/:id', (req, res) => {
    try {
      const user = userService.getUserById(Number(req.params.id));
      res.status(200).json({ user });
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  });

  return router;
};
