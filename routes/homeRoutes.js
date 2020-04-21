const express = require("express");
const router = express.Router();
const User = require('../models/registerModel');

router.get("/", async (req, res) => {
 
    res.render("home");
  
});


module.exports = router;