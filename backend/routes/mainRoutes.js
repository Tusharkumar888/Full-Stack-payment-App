const userRouter = require('./userRouter')
const AcountRouter =require('./AcountsRouter')
const express = require('express')

const router = express.Router()

router.use('/user',userRouter)
router.use('/acounts', AcountRouter)


module.exports = router