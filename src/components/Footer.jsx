"use client"
import { StudentDataContext } from "@/context/StudentDataContext";
import Image from "next/image"
import Link from "next/link"
import { useContext, useEffect, useState } from "react";
import toast,{ Toaster } from "react-hot-toast";

const Footer = () => {

     const [email,setEmail] = useState("");
   
     const {handleSendMail,status} = useContext(StudentDataContext);
   
     useEffect(()=>{
       console.log(status);
       if(status === "newsletter sent successfully!"){
         setEmail("");
         toast.success("Newsletters Subscribed successfully!");
       }
     },[status])
   
    
     const handleSubmit = async (e) => {
      e.preventDefault();
      if (!email) {
          toast.error("Email is required!");
          return;
      }
       if(email != ""){
         handleSendMail({email:email,message:"Any",formType:"NewsLetters"});
       }
      try {
          const response = await fetch("/api/newsLetter", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email }),
          });
          const data = await response.json();
  
          if (response.ok) {
              setEmail("");
              toast.success("Subscribed successfully!");
          } else {
              toast.error(data.error || "Something went wrong!");
          }
      } catch (error) {
          toast.error("Failed to subscribe! Try again later.");
          console.error("Subscription error:", error);
      }
  };

   return (
      <>
         <footer className="footerConatiner w-[100%] bg-gradient-to-b from-[#112E58] via-[#224474] to-[#112E58] flex flex-col lg:px-[4rem] md:px-[2rem] xs:px-[2rem] py-[2rem]">
         <Toaster />
            <div className="upperContainer w-[100%] flex md:flex-row md:gap-[0rem] xs:gap-[2rem] xs:flex-col md:justify-between md:items-center">
               <div className="logoContainer md:w-[30%] sm:w-[50%] xs:w-[100%]" >
                  <Link href="/">
                     <Image src="/images/RealLogo.png" alt="quantumCrafters_logo" width={1024} height={1024} className="lg:w-[60%] h-[100%] sm:w-[55%] xs:w-[60%] " />
                  </Link>
               </div>

               <div className="newsLetterContainer lg:w-[40rem] flex items-center justify-between md:w-[30rem] xs:w-[100%]">
                
                  <div className='flex flex-col gap-4 w-[100%]'>
                     <h5 className='font-bold sm:text-[1.2rem] xs:text-[1rem] lg:ml-[4rem] ml-0   text-[#C1EE04]'>SIGN UP TO OUR NEWSLETTER</h5>
                    <div className="cont flex gap-[1rem] items-center justify-center">

      
                      <Link  href="https://g.co/kgs/qiu18gC">
                          <Image className="rounded-[1rem] object-cover" src="/images/gmp.jpg" width={50} height={50} alt="GMP Image"  />
                      </Link>

                     <div className='flex border border-white rounded-md overflow-hidden lg:w-[100%] md:w-[90%] max-w-md'>
                        
                        <form onSubmit={handleSubmit} className='flex border border-white rounded-md overflow-hidden w-[30rem] max-w-md'>
                        <input onChange={(e)=>setEmail(e.target.value)} className='flex-1 bg-transparent text-white sm:w-[70%] xs:w-[60%] p-3 outline-none' type="email" placeholder='Your Email' value={email}/>
                        <button disabled={status === "Sending..."?true:false} className={`bg-white sm:w-[30%] md:[40%] lg:w-[30%] xs:w-[40%] text-[#112E58] sm:text-[1rem] xs:text-[.8rem] px-4 py-2 font-bold ${status === "Sending..." ? "disabled:opacity-50 disabled:cursor-not-allowed" : " cursor-pointer"}`}>SUBSCRIBE</button>
                        </form>
                     </div>
                     </div>
                  </div>
               </div>

            </div>

            <div className="middleContainer w-[100%] my-[2rem] flex flex-wrap md:flex-row  lg:gap-[3rem] md:gap-[5rem] xs:gap-[2rem] lg:text-[1rem] xs:text-[.8rem]">
               <div className="leftContainer lg:w-[20%] md:w-[30%] sm:w-[45%] xs:w-[100%]">
                  <ul className="linksContainer leading-7">
                     
                     <li className="links lg:text-[1.2rem] mb-[.5rem] xs:text-[1rem] text-[#ffffff] font-bold">Pages</li>
                    

                     <Link href="/">
                        <li className="links lg:text-[.9rem] xs:text-[.8rem] text-[#dad9d9] font-medium hover:text-[#C1EE04]">Home</li>
                     </Link>

                     <Link href="/courses">
                        <li className="links lg:text-[.9rem] xs:text-[.8rem] text-[#dad9d9] font-medium hover:text-[#C1EE04]">Courses</li>
                     </Link>

                     <Link href="/about">
                        <li className="links lg:text-[.9rem] xs:text-[.8rem] text-[#dad9d9] font-medium hover:text-[#C1EE04]">About Us</li>
                     </Link>

                     <Link href="/contact-us">
                        <li className="links lg:text-[.9rem] xs:text-[.8rem] text-[#dad9d9] font-medium hover:text-[#C1EE04]">Contact Us</li>
                     </Link>
                  </ul>
               </div>

               <div className="leftContainer lg:w-[20%] md:w-[30%] sm:w-[45%] xs:w-[100%]">
                  <ul className="linksContainer leading-7">

                  <li className="links lg:text-[1.2rem] mb-[.5rem] xs:text-[1rem] text-[#ffffff] font-bold">Courses</li>

                     <Link href="/courses/web-development">
                        <li className="links lg:text-[.9rem] xs:text-[.8rem] text-[#dad9d9] font-medium hover:text-[#C1EE04]">Web Development</li>
                     </Link>

                     <Link href="/courses/ui-ux">
                        <li className="links lg:text-[.9rem] xs:text-[.8rem] text-[#dad9d9] font-medium hover:text-[#C1EE04]">UI/UX Designing</li>
                     </Link>

                     <Link href="/courses/networking">
                        <li className="links lg:text-[.9rem] xs:text-[.8rem] text-[#dad9d9] font-medium hover:text-[#C1EE04]">Networking</li>
                     </Link>

                     <Link href="/courses/digital-marketing">
                        <li className="links lg:text-[.9rem] xs:text-[.8rem] text-[#dad9d9] font-medium hover:text-[#C1EE04]">Digital Marketing</li>
                     </Link>
                  </ul>
               </div>

               <div className="centerContainer lg:w-[20%] md:w-[30%] sm:w-[45%] xs:w-[100%]">
                  <ul className="linksContainer leading-7">
                  <li className="links lg:text-[1.2rem] mb-[.5rem] xs:text-[1rem] text-[#ffffff] font-bold">Support</li>

                     <Link href="/blogs">
                        <li className="links lg:text-[.9rem] xs:text-[.8rem] text-[#dad9d9] font-medium hover:text-[#C1EE04]">Blogs</li>
                     </Link>

                     <Link href="/terms-of-service">
                        <li className="links lg:text-[.9rem] xs:text-[.8rem] text-[#dad9d9] font-medium hover:text-[#C1EE04]">Term & Conditions</li>
                     </Link>

                     <Link href="/privacy-policy">
                        <li className="links lg:text-[.9rem] xs:text-[.8rem] text-[#dad9d9] font-medium hover:text-[#C1EE04]">Privacy Policy</li>
                     </Link>

                     <Link href="/refund-policy">
                        <li className="links lg:text-[.9rem] xs:text-[.8rem] text-[#dad9d9] font-medium hover:text-[#C1EE04]">Refund Policy</li>
                     </Link>
                  </ul>
               </div>

               <div className="rightContainer lg:w-[25%] xs:w-[100%]">
                  <ul className="linksContainer leading-10">
                     <Link href="https://tinyurl.com/msb2nbbn" target="_blank">
                        <li className="links lg:text-[1rem] xs:text-[.8rem] text-[#ffffff] leading-6 font-medium flex items-center  gap-[.5rem]"><Image src="/icons/location.png" width={1024} height={1024} alt='Location' className="w-[1.5rem] h-[1.5rem]"/> <span className=" text-[#ffffff] hover:text-[#C1EE04]">Prosperity Arcade, D-229, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160071</span></li>
                     </Link>

                     
                        <li className="links lg:text-[1rem] xs:text-[.8rem] text-[#ffffff] font-medium flex items-center  gap-[.5rem]"><Image src="/icons/phone.png" width={1024} height={1024} alt='Phone' className="w-[1.5rem] h-[1.5rem]"/><span className="text-[#ffffff] hover:text-[#C1EE04]"><a href="tel:+917719607776">+91 771-960-7776</a></span></li>
                     

                     
                  </ul>
               </div>
            </div>

            <div className="lowerContainer w-[100%] mt-[1rem]">
               <p className="text-center text-[#ffffff] font-normal lg:text-[.9rem] xs:text-[.7rem]">© 2025 QuantumCrafters Studio Pvt. Ltd. All rights reserved.</p>
            </div>
         </footer>
      </>
   )
}

export default Footer;