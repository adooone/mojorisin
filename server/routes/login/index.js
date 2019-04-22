const express = require('express');
const path = require('path');

const router = express.Router();

router.get('*', (req, res) => {
    console.log('res');
    res.sendFile('index.html', { root: path.join(__dirname, '../../../docs') });
});

module.exports = router;
