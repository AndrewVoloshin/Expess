// cJvaax2bOh5lQHvK
const express = require('express')
const mongoose = require('mongoose');

const{DB_HOST} = require('./config')


const app = express();


mongoose.connect(DB_HOST)
    .then(() => {
        app.listen(3000)
    })
    .catch((error) => {
        console.log(error.message)
        process.exit(1)
    })

app.get('/api/books', async (req, res) => {

    const books = {
        title: 'Generation Pi',
        autor: 'Pelevin',
    }
    res.json(books);

});

