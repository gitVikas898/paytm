require('dotenv').config();
const mongoose = require("mongoose")
const DB_URI = process.env.DB_URI;

try{
    if(!DB_URI){
        throw new Error("Failed Connection to Database");
    }
    mongoose.connect(DB_URI);
}catch(error){
    console.log("Error",error)
}

const UserSchema = new mongoose.Schema({
    username:String,
    firstName:String,
    lastName:String,
    password:String,
});

const User = mongoose.model('User',UserSchema);

module.exports = {
    User
}
