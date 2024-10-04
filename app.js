// cJvaax2bOh5lQHvK

const mongoose = require('mongoose')
const DB_HOST = 'mongodb://atlas-sql-66ff9c2eb1276f7035b8e741-2wsh8.a.query.mongodb.net/books_reader?ssl=true&authSource=admin'

mongoose.connect(DB_HOST)
    .then(() => console.log('Connetct to DB'))
    .catch((error) => console.log(error.message))

