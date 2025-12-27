const mongoose = require("mongoose");

let productConnection;

const productsDb = async () => {
  try {
    productConnection = mongoose.createConnection(process.env.MONGO_URI);

    productConnection.on("connected", () => {
      console.log("✅ Product DB connected successfully");
    });

    productConnection.on("error", (err) => {
      console.log("❌ Error connecting to Product DB:", err);
    });

    return productConnection;
  } catch (error) {
    console.log("❌ Error while connecting product DB:", error);
  }
};

module.exports = productsDb;
