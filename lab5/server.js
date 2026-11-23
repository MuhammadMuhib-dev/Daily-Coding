const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("./User");
const UserRepository = require("./UserRepository");
const { verifyToken, SECRET } = require("./auth");

const app = express();
const repo = new UserRepository();

app.use(express.json());

app.post("/users", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (repo.getByEmail(email)) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const user = new User(repo.getAll().length + 1, name, email, password);
    user.password = await bcrypt.hash(password, 10);
    repo.insert(user);

    res.status(201).json({ id: user.id, name: user.name, email: user.email });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = repo.getByEmail(email);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
});

app.get("/profile", verifyToken, (req, res) => {
  const user = repo.getById(req.user.id);
  res.json({ id: user.id, name: user.name, email: user.email });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
