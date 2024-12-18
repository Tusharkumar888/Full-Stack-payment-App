const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://tusharkumar888219:QXO3LmmDPcjCEtZK@cluster0.vfj0c.mongodb.net/paytm')


const AcountsSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required : true,
        ref: 'User'
    },
    balance:{
        type:Number,
        required:true

    }
})



 const Acounts= mongoose.model('Acounts',AcountsSchema)
 module.exports = Acounts