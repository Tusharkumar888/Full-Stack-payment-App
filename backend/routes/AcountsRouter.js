
const Acounts  = require('../db/bankSchema')
const authMiddleWare = require('../middlewares/middlewares')
const jwt = require('jsonwebtoken')
const express = require('express')
const zod = require('zod')

const AcountRouter = express.Router()

AcountRouter.get('/balance',authMiddleWare,async (req,res) =>{

    const acount = await Acounts.findOne({
        userId:req.userId
    })

    res.json({
        balance:acount.balance
    })
})

AcountRouter.post('/transfer',authMiddleWare,async (req,res)=>{

    const {amount,to}=req.body
    const acount = await Acounts.findOne({
        userId:req.userId
    })

    if(acount.balance<amount){
        return res.status(400).json({
            mess:"insufficient balance"
        })
    }

    transferAcount = await Acounts.findOne({
        userId:to
    })

    if(!transferAcount){
       return res.status(404).json({
            mess:"user does not exsist"
        })
    }

    await Acounts.updateOne({userId:req.userId},{$inc:{balance: - amount}})
    await Acounts.updateOne({userId:to},{$inc:{balance: amount}})
    res.json({
        mess: "transfer successful"
    })
})

module.exports = AcountRouter;