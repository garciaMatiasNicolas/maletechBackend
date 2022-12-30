import userModel from "../../../models/usersSchema.js";
import express from 'express';
import session from "express-session";

const logIn = (req, res)=> {
    
    let { username, password } = req.body;
    
    let user = userModel.findOne({username: username, password: password});
    
    if(user === null){
        return res.json({status: 'Error'});
    } 

    req.session.user = username;
    res.json({status: 'Log in succesfull'})
}

export default logIn