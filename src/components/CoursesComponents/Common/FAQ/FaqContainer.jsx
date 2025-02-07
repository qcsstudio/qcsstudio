import Image from 'next/image'

const FaqContainer = ({data}) => {
    const {id,heading,description} = data;
  return (
    <>
      <div className={`cont xl:w-[40%] flex ${id==7?"mt-[1rem] mb-[0px]":"my-[1rem]"} lg:w-[45%] `}>
        <div className="left lg:w-[15%] md:w-[7%] sm:w-[8%]  xs:w-[10%]">
            <div className="imgCont xl:w-[40px] xl:h-[47.88px] lg:w-[36px] lg:h-[36px] md:w-[32px] md:h-[32px] sm:w-[28px] sm:h-[28px] xs:w-[24px] xs:h-[24px]">
                <Image src="/images/faqImages/faq.png" alt="Faq Icon" width={40} height={47} className='xl:w-[40px] xl:h-[47.88px] lg:w-[36px] lg:h-[36px]  md:w-[32px] md:h-[32px] sm:w-[28px] sm:h-[28px] xs:w-[24px] xs:h-[24px]' />
            </div>
        </div>
        <div className="right w-[85%]">
            <p className="heading text-[#0E2D5B] font-semibold mb-[10px] xl:text-[20px] lg:text-[19px]  ">{heading}</p>
            <p className="description text-[#222222] xl:text-[18px] lg:text-[16px] lg:text-left md:text-justify sm:text-[16px] xs:text-[14px] xs:text-justify">{description}</p>
        </div>
      </div>
    </>
  )
}

export default FaqContainer
