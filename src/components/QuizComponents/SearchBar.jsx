"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?q=${query}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center w-lg max-w-xs sm:max-w-sm md:max-w-md bg-gray-500 rounded-md gap-1 p-1 sm:p-2">
      <Image src="/search.svg" alt="Search Icon" width={30} height={30} />
      <input
        className="bg-gray-500 text-white border-none w-full px-0 sm:px-0 py-1 sm:py-2 text-sm sm:text-base outline-none placeholder-gray-300 rounded-md"
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress} 
      />
      
      <button
        onClick={handleSearch} 
        className="bg-[#C4EF01] hover:bg-green-500 w-auto px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base rounded-md shrink-0"
      >
        Search
      </button>
    </div>
  );
}
