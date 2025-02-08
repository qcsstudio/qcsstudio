import HeroContent from './HeroContent';
import Location from "@/components/Location";
import LowerHome from './LowerHome';
import Navbar from '@/components/Navbar';

export default function Hero() {
  return (
    <>
      <Location />
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
