const express = require('express')
const router = express.Router()

const Book = require('../models/Book.model')



router.get('/list', (req, res, next) => {
  Book.find({})
    .then(allTheBooks => res.render('books-list', { books: allTheBooks }))  // ojo! pasar obj
    .catch(err => console.log('Hubo un error:', err))
})

router.get('/detail/:id', (req, res, next) => {
  const bookId = req.params.id
  Book.findById(bookId)
    .then(theWholeBook => res.render('book-detail', { book: theWholeBook }))
    .catch(err => console.log('Hubo un error:', err))
})

module.exports = router