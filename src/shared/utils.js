const formatURL = (filter) => {
    return `${process.env.PIPEDRIVE_BASE_URL}${filter}&api_token=${process.env.PIPEDRIVE_KEY}`
}

const filterData = (data) => {
    return { id: data.id, title: data.title, first_won_time: data.first_won_time, value: data.value,owner_name: data.owner_name }
}
module.exports = { formatURL, filterData }