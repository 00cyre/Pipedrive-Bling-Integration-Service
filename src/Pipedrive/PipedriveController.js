const axios = require("axios");
const { formatURL, filterData } = require("../shared/utils");
const { insert, select } = require("../db/baseController");
const { createBlingRequest } = require("../Bling/blingController");
const insertOpportunities = async (data) => {
    try {
        data.forEach(async (entry) => {
            await insert(entry);
        });
    } catch (error) {
        throw new Error(error)
    }
}
const search = async (req) => {
    try {
        const filter = req.query.filter == undefined ? null : req.query.filter
        const result = !!filter ? await select(filter) : await select();
        console.log(filter);
        return result
    } catch (error) {
        throw new Error(error)
    }
}
const getDeals = async () => {
    try {
        const filter = "deals?status=won&start=0"
        const urlDeals = formatURL(filter)
        const res = await axios.get(urlDeals);
        return res
    } catch (error) {
        throw new Error(error)
    }
}
const searchAndUpdateOpportunities = async () => {
    try {
        const deals = await getDeals();
        await insertOpportunities(deals.data.data)
        await createBlingRequest(deals.data.data)
        return deals.data.data
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = { getDeals, insertOpportunities, searchAndUpdateOpportunities, search }