const jwt = require( "jsonwebtoken")

const verifyJWT = (req, res, next) => {
  try {
    const token = req.cookies?.token;
    console.log("Token from cookies:", token);

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.id = decoded.id;
    console.log("authorized successfully");
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = verifyJWT;
