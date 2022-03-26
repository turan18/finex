import * as jwt from "jsonwebtoken"
export default async function handler(req,res){
    const token = req.cookies['jwtToken']
    if(!(token && jwt.verify(token,process.env.SECRET))){
        res.status(204).end()
    }else{      
        const user = jwt.decode(token)
        res.status(200).json(user)    
    }
}