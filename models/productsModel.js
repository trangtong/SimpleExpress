const a = require("../MongoDB");

let result = [];

a.connect(async () => {
 
    const b = a.get().collection("products").find({});
    await b.forEach(function (doc, err) {
      result.push(doc);
    });
    console.log(result);
    a.close();

});
 