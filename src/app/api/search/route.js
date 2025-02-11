import { NextResponse } from "next/server";
import connectMongo from "@/lib/mongodb";
import blog from "@/models/blog";

export async function GET(req) {
  try {
    await connectMongo();
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q");

    if (!query) {
      return NextResponse.json({ error: "Search query is required" }, { status: 400 });
    }

    const blogs = await blog.find(
      {
        $or: [
          { heading: { $regex: query, $options: "i" } }, 
          { description: { $regex: query, $options: "i" } }, 
        ],
      },
      { heading: 1, description: 1, thumbnail: 1 } 
    ).lean();

    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.error("Search API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
