const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const contactRoutes = require("./routes/contactRoutes");

dotenv.config(); // Load environment variables from .env

const app = express();

// Configure CORS to allow only localhost:8080
const corsOptions = {
  origin: "https://arkyn.netlify.app/", // Specify the allowed origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allowed HTTP methods
  credentials: true, // Allow cookies/auth headers if needed (adjust based on your needs)
  optionsSuccessStatus: 204, // Some legacy browsers choke on 204
};

app.use(cors(corsOptions)); // Use CORS middleware with options

app.use(express.json()); // Parses incoming JSON requests

// Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.error("MongoDB connection error:", err));

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
