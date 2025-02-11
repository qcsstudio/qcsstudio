import connectMongo from "@/lib/mongodb";
import Category from "@/models/category";

export async function GET(req){
    try {
        await connectMongo();

        const categories = await Category.find();

        return Response.json({ message: 'Category Data get successfully', category_data: categories } , {status:200});

    } catch (error) {
        console.error('Category Error:', error);
        return  Response.json({ message: 'Category not get Error' } , {status:500});
    }
}
