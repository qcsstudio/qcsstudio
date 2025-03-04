import SingleBlogPageContainer from "@/containers/SingleBlogPageContainer/SingleBlogPageContainer"

export async function generateMetadata(slug) {
   try {
      // const slugData = await params.slug;
      console.log("Slug val >>>>>>>>>>>>>>>>> ",slug);
      const url = `/api/blogs/${slug}`
      console.log("Url Link >>>>>>>>>>>> ",url);
      const response = await fetch(url);
      console.log("Response >>>>>>>>>>>> ",response);

      if (response.status === 200) {
         const result = await response.json();
         console.log("Page Data fetch :",result);

         return {
            title: result.blog_data.metaTitle,
            description: result.blog_data.metaDescription || 'A detailed blog post',
         };
      }
    } catch (error) {
      console.error("Blog data not get ! ", error);
    }
   
   
   
 }

const page = async({params}) => {
   const slugData = await params.slug;
   await generateMetadata(slugData);

   return (
      <>
         <SingleBlogPageContainer/>
      </>
   )
}

export default page