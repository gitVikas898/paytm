const express = require("express");
const { authMiddleware } = require("../middleware/middleware");
const { Account } = require("../db/db");
const { default: mongoose } = require("mongoose");
const router = express.Router();


router.get("/balance",authMiddleware,async function (req,res) {
    try{
        const accountBalance = await Account.findOne({
            userId:req.userId
        });
        res.json({
            message:"Balanced Fetched Successfully",
            balance:accountBalance.balance
        })
    }catch(error){
        return res.status(500).json(
            {
                message:"Internal Server Error"

            })
    }
});

router.post("/transfer",authMiddleware,async function (req,res) {
   
   try{

    const session = await mongoose.startSession();
    session.startTransaction();
    const {amount , to} = req.body;

    const sender = await Account.findOne({userId:req.userId}).session(session);

    if(sender.balance < amount){
        throw new Error("Insufficient Balance")
    }

    const toAccount = await Account.findOne(
        {
            userId:to
        }
    ).session(session);

    if(!toAccount){
        throw new Error("Invalid Accounts")
    }

    await Account.updateOne({userId:req.userId},{$inc:{balance:-amount}}).session(session);
    await Account.updateOne({userId:to},{$inc:{balance:amount}}).session(session);

    await session.commitTransaction();

    res.json({
        message:"Transfer Successfull"
    })
   }catch(error){
    await session.abortTransaction();
    res.status(400).json({ message: error.message });
   }
    
})


module.exports = router;