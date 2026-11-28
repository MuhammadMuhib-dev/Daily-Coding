const express = require('express');
const jwt = require('jsonwebtoken');
const repo = require('../infra/UserRepository');
const passwordHasher = require('../infra/passwordHasher');
const authenticate = require('../middleware/auth');
const { JWT_SECRET, JWT_EXPIRES_IN } = require('../infra/config');

const router = express.Router();

// Question 1: User registration
router.post('/users', (req, res) => {
  const { name, email, password } = req.body || {};

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'name, email and password are required' });
  }
  if (repo.getByEmail(email)) {
    return res.status(409).json({ error: 'Email already registered' });
  }

  const user = repo.insert(name, email, passwordHasher.hash(password));
  res.status(201).json({ message: 'User registered successfully', user: user.toPublic() });
});

// Question 2: Login and JWT generation
router.post('/login', (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ error: 'email and password are required' });
  }

  const user = repo.getByEmail(email);
  if (!user || !passwordHasher.verify(password, user.passwordHash)) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
  res.json({ message: 'Login successful', token });
});

// Question 3: Protected route
router.get('/profile', authenticate, (req, res) => {
  const user = repo.getById(req.user.id);
  res.json({ message: 'Access granted', user: user.toPublic() });
});

module.exports = router;
