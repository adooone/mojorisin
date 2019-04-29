const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/:album', (req, res) => {
    console.log(req.params.album);
    res.sendFile('index.html', { root: path.join(__dirname, '../../../docs') });
    // res.render('index');
});

module.exports = router;
