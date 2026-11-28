const express = require('express');
const userRoutes = require('./routes/user.routes');
const { PORT } = require('./infra/config');

const app = express();
app.use(express.json());
app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running successfully on port ${PORT}`);
});
