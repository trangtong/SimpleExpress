const productsModel = require('../models/productsModel');
//const detailsModel = require('../models/detailsModel');

module.exports.index = async (req, res, next) => {
    const list = await productsModel.list();
    res.render('products/list', {layout: 'layout', list});
}

module.exports.details = async (req, res, next) => {
    const details = await productsModel.get(req.params.slug);
    res.render('products/details', {details});
}