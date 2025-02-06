import Image from "next/image";
import Link from "next/link";
import Facebook from "../../../../public/icons/facebook.png";
import Linkedin from "../../../../public/icons/linkedin.png";
import Instagram from "../../../../public/icons/instagram.png";

export default function SocialSidebar() {
  return (
    <>
      <div className="gap-5 flex flex-col">
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
      <div className="w-[2px] h-[500px] bg-white"></div>
    </>
  );
}
