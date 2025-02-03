import React from 'react';
import footerLg from '../../public/images/footerLg.png'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#112E58] via-[#224474] to-[#112E58] py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="footer-logo ml-4"> {/* Added margin-left */}
          <img
            src={footerLg.src}
            alt="Company Logo"
            className="h-12"
            loading="lazy" // Optimize loading of images
          />
        </div>
        <div className="flex flex-col items-end md:ml-8 mt-4 md:mt-0 mr-4"> {/* Added margin-right */}
          <div className="text-right mb-2">
            <p className="text-white">Address: 123 Main St, City, Country</p>
            <p className="text-white">Phone: +123 456 7890</p>
          </div>
        </div>
      </div>
      {/* Links and Input Section */}
      <div className="container mx-auto mt-4">
        <div className="flex justify-between flex-wrap mb-4"> {/* Added mb-4 for gap */}
          {["HOME", "ABOUT", "CONTACT US", "COURSE RESERVATIONS", "Terms Of Service", "Privacy Policy"].map((text, index) => (
            <a
              key={index}
              href={`#link${index + 1}`}
              className="text-white hover:underline mx-2 flex-1 text-center"
              aria-label={text}
            >
              {text}
            </a>
          ))}
        </div>
        <div className="flex justify-between flex-wrap mb-2"> {/* Maintained mb-2 for the second row */}
          {["Refund Policy", "SIGN UP TO OUR NEWSLETTER"].map((text, index) => (
            <a
              key={index + 6}
              href={`#link${index + 7}`}
              className="text-white hover:underline mx-2 flex-1 text-center"
              aria-label={text}
            >
              {text}
            </a>
          ))}
          <div className="flex flex-wrap items-center mx-2 flex-1">
            <input
              type="text"
              placeholder="Search..."
              className="border border-white bg-[#112E58] rounded-l-md p-2 focus:outline-none focus:border-blue-500 w-60 h-[2.3em]" // Set width here
              aria-label="Search input" // Accessibility label for screen readers
            />
            <button className="uppercase text-sm bg-white text-[#112E58] rounded-r-md p-2 w-60 hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="container mx-auto mt-4 text-center text-white">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
