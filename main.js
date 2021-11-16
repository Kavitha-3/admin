const express=require("express");
const ejs=require("ejs");
const path=require("path");
const bcrypt=require('bcrypt');
const {route}=require("./user/route");
 const {DBconnection}=require('./config/database');
 require('dotenv').config();
const PORT=process.env.PORT;


DBconnection().then(()=>{
    console.log("DB connected");
}).catch((err)=>{
console.log("DB not connected")
})


const app=express();
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.resolve(__dirname,'views')));

app.get("/",(req,res)=>{
      res.render('index',{data:"you are logged in"});
});

app.get("/login",(req,res)=>{
    res.render('login.ejs');
});

app.post("/login");

app.get("/register",(req,res)=>{
    res.render('register.ejs');
});

app.use("/",route)

app.listen(PORT,()=>{
console.log("app started",PORT);
}
)
