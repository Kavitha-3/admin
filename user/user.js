const {model,Schema}=require('mongoose');

const usermodel=model("users",Schema({
    name:{
        type:String,
        required:true
},
email:{
    type:String,
    unique:true,
    required:true
},
password:{
    type:String,
    required:true
}
}))

module.exports={
    usermodel
}
