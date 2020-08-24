const axios = require("axios");
const { urlBuilder, reqBuilder } = require("./blingUtils");
const { filterData } = require("../shared/utils");
const createBlingRequest = async (data) => {
    const baseURL = urlBuilder('pedido/json/')
    try {
        data.forEach(async (element) => {
            const filteredData = filterData(element);
            const req = baseURL + encodeURIComponent(reqBuilder(filteredData));
            let res = await axios.post(req)
            console.log(res)
        });
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = { createBlingRequest }