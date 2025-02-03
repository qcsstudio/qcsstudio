import SocialSidebar from './SocialSlidebar';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';
import Header from './Header';
import TopHeader from './TopHeader';
import LowerHome from './LowerHome';

export default function Hero() {
  return (
    <>
      <TopHeader />
      <Header />
      <div className="Hero relative min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center">
        {/* Social Media Sidebar */}
        <SocialSidebar />

        {/* Main Content */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
      {/* Ensure LowerHome is fully visible on mobile */}
      <div className="w-full">
        <LowerHome />
      </div>
    </>
  );
}
