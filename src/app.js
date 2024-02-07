const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the `public` directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// Routes
require('./routes')(app); // Import and use routes

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
