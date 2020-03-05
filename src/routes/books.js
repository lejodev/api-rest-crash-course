const {Router} = require('express'); // Router-level middleware
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

router.put('/:id', (req, res) => {
    const{book_title, author, year, pages_count} = req.body;
    const id = req.params.id;
    if(book_title && author && year && pages_count){// if the body contains all the required values...
        underscore.each(jsonBooks, (book, i) => {
            if(book.id == id){
                book.book_title = book_title;
                book.author = author;
                book.year = year;
                book.pages_count = pages_count;
                res.send(jsonBooks);
            }
            });
        }else{
            res.status(500).json({"error": "Maybe incorrect input, check if you passed all required values"});
        }
    });

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    underscore.each(jsonBooks, (book, i) => {
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