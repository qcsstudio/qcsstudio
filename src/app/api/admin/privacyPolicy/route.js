import connectMongo from "@/lib/mongodb";
import privacyPolicy from "@/models/privacyPolicy";
import PrivacyPolicy from "@/models/privacyPolicy"
import { NextResponse } from 'next/server';

export async function POST(req) {
    if (req.method !== 'POST') {
        return Response.json({ message: 'Method Not Allowed' } , {status:405});
    }

    const { title, description } = await req.json();

    console.log({title,description});
    try {
        await connectMongo();
    
        const policyExist = await PrivacyPolicy.findOne({heading:title});

        if(policyExist){
            return Response.json({ message: 'policy Already Exist ' } , {status:401});
        }

        const newpolicy = new PrivacyPolicy({heading:title,description:description});

        const savedpolicy = await newpolicy.save();

        const policies = await PrivacyPolicy.find();

        return Response.json({ message: 'Blog created successfully', privacy_data: policies} , {status:200});

    } catch (error) {
        console.error('Blog Error:', error);
        return  Response.json({ message: 'Blog Error' } , {status:500});
    }
}

export async function GET(req){
    try {
        await connectMongo();

        const policy = await PrivacyPolicy.find()
        
        return Response.json({ message: 'Blog Data get successfully', policy_data:policy } , {status:200});

    } catch (error) {
        console.error('Blog Error:', error);
        return  Response.json({ message: 'Blog not get Error' } , {status:500});
    }
}

export async function DELETE(req) {
    try {
        await connectMongo();

        const { title } = await req.json();
        if (!title) {
            return NextResponse.json({ message: 'Title is required' }, { status: 400 });
        }

     
        const deletedPolicy = await PrivacyPolicy.findOneAndDelete({ heading: title });

        if (!deletedPolicy) {
            return NextResponse.json({ message: 'Policy not found' }, { status: 404 });
        }

        
        const updatedPolicies = await PrivacyPolicy.find();

        return NextResponse.json(
            { message: 'Policy deleted successfully', privacy_data: updatedPolicies },
            { status: 200 }
        );
    } catch (error) {
        console.error('Delete Error:', error);
        return NextResponse.json({ message: 'Error deleting policy' }, { status: 500 });
    }
}


export async function PUT(req) {
    try {
        await connectMongo();
        const { title, description  , _id} = await req.json();

        console.log("title" ,title )
        console.log("description" , description)

        const updatedPolicy = await privacyPolicy.findOneAndUpdate(
            { _id: _id },
            { heading: title, description: description },
            { new: true }
        );
        console.log(updatedPolicy)
        const allPolicies = await privacyPolicy.find();
        console.log(allPolicies)
        return Response.json({ 
            message: 'Policy updated successfully', 
            policy_data: allPolicies 
        }, { status: 200 });

    } catch (error) {
        console.error('Policy Update Error:', error);
        return Response.json({ message: 'Update Error' }, { status: 500 });
    }
}
