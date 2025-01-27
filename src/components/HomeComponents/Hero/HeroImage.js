import Image from 'next/image';
import heroMain from '../../../../public/images/Hero-main.png';

export default function HeroImage() {
  return (
    <div className="relative h-[500px]">
      <Image
        src={heroMain}
        alt="Hero Main"
        className="object-cover rounded-lg relative top-[60px]"
        layout="responsive"
      />
    </div>
  );
}
