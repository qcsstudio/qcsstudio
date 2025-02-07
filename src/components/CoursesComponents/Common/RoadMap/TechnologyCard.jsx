import Image from "next/image"

const TechnologyCard = ({data}) => {
    const {id,name,image} = data;
   return (
      <>
         <div className="card z-10 flex gap-[.5rem] lg:w-[30%] lg:h-[8rem] bg-white py-[1.5rem] px-[2rem] rounded-[1rem] mt-[2rem] mx-[1rem] md:w-[32%] md:h-[8rem]  sm:w-[70%] xs:w-[80%] xs:h-[10rem]">
            <div className="imageCont md:w-[30%] xs:w-[35%] flex justify-center items-center">
                <Image src={image} width={90} height={97} alt="subject Image" className="md:w-[100%]  xs:w-[70%] xs:md:h-[80%]"/>
            </div>
            <div className="textCont w-[60%] flex  items-center ">
                <p className="font-semibold lg:text-[14px] xs:text-[12px]">{name}</p>
            </div>
         </div>
      </>
   )
}

export default TechnologyCard