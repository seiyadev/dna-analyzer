const mongoose = require("mongoose");

// Connect to MongoDB
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL_TEST);
    console.log("Connected to MongoDB");
  } catch (e) {
    console.log("Error connecting to MongoDB =>", e);
  }
};

module.exports = {
  connectToMongoDB,
};
