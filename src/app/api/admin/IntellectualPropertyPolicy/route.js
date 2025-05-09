import IntellectualPropertyPolicy from "@/models/IntellectualPropertyPolicy";
import connectMongo from "@/lib/mongodb";

export async function POST(req) {
  if (req.method !== "POST") {
    return Response.json({ message: "Method Not Allowed" }, { status: 405 });
  }

  const { title, description } = await req.json();

  console.log({ title, description });
  try {
    await connectMongo();

    // const policyExist = await IntellectualPropertyPolicy.findOne({heading:title});

    // if(policyExist){
    //     return Response.json({ message: 'policy Already Exist ' } , {status:401});
    // }

    const newpolicy = new IntellectualPropertyPolicy({
      heading: title,
      description: description,
    });

    const savedpolicy = await newpolicy.save();

    const policies = await IntellectualPropertyPolicy.find();

    console.log(policies);

    return Response.json(
      { message: "Terms created successfully", terms_data: policies },
      { status: 201 }
    );
  } catch (error) {
    console.error("Terms Error:", error);
    return Response.json({ message: "Terms Error" }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    await connectMongo();

    const policy = await IntellectualPropertyPolicy.find();

    return Response.json(
      { message: "Terms get successfully", terms_data: policy },
      { status: 200 }
    );
  } catch (error) {
    console.error("Terms Error:", error);
    return Response.json({ message: "Terms get Error" }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    await connectMongo();
    const { title, description, _id } = await req.json();

    console.log("title", title);
    console.log("description", description);

    const updatedPolicy = await IntellectualPropertyPolicy.findOneAndUpdate(
      { _id: _id },
      { heading: title, description: description },
      { new: true }
    );

    const allPolicies = await IntellectualPropertyPolicy.find();

    return Response.json(
      {
        message: "terms updated successfully",
        terms_data: allPolicies,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("terms Update Error:", error);
    return Response.json({ message: "Update Error" }, { status: 500 });
  }
}
