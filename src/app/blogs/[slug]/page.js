import SingleBlogPageContainer from "@/containers/SingleBlogPageContainer/SingleBlogPageContainer";

export async function generateMetadata({ params }) {
   try {
      if (!params?.slug) {
         return {
            title: "Blog Not Found",
            description: "The blog you are looking for does not exist.",
         };
      }

      const slug = params.slug;
      const url = `https://www.qcsstudio.in/api/blogs/${slug}`; 
      const response = await fetch(url, { cache: "no-store" }); // Prevent caching issues

      if (!response.ok) {
         throw new Error(`Failed to fetch metadata: ${response.status}`);
      }

      const result = await response.json();
      const data = result?.blog_data;

      return {
         title: data?.metaTitle || "Default Blog Title",
         description: data?.metaDescription || "Default Blog Description",
      };
   } catch (error) {
      console.error("Error fetching blog metadata:", error);
      return {
         title: "Default Blog Title",
         description: "Default Blog Description",
      };
   }
}

const page = async ({ params }) => {
   const urlData =  await params;
   console.log("params: ",urlData)
   if (!params?.slug) {
      return <p className="text-center text-red-500">Blog not found.</p>;
   }

   return (
      <>
         <SingleBlogPageContainer />
      </>
   );
};

export default page;
