import dbConnect from "../../../lib/dbConnect"
import User from "../../../models/User"
import * as jwt from "jsonwebtoken"
import * as bcrypt from "bcrypt"
import * as cookie from 'cookie'

export default async function handler(req,res){
    await dbConnect()
    const {username,password} = req.body
    const user = await User.findOne({username})
    const correctPassword = user === null ? false : await bcrypt.compare(password,user.passwordHash)
    if(!(user && correctPassword)){
        res.status(403).json({error:'Could not be authenticated'})
    }else{
        const derivedFromUser = {
            id : user._id,
            username: user.username,
            email : user.email
        }
        const token = jwt.sign(derivedFromUser,process.env.SECRET)
        
        res.setHeader('Set-Cookie',cookie.serialize('jwtToken',token,{
            httpOnly: true,
            path: '/',
            maxAge: 60 * 15
        }))
        res.status(200).end()
    }    
}