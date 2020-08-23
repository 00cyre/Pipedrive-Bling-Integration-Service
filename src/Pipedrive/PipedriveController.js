const axios = require("axios");
const { formatURL } = require("../shared/utils");
const { insert, select } = require("../db/baseController");
const insertOpportunities = async (data) => {
    data.forEach(async (entry) => {
        await insert(entry);
    });
}
const search = async (req) => {
    const filter = req.query.filter == undefined ? null : req.query.filter
    const result = !!filter ? await select(filter) : await select();
    return result
}
const getDeals = async () => {
    const filter = "deals?status=won&start=0"
    const urlDeals = formatURL(filter)
    const res = await axios.get(urlDeals);
    return res
}
const searchAndUpdateOpportunities = async () => {
    const deals = await getDeals();
    await insertOpportunities(deals.data.data)
    return deals.data.data
}
module.exports = { getDeals, insertOpportunities, searchAndUpdateOpportunities, search }