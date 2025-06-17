const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ status: 401, msg: "Token not provided" });
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ status: 401, msg: "Invalid token" });
    }

    req.user = decoded;
    next();
  });
};
