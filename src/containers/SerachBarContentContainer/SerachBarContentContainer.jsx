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
      if (!query) return;
      setLoading(true);

      try {
        const url = `/api/search?q=${query}`;
        const response = await fetch(url);
        if (response.ok) {
          const result = await response.json();
          setBlogs(result);
        } else {
          setBlogs([]);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    getSearchedData();
  }, [query]);

  return (
    <div className="p-6">
      {loading ? (
        <Loader />
      ) : blogs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center text-lg">No results found</p>
      )}
    </div>
  );
}

function Card({ data }) {
  return (
    <Link href={`/blogs/${data.heading}`} className="block hover:scale-105 transition-transform duration-300">
      <div className="border p-5 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 bg-white overflow-hidden h-[300px] flex flex-col">
        <div className="w-full h-48 relative rounded-lg overflow-hidden">
          <Image
            src={data.thumbnail}
            className="object-cover"
            layout="fill"
            alt={data.heading}
            priority
          />
        </div>
        <div className="mt-4 flex-1 flex flex-col justify-between">
          <h3 className="text-xl font-semibold text-[#0E2D5B] capitalize line-clamp-2">
            {data.heading.replace(/_/g, " ")}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default SearchBarContentContainer;
