require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');

// Retrieve MongoDB URI from environment variables
const uri =  process.env.MONGODB_URI;
console.log("MONGODB_URI:", uri);


if (!uri) {
  console.error("MONGODB_URI environment variable is missing or empty.");
  process.exit(1);
}

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err));
