const jwt = require("jsonwebtoken");
const Writer = require("../models/writerModel");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res
        .status(401)
        .json({ message: "No token, authorization denied" });
    }

    const decoded = jwt.verify(token, process.env.secret);
    const writer = await Writer.findById(decoded.id);

    if (!writer) {
      return res.status(401).json({ message: "Token is not valid" });
    }

    req.user = writer;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = auth;
