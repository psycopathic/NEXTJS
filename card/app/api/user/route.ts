import { NextRequest } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";

const Prisma = new PrismaClient();

export function GET(){
    
    return Response.json({
        name:"Aditi Mishra",
        email:"aditi@gmail.com"
    })
}

export async function POST(req:NextRequest){
    const data = await req.json();
    const user = await Prisma.user.create({
        data:{
            username:data.username,
            password:data.password
        }
    })
    return Response.json({
        message:"logging successful"
    });
}