const express = require("express");

const router = express.Router();

const User = require('../models/registerModel');


router.get('/',(req,res)=>{
    res.render('salereg')

  })


router.post("/", async (req, res) => {
  const myData = new User(req.body);
    try{
    await myData.save();
      console.log("item has been saved to database")
      
        res.redirect("/salelogin")
        
    
      } catch (error) {
        console.log("error message")
        res.status(400).send("unable to save to database");
      }
    });

router.post('/delete',async (req,res)=>{
      if(req.session.user){
      try{
        await User.deleteOne({username:req.body.username})
        res.redirect('back')
      } catch (error){
        res.status(400).send("unable to delete to database");
      }}
      else{
        res.redirect('/saleslist')
      }
    });    



    module.exports = router;
   
      
      