import dbConnect from "../../../lib/dbConnect"
import User from "../../../models/User"
import * as bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken"
import * as cookie from "cookie"

export default async function handler(req,res){
    await dbConnect()
    
    const {email,username,password} = req.body
    const existingUser = await User.findOne({ email })  
    if(existingUser){    
        return res.status(400).json({error: 'email is already taken'})  
    }

    const saltRounds = 10
    let passwordHash = await bcrypt.hash(password, saltRounds)


    const user = new User({
        email,
        username,
        passwordHash,
    })
    const savedUser  = await user.save()
    const derivedFromUser = {
        id : savedUser._id,
        username: savedUser.username,
        email : savedUser.email
    }
    const token = jwt.sign(derivedFromUser,process.env.SECRET)
    res.setHeader('Set-Cookie',cookie.serialize('jwtToken',token,{
        httpOnly: true,
        path: '/',
        maxAge: 60 * 15
    }))
    res.status(201).json({token})


}