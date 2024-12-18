const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://tusharkumar888219:QXO3LmmDPcjCEtZK@cluster0.vfj0c.mongodb.net/paytm')
const Shcema = mongoose.Schema

const usersShema = new Shcema({
    username:String,
    password:String,
    firstName:String,
    lastName:String
})

 const User = mongoose.model('User',usersShema)

 module.exports = User