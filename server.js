require('dotenv').config();  // Load environment variables
const express = require('express');
const connectDB = require('./config/database');  // Assuming the connectDB function is in a separate file

const app = express();

// Log to check if MONGO_URI is loaded correctly
console.log('MONGO_URI:', process.env.MONGO_URI);

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => res.send('Hello World!'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
