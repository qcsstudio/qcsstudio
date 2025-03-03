import connectMongo from "@/lib/mongodb";
import Newsletter from "@/models/newsletter";

export async function POST(req) {
    try {
        await connectMongo(); 
        const { email } = await req.json();

        if (!email) {
            return Response.json({ error: "Email is required" }, { status: 400 });
        }

        
        const existing = await Newsletter.findOne({ email });
        if (existing) {
            return Response.json({ error: "Email already exists" }, { status: 409 });
        }

        const newsLetter = await Newsletter.create({ email });
        return Response.json({ success: true, newsLetter }, { status: 201 });
    } catch (error) {
        console.error("Error in /api/newsletter:", error);
        return Response.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
    }
}

export async function GET(req) {
    try {
        await connectMongo();
        const newsletters = await Newsletter.find();
        return Response.json({ success: true, newsletters }, { status: 200 });
    } catch (error) {
        console.error("Error fetching newsletters:", error);
        return Response.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
    }
}
