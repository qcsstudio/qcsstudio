import React from 'react'

const BlogFilteredButtons = () => {
  return (
    <div className="my-7 flex flex-wrap justify-center gap-x-5 gap-y-2 px-4">
      {["All", "Tech", "Education", "Salaries", "Future"].map((category) => (
        <button 
          key={category} 
          className="bg-white border border-[#0E2D5B] hover:text-white hover:bg-[#0E2D5B] text-[#0E2D5B] px-5 py-2 rounded-md w-full sm:w-auto"
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default BlogFilteredButtons
