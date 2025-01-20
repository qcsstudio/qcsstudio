import connectMongo from "@/lib/mongodb";
import Admin from '@/models/admin';
import bcrypt from 'bcryptjs'; 

export async function POST(req) {
  if (req.method !== 'POST') {
    return Response.json({ message: 'Method Not Allowed' } , {status:405});
  }

  const { email, password } = await req.json();

  if (!email || !password) {
    return Response.json({ message: 'Please provide both email and password' } , {status:400});
  }

  try {
    await connectMongo();
    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      return Response.json({ message: 'Admin already exists with this email' } , {status:400});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({
      email,
      password: password,
    });

    const savedAdmin = await newAdmin.save();
    return Response.json({ message: 'Admin created successfully', adminId: savedAdmin._id } , {status:201});
  } catch (error) {
    console.error('Error creating admin:', error);
    return  Response.json({ message: 'Error creating admin' } , {status:500});
  }
};

