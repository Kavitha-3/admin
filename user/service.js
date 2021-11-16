const {usermodel}=require("./user");
const bcrypt=require('bcrypt');

 
const UserService={
    
    async getOneUser(condition){
        return usermodel.findOne(condition)
    },
    createUser(user){
        const salt=bcrypt.genSaltSync(10);
        const hash=bcrypt.hashSync(user.password,salt);
        let newUser=new usermodel();
        newUser.name=user.name;
        newUser.email=user.email;
        newUser.password=hash;
        newUser.save();
        return "user saved";
    },
    


};
module.exports={
    UserService
}