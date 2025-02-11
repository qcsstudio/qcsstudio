import connectMongo from "@/lib/mongodb";
import Category from "@/models/category";

export async function POST(req) {
    if (req.method !== 'POST') {
        return Response.json({ message: 'Method Not Allowed' } , {status:405});
    }

    const {category,showOnFront} = await req.json();

    console.log({category,showOnFront});
    try {
        await connectMongo();
        
        const CategoryExist = await Category.findOne({name:category});

        if(CategoryExist){
            return Response.json({ message: 'Category Already Exist ' } , {status:401});
        }

        const newCategory = new Category({name:category,show_on_front:showOnFront});

        const savedCategory = await newCategory.save();
        console.log("savedCategory=====",savedCategory);
        const categories = await Category.find();
        return Response.json({ message: 'Category created successfully', category_data : categories } , {status:200});
        
    } catch (error) {
        console.error('Category Error:', error);
        return  Response.json({ message: 'Category Error' } , {status:500});
    }
}