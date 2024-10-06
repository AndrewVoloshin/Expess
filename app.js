const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');
require('dotenv').config();

const app = express();
const { DB_HOST } = process.env;

app.use(express.json());

app.use('/api/books', bookRoutes);


app.use((err, req, res, next) => {
    const { status = 500, message = 'Server error' } = err
    res.status(status).json({ message })
})


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

