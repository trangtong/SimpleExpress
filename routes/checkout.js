const express = require('express');
const router = express.Router();

//Get checkout page
router.get('/', (req, res, next) => { 
    res.render('checkout');
});

module.exports = router;