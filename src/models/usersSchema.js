import mongoose from "mongoose";
const { Schema, model } = mongoose;

const usersSchema = new Schema({
    fullname : {type: String, required:true},
    identification: {type: Number, required: true, unique:true},
    email: {type: String, required:true, unique:true},
    password : {type: String, required:true, unique:true},
    type:{type: String, required:true},
    phone: {type: Number, required:true},
    location:{type:String, required:true},
    adress:{type: String, required:true}
})

const userModel = model('Users', usersSchema);

export default userModel;