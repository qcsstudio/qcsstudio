import connectMongo from "@/lib/mongodb";
import Blog from "@/models/blog";

export async function POST(req) {
    if (req.method !== 'POST') {
        return Response.json({ message: 'Method Not Allowed' } , {status:405});
    }

    const { title, thumbnail, category, showOnFront, description } = await req.json();

    console.log({title,thumbnail,category,showOnFront,description});
    try {
        await connectMongo();
        
        const BlogExist = await Blog.findOne({heading:title});

        if(BlogExist){
            return Response.json({ message: 'Blog Already Exist ' } , {status:401});
        }

        const newBlog = new Blog({heading:title,thumbnail:thumbnail,category:category,show_on_front:showOnFront,description:description});

        const savedBlog = await newBlog.save();

        const blogs = await Blog.find();

        return Response.json({ message: 'Blog created successfully', blog_data: blogs } , {status:200});

    } catch (error) {
        console.error('Blog Error:', error);
        return  Response.json({ message: 'Blog Error' } , {status:500});
    }
}