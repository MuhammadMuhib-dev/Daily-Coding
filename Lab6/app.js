const express = require('express');
const UserRepository = require('./infra/UserRepository');
const UserService = require('./application/UserService');
const pingRoutes = require('./routes/ping.routes');
const userRoutes = require('./routes/user.routes');

const app = express();
app.use(express.json());

const userService = new UserService(new UserRepository());

app.use('/', pingRoutes);
app.use('/', userRoutes(userService));

module.exports = app;
