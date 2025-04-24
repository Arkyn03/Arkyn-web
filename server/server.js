const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const contactRoutes = require("./routes/contactRoutes");
const connectDB = require("./config/db"); // Import the database connection function

dotenv.config(); // Load environment variables from .env

const app = express();

app.use(cors());

app.use(express.json()); // Parses incoming JSON requests

// Database Connection
connectDB();

// Routes
app.use("/api/contact", contactRoutes);

// Basic root route
app.get("/", (req, res) => {
  res.send("Contact Form Backend is running!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
