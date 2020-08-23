const axios = require("axios");
const { formatURL } = require("../shared/utils");
const { insert } = require("../db/baseController");
const insertOpportunities = async (data) => {
    try {
        data.forEach(async (entry) => {
            await insert(entry);
        });
    } catch (error) {
        throw new Error(error)
    }
}
const getDeals = async () => {
    const filter = "deals?status=won&start=0"
    const urlDeals = formatURL(filter)
    try {
        const res = await axios.get(urlDeals);
        return res
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = { getDeals, insertOpportunities }