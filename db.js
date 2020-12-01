const MongoClient = require("mongodb").MongoClient;
//const {MongoClient} = require('mongodb'); //same

const url =
  "mongodb+srv://Admin:Matkhau1@cluster0.mygsl.mongodb.net/mydatabase?retryWrites=true&w=majority";

  let database;

const client = new MongoClient(url, { useUnifiedTopology: true });

  module.exports.closeDb = function close() {
    client.close();
  };  

async function connectDb() {
  try {
    // MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    await client.connect();
    database = client.db("mydatabase");
    console.log("Connected...");
  } catch (err) {
    console.log("Error occurred while connecting to MongoDB Atlas...\n", err);
  }
}

connectDb();

//const db = () => database;
module.exports.db = () => database;


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