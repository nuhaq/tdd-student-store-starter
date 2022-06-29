const express = require('express')
const router = express.Router()
const Store = require("../models/store")


router.get("/", async(req, res, next) => {
    try {
        const list = await Store.listProducts()
        res.status(201).json(list)
    }
    catch (err) { 
        next(err)
    }
})

router.get("/:productId", async(req, res, next) => {
    try {
        const prod = await Store.getProduct(req.params.productId)
        res.status(201).send(prod)
    }
    catch (err) {
        next(err)
    }
})

router.post("/", async(req, res, next) => {
    try {
        const order = await Store.createOrder(req.body.shoppingCart, req.body.user)
        res.status(201).json(order)
    }
    catch (err) {
        next(err)
    }
})



module.exports = router