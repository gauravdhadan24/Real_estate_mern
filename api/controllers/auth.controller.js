import User from "../user.model.js";
import bcryptjs from 'bcryptjs';
import errorHandler from '../utils/error.js';

export const signup=async (req,res,next)=>{
    const {username,email,password}=req.body;
    const hashedPassword= bcryptjs.hashSync(password,10);
    const newUser=new User({username, email, hashedPassword});
    console.log(newUser);
    try{
    await newUser.save();
    res.status(201).json('user created succesfullly');
    }catch(err){
        next(res.send(err));
    };
};