const express = require('express')
const router = express.Router()
const { carrito }=require('../controllers/carritoController')

router.get('/carritoDeCompras',carrito)


module.exports = router