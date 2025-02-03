import React from "react";
import location from "../../../../public/icons/location.png";
import phone from "../../../../public/icons/phone.png";

const TopHeader = () => {
  return (
    <div className="TopHeader bg-[#0e2d5b] p-[10px_0] text-white">
      <div className="container flex flex-wrap justify-center md:justify-center items-center gap-3 h-auto px-4">
        
        {/* Location Section */}
        <div className="flex items-center gap-2">
          <img className="h-[20px] w-[20px]" src={location.src} alt="Location" />
          <span className="text-sm">SAS Nagar, Mohali, Punjab. 160055</span>
        </div>

        {/* Divider */}
        <span className="hidden md:block bg-white w-[0.7px] h-[20px]"></span>

        {/* Phone Section */}
        <div className="flex items-center gap-2">
          <img className="w-[20px] h-[20px]" src={phone.src} alt="Phone" />
          <a
            className="text-sm hover:text-[#c4ef01] hover:underline"
            href="tel:+91771-960-7776"
          >
            +91 771-960-7776
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
