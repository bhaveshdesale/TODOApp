const express = require('express');
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON request body
app.use(express.json());

// Import routes for TODO API
const todoRoutes = require("./routes/todos");
// Mount the todo APIs routes
app.use("/api/v1", todoRoutes);

// Connect to the database
const dbconnect = require("./config/database");
dbconnect();

// Default Route
app.get("/", (req, res) => {
    res.send("<h1>This is the Homepage</h1>");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
});
