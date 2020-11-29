const express = require("express");
const app = express();//framework để code web
const mongoose = require("mongoose");//csdl mongoodb
require("dotenv").config();//include file .env

app.set("view engine", "ejs");//set view engine

app.set("views", "./views");//set thư mục view
app.set(express.static(__dirname+"/public"));//trỏ đường dẫn tới thư mục public chứa các thư viện css,js,image

//kết nối csdl mongodb
mongoose.connect(process.env.mongoose, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
},()=>{
    console.log('connect database successfully');
});

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("server is running is port 3000");
}).env;
