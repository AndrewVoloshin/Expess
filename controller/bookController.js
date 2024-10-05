const Book = require('../model/book')

const getAllBooks = async (res, req) => {
    const result = await Book.find()
    res.json(result)
}
module.exports = {
    getAllBooks,
};