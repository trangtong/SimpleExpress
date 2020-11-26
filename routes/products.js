const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.products);
router.get('/:id', productsController.details);
  
module.exports = router;