import connectMongo from "@/lib/mongodb";
import Category from "@/models/category";
import { NextResponse } from "next/server";

export async function DELETE(req,{params}){
    try {
        await connectMongo();
        const slug = decodeURIComponent(params.slug);

        const categoryDelete = await Category.findOneAndDelete({name: slug});
        console.log(categoryDelete);
        const categories = await Category.find();

        return Response.json({ message: 'Category Data Deleted successfully', category_data: categories } , {status:200});

    } catch (error) {
        console.error('Category Error:', error);
        return  Response.json({ message: 'Category not get Error' } , {status:500});
    }
}

export async function PUT(req,{params}){
    try {
        await connectMongo();
        const slug = decodeURIComponent(params.slug);
        console.log("Category Slug ::=============",slug);

        const {name,show_on_front} = await req.json();
        console.log("body data = = =",{name,show_on_front});

        const updatedCategory = await Category.findOneAndUpdate({name: slug},{name,show_on_front},{ new: true });
        console.log(updatedCategory);
        const categories = await Category.find();
        return NextResponse.json({ message: 'Category Data Updated successfully', category_data: categories } , {status:200});

    } catch (error) {
        console.error('Category Error:', error);
        return  NextResponse.json({ message: 'Category not get Error' } , {status:500});
    }
}