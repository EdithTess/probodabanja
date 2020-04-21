const express = require("express");
//Installing mongoose to connect to database
const mongoose = require("mongoose");
//Declaring bodyparser to fetch and convert information
const bodyParser = require("body-parser");
//Creating a server
const server = express();
const session = require("express-session");
const path = require("path");
const PORT = 3007;

const options = {useNewUrlParser: true,useUnifiedTopology: true};

server.set("view engine", "pug");
server.set("views", path.join(__dirname, "views"));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(session
    ({
      secret: "thesecret",
      resave: true,
      saveUninitialized: false
    })
  );


//Creating a connection to database 
mongoose.connect(
    "mongodb://localhost:27017/boda-banja",options,
    function(err) {
      if (err) throw err;
      console.log("Successfully connected");
    }
  );


  //Requiring routes
const homeroutes = require('./routes/homeRoutes');
server.use('/home', homeroutes);

const adminroutes = require('./routes/adminregRoutes');
server.use('/addname',adminroutes);

const adminloginroutes = require('./routes/loginRoutes');
server.use('/login',adminloginroutes);

const saleroutes = require('./routes/saleregRoutes');
server.use('/register',saleroutes);

const saleloginroutes = require('./routes/saleloginRoutes');
server.use('/salelogin',saleloginroutes);

const customerroutes = require('./routes/customerRoutes');
server.use('/customerreg',customerroutes);

const customerlists = require('./routes/customerlistRoutes');
server.use('/customerlists',customerlists);

const saleslist = require('./routes/saleslistRoutes');
server.use('/saleslist',saleslist);

server.use(express.static('public'))


server.post('/logout',(req,res)=>{
    if(req.session){
        req.session.destroy(function (err){
            if (err){

            }else{
                return res.redirect('/home');
            }
        })
    }
});


server.listen(PORT, error => {
    if (error) throw error;
    console.log("listening on PORT " + PORT);
});
