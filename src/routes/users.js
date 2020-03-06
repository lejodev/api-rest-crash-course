// ================================== CONSUMING DATA FROM JSONPLACEHOLDER FAKE API ==================================
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json();
    res.json(users);
});

module.exports = router;

