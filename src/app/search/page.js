import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import SearchBarContentContainer from "@/containers/SerachBarContentContainer/SerachBarContentContainer";
import React from "react";
import Loader from "@/components/Loader";

function page() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader/>}>
        <SearchBarContentContainer />
      </Suspense>
      <Footer />
    </>
  );
}

export default page;
