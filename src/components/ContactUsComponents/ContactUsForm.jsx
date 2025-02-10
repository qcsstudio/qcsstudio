"use client";
import { useState } from "react";
import Image from "next/image";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone:"",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
    } else {
      setStatus("Error sending message.");
    }
  }

  return (
    
    <div className='flex flex-wrap md:flex-nowrap w-full relative mx-auto  justify-center gap-12 p-6  lg:gap-24 py-16  item-center'
    style={{ 
      backgroundImage: `url('/images/Group (14).png')`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat',
    }}>
      {/* floating Images */}
    <Image src='/images/Rectangleform.png' className="hidden lg:block absolute opacity-5  " width={200} height={200} alt='' ></Image>
    <Image src='/images/Group (15).png' className=" hidden lg:block  absolute bottom-0 left-auto " width={150} height={150} alt='' ></Image>
     {/* left div */}
      <div className="flex lg:flex-col md:flex-col  flex-col-reverse gap-2">
        <p className="text-[#527CBD] font-bold  lg:text-xl  text-md max-w-2xl lg:leading-[56px] tracking-[3%]">Have A Question?</p>
        <h1 className="text-[#0F2E5B] font-bold  lg:text-5xl md:text-2xl text-xl max-w-2xl lg:leading-[56px] tracking-[3%] ">Get in touch</h1>
        <Image src='/images/formPic.png' height={500} width={600} alt='formpic'></Image>
      </div>
      <div className="w-[500px] p-10 lg:p-16 rounded-lg shadow-md  " style={{background:'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,21,70,1) 100%)'}}>
      {/* <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h1> */}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="w-full px-5 py-2 border flex gap-0  border-gray-300 bg-[#DDF3FF] rounded-2xl focus-within:ring-2 focus-within:ring-indigo-500">
          {/* <label htmlFor="name" className="block text-gray-700 font-medium">Name</label> */}
          <Image src='/profile.svg' width={30} height={20} alt='profile'></Image>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
           className="w-full px-4 py-2 border-none  bg-[#DDF3FF] rounded-lg focus:outline-none"
          />
        </div>

        <div className="w-full flex px-4 py-2 border  border-gray-300 bg-[#DDF3FF] rounded-2xl focus-within:ring-2 focus-within:ring-indigo-500">
          {/* <label htmlFor="email" className="block text-gray-700 font-medium">Email</label> */}
          <Image src='/email.svg' width={30} height={20} alt='profile'></Image>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border-none  bg-[#DDF3FF] rounded-lg focus:outline-none"
          />
        </div>
        <div className="w-full flex px-4 py-2 border  border-gray-300 bg-[#DDF3FF] rounded-2xl focus-within:ring-2 focus-within:ring-indigo-500">
          {/* <label htmlFor="email" className="block text-gray-700 font-medium">Email</label> */}
          <Image src='/phone.svg' width={30} height={20} alt='profile'></Image>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border-none  bg-[#DDF3FF] rounded-lg focus:outline-none"
          />
        </div>

        <div className="w-full flex px-4 py-2 border items-start justify-center border-gray-300 bg-[#DDF3FF] rounded-2xl focus-within:ring-2 focus-within:ring-indigo-500">
          {/* <label htmlFor="message" className="block text-gray-700 font-medium">Message</label> */}
          <Image src='/message.svg' width={30} height={20} alt='profile'></Image>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="w-full px-4  border-none  bg-[#DDF3FF] rounded-lg focus:outline-none "
          />
        </div>

        <div className="flex justify-end items-end">
          <button
            type="submit"
            className=" p-3 bg-[#0F2E5B]  text-white font-semibold rounded-2xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </div>
      </form>

      {status && (
        <div className="mt-4 text-center">
          <p className={`text-lg font-semibold ${status === "Message sent successfully!" ? "text-green-600" : "text-red-600"}`}>
            {status}
          </p>
        </div>
      )}
    </div>

    </div>
    
    
  );
};

export default ContactUsForm;
