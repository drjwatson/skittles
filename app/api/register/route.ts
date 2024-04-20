import bcrypt from 'bcryptjs'
import prisma from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function POST(request: Request){
    const body = await request.json();
    const { name, email, password } = body;

    if(!name || !email || !password) {
        return NextResponse.json({ message: 'Missing Fields'},  { status: 400 })
    } 

    const exist = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if(exist) {
        return NextResponse.json({ message: 'Email already exists'},  { status: 409 })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword
        }
    });

    return NextResponse.json({ user, success: true }, { status: 201 })
}