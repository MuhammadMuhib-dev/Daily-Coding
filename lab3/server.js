const express = require("express");
const pingRoute = require("./routes/ping");

const app = express();
const PORT = 3000;

app.use(pingRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})