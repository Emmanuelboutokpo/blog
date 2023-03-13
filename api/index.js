const cookieSession = require("cookie-session")
const express = require('express');
const passport = require("passport")
const app = express();
const cors =require("cors")
require('dotenv').config();
const bodyParser = require('body-parser');
const passportSetup = require("./passport");
const authRoute = require("./routes/auth");

app.use(
     cookieSession({
      name:"session",
      keys : ["lama"],
      maxAge : 24*60*60*1000
}));

app.use(passport.initialize());
app.use(passport.session())
app.use(cors({
     origin : "http://localhost:3000",
     methods:"GET,POST,PUT,DELETE",
     credentials:true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 


app.use("/auth", authRoute);
  

const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));