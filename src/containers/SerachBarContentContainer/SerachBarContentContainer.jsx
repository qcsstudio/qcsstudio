"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Loader from "@/components/Loader";
import Link from "next/link";

function SearchBarContentContainer() {  
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getSearchedData = async () => {
      if (!query) return; // Prevent fetching if query is null/empty

      setLoading(true); // Set loading before fetching data

      try {
        const url = `/api/search?q=${query}`;
        const response = await fetch(url);
        if (response.ok) {
          const result = await response.json();
          console.log("Result:", result);
          setBlogs(result);
        } else {
          setBlogs([]); // Ensure empty state is handled properly
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
        setBlogs([]); // Handle errors by setting empty state
      } finally {
        setLoading(false);
      }
    };

    getSearchedData();
  }, [query]);



  

  return (
    <div className="p-4">
      {loading ? (
        <Loader />
      ) : blogs.length > 0 ? (
        blogs.map((data, index) => <Card key={index} data={data} />)
      ) : (
        <p className="text-gray-500">No results found</p>
      )}
    </div>
  );
}

function Card({ data }) {

  const getDate = (createdAt) => {
    const newDate = new Date(createdAt).toLocaleDateString();
    return newDate;
  }
  return (
    <Link href={`/blogs/${data.heading}`}>
    <div className="flex flex-col sm:flex-row gap-4 sm:items-center border p-4 rounded-md shadow-md">
      <div className="w-full sm:w-1/3">
        <Image
          src={data.thumbnail}
          className="w-full object-cover rounded-md"
          height={100}
          width={100}
          alt={data.heading}
        />
      </div>
      <div className="w-full sm:w-2/3 text-center sm:text-left">
        {/* <span className="text-gray-700 text-xs sm:text-sm">{getDate(data.createdAt)}</span> */}
        <h3 className="text-base sm:text-xl md:text-lg text-[#0E2D5B] font-bold">
          {data.heading.replace(/_/g, " ").split(' ').map((word)=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ')}
        </h3>
        <div
          dangerouslySetInnerHTML={{
            __html: data.description ? data.description.slice(0, 40) : "",
          }}
        />
      </div>
    </div>
    </Link>
  );
}

export default SearchBarContentContainer;
