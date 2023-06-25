const express = require('express');
const router = express.Router();

router.get('/add', (req, res) => {
    res.send('Response from user route');
});

router.get('/delete', (req, res) => {
    res.send('Response from delete route');
});


module.exports = router;