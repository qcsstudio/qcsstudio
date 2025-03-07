import LiabilityDisclaimerPolicy from "@/models/LiabilityDisclaimerPolicy";
import connectMongo from "@/lib/mongodb";

export async function POST(req) {
    if (req.method !== 'POST') {
        return Response.json({ message: 'Method Not Allowed' }, { status: 405 });
    }

    const { title, description } = await req.json();

    // Validate input
    if (!title || !description) {
        return Response.json({ message: 'Title and Description are required' }, { status: 400 });
    }

    console.log({ title, description });

    try {
        await connectMongo();

        // Check if policy already exists
        const policyExist = await LiabilityDisclaimerPolicy.findOne({ heading: title });

        if (policyExist) {
            return Response.json({ message: 'Policy with this title already exists' }, { status: 409 });
        }

        // Create new policy
        const newPolicy = new LiabilityDisclaimerPolicy({ heading: title, description: description });
        await newPolicy.save();

        // Fetch all policies
        const policies = await LiabilityDisclaimerPolicy.find();

        return Response.json(
            { message: 'Liability Disclaimer Policy created successfully', policy_data: policies },
            { status: 201 }
        );

    } catch (error) {
        console.error('Policy Creation Error:', error);
        return Response.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}

export async function GET(req) {
    try {
        await connectMongo();

        // Fetch all policies
        const policies = await LiabilityDisclaimerPolicy.find();

        return Response.json(
            { message: 'Liability Disclaimer Policy fetched successfully', policy_data: policies },
            { status: 200 }
        );

    } catch (error) {
        console.error('Policy Fetch Error:', error);
        return Response.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}

export async function PUT(req) {
    if (req.method !== 'PUT') {
        return Response.json({ message: 'Method Not Allowed' }, { status: 405 });
    }

    const { title, description, _id } = await req.json();

    // Validate input
    if (!title || !description || !_id) {
        return Response.json({ message: 'Title, Description, and ID are required' }, { status: 400 });
    }

    try {
        await connectMongo();

        // Update the policy
        const updatedPolicy = await LiabilityDisclaimerPolicy.findOneAndUpdate(
            { _id: _id },
            { heading: title, description: description },
            { new: true } // Return the updated document
        );

        if (!updatedPolicy) {
            return Response.json({ message: 'Policy not found' }, { status: 404 });
        }

        // Fetch all policies
        const allPolicies = await LiabilityDisclaimerPolicy.find();

        return Response.json(
            { message: 'Liability Disclaimer Policy updated successfully', policy_data: allPolicies },
            { status: 200 }
        );

    } catch (error) {
        console.error('Policy Update Error:', error);
        return Response.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}