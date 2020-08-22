const express = require('express');
const { checkGain } = require('./middleware/PipedriveUtils');

const PipedriveRoute = express.Router();

PipedriveRoute.post('/', async (req, res) => {
    try {
        if(checkGain(req)){
            console.log(req.body);
            res.status(200).json(req.body);
        }
    } catch (error) {
        console.log(error)
    }
});

module.exports = { PipedriveRoute };
