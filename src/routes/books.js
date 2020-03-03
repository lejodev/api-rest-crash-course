const {Router} = require('express');
const router = Router();
const underscore = require('underscore');

const jsonBooks = require('../sample-data.json');
// console.log(jsonBooks);

router.get('/', (req, res) => {
    res.send(jsonBooks);
});

router.post('/', (req, res) => {
    const {book_title, author, year, pages_count} = req.body;
    if(book_title && author && year && pages_count){
        const id = jsonBooks.length + 1;
        const newBook = {...req.body, id};
        jsonBooks.push(newBook);
        // console.log(newBook);
        res.json(jsonBooks);
    }else{
        res.status(500).json({error: "There was an error"});
    }
    // console.log(req.body);
    // res.send('Posted');
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    underscore.each(jsonBooks, (book, i) => {
        console.log(id);
        if(book.id == id){
            console.log('inside');
            jsonBooks.splice(i,1);
        }
    } );
    // console.log(id);
    // jsonBooks.remove(id);
    res.json(jsonBooks);
});

module.exports = router