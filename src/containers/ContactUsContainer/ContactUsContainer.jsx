import ContactInfo from "@/components/ContactUsComponents/ContactInfo";
import ContactUsForm from "@/components/ContactUsComponents/ContactUsForm";
import CUFirstSec from "@/components/ContactUsComponents/CUFirstSec";
import LocateUs from "@/components/ContactUsComponents/LocateUs";
import NextStep from "@/components/ContactUsComponents/NextStep";
import FAQ from "@/components/CoursesComponents/Common/FAQ/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewFooter from "@/components/NewFooter";

const ContactUsContainer = () => {
  return (
    <>
      <Navbar />
      <CUFirstSec />
      <ContactInfo />
      <ContactUsForm />
      <LocateUs />
      <FAQ/>
      <NextStep />
      <Footer/>
    </>
  );
};

export default ContactUsContainer;