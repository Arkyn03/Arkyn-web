const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const mongoose = require("mongoose");
const fs = require("fs");

const envPath = path.resolve(__dirname, "../.env");
if (fs.existsSync(envPath)) {
  require("dotenv").config({ path: envPath });
  console.log("Loaded environment variables from .env file");
} else {
  console.log("No .env file found; using existing environment variables");
}

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
module.exports = connectDB;
