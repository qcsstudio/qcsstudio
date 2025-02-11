import connectMongo from "@/lib/mongodb";
import Blog from "@/models/blog";

export async function GET(req){
    try {
        await connectMongo();

        const blogs = await Blog.find();
        // console.log("Data From Blog Backend :------",blogs);
        return Response.json({ message: 'Blog Data get successfully', blog_data:blogs } , {status:200});

    } catch (error) {
        console.error('Blog Error:', error);
        return  Response.json({ message: 'Blog not get Error' } , {status:500});
    }
}
