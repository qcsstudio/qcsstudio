import connectMongo from "@/lib/mongodb";
import Admin from '@/models/admin';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers'
import bcrypt from 'bcryptjs'; 

export async function POST (req){
  const cookieStore = await cookies()

  if (req.method !== 'POST') {
    return Response.json({ message: 'Method Not Allowed' } , {status:405});
  }

  const { email, password } =  await req.json();

  if (!email || !password) {
    return Response.json({ message: 'Please provide email and password' } , {status:400});
  }

  await connectMongo();
  const admin = await Admin.findOne({ email });
  
  if (!admin || ( password != admin.password)) {
    return Response.json({ message: 'Invalid credentials' } , {status:401});
  }

  const token = jwt.sign({ id: admin._id, email: admin.email }, process.env.JWT_SECRET, {
    expiresIn: '2h',
  });
   
  cookieStore.set('token', token, { secure: true })

  return Response.json({ token } , {status:200});
};