import Image from "next/image"
import ScopeCard from "./ScopeCard"

const Career = ({careerObject}) => {
    const {id,course,heading,highlight_heading,after_heading,description,sub_description,career,salary,salary_description,potential_description} = careerObject;
   return (
      <>
         <div className="careerContainer w-[100vw] bg-[#EFFAFF] sm:p-[6rem] xs:p-[4rem] relative overflow-hidden">

            <div className="innerContainer z-[10] flex flex-col">
                <div className="headingContainer">
                    <div className="headingInnerCont flex flex-col justify-center items-center">
                        <h2 className="heading text-[#0D154B] lg:text-[35px] font-semibold capitalize mb-[1rem] md:text-[30px] sm:text-[25px] xs:text-[20px] text-center">{heading}<span className="highlighter text-[#C4EF01] "  >{highlight_heading}</span>{after_heading}</h2>
                        <p className="desc lg:text-[16px] md:text-[14px] sm:text-[13px] md:w-[68%] xs:w-[100%] xs:text-[12px] text-center text-[#0D154B]">{description}</p>
                        <p className="desc lg:text-[16px] md:text-[14px] sm:text-[13px] xs:text-[12px] w-[68%] text-center text-[#0D154B] xs:w-[100%]">{sub_description}</p>
                    </div>
                </div>
                <div className="scopeContainer w-[100%] flex justify-center items-center flex-wrap gap-[2rem] mt-[3rem]">
                    {
                        career.map((data)=>{
                            return <ScopeCard key={data.id} data={data} />;
                        })
                    }
                    
                    
                </div>
                <div className="salaryContainer flex flex-col justify-center items-center mt-[4rem]">
                    <p className="heading font-semibold lg:text-[35px] md:text-[30px] sm:text-[25px] xs:text-[20px] bg-gradient-to-r from-[#29ABE2] to-[#CEFF00] bg-clip-text text-transparent text-center">Average Salary for {salary} in India</p>
                    <p className="desc text-[#001F61] lg:text-[16px] md:text-[14px] sm:text-[13px] font-normal md:w-[50%] xs:w-[80%] text-center">{salary_description}</p>
                </div>
                <div className="potentialContainer flex flex-col justify-center items-center mt-[2rem]">
                <p className="heading font-semibold lg:text-[35px] md:text-[30px] sm:text-[25px] xs:text-[20px] text-center bg-gradient-to-r from-[#29ABE2] to-[#CEFF00]  bg-clip-text text-transparent">Potential Employers</p>
                <p className="desc text-[#001F61] lg:text-[16px] md:text-[14px] font-normal md:w-[40%] text-center sm:text-[13px] xs:w-[80%]">{potential_description}</p>
                </div>
            </div>

            {/* Textures ========================================================*/}

            {/* other Textures------------------------------ */}

            <div className="arrow absolute z-0 top-[8%] left-[10%] w-[116px] h-[238px] md:block xs:hidden">
                <Image src="/images/careerImages/backGround/arrow.png" width={136} height={258} alt="arrow" className="w-[116px] h-[238px]"/>
            </div>

            <div className="mutliCircles absolute z-0 top-[2%] right-[0%] w-[250px] h-[372px]">
                <Image src="/images/careerImages/backGround/multiCircle.png" width={136} height={258} alt="mutliCircles" className="w-[250px] h-[372px]"/>
            </div>

            <div className="target absolute z-0 top-[50%] right-[10%] w-[120px] h-[120px]">
                <Image src="/images/careerImages/backGround/target.png" width={136} height={258} alt="target" className="w-[120px] h-[120px]"/>
            </div>

            <div className="wave absolute z-0 bottom-[0%] right-[0%] w-[100vw] h-[400px]">
                <Image src="/images/careerImages/backGround/wave.png" width={136} height={258} alt="wave" className="w-[100vw] h-[500px]"/>
            </div>

            {/* color Textures------------------------------ */}
            
            <div className="colorCircles absolute z-0 top-[10%] right-[0%] w-[700px] h-[700px]">
                <Image src="/images/careerImages/backGround/yellowCircle.png" width={136} height={258} alt="colorCircles" className="w-[700px] h-[700px]"/>
            </div>
            
            <div className="colorCircles absolute z-0 top-[10%] left-[0%] w-[700px] h-[700px]">
                <Image src="/images/careerImages/backGround/blueCircle.png" width={136} height={258} alt="colorCircles" className="w-[700px] h-[700px]"/>
            </div>

            {/* data analytics Textures------------------------------ */}
            
            {(course == "Data Analytics course") && <div className="graphGreen absolute opacity-20 z-0 top-[30%] right-[0%] w-[100vw] h-[350px]">
                <Image src="/images/careerImages/backGround/graphGreen.png" width={136} height={258} alt="graphGreen" className="w-[100vw] h-[350px]"/>
            </div>}
            
            {(course == "Data Analytics course") && <div className="graphblue absolute opacity-20 z-0 top-[40%] right-[0%] w-[100vw] h-[350px]">
                <Image src="/images/careerImages/backGround/graphblue.png" width={136} height={258} alt="graphblue" className="w-[100vw] h-[350px]"/>
            </div>}

            {/* rectangles Textures------------------------------ */}
            
            <div className="darkRectangle absolute opacity-5 z-0 top-[20%] right-[40%] w-[350px] h-[524px]">
                <Image src="/images/careerImages/backGround/darkRectangle.png" width={136} height={258} alt="darkRectangle" className="w-[350px] h-[524px]"/>
            </div>
            
            <div className="darkRectangle2 absolute opacity-5 z-0 top-[20%] right-[30%] w-[350px] h-[524px]">
                <Image src="/images/careerImages/backGround/darkRectangle2.png" width={136} height={258} alt="darkRectangle2" className="w-[350px] h-[524px]"/>
            </div>


            {/* web dev Textures------------------------------ */}
            
            {(course == "Web Development course") && <div className="gearIcon absolute z-0 bottom-[4%] left-[0%] w-[148px] h-[148px] sm:block xs:hidden">
                <Image src="/images/careerImages/backGround/gear.png" width={198} height={198} alt="gearIcon" className="w-[148px] h-[148px]"/>
            </div>}
            
            {(course == "Web Development course") && <div className="jsIcon absolute z-0 lg:bottom-[20%] md:bottom-[15%] md:block xs:hidden left-[10%] w-[100px] h-[100px]">
                <Image src="/images/careerImages/backGround/js.png" width={198} height={198} alt="jsIcon" className="w-[100px] h-[100px]"/>
            </div>}
                        
            
            {(course == "Web Development course") && <div className="cssIcon absolute z-0 bottom-[5%] right-[4%] w-[100px] h-[100px] sm:block xs:hidden">
                <Image src="/images/careerImages/backGround/css.png" width={198} height={198} alt="cssIcon" className="w-[100px] h-[100px]"/>
            </div>}
            
            {/* aeroplane texture */}
            <div className="cssIcon absolute z-0 top-[0%] right-[0%] w-[300px] h-[300px] lg:block xs:hidden">
                <Image src="/images/careerImages/backGround/plane.png" width={198} height={198} alt="cssIcon" className="w-[300px] h-[300px]"/>
            </div>
            
            {/* uiux texture */}
            {(course == "UiUx Design course") && <div className="cssIcon absolute z-0 top-[60%] left-[0%] w-[150px] h-[300px]">
                <Image src="/images/careerImages/backGround/brush.png" width={198} height={198} alt="cssIcon" className="w-[150px] h-[300px] sm:block xs:hidden"/>
            </div>}
                        

         </div>
      </>
   )
}

export default Career