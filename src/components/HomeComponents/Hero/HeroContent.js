import Image from 'next/image';
import Graphic1 from '../../../../public/images/graphic1.png';

export default function HeroContent() {
  return (
    <div>
      <h1 className="text-xl md:text-4xl text-white mb-4">
        IGNITE YOUR <span className="text-white font-bold">TECH PASSION</span>
        <br />
        LAUNCH YOUR DREAM <span className="text-white font-bold">CAREER</span>
      </h1>

      <h2 className="text-2xl text-white mb-6">Transformative tech education</h2>

      <p className="text-gray-300 mb-8">
        At Takshashila Labs, your journey begins with you. We don’t just enroll students – we take the time to
        understand your unique passions, interests, and career goals. By learning what excites and motivates you, we
        guide you to the course that aligns perfectly with your strengths and aspirations. Whether your passion lies in
        coding, design, data, or security, we provide the tailored training and mentorship you need to unlock your full
        potential and achieve success in the ever-evolving tech industry. Your future deserves a thoughtful start – and
        that’s what we promise. Ready to turn your passion into a career? Let’s discover your path together. Enroll now
        and take the first step toward building the career you’ve always dreamed of!
      </p>

      <Image
        className="z-0 absolute top-[320px] left-[280px] h-[340px]"
        src={Graphic1}
        alt="Graphic"
      />

      <div className="flex gap-4">
        <button
          size="lg"
          className="rounded-lg w-[200px] z-10 h-[45px] bg-gradient-to-r from-[#cce973] to-[#46d3c1] text-[#ffff] hover:bg-none hover:border hover:border-white"
        >
          ENROLL NOW
        </button>
      </div>
    </div>
  );
}
