import SocialSidebar from '../HomeComponents/SocialSlidebar';
import HeroContent from '../HomeComponents/HeroContent';
import HeroImage from '../HomeComponents/HeroImage';
import Header from '../HomeComponents/Header';
import TopHeader from './TopHeader';
import LowerHome from '../HomeComponents/LowerHome';

export default function Hero() {
  return (
    <>
    <TopHeader />

    <Header />
    <div className="Hero relative min-h-[calc(100vh-80px)] flex items-center">
  

      {/* Social Media Sidebar */}
      <SocialSidebar />

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        <HeroContent />
        <HeroImage />
     
      </div>
    </div>
    </>
  );
}

