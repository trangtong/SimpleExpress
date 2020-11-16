const detailsModel = require('../models/detailsModel');

details = (req, res, next) => {
    const details = detailsModel.details();
    res.render('details', {details});    
}

module.exports = {
    details
};