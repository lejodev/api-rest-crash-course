const express = require('express');
const app = express();
const morgan = require('morgan');

// Settings
app.set('port', process.env.PORT || 8005 ); //(L) Validating port
app.set('json spaces', 2);
// Middlewares
app.use(morgan('dev'));
app.use(express.json()); // (L) Used to receive and  understand json format
app.use(express.urlencoded({extended: false})); // (L) Used to support basic input from form

// routes
app.use('/api/test',require('./routes/index'));
app.use('/api/books/',require('./routes/books'));
app.use('/api/users/' ,require('./routes/users'));

// Starting the server
app.listen(8005, () => {
    console.log('Listening on port 8005');
});