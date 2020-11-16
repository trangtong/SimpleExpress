const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('register', {layout: 'layout'});
})

module.exports = router;