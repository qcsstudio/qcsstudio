import Button from "@/components/Button/Button";
import EnrollCard from "./EnrollCard";
import Image from "next/image";
import { enrollCardData } from "@/Data/enrollCard";
import { enrollData } from "@/Data/enroll";
import Link from "next/link";

const Enroll = () => {
    const {id,heading,subHeading,description} = enrollData[0];
   return (
      <>
         <div className="cont w-[100%] py-[4rem] md:px-[5rem] overflow-hidden relative xs:px-[2.5rem]" style={{background: "rgb(4,36,82)", background: "radial-gradient(circle, rgba(4,36,82,1) 0%, rgba(2,13,41,1) 100%)"}}>

            <div className="innerCont w-[100%]  flex flex-col items-center">
                <div className="topCont w-[100%] overflow-hidden">
                    <div className="headingCont leading-tight md:w-[756px] xs:w-[100%]">
                        <h2 className="headingReady xl:text-[40px] text-[#C1EE04] font-bold uppercase md:text-[35px] sm:text-[28px] xs:text-[20px]">{heading}</h2>
                        <h2 className="headingQuestion uppercase xl:text-[40px] text-[#FFFFFF] font-bold md:text-[35px] sm:text-[28px] xs:text-[20px]">{subHeading}</h2>
                    </div>
                    <div className="descriptionCont  lg:w-[490px] overflow-hidden mt-[1rem] xs:w-[100%]">
                        <p className="descriptionHeading xl:text-[17px] font-normal text-[#FFFFFF] md:text-[15px] xs:text-[13px]">{description}</p>
                    </div>
                </div>

                <div className="bottomCont w-[100%] flex flex-col ">
                    <div className="innerTop flex lg:justify-between w-[100%]  my-[3rem] lg:flex-row xs:flex-wrap  xs:items-center overflow-hidden">
                    {
                        enrollCardData.map((data)=>{
                            return <EnrollCard key={data.id} data={data} />
                        })
                    }
                    </div>

                    <div className="innerBottom flex lg:w-[100%] justify-center items-center sm:w-[100%]">
                        <Image src="/images/enrollImages/left.png" width={200} height={0} className="w-[200px] h-[1px] mr-[3rem]" alt="line"/>
                               <Link href={'/enroll-now'} className="text-white border-white cursor-pointer" > Enroll Now</Link>  
                        <Image src="/images/enrollImages/right.png"  width={200} height={0} className="w-[200px] h-[1px] ml-[3rem]" alt="line"/>
                    </div>
                    
                </div>
            </div>

            <div className="smallRectangle w-[130px] h-[105px] absolute top-[1rem] left-[-1rem] overflow-hidden">
                <Image src="/images/enrollImages/smallRectangle.png" width={1024} height={105} alt="small rectangle" className="w-[130px] h-[105px] "/>
            </div>

            <div className="largeRectangle w-[200px] h-[160px] absolute top-[4rem] left-[1rem] overflow-hidden md:block xs:hidden">
                <Image src="/images/enrollImages/largeRectangle.png" width={1024} height={160} alt="large rectangle" className="w-[200px] h-[160px] "/>
            </div>

            <div className="smallMultiRectangle w-[180px] h-[160px] absolute bottom-[1rem] left-[1rem] overflow-hidden">
                <Image src="/images/enrollImages/smallMultiRectangle.png" width={180} height={160} alt="small Multi rectangle" className="w-[180px] h-[160px] "/>
            </div>

            <div className="waves w-[100vw] h-[70vh] absolute bottom-[0rem]  overflow-hidden">
                <Image src="/images/enrollImages/waves.png" width={1024} height={160} alt="wave Image" className="w-[100vw] h-[70vh] "/>
            </div>

            <div className="target lg:w-[189px] lg:h-[130px] sm:w-[169px] sm:h-[110px] sm:block xs:hidden absolute bottom-[1.5rem] right-[3rem]  overflow-hidden">
                <Image src="/images/enrollImages/target.png" width={1024} height={130} alt="wave Image" className="lg:w-[189px] lg:h-[130px] sm:w-[169px] sm:h-[110px] "/>
            </div>

            <div className="largeMultiRectangle  w-[220px] h-[288px] absolute top-[1rem] right-[3rem]  overflow-hidden xl:block lg:hidden">
                <Image src="/images/enrollImages/largeMultiRectangle.png" width={1024} height={288} alt="large Multi Rectangle Image" className="w-[220px] h-[288px] "/>
            </div>

            <div className="Bubble w-[700px] h-[250px] absolute top-[1rem] left-[25%]  overflow-hidden lg:block xs:hidden">
                <Image src="/images/enrollImages/bubble.png" width={1024} height={288} alt="Bubble Rectangle Image" className="w-[700px] h-[250px] "/>
            </div>

         </div>
      </>
   )
}

export default Enroll;
