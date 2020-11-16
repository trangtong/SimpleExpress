const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('signIn', {layout: 'layout'});
})

module.exports = router;