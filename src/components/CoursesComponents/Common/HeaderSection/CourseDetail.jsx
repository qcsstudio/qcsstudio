import Image from "next/image";
import Link from "next/link";

const CourseDetail = ({courseDetailObject}) => {

    const {id,heading,sub_heading,description,sub_description,images} = courseDetailObject;

  return (
    <>
      <div className={`flex  w-[100vw]  ${id==3 ? "justify-between  py-[4rem] ":"justify-center py-[4rem]" } lg:px-[0rem] xs:px-[2rem]  relative  overflow-hidden `} 
        style={{background: "rgb(4,36,82)", background: "radial-gradient(circle, rgba(4,36,82,1) 0%, rgba(2,13,41,1) 100%)"}}>
        
            
        
            <div className={` z-10 flex   lg:justify-center w-[100%] ${id==3 ? " gap-[1rem] justify-between" : "lg:justify-center gap-[2rem]" }  lg:flex-row xs:flex-col `}>

                <div className="left flex flex-col justify-center lg:w-[40%] lg:my-0 md:w-[100%] md:mt-[30px]
                xs:w-[100%]">

                    <div className="heading xl:w-[562px] lg:w-[500px]">
                        <h2 className="text-[700] flex font-bold leading-tight flex-3 lg:flex-col sm:flex-row xs:flex-col">
                            <span className="text-[700] xl:text-[30px] 1080:text-[25px] text-[#C4EF01] ">{heading} </span> 
                            {sub_heading.map((data)=>{
                                return <span key={data.id} className="text-[700] text-[#ffffff] xl:text-[35px]  uppercase lg:text-[30px]">{data.sub_headings}  &nbsp;</span>
                            })}
                        </h2>
                    </div>

                    <div className="desc w-[100%]  h-[auto] my-[15px] ">
                        {description.map((data,index)=>{
                            return <p key={index} className=" text-[400] xl:text-[16px] lg:text-[13px] sm:text-[13px] xs:text-[11px] text-[#ffffff] leading-[30px]">{data.desc}</p>
                        })}
                    </div>
                    
                    <div className="subDesc  lg:flex-col sm:w-[734.26px] h-[86px] xs:w-[100%] flex sm:flex-row xs:flex-col">
                        {sub_description.map((data,index)=>{
                            return <p key={data.id} className="text-[#527CBD]  text-[600] xl:text-[20px] lg:text-[16px]">{data.sub_desc}</p>
                        })}
                    </div>

                    <button className="xl:w-[220px] xl:h-[60px] xl:rounded-[15px] text-[#ffffff] border lg:w-[190] lg:h-[40px] lg:rounded-[10px] xs:w-[30%] xs:h-[40px] xs:rounded-[10px] xs:text-[12px]"><Link href={"#"}>ENROLL NOW</Link></button>
                    
                </div>

                <div className={`right lg:w-[50%]  ${id==3 ?" flex items-end justify-end lg:mt-[0rem] xs:mt-[2rem]":"flex lg:items-center"} md:w-[100%] xs:w-[100%] `} >
                    <div className={`innerCont flex  ${id==3 ? "w-[100%] relative" :"justify-center w-[100%]"} ${images?.length > 1 ? "" :"justify-center items-center"}`}>
                        {
                            images?.map((data,index)=>{
                                return (<>
                                
                                {images?.length > 1 ? 
                                  <Image width={100} height={100} className={`${(data.id%2==0) ? "mt-[30]" : "mt-[17%]"} xl:w-[33%] xl:h-[30%] lg:w-[33%] lg:h-[30%] md:w-[33%] md:h-[70%] xs:w-[45%] `} key={index} src={data.url} alt={data.alt} /> : 
                                  <Image width={100} height={100} className={`${id==3 ? "lg:w-[70%] right-[0rem] bottom-[0rem] xs:w-[60%]"  : "lg:w-[100%] sm:w-[70%]" } `} key={index} src={data.url} alt={data.alt} />}
                                </> )
                            })
                        }
                    </div>
                    
                </div>

            </div>

            <div className="circles absolute top-0 left-0 w-[131.56px] h-[185.36]">
                <Image  src="/images/textures/courseHeaderTextures/circles.png" width={100} height={100} className="w-[100%] h-[100%]" alt="circles" />
            </div>

            <div className="circles absolute  w-[1903.9px] h-[548.51px] top-[170.65px] left-[0px] rotate-[20.91deg]">
                <Image  src="/images/textures/courseHeaderTextures/waves.png"width={100} height={100} className="w-[100%] h-[100%]" alt="waves" />
            </div>

            <div className="circles absolute  w-[712px] h-[283px] bottom-[10px] left-[200px] ">
                <Image  src="/images/textures/courseHeaderTextures/bubble.png" width={100} height={100} className="w-[100%] h-[100%]" alt="bubble" />
            </div>

            <div className="circles absolute  w-[200px] h-[269px]  top-[0px] left-[45%] ">
                <Image  src="/images/textures/courseHeaderTextures/multiRectangles.png" width={100} height={100} className="w-[100%] h-[100%]" alt="multiRectangle" />
            </div>

            <div className="circles absolute  w-[200px] h-[269px]  bottom-[110px] right-0 ">
                <Image  src="/images/textures/courseHeaderTextures/rectangleCircle.png" width={100} height={100} className="w-[100%] h-[100%]" alt="rectangle circle" />
            </div>

        </div>
      
    </>
  )
}

export default CourseDetail;
