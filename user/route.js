const {controller}=require("./controller");
const Router=require('express');

const route=Router();

route.post("/register",controller.register);
route.post("/login",controller.login);

module.exports={route}

