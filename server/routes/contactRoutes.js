const express = require("express");
const router = express.Router();
const ContactSubmission = require("../models/ContactSubmission");

// POST /api/contact - Handle contact form submission
router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, institution, subject, message } =
      req.body;

    // Simple validation
    if (!firstName || !lastName || !email || !subject || !message) {
      return res
        .status(400)
        .json({ message: "Please fill in all required fields." });
    }

    const newSubmission = new ContactSubmission({
      firstName,
      lastName,
      email,
      institution,
      subject,
      message,
    });

    await newSubmission.save();

    res.status(201).json({ message: "Contact form submitted successfully!" });
  } catch (error) {
    console.error("Error saving contact form submission:", error);
    res
      .status(500)
      .json({ message: "Server error. Could not save submission." });
  }
});

module.exports = router;
