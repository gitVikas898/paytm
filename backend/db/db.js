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

const AccountSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    balance:{
        type:Number,
        required:true,
    }
})
const User = mongoose.model('User',UserSchema);
const Account = mongoose.model('Account',AccountSchema);

module.exports = {
    User,
    Account
}
