import policy from "@/models/policy";
import connectMongo from "@/lib/mongodb";

export async function POST(req) {
  if (req.method !== "POST") {
    return Response.json({ message: "Method Not Allowed" }, { status: 405 });
  }

  const { type, heading, description } = await req.json();

  try {
    await connectMongo();

    const newPolicy = await policy.create({ type, heading, description });

    return Response.json({ 
      message: "Policy created successfully", 
      data: newPolicy  
    }, { status: 201 });

  } catch (error) {
    console.error("Policy Error:", error);
    return Response.json({ message: "Policy Creation Error" }, { status: 500 });
  }
}
export async function GET(req) {
  try {
      await connectMongo();
      const url = new URL(req.url);
      const type = url.searchParams.get("type");

      const policies = type ? await policy.find({ type }) : [];

      return Response.json({ 
          message: "Policies retrieved successfully", 
          data: policies 
      }, { status: 200 });

  } catch (error) {
      console.error("Policy Fetch Error:", error);
      return Response.json({ message: "Policy Fetch Error" }, { status: 500 });
  }
}


export async function PUT(req) {
  try {
      await connectMongo();
      const { title, description, _id, type } = await req.json();

      console.log("Title:", title);
      console.log("Description:", description);
      console.log("_id:", _id);
      console.log("Type:", type); 

      if (!_id || !type) {
          return Response.json({ message: "Policy ID and type are required" }, { status: 400 });
      }

      const updatedPolicy = await policy.findOneAndUpdate(
          { _id },
          { type, heading: title, description },
          { new: true }
      );

      if (!updatedPolicy) {
          return Response.json({ message: "Policy not found" }, { status: 404 });
      }


      return Response.json({ 
          message: 'Policy updated successfully', 
          data: updatedPolicy 
      }, { status: 200 });

  } catch (error) {
      console.error('Policy Update Error:', error);
      return Response.json({ message: 'Update Error' }, { status: 500 });
  }
}
