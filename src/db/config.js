const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://xyaz:1234@cluster0.zskgp.mongodb.net/pipedrive?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });
module.exports = { client }