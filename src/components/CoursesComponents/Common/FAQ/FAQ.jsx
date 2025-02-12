import Image from "next/image";
import FaqContainer from "./FaqContainer";

// Data import 
import {faqData} from "@/Data/faq";

const FAQ = () => {
  return (
    <>
    
    <div className="cont w-[100%] flex justify-center py-[5rem] relative  overflow-hidden">
        <div className="innerCont z-10 w-[80%]">
            <div className="topCont flex flex-col items-center justify-center">
                <p className="heading text-[#527CBD] font-semibold text-[23px] ">FAQ</p>
                <p className="heading text-[#0F2E5B] font-bold lg:text-[45px] md:text-[35px] sm:text-[28px]xs:text-[24px]">Frequently Asked Questions</p>
                <p className="heading text-[#222222] font-normal xl:text-[18px] lg:text-[16px] md:text-[14px] xs:text-[12px]">Got it! Here's the expanded FAQ section with more detailed answers, incorporating the additional questions you suggested</p>
            </div>
            <div className="bottomCont mt-[2rem] flex flex-wrap  justify-between">
                {faqData?.map((data)=>{
                    return <FaqContainer key={data.id} data={data} />
                })}
            </div>
        </div>

        {/* Textures */}

        <div className="arrow w-[167.92px] h-[102.69px] absolute top-[2rem] left-[4rem] rotate-[9.96deg]">
            <Image src="/images/faqImages/arrow.png" alt="arrow texture" width={167} height={102} />
        </div>

        <div className="bgBlue z-2 w-[458.13px] h-[458.13px]  absolute top-[2rem] left-[5rem]">
            <Image className="z-2 drop-shadow-lg blur-sm" width={458} height={458} src="/images/faqImages/bgBlue.png" alt="arrow texture" />
        </div>

        <div className="rectangles z-0 w-[490px] h-[490px] absolute top-[3rem] left-[-10rem] rotate-[9.96deg]">
            <Image className="opacity-[.02]" width={490} height={490} src="/images/faqImages/lightRectangle.png" alt="arrow texture" />
        </div>

        <div className="rectangles z-0 w-[490px] h-[490px] absolute top-[10rem] left-[10rem] rotate-[9.96deg]">
            <Image className="opacity-[.004]" width={490} height={490} src="/images/faqImages/lightRectangle.png" alt="arrow texture" />
        </div>

        <div className="target  w-[140px] h-[98.67px] absolute top-[2rem] right-[2rem]">
            <Image src="/images/faqImages/target.png" width={140} height={98} alt="target texture" />
        </div>

        <div className="questionMark  w-[85.3px] h-[77.17px] absolute bottom-[20rem] left-[4rem]">
            <Image className="" width={85} height={77} src="/images/faqImages/questionMark.png" alt="question mark texture" />
        </div>

        <div className="arrowDotted  w-[169.27px] h-[169.74px]  absolute bottom-[2rem] left-[50%]">
            <Image className="" width={169} height={169} src="/images/faqImages/dottedArrow.png" alt="dotted arrow texture" />
        </div>

        <div className="waves   w-[100vw] h-[80vh]  absolute top-[0rem] right-[0rem]">
            <Image className="" width={100} height={80} src="/images/faqImages/wave.png" alt="dotted waves texture" />
        </div>

        <div className="bgYellow z-2 w-[566.72px] h-[567.79px]  absolute bottom-[2rem] right-[0rem]">
            <Image className="w-[566.72px] z-2 h-[567.79px]" width={566} height={567} src="/images/faqImages/bgYellow.png" alt="bg yellow texture" />
        </div>
        
        
        <div className="rectangles z-0 w-[289.85px] h-[289.85px] absolute right-[10rem] bottom-[22rem] rotate-[9.96deg]">
            <Image className="opacity-[.02]" width={289} height={289} src="/images/faqImages/lightRectangle.png" alt="arrow texture" />
        </div>

        <div className="rectangles z-0 w-[289.85px] h-[289.85px] absolute right-[5rem] bottom-[12rem] rotate-[9.96deg]">
            <Image className="opacity-[.02]" width={289} height={289} src="/images/faqImages/lightRectangle.png" alt="arrow texture" />
        </div>

        {/* <div className="rectangles z-0 w-[490px] h-[490px] absolute top-[3rem] left-[-10rem] rotate-[9.96deg]">
            <img className="opacity-[.02]" src="/images/faqImages/lightRectangle.png" alt="arrow texture" />
        </div> */}

    </div>
      
    </>
  )
}

export default FAQ
