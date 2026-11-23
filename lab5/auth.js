const jwt = require("jsonwebtoken");

const SECRET = "mysecretkey";

const verifyToken = (req, res, next) => {
  const header = req.headers.authorization;

  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Token missing" });
  }

  try {
    req.user = jwt.verify(header.split(" ")[1], SECRET);
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = { verifyToken, SECRET };
