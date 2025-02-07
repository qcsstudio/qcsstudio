import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const RefundComponent = () => {
  return (
    <>
   
    <Navbar/>
    <div>
      <div className=" relative p-16 flex flex-col gap-5">
        <h1 className="font-bold text-3xl lg:text-4xl tracking-wide  text-[#001f61]">
          3. Refund Policy
        </h1>

        <div className="flex flex-col gap-4 ">
          <h2 className="font-bold text-xl tracking-wide  text-[#001f61]">
            3.1 Educational Services Refund Policy
          </h2>
          <div className="flex flex-col gap-4 ">
            <p className="font-thin text-xl tracking-wider text-[#001f61]">
              1. Before Course Start:
            </p>
            <p className="font-thin tracking-wider text-[#212529]">
              Full refund if the student cancels at least 7 days before the
              course start date (minus administrative fees). Partial refund of
              up to 50% if cancellation occurs within 7 days of the course
              starting
            </p>
          </div>
          <div className="flex flex-col gap-4 ">
            <p className="font-thin text-xl tracking-wider text-[#001f61]">
              2. After Course Start::
            </p>
            <p className="font-thin tracking-wider text-[#212529]">
              No refunds will be issued after the course begins unless there are
              exceptional circumstances such as medical or family emergencies
              (documentation required). In these cases, the student may receive
              a course deferral or partial refund on a case-by-case basis.
            </p>
          </div>
          <div className="flex flex-col gap-4 ">
            <p className="font-thin text-xl tracking-wider text-[#001f61]">
              3. Course Transfer & Deferral:
            </p>
            <p className="font-thin tracking-wider text-[#212529]">
              Students can transfer to another course or defer their enrollment
              to a later date within the first week, subject to administrative
              fees.
            </p>
          </div>
          <div className="flex flex-col gap-4 ">
            <p className="font-thin text-xl tracking-wider text-[#001f61]">
              4. Dissatisfaction Clause:
            </p>
            <p className="font-thin tracking-wider text-[#212529]">
              If students are not satisfied with the course content within the
              first 3 days, they may be eligible for partial refunds or course
              credit for another program.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 ">
          <h2 className="font-bold text-xl tracking-wide  text-[#001f61]">
            3.2 IT Services Refund Policy
          </h2>
          <div className="flex flex-col gap-4 ">
            <p className="font-thin text-xl tracking-wider text-[#001f61]">
              1. Before Service Commencement:
            </p>
            <p className="font-thin tracking-wider text-[#212529]">
              Full refund if cancellation occurs before the project has started.
            </p>
          </div>
          <div className="flex flex-col gap-4 ">
            <p className="font-thin text-xl tracking-wider text-[#001f61]">
              2. During Project:
            </p>
            <p className="font-thin tracking-wider text-[#212529]">
              Partial refunds may be considered if the service is canceled after
              work has commenced but before major milestones are reached. No
              refund will be issued after significant project work has been
              completed (such as development, implementation, or testing
              phases).
            </p>
          </div>
          <div className="flex flex-col gap-4 ">
            <p className="font-thin text-xl tracking-wider text-[#001f61]">
              3. Dissatisfaction Clause:
            </p>
            <p className="font-thin tracking-wider text-[#212529]">
              Clients dissatisfied with the services provided can request
              revisions within the project is scope. Partial refunds may be
              considered in exceptional cases after reviewing the project is
              status and deliverables.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <h2 className="font-bold text-xl tracking-wide  text-[#001f61]">
            3.3 IT Products Refund Policy
          </h2>
          <p className="font-thin tracking-wider text-[#212529]">
            Products purchased through QuantumCrafters Studio as a reseller are
            not eligible for returns or exchanges. In case of product defects,
            the warranty provided by the manufacturer will apply. QCS will
            assist with the warranty claim process, but refunds will not be
            offered for defective products.
          </p>
          <div className="flex flex-col gap-4 ">
            <p className="font-thin text-xl tracking-wider text-[#001f61]">
              Refund Processing:
            </p>
            <p className="font-thin tracking-wider text-[#212529]">
              All approved refunds will be processed within 7-10 business days,
              and the amount will be credited to the original payment method.
            </p>
          </div>
        </div>

        <Image
          className="absolute bottom-7 right-96"
          src="/images/recentsblogsbg3.png"
          height={200}
          width={100}
          alt=""
        />
        <Image
          className="absolute bottom-7 right-0 scale-x-[-1]"
          src="/images/infoicon.png"
          height={300}
          width={300}
          alt=""
        />
        <Image
          className="absolute bottom-0 left-0 "
          src="/images/bgblu.png"
          height={100}
          width={100}
          alt=""
        />
        <Image
          className="absolute top-0 right-0 "
          src="/images/Group (15).png"
          height={100}
          width={100}
          alt=""
        />
      </div>
      <Footer/>
    </div>
    </>
  );
};

export default RefundComponent;
