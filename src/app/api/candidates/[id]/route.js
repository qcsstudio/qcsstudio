import connectMongo from "@/lib/mongodb";
import Candidate from "@/models/candidate";

export async function GET(req, { params }) {
    try {
        await connectMongo();
        const { id } = params;
        const candidate = await Candidate.findById(id);
        if (!candidate) return Response.json({ message: "Candidate not found" }, { status: 404 });

        return Response.json({ message: "Candidate retrieved successfully", candidate_data: candidate }, { status: 200 });
    } catch (error) {
        console.error("Candidate Fetch Error:", error);
        return Response.json({ message: "Error fetching candidate" }, { status: 500 });
    }
}

export async function PUT(req, { params }) {
    try {
        await connectMongo();
        const { id } = params;
        const body = await req.json();
        const updatedCandidate = await Candidate.findByIdAndUpdate(id, body, { new: true });

        if (!updatedCandidate) return Response.json({ message: "Candidate not found" }, { status: 404 });

        return Response.json({ message: "Candidate updated successfully", candidate_data: updatedCandidate }, { status: 200 });
    } catch (error) {
        console.error("Candidate Update Error:", error);
        return Response.json({ message: "Error updating candidate" }, { status: 400 });
    }
}

export async function DELETE(req, { params }) {
    try {
        await connectMongo();
        const { id } = params;
        const deletedCandidate = await Candidate.findByIdAndDelete(id);
        
        if (!deletedCandidate) return Response.json({ message: "Candidate not found" }, { status: 404 });

        return Response.json({ message: "Candidate deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Candidate Delete Error:", error);
        return Response.json({ message: "Error deleting candidate" }, { status: 500 });
    }
}
