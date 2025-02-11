import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SearchBarContentContainer from "@/containers/SerachBarContentContainer/SerachBarContentContainer";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <SearchBarContentContainer/>
      <Footer />
    </>
  );
}

export default page;
