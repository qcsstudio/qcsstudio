import connectMongo from "@/lib/mongodb";
import Student from "@/models/student";

export  async function POST(req) {
  try {
    await connectMongo();

    if (req.method !== "POST") {
      res.setHeader("Allow", ["POST"]);
      return Response.json({ error: `Method ${req.method} Not Allowed` } , {status:405});
    }

    const {
      fullName,
      email,
      contactNumber,
      address,
      collegeName,
      calculated_passion,
      option_a,
      option_b,
      option_c,
      option_d,
      option_e,
    } =  await  req.json();

    if (
      !fullName ||
      !email ||
      !contactNumber ||
      !address ||
      !collegeName ||
      calculated_passion === undefined ||
      option_a === undefined ||
      option_b === undefined ||
      option_c === undefined ||
      option_d === undefined ||
      option_e === undefined
    ) {
      return Response.json({ error: "All fields are required" } , {status:400});
    }

    const student = await Student.create({
      fullName,
      email,
      contactNumber,
      address,
      collegeName,
      calculated_passion,
      option_a,
      option_b,
      option_c,
      option_d,
      option_e,
    });

    return Response.json({ success: true, student } , {status:201});
  } catch (error) {
    if (error.code === 11000) {
      return Response.json({ error: "Email already exists" } , {status:409});
    }

    return Response.json({ error: "Internal Server Error", details: error.message } , {status:500});
  }
}


export async function GET(req) {
  try {
    await connectMongo();
    const students = await Student.find();

    return Response.json({ success: true, students }, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
 }
}