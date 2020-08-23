const express = require('express');
const { validateRequest } = require('./middleware/PipedriveUtils');
const { getDeals, insertOpportunities } = require('./PipedriveController');

const PipedriveRoute = express.Router();

PipedriveRoute.post('/', async (req, res) => {
    try {
        if (validateRequest(req)) {
            const deals = await getDeals();
            await insertOpportunities(deals.data.data)
            console.log(deals.data.data);
            res.status(200).json(deals.data.data);
        }

    } catch (error) {
        console.log(error)
    }
});

module.exports = { PipedriveRoute };
