export default async function handler(req,res){
    res.setHeader('Set-Cookie','jwtToken=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT')
    res.status(200).json({path:'/'})
}