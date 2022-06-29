const express = require("express")
const morgan = require("morgan")
const app = express()
const storeRoute = require("./routes/store")

app.use(morgan("tiny"))
app.use(express.json())
app.use("/store", storeRoute)

app.get("/", async (req, res, next) => { 
    res.status(200).send({ping: "pong"})
})

module.exports = app