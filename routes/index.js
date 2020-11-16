const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', {link : '<link rel="stylesheet" href="stylesheets/flexslider.css" type="text/css" media="screen" />', layout: 'layout'});
});

module.exports = router;
