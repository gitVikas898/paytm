const express = require("express");
const { authMiddleware } = require("../middleware/middleware");
const { Account } = require("../db/db");
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


module.exports = router;