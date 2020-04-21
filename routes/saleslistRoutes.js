const express = require("express");
const router = express.Router();
const User = require('../models/registerModel');

router.get("/", async (req, res) => {
    try {
      let items = await User.find();
      res.render("saleslists", { users: items });
    } catch (error) {
      console.log("Could not fetch tasks from the database");
    }
  });


module.exports = router;