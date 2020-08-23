const express = require('express');
const { validateRequest } = require('./middleware/PipedriveUtils');
const { getDeals, insertOpportunities, searchAndUpdateOpportunities, search } = require('./PipedriveController');
const e = require('express');
const { client } = require('../db/config');
const PipedriveRoute = express.Router();
client.connect(async (err) => {
    PipedriveRoute.get('/', async (req, res) => {
        try {
            const response = await search(req);
            res.status(200).json(response)
        } catch (error) {
            console.log(error)
            throw new Error(error)
        }
    })
    PipedriveRoute.post('/webhook', async (req, res) => {
        try {
            if (validateRequest(req)) {
                let opportunities = await searchAndUpdateOpportunities();
                console.log(opportunities);
                res.status(200).json(opportunities);
            }
        } catch (error) {
            console.log(error)
        }
    });
    PipedriveRoute.post('/', async (req, res) => {
        try {
            let opportunities = await searchAndUpdateOpportunities();
            console.log(opportunities);
            res.status(200).json(opportunities);
        } catch (error) {
            console.log(error)
        }
    });
});

module.exports = { PipedriveRoute };
