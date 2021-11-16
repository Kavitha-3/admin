const {UserService}=require("./service");
const bcrypt=require('bcrypt');


const controller={
    async register(req,res,next){
        try {
            const body=req.body;

            const dbuser=await UserService.getOneUser({
                name:body.name
            })
            if(dbuser){
                throw new Error("user with same name already exists")
            }
            const dbUserEmail=await UserService.getOneUser({
                email:body.email
            })
            if(dbUserEmail){
                throw new Error("user with same email already exists")
            }
            const response=UserService.createUser(body);
            console.log(response);
            res.redirect("/login");
            
        } catch (error) {
            console.log(error)
            res.redirect("/register");
            }
            
        },
    
    async login(req,res,next){
        
        try {
            let body=req.body;
            let dbuser=await UserService.getOneUser({email:body.email});
            if(!dbuser){
               console.log('user not found');
            }
            const comparePassword=await bcrypt.compare(body.password,dbuser.password);
            if(!comparePassword){
                console.log( "invalid credentials");
            }
        else{
            res.redirect("/");
        }
        
        } catch (error) {
            res.redirect("/login");
            
        }
        
        

    },
   

}

module.exports={controller}