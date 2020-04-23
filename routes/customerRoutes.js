const express = require("express");

const router = express.Router();

const Customer = require('../models/customerModel');


router.get('/',(req,res)=>{
    res.render('customerreg')
  });

router.post("/", async (req, res) => {  
  let customer = new Customer(req.body);
  console.log(req.body)
    try {
      await customer.save();
        console.log("customer has been saved to database")
          res.redirect("/customerlists");
          
    } catch (error) {
      // console.log("error message")
      console.log (error)
      res.status(400).send("unable to save to database");
    }
  });



    module.exports = router;
   
      
      