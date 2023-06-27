const express = require("express")
const {newItem,
    getItems,
    getSportsItems, 
    getGamingItems,
    getEquipmentItems} = require ('../controllers/market-controller')

const Router = express.Router()

Router.post('/', newItem)

Router.get('/all/', getItems)

Router.get('/sports/', getSportsItems)

Router.get('/gaming/', getGamingItems)

Router.get('/equipment/', getEquipmentItems)

module.exports = Router