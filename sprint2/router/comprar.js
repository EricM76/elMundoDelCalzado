const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/comprar',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','..','extras','comprar.html'))
})


module.exports = router