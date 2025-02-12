import HeroContent from './HeroContent';
import LowerHome from './LowerHome';
import Navbar from '@/components/Navbar';

export default function Hero() {
  return (
    <>
      <Navbar />
      <div className="Hero relative min-h-[calc(100vh-80px)] flex justify-center flex-col md:flex-row items-center">
          <HeroContent />
      </div>
      <div className="w-full">
        <LowerHome />
      </div>
    </>
  );
}
