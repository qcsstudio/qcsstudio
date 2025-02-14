import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsComponent = () => {
  return (
    <>
      <Navbar />
      <div className=" relative p-16 flex flex-col gap-5">
        <div className="flex flex-col gap-4 ">
          <h2 className="font-bold text-3xl lg:text-4xl tracking-wide  text-[#001f61]">
            1. Terms of Service (TOS)
          </h2>
          <p className="font-thin tracking-wide text-[#212529]">
            Welcome to QuantumCrafters Studio. By using our services, including
            our website, educational offerings, IT solutions, and product
            resale, you agree to the following terms and conditions.
          </p>
        </div>

        <div className="flex flex-col gap-4 ">
          <h3 className="font-bold text-xl tracking-wide  text-[#001f61]">
            1.1 General
          </h3>
          <p className="font-thin tracking-wide text-[#212529]">
            By accessing or using our website and services, you confirm that you
            are at least 18 years of age or using the services under the
            supervision of a parent or legal guardian. These terms govern your
            use of QuantumCrafters Studio is services, including educational
            courses, IT services, and any products purchased through our
            platform. QCS reserves the right to update or change these Terms of
            Service at any time. All changes will be posted on the website, and
            it is the user is responsibility to review them regularly.
          </p>
        </div>

        <div className="flex flex-col gap-4 ">
          <h3 className="font-bold text-xl tracking-wide  text-[#001f61]">
            1.2 Educational Services
          </h3>
          <p className="font-thin tracking-wide text-[#212529]">
            Enrollment in courses requires full payment before access to the
            course materials or services. Students are required to adhere to
            course schedules, deadlines, and rules set by the course instructor.
            QCS reserves the right to update course content and instructors
            without prior notice to ensure that the most current industry
            standards are met. Students are not permitted to redistribute or
            replicate course content without written permission.
          </p>
        </div>

        <div className="flex flex-col gap-4 ">
          <h3 className="font-bold text-xl tracking-wide  text-[#001f61]">
            1.3 IT Services
          </h3>
          <p className="font-thin tracking-wide text-[#212529]">
            QuantumCrafters Studio provides various IT services, including
            software development, IT infrastructure setup, digital marketing
            services, etc. Service agreements are defined on a per-project
            basis. Any changes in scope during the project will require a new
            contract or amendment to the existing one. Intellectual property
            (IP) developed during any project will be owned by the client unless
            otherwise stated in the contract.
          </p>
        </div>
        <div className="flex flex-col gap-4 ">
          <h3 className="font-bold text-xl tracking-wide  text-[#001f61]">
            1.4 IT Product Resale
          </h3>
          <p className="font-thin tracking-wide text-[#212529]">
            QuantumCrafters Studio acts as a reseller for top IT brands,
            including HP, and offers hardware like laptops, desktops, and
            networking equipment. Once purchased, IT products cannot be returned
            or exchanged, except in the case of a product defect covered under
            the manufacturer is warranty. All warranties on products will be
            provided by the manufacturer, and QCS will facilitate communication
            between the client and the manufacturer if needed.
          </p>
        </div>

        <div className="flex flex-col gap-4 ">
          <h4 className="font-bold text-xl tracking-wide  text-[#001f61]">
            Limitation of Liability
          </h4>
          <p className="font-thin tracking-wide text-[#212529]">
            QuantumCrafters Studio is not responsible for any direct, indirect,
            incidental, or consequential damages resulting from the use of our
            services or products.
          </p>
        </div>

        <div className="flex flex-col gap-4 ">
          <h3 className="font-bold text-xl tracking-wide  text-[#001f61]">
            1.6 Intellectual Property
          </h3>
          <p className="font-thin tracking-wide text-[#212529]">
            All content on the website, including text, images, graphics, and
            videos, are the intellectual property of QuantumCrafters Studio. You
            may not reproduce or distribute any content without explicit
            permission.
          </p>
        </div>

        {/* floating images */}
        <Image
          className="absolute bottom-7 right-96"
          src="/images/recentsblogsbg3.png"
          height={200}
          width={100}
          alt="icon"
        />
        <Image
          className="absolute bottom-7 right-0 scale-x-[-1]"
          src="/images/infoIcon.png"
          height={300}
          width={300}
          alt="icon"
        />
        <Image
          className="absolute bottom-0 left-0 "
          src="/images/bgBlu.png"
          height={100}
          width={100}
          alt="icon"
        />
        <Image
          className="absolute top-0 right-0 "
          src="/images/arrowplane.png"
          height={100}
          width={100}
          alt="icon"
        />
      </div>
      <Footer />
    </>
  );
};

export default TermsComponent;
