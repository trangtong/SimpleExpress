const MongoClient = require("mongodb").MongoClient;
//const {MongoClient} = require('mongodb'); //same

let database;
const url =
  "mongodb+srv://Admin:Matkhau1@cluster0.mygsl.mongodb.net/mydatabase?retryWrites=true&w=majority";

 const client = new MongoClient(url, { useUnifiedTopology: true });

module.exports.connect = function connect(callback) {
  try {
   // MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
     client.connect((err, client) => {//})
      if (err) {
        return;
      }
      database = client.db();
      console.log("Connected...");
      callback();
    });
  } catch (err) {
    console.log("Error occurred while connecting to MongoDB Atlas...\n", err);
  }
};

module.exports.get = function get() {
  return database;
};

module.exports.close = function close() {
  client.close();
};

// -------------------------------Test connection--------------------------------
// MongoClient.connect(
//   url,
//   { useUnifiedTopology: true },
//   async function (err, client) {
//     if (err) {
//       console.log("Error occurred while connecting to MongoDB Atlas...\n", err);
//     }
//     console.log("Connected...");

//     const a = client.db("mydatabase").collection("products").find({});
//     await a.forEach(function (doc, err) {
//       result.push(doc);
//     });
//     console.dir(result);
//     client.close();
//   }
// );
//------------------------------------------------------------------------------------------
