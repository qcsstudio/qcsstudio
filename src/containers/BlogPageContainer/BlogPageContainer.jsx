import BlogFilteredButtons from '@/components/BlogpageComponents/BlogFilteredButtons'
import BlogFirstSection from '@/components/BlogpageComponents/BlogFirstSection'
import BlogRecentBlog from '@/components/BlogpageComponents/BlogRecentBlog'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const BlogPageContainer = () => {
  return (
    <div>
      <Navbar/>
      <BlogFirstSection/>
      <BlogFilteredButtons/>
      <BlogRecentBlog/>
      <Footer/>
    </div>
  )
}

export default BlogPageContainer
