const Book = require('../models/book')
const {ctrlWrapper} = require('../helpers/ctrlWrapper')

const getAllBooks = async (req, res) => {
    const result = await Book.find()
    console.log(result, 'result');
    res.json(result)
}

const addBook = async (req, res) => {
    const result = await Book.create(req.body)
    console.log('Already create');
    res.status(201).json(result)

}





module.exports = {
    getAllBooks: ctrlWrapper(getAllBooks),
    addBook: ctrlWrapper(addBook),
};