import Image from 'next/image';
import Link from 'next/link';
import Facebook from '../../../public/icons/facebook.png';
import Linkedin from '../../../public/icons/linkedin.png';
import Instagram from '../../../public/icons/instagram.png';

export default function SocialSidebar() {
  return (
    <>
      <div className="w-[2px] h-[500px] bg-white relative left-[150px]"></div>
      <div className="w-[1px] h-[200px] relative left-[100px] bottom-[150px] bg-gradient-to-b from-[#0e2d5b] to-white rounded-b-full"></div>
      <div className="absolute left-[90px] top-[360px] -translate-y-1/2 flex flex-col gap-6">
        <Link href="https://www.facebook.com/takshashilalabs" legacyBehavior >
          <a className="text-white hover:text-yellow-400 transition">
            <Image src={Facebook} alt="Facebook" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/company/takshashilalabs/" legacyBehavior >
          <a className="text-white relative right-[3px] hover:text-yellow-400 transition">
            <Image src={Linkedin} alt="LinkedIn" width={28} height={28} />
          </a>
        </Link>
        <Link href="https://www.instagram.com/takshashilalabs/" legacyBehavior >
          <a className="text-white hover:text-yellow-400 transition">
            <Image src={Instagram} alt="Instagram" width={20} height={20} />
          </a>
        </Link>
      </div>
      <div className="w-[1px] h-[170px] relative left-[97px] top-[210px] bg-gradient-to-b from-white to-[#0e2d5b] rounded-b-full"></div>
    </>
  );
}
