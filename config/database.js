const {connect}=require("mongoose");

const DBconnection=()=>{
return connect(process.env.MONGO_URI);
}
module.exports={DBconnection}