const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    customerid: {type: String, min:3},
    currentdate: String,
    first_name: String,
    last_name: String,
    email: String,
    nin: String,
    make: String,
    phone_number: Number,
    cusdob: Date,
    status: String,
    village: String,
    division: String,
    Permit: String,
    vehicle: String,
    numberplate: String,
    stagename: String,
    stagejoin: Date,
    stagechair: String,
    downpayment: Number,
    balancebf: Number,
    lc1: String,
    lc3: String,
    reqdoc: String,
    name: String,
    phonenumber: String,
    occupation: String,
    dob: Date
             
});

module.exports = mongoose.model("Customer", customerSchema);






















