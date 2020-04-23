const express = require("express");

const router = express.Router();

const Customer = require('../models/customerModel');

router.get('/',async (req, res) => {
  try {
    let items = await Customer.find()
    if (req.query.first_name) {
      items = await Customer.find({first_name:req.query.first_name})
    }
    res.render('customerlists', { customers: items })
  } catch (err) {
    res.status(400).send("unable to find items in the database");
  }
});

  
module.exports = router;