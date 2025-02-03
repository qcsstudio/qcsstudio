import Image from "next/image";
import Link from "next/link";
import Facebook from "../../../../public/icons/facebook.png";
import Linkedin from "../../../../public/icons/linkedin.png";
import Instagram from "../../../../public/icons/instagram.png";

export default function SocialSidebar() {
  return (
    <>
      {/* Main Vertical Line */}
      <div className="w-[2px] h-[500px] bg-white hidden md:block absolute left-[150px] md:left-[100px] lg:left-[150px]"></div>

      {/* Social Icons */}
      <div className="absolute left-0 md:left-[90px] top-[360px] -translate-y-1/2 flex flex-col gap-6 px-4 md:px-0">
        {/* Social Icons */}
        <Link href="https://www.facebook.com/takshashilalabs" legacyBehavior>
          <a className="text-white hover:text-yellow-400 transition">
            <Image src={Facebook} alt="Facebook" width={28} height={28} />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/company/takshashilalabs/" legacyBehavior>
          <a className="text-white hover:text-yellow-400 transition">
            <Image src={Linkedin} alt="LinkedIn" width={28} height={28} />
          </a>
        </Link>
        <Link href="https://www.instagram.com/takshashilalabs/" legacyBehavior>
          <a className="text-white hover:text-yellow-400 transition">
            <Image src={Instagram} alt="Instagram" width={28} height={28} />
          </a>
        </Link>
      </div>
    </>
  );
}
