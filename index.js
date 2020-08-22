const express = require("express")
const bodyParser = require("body-parser")
const { PipedriveRoute } = require("./src/Pipedrive/PipedriveRoute")
require('dotenv').config();
const app = express()
const port = process.env.PORT

app.use(bodyParser.json())
app.listen(port, () => console.log(`Running on ${port}`))
app.use('/api/v1/pipedrive', PipedriveRoute)