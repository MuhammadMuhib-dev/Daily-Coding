const express = require('express');
const pingRoutes = require('./routes/ping.routes');

const app = express();
const PORT = 3000;

app.use('/', pingRoutes);

app.listen(PORT, () => {
  console.log(`Server running successfully on port ${PORT}`);
});
