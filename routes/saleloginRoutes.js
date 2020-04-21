const express = require("express");
const router = express.Router();
const User = require("../models/registerModel");

const mongoose = require("mongoose");

router.get("/", (req, res) => {
  res.render("salelogin");
});

router.post("/", async (req, res) => {
  try {
    const user = await User.authenticate(
      req.body.username,
      req.body.password
    );
    req.session.user = user;
    console.log(user);
    res.redirect("/customerreg")
  } catch {
    res.send("Login Failed");
  }
});


module.exports = router;