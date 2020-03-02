const {Router} = require('express'); // Requiring an express method called Router
const router = Router(); // Initializing Router inside router variable

router.get('/test', (req,res) => { // Now app was replaced by the router variable app.get/router.get
    const info = {
        'Country': 'Colombia',
        'Province': 'Antioquia'
    };
    res.json(info);
});

module.exports = router; // 'Export'