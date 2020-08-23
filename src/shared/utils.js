const formatURL = (filter) => {
    return `${process.env.PIPEDRIVE_BASE_URL}${filter}&api_token=${process.env.PIPEDRIVE_KEY}`
}

const filterData = (data) => {
    return { title: data.title, first_won_time: data.first_won_time, value: data.value }
}
module.exports = { formatURL, filterData }