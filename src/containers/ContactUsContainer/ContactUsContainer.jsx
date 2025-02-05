import ContactInfo from "@/components/ContactUsComponents/ContactInfo";
import ContactUsForm from "@/components/ContactUsComponents/ContactUsForm";
import CUFirstSec from "@/components/ContactUsComponents/CUFirstSec";
import LocateUs from "@/components/ContactUsComponents/LocateUs";
import NextStep from "@/components/ContactUsComponents/NextStep";
import Navbar from "@/components/HomeComponents/Hero/Header";

const ContactUsContainer = () => {
  return (
    <>
    <Navbar/>
    <CUFirstSec/>
    <ContactInfo/>
    <ContactUsForm/>
   <LocateUs/>
   <NextStep/>
    </>
  );
};

export default ContactUsContainer;