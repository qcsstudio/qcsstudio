import React from 'react';
import Image from 'next/image';

const BlogRecentBlog = () => {
  return (
    <div className="relative px-4 sm:px-8 md:px-16">
      {/* Floating images */}
      <Image
        src="/images/recentsblogsbg2.png"
        className="right-0 absolute hidden sm:block"
        height={200}
        width={200}
        alt=""
      />
      <Image
        src="/images/recentsBlogsbg1.png"
        className="absolute left-0 hidden sm:block"
        height={120}
        width={120}
        alt=""
      />

      <div className="max-w-6xl mx-auto">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-6 text-[#0E2D5B] mt-10 sm:mt-20">
          RECENT BLOG POSTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {/* Large Image Blog Post */}
          <div className="flex flex-col  text-center md:text-left">
            <Image
              src="/images/recentsblogs1.png"
              className="w-full object-cover rounded-md"
              height={500}
              width={500}
              alt=""
            />
            <span className="text-gray-700 text-xs sm:text-sm">30/1/2025</span>
            <h3 className="text-base sm:text-xl md:text-2xl text-[#0E2D5B] font-bold">
              Today is Trending
            </h3>
            <p className="text-[#0E2D5B] font-normal leading-[20px] text-xs sm:text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, odio iure
              accusamus non, nulla tempora hic mollitia eius ea doloremque officiis asperiores.
            </p>
          </div>

      
          <div className="flex flex-col gap-6">
  {/* Blog Post 1 */}
  <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
    <div className="w-full sm:w-1/3">
      <Image
        src="/images/recentsBlogs2.png"
        className="w-full object-cover rounded-md"
        height={200}
        width={200}
        alt=""
      />
    </div>
    <div className="w-full sm:w-2/3 text-center sm:text-left">
      <span className="text-gray-700 text-xs sm:text-sm">30/1/2025</span>
      <h3 className="text-base sm:text-xl md:text-lg text-[#0E2D5B] font-bold">
        Today is Trending
      </h3>
      <p className="text-[#0E2D5B] font-normal leading-[20px] text-xs sm:text-sm md:text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, odio iure.
      </p>
    </div>
  </div>

  {/* Blog Post 2 */}
  <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
    <div className="w-full sm:w-1/3">
      <Image
        src="/images/recentsBlogs3.png"
        className="w-full object-cover rounded-md"
        height={200}
        width={200}
        alt=""
      />
    </div>
    <div className="w-full sm:w-2/3 text-center sm:text-left">
      <span className="text-gray-700 text-xs sm:text-sm">30/1/2025</span>
      <h3 className="text-base sm:text-xl md:text-lg text-[#0E2D5B] font-bold">
        Today is Trending
      </h3>
      <p className="text-[#0E2D5B] font-normal leading-[20px] text-xs sm:text-sm md:text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, odio iure.
      </p>
    </div>
  </div>

  {/* Blog Post 3 */}
  <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
    <div className="w-full sm:w-1/3">
      <Image
        src="/images/recentsBlogs4.png"
        className="w-full object-cover rounded-md"
        height={200}
        width={200}
        alt=""
      />
    </div>
    <div className="w-full sm:w-2/3 text-center sm:text-left">
      <span className="text-gray-700 text-xs sm:text-sm">30/1/2025</span>
      <h3 className="text-base sm:text-xl md:text-lg text-[#0E2D5B] font-bold">
        Today is Trending
      </h3>
      <p className="text-[#0E2D5B] font-normal leading-[20px] text-xs sm:text-sm md:text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, odio iure.
      </p>
    </div>
  </div>
</div>

        </div>
      </div>

      {/* Background Floating Image */}
      <div className="flex items-end justify-end">
        <Image
          src="/images/recentsblogsbg3.png"
          className="absolute hidden sm:block"
          height={100}
          width={100}
          alt=""
        />
      </div>

      {/* Load More Button */}
      <div className="flex justify-center my-16">
        <button className="bg-white border border-[#0E2D5B] hover:text-white hover:bg-[#0E2D5B] text-[#0E2D5B] px-6 py-2 rounded-md text-sm sm:text-base">
          LOAD MORE
        </button>
      </div>
    </div>
  );
};

export default BlogRecentBlog;
