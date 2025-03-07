import connectMongo from "@/lib/mongodb";
import Candidates from "@/models/candidate";

export async function GET() {
    try {
        await connectMongo();
        const candidates = await Candidates.find();
        return Response.json({ message: "Candidate data retrieved successfully", candidate_data: candidates }, { status: 200 });
    } catch (error) {
        console.error("Candidate Fetch Error:", error);
        return Response.json({ message: "Error fetching candidates" }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        await connectMongo();
        const body = await req.json();
        console.log("body" , body);

        const newCandidate = new Candidates(body);
        console.log("newCandidate" , newCandidate); 
        await newCandidate.save();

        return Response.json({ message: "Candidate created successfully", candidate_data: newCandidate }, { status: 201 });
    } catch (error) {
        console.error("Candidate Creation Error:", error);
        return Response.json({ message: "Error creating candidate" }, { status: 400 });
    }
}

export async function PUT(req) {
    try {
        await connectMongo();
        const { email, ...updateData } = await req.json();

        if (!email) {
            return Response.json({ message: "Email is required" }, { status: 400 });
        }

        const updatedCandidate = await Candidates.findOneAndUpdate(
            { email }, 
            updateData, 
            { new: true } 
        );

        if (!updatedCandidate) {
            return Response.json({ message: "Candidate not found" }, { status: 404 });
        }

        return Response.json({ message: "Candidate updated successfully", candidate_data: updatedCandidate }, { status: 200 });
    } catch (error) {
        console.error("Candidate Update Error:", error);
        return Response.json({ message: "Error updating candidate" }, { status: 500 });
    }
}

