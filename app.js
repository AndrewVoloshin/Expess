const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const { getAllBooks } = require('./controller/bookController');

const app = express();
const { DB_HOST } = process.env;

app.use(express.json());

app.get('/api/books', getAllBooks);

mongoose.connect(DB_HOST)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    });
