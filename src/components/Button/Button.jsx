import Link from "next/link";

const Button = ({data}) => {
    const {text,url} = data;
   return (
      <>
        <Link href={url}><button className="xl:w-[220px] xl:h-[60px] lg:rounded-[15px] text-[#ffffff] border lg:w-[220px] lg:h-[60px] uppercase md:rounded-[9px] md:text-[12px] md:px-[2rem] md:py-[1rem] xs:px-[1.5rem] xs:py-[.5rem] xs:rounded-[9px] xs:text-[10px]" >{text}</button></Link>
      </>
   )
}

export default Button