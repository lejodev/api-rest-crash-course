const {Router} = require('express');
const router = Router();

const jsonBooks = require('../sample-data.json');
// console.log(jsonBooks);

router.get('/book', (req, res) => {
    res.send(jsonBooks);
});

// router.post('/', (req, res) => {
    
// });

module.exports = router