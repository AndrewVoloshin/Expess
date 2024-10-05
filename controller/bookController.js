const Book = require('../model/book')

const getAllBooks = async (req, res) => {
    const result = await Book.find()
    console.log(result,'result');
    res.json(result)
}
module.exports = {
    getAllBooks,
};