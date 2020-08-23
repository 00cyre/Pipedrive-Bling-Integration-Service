const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://xyaz:1234@cluster0.zskgp.mongodb.net/pipedrive?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const { filterData } = require('../shared/utils')
const insert = async (data) => {
    try {
        client.connect(async (err) => {
            const collection = client.db("Pipedrive").collection("oportunidades");
            const filteredData = filterData(data);
            await collection.updateOne({ id: data.id }, { $set: filteredData }, { upsert: true });
        });
        return true;
    } catch (error) {
        throw new Error(error);
    }
}
module.exports = { insert }