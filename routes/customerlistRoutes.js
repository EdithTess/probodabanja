const express = require("express");

const router = express.Router();

const Customer = require('../models/customerModel');

router.get('/',async (req, res) => {
  try {
    let items = await Customer.find()    
    res.render('customerlists', { customers: items });
  } catch (err) {
   console.log("unable to find items in the database");
  }
});

  
  
module.exports = router;