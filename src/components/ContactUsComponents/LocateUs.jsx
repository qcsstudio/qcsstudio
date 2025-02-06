import React from 'react';
import Image from 'next/image';

const LocateUs = () => {
  return (
    <div className="flex w-full relative justify-center items-center ">
       
      {/* Container for Iframe */}
      <div className="relative w-full  ">
           {/* floating image */}
           {/* <Image className="absolute z-10 top-0 left-1" src="/images/Rectangle.png" width={100} height={100} alt="rectangle" />
                 <Image className="absolute z-10 top-7 left-10" src="/images/Rectangle.png" width={150} height={150} alt="rectangle" />
           <Image className="absolute z-10 bottom-0  scale-x-[-1] pointer-events-none" src='/images/blog-bg-img-3.png'height={300} width={300} alt=''></Image>
           <Image className="absolute z-10 right-0  scale-x-[-1] pointer-events-none" src='/images/blog-bg-img2.png'height={200} width={200} alt=''></Image> */}
        {/* Google Maps Iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.7902319315076!2d76.68763849999999!3d30.696177599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefa3c5ea2fd5%3A0x332a8d3fa1ce9747!2sQuantumCrafters%20Studio%20Private%20Limited!5e0!3m2!1sen!2sin!4v1738752059367!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Blue Overlay Image */}
        {/* <div className="absolute inset-0 pointer-events-none">
          <Image 
            src="/images/bluebg.png"
            layout="fill"
            objectFit="cover"
            className="opacity-80"
            alt="Blue Overlay"
          />
        </div> */}
      </div>
    </div>
  );
};

export default LocateUs;
