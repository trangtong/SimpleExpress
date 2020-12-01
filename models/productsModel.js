const {db} = require("../mongodb");

module.exports.list = async () => {
  const collection = db().collection("products");
  const product  = await collection.find({}).toArray();
  return product;
};

module.exports.get = async (slug) => {
  const collection = db().collection("details");
  const product = await collection.findOne({slug: slug});
  return product;
};

  