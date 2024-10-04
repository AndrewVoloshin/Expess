// cJvaax2bOh5lQHvK
const express = require('express')
const mongoose = require('mongoose');
const { title } = require('process');



const app = express();


const DB_HOST = 'mongodb://atlas-sql-66ff9c2eb1276f7035b8e741-2wsh8.a.query.mongodb.net/books_reader?ssl=true&authSource=admin'

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

