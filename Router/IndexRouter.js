 
const express = require("express")
const router = express.Router();

router.app("/", (req, res)=>{
    res.send("Hello")
})

module.exports = router;