const productsModel = require('../models/productsModel');

products = (req, res, next) => {
  const products = productsModel.list();
  res.render('products', {layout: 'layout', products});
};

module.exports = {
  products
};

  