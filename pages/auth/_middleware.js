import { NextRequest, NextResponse } from 'next/server'
import * as jwt from "jsonwebtoken"

export function middleware(req) {
    const token = req.cookies['jwtToken']
    if(token && jwt.verify(token,process.env.SECRET)){
        const { origin } = req.nextUrl
        return NextResponse.redirect(`${origin}/dashboard`)
    }
    return NextResponse.next()   
}   