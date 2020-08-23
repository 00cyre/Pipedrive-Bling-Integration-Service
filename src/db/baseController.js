const { filterData } = require('../shared/utils');
const { client } = require('./config');
const insert = async (data) => {
    try {
        const collection = client.db("Pipedrive").collection("oportunidades");
        const filteredData = filterData(data);
        await collection.updateOne({ id: data.id }, { $set: filteredData }, { upsert: true });
        return true;
    } catch (error) {
        throw new Error(error);
    }
}
const select = async (query = {}) => {
    try {
        const collection = client.db("Pipedrive").collection("oportunidades");
        return await collection.find().toArray().then((data) => {
            return data
        });
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = { insert, select }