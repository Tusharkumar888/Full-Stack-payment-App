const Acounts =  require('../db/bankSchema')
const User = require('../db/usersSchema')
const authMiddleWare = require('../middlewares/middlewares')
const JWT_SECRET =require('../auth_tokens/config')
const jwt = require('jsonwebtoken')
const express = require('express')
const zod = require('zod')


const userRouter = express.Router()

const userShema = zod.object({
    username:zod.string(),
    password:zod.string(),
    firstName:zod.string(),
    lastName:zod.string()
  })


userRouter.post('/signup', async (req,res) =>{
    const body = req.body;
    const value = userShema.safeParse(body)
    if(!value.success){
        return res.json({
            mess: "invalid inputs"
        })
    }

    let user = await User.findOne({
      username: body.username
    })

    if(user){
      if(user._id){
      return res.json({
        mess:"Username is alrady exsist please try with other username"
      })
    }
    }
    

    const dbUser = await User.create(body)
   
    const token = jwt.sign({
      userId:dbUser._id
    },JWT_SECRET)


   await Acounts.create({
      userId:dbUser._id,
      balance:1000
    })
    res.json({
      mess:"user has been created ",
      token:token
    })
      
});

const userSigninShema = zod.object({
  username:zod.string(),
  password:zod.string(),
})

userRouter.post('/signin', async (req,res) =>{
  const body = req.body
  const value = userSigninShema.safeParse(body)
  if(!value.success){
      return res.json({
          mess: "invalid inputs"
      })
  }

  let user = await User.findOne({
    username: body.username
  })
  
  if(!user){
    return res.json({
      mess: " invalid username "
    })
  }

  if(!(user.username == body.username && user.password ==body.password) ){
    return res.status(404).json({
      mess: "invalid username or password"
    })
  }

  const token = jwt.sign({
    userId:user._Id,
  },JWT_SECRET)

  res.json({
    mess:"sussefuly signin ",
    token:token
  })
    
})

const updateSchema = zod.object({
  password:zod.string().optional(),
  firstName:zod.string().optional(),
  lastName:zod.string().optional ()
})

userRouter.put("/", authMiddleWare, async (req,res)=>{
       
const upadteuser =  req.body
const parseValue = updateSchema.safeParse(upadteuser)

if(!parseValue.success){
  return res.status(404).json({mess:"invalid enteries"})  
}

let user = await User.updateOne(upadteuser,{
    id: req.userId
})
res.json({
  mess:"update successfuly "
})
})

userRouter.get('/bulk', async (req,res)=>{
  const filter = req.query.filter || ""
  const users = await User.find({
    $or:[{
      firstName:{$regex:filter}
    },
    {
      lastName:{$regex:filter}
    }
  ]})

  res.json({
    user:users.map(user =>({
      username: user.username,
      firstName:user.firstName,
      lastName: user.lastName,
      _id:user._id
      
    }))
  })


})

module.exports = userRouter