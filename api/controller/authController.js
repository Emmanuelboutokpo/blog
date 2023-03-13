const connection = require("../db/db");
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");


exports.register = (req,res) =>{

    const q = "SELECT * FROM `users` WHERE email =?";
    const { username, email, password } = req.body;
    const hashed = bcrypt.hashSync(password, salt);
    connection.query(q, [email], (error,data) =>{
           if(error) return res.json(error);
           if(data.length>0){
                return res.status(422).json("user already existe")
           }else{
                const q = "INSERT INTO users (`username`,`email`,`password`) VALUES (?)";
                const values = [username,email,hashed];
                connection.query(q,[values], (error,data) =>{
                    if(error) return res.json(error);
                    if(data)  return res.status(200).json({
                        message : "user create succefully...!"
                    })
                })
           }  
     }) 
}

exports.login = (req,res) =>{
    const { email} = req.body;

    const q = "SELECT * FROM `users` WHERE email =?";
   connection.query(q, [email],  (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    //Check password
    const isPasswordCorrect = bcrypt.compareSync(
       req.body.password,
       data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password!");

    const token = jwt.sign({ id: data[0].id }, process.env.JWT_SECRET, { expiresIn: "1d" })
    const {password, ...other } = data[0];

    res
      .cookie("token", token, {expiresIn: "1d"})
      .status(200)
      .json({token,other});
  });
}

exports.logout = (req,res) =>{
      res.clearCookie("token");
    res.status(200).json({
        message: "Signout successfully...!"
    })
}