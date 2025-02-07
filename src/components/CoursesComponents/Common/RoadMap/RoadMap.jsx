import Image from "next/image"
import TechnologyContainer from "./TechnologyContainer"

// DATA IMPORT
import RoadMapShort from "./RoadMapShort"
import RoadMapLong from "./RoadMapLong";


const RoadMap = ({roadMapObject,iconData,technologies}) => {
    // Data Destructure ----------------------------------------------

    // course work data
    const {course,content,show_Lines} = roadMapObject;
    

   return (
      <>
        <div className={`RoadMapContainer w-[100vw] relative overflow-hidden bg-[url('/images/roadMapBGImages/grid.png')] ${course=="Digital Marketing Course" && "py-[4rem]"} `}>

            {/* =============================== Components =============================== */}

            <div className="innerCont w-[100%] z-10 overflow-hidden">
                {/* ================================= UPPER CONTAINER ======================== */}
                {(course=="Ui Ux Design Course" || course=="Digital Marketing Course")
                ?<RoadMapLong content={content}/>:<RoadMapShort content={content}/>}
                

                {/* ================================= LOWER CONTAINER ======================== */}
                <div className="lowerCont z-100 bg-white w-[100%]  py-[3rem] px-[4rem]">
                    {/* Heading Container --------------------------------------- */}
                    <div className="headingContainer z-10 w-[100%] flex justify-center ">
                        <h2 className="heading z-10 text-[#213B61] text-[40px] font-semibold">Technologies & Tools:</h2>
                    </div>
                    {/* Technology Container --------------------------------------- */}
                    <TechnologyContainer technologies={technologies}/>
                </div>

            </div>

            {/* Background textures ======================================================== */}

            {(course != "Ui Ux Design Course" && course != "Digital Marketing Course") && <div className="target w-[220px] h-[150px] absolute top-[2rem] right-[4rem]  lg:block xs:hidden">
                <Image src="/images/roadMapBGImages/target.png" alt="grid image" width={220} height={150} className="w-[220px] h-[150px]"/>
            </div>}

            {/* RoadMap lines (Data analytics course) =================================================== */}

            {(show_Lines && course == "Data Analytics course") && <div className="lines w-[400px] h-[360px] z-2 absolute top-[6%] right-[20%] lg:block xs:hidden">
                <Image src="/images/roadMapBGImages/line1.png" alt="grid image" width={220} height={150} className="w-[400px] h-[360px]"/>
            </div>}
            {(show_Lines && course == "Data Analytics course") && <div className="lines w-[400px] h-[360px] z-2 absolute top-[22%] left-[17%] lg:block xs:hidden">
                <Image src="/images/roadMapBGImages/line2.png" alt="grid image" width={220} height={150} className="w-[400px] h-[360px]"/>
            </div>}
            {(show_Lines && course == "Data Analytics course") && <div className="lines w-[400px] h-[360px] z-2 absolute 1xl:top-[37%] 1xl:right-[16%] lg:top-[33%] lg:right-[16%] lg:block xs:hidden">
                <Image src="/images/roadMapBGImages/line3.png" alt="grid image" width={220} height={150} className="w-[400px] h-[360px]"/>
            </div>}
            {(show_Lines && course == "Data Analytics course") && <div className="lines w-[400px] h-[360px] z-2 absolute 1xl:top-[50%] 1xl:left-[16%] lg:top-[45%] lg:left-[16%] lg:block xs:hidden">
                <Image src="/images/roadMapBGImages/line4.png" alt="grid image" width={220} height={150} className="w-[400px] h-[360px]"/>
            </div>}
            
            {/* RoadMap lines (web Development course) ================================================== */}

            {(show_Lines && course == "Web Development Course") && <div className="lines w-[400px] h-[360px] z-2 absolute xl:top-[7%] xl:right-[20%] lg:top-[10%] lg:right-[18%] lg:block xs:hidden">
                <Image src="/images/roadMapBGImages/line1.png" alt="grid image" width={220} height={150} className="w-[400px] h-[360px]"/>
            </div>}
            {(show_Lines && course == "Web Development Course") && <div className="lines w-[400px] h-[360px] z-2 absolute top-[22%] left-[17%] lg:block xs:hidden">
                <Image src="/images/roadMapBGImages/line2.png" alt="grid image" width={220} height={150} className="w-[400px] h-[360px]"/>
            </div>}
            {(show_Lines && course == "Web Development Course") && <div className="lines w-[400px] h-[360px] z-2 absolute 1xl:top-[40%] 1xl:right-[16%] lg:top-[37%] lg:right-[16%] lg:block xs:hidden">
                <Image src="/images/roadMapBGImages/line3.png" alt="grid image" width={220} height={150} className="w-[400px] h-[360px]"/>
            </div>}
            {(show_Lines && course == "Web Development Course") && <div className="lines w-[400px] h-[360px] z-2 absolute 1xl:top-[50%] 1xl:left-[16%] lg:top-[50%] lg:left-[16%] lg:block xs:hidden">
                <Image src="/images/roadMapBGImages/line4.png" alt="grid image" width={220} height={150} className="w-[400px] h-[360px]"/>
            </div>}
            

            

            

            {/* other textures ======================================================== */}
            <div className="target w-[283px] h-[712px] absolute bottom-[30rem] right-[4rem] lg:block xs:hidden">
                <Image src="/images/roadMapBGImages/bubble.png" alt="grid image" width={712} height={283} className="w-[283px] h-[712px]"/>
            </div>

            {(course != "Ui Ux Design Course" && course != "Digital Marketing Course")&&<div className="arrow w-[78px] h-[147px] absolute top-[40rem] right-[4rem]">
                <Image src="/images/roadMapBGImages/arrowSmall.png" alt="grid image" width={78} height={147} className="w-[78px] h-[147px]"/>
            </div>}

            <div className="wave  w-[2419px] h-[1185px] absolute top-[40rem] left-[-40rem] rotate-[23deg]">
                <Image src="/images/roadMapBGImages/wave.png" alt="grid image" width={78} height={147} className="w-[3419px] h-[985px]"/>
            </div>

            <div className="multiCircle  w-[235px] h-[300px] absolute top-[60rem] left-[0rem] ">
                <Image src="/images/roadMapBGImages/multiCircle.png" alt="grid image" width={78} height={147} className="w-[235px] h-[300px] "/>
            </div>

            {/* color circles -------------------------------------------------------- */}
            <div className="colorCircles  w-[522px] h-[562px] absolute top-[0rem] left-[0rem] ">
                <Image src="/images/roadMapBGImages/leftBlueCircle.png" alt="grid image" width={78} height={147} className="w-[522px] h-[562px] "/>
            </div>

            <div className="colorCircles  w-[387px] h-[397px] absolute top-[0rem] left-[45%] ">
                <Image src="/images/roadMapBGImages/blueCircle.png" alt="grid image" width={78} height={147} className="w-[387px] h-[397px] "/>
            </div>

            <div className="colorCircles  w-[651px] h-[648px] absolute top-[8rem] right-[0rem] ">
                <Image src="/images/roadMapBGImages/grayCircle.png" alt="grid image" width={78} height={147} className="w-[651px] h-[648px] "/>
            </div>

            <div className="yellowCenterCircles  w-[1317px] h-[1317px] absolute top-[8rem] left-[0rem] ">
                <Image src="/images/roadMapBGImages/yellowCenterCircle.png" alt="yellow center image" width={78} height={147} className="w-[1317px] h-[1317px] "/>
            </div>

            <div className="yellowCircles  w-[400px] h-[400px] absolute bottom-[-2rem] left-[0rem] ">
                <Image src="/images/roadMapBGImages/yellowCircle.png" alt="yellow circle image" width={78} height={147} className="w-[400px] h-[400px] "/>
            </div>

            {/* ICON Images =========================================================================== */}

            {(course != "Ui Ux Design Course" && course != "Digital Marketing Course")&&<div className="excel Icon z-5 w-[80px] h-[80px] absolute top-[10%] xl:right-[15rem] lg:right-[10rem] rotate-[10deg] lg:block xs:hidden">
                <Image src={iconData.images[0].image} alt="excel Icon" width={80} height={80} className="w-[80px] h-[80px] "/>
            </div>}

            {(course != "Ui Ux Design Course" && course != "Digital Marketing Course")&&<div className="excel Icon z-5  w-[80px] h-[80px] absolute top-[22%] left-[12rem] rotate-[0deg] lg:block xs:hidden">
                <Image src={iconData.images[1].image} alt="excel Icon" width={80} height={80} className="w-[80px] h-[80px] "/>
            </div>}

            {(course != "Ui Ux Design Course" && course != "Digital Marketing Course")&&<div className="excel Icon z-5  w-[80px] h-[80px] absolute top-[27%] left-[25rem] rotate-[0deg] lg:block xs:hidden">
                <Image src={iconData.images[2].image} alt="excel Icon" width={80} height={80} className="w-[80px] h-[80px] "/>
            </div>}

            {(course != "Ui Ux Design Course" && course != "Digital Marketing Course")&&<div className="excel Icon z-5  w-[80px] h-[80px] absolute top-[38%] xl:right-[17rem] lg:right-[10rem] rotate-[0deg] lg:block xs:hidden">
                <Image src={iconData.images[3].image} alt="excel Icon" width={80} height={80} className="w-[80px] h-[80px] "/>
            </div>}

            {(course != "Ui Ux Design Course" && course != "Digital Marketing Course")&&<div className="excel Icon z-5  w-[80px] h-[80px] absolute top-[48%] left-[10rem] rotate-[0deg] lg:block xs:hidden">
                <Image src={iconData.images[4].image} alt="excel Icon" width={80} height={80} className="w-[80px] h-[80px] "/>
            </div>}

            {(course != "Ui Ux Design Course" && course != "Digital Marketing Course")&&<div className="excel Icon z-5  w-[80px] h-[80px] absolute top-[55%] left-[25rem] rotate-[0deg] lg:block xs:hidden">
                <Image src={iconData.images[5].image} alt="excel Icon" width={80} height={80} className="w-[80px] h-[80px] "/>
            </div>}

            {(course != "Ui Ux Design Course" && course != "Digital Marketing Course")&&<div className="excel Icon z-5  w-[80px] h-[80px] absolute top-[65%] xl:right-[25rem]  lg:right-[10rem] rotate-[0deg] lg:block xs:hidden">
                <Image src={iconData.images[6].image} alt="excel Icon" width={80} height={80} className="w-[80px] h-[80px] "/>
            </div>}

            {/* uiux page Icons =================================== */}

            {(course == "Ui Ux Design Course") && 
            <div className="xdIcon z-5  w-[80px] h-[80px] absolute top-[2%] left-[1%] lg:block xs:hidden">
                <Image src="/images/roadMapBGImages/iconsSpl/xd.png" alt="xd Icon" width={80} height={80} className="w-[80px] h-[80px] "/>
            </div>}

            {(course == "Ui Ux Design Course") && 
            <div className="xdIcon z-[11]  w-[80px] h-[80px] absolute top-[18%] right-[7%] rotate-[10deg] lg:block xs:hidden">
                <Image src="/images/roadMapBGImages/iconsSpl/adobe.png" alt="xd Icon" width={80} height={80} className="w-[80px] h-[80px] "/>
            </div>}

            {(course == "Ui Ux Design Course") && 
            <div className="xdIcon z-[11]  xl:w-[200px] xl:h-[325px] absolute top-[40%] left-[3%] lg:block xs:hidden lg:w-[150px] lg:h-[243px]">
                <Image src="/images/roadMapBGImages/iconsSpl/tip.png" alt="xd Icon" width={80} height={80} className="xl:w-[200px] xl:h-[325px] lg:w-[150px] lg:h-[243px]"/>
            </div>}

            {(course == "Ui Ux Design Course") && 
            <div className="xdIcon z-[11]  xl:w-[250px] xl:h-[600px] absolute top-[40%] right-[0%] lg:block xs:hidden lg:w-[200px] lg:h-[480px]">
                <Image src="/images/roadMapBGImages/iconsSpl/blackBrush.png" alt="xd Icon" width={80} height={80} className="xl:w-[250px] xl:h-[600px] lg:w-[200px] lg:h-[480px]"/>
            </div>}

            {(course == "Ui Ux Design Course") && 
            <div className="xdIcon z-[11]  xl:w-[263px] xl:h-[640px] lg:w-[200px] lg:h-[460px] absolute top-[45%] right-[0%] rotate-[-10deg] lg:block xs:hidden">
                <Image src="/images/roadMapBGImages/iconsSpl/blueBrush.png" alt="xd Icon" width={80} height={80} className="xl:w-[263px] xl:h-[640px] lg:w-[200px] lg:h-[460px]"/>
            </div>}

            {(course == "Ui Ux Design Course") && 
            <div className="xdIcon z-[11]  w-[80px] h-[80px] absolute top-[62%] left-[6%] lg:block xs:hidden">
                <Image src="/images/roadMapBGImages/iconsSpl/figma.png" alt="xd Icon" width={80} height={80} className="w-[80px] h-[80px] "/>
            </div>}
            
            {(course == "Ui Ux Design Course") && 
            <div className="xdIcon z-[11]  w-[80px] h-[80px] absolute top-[62%] left-[6%] lg:block xs:hidden">
                <Image src="/images/roadMapBGImages/iconsSpl/figma.png" alt="xd Icon" width={80} height={80} className="w-[80px] h-[80px] "/>
            </div>}

            {(course == "Ui Ux Design Course") && 
            <div className="xdIcon z-[11]  w-[60px] h-[60px] absolute top-[70%] left-[18%] lg:block xs:hidden">
                <Image src="/images/roadMapBGImages/iconsSpl/in.png" alt="xd Icon" width={80} height={80} className="w-[60px] h-[60px] "/>
            </div>}

            {(course == "Ui Ux Design Course") && 
            <div className="xdIcon z-[11]  w-[80px] h-[80px] absolute top-[70%] right-[10%] lg:block xs:hidden">
                <Image src="/images/roadMapBGImages/iconsSpl/sketch.png" alt="xd Icon" width={80} height={80} className="w-[80px] h-[80px] "/>
            </div>}

            {(course == "Ui Ux Design Course") && 
            <div className="xdIcon z-[11]  w-[80px] h-[80px] absolute top-[35%] right-[4%] lg:block xs:hidden">
                <Image src="/images/roadMapBGImages/iconsSpl/arrowLeft.png" alt="xd Icon" width={80} height={80} className="w-[80px] h-[80px] "/>
            </div>}

            {(course == "Ui Ux Design Course") && 
            <div className="xdIcon z-[11]  w-[80px] h-[80px] absolute top-[35%] right-[4%] lg:block xs:hidden">
                <Image src="/images/roadMapBGImages/iconsSpl/arrowLeft.png" alt="xd Icon" width={80} height={80} className="w-[80px] h-[80px] "/>
            </div>}

            {/* Digital Marketing Page Icons ==================== */}
            {(course == "Digital Marketing Course") && 
            <div className="xdIcon z-[11]  w-[138px] h-[261px] absolute top-[35%] right-[4%] lg:block xs:hidden">
                <Image src="/images/roadMapBGImages/iconsSpl/arrowUp.png" alt="xd Icon" width={80} height={80} className="w-[138px] h-[261px] "/>
            </div>}

            {(course == "Digital Marketing Course") && 
            <div className="xdIcon z-[11]  w-[120px] h-[100px] absolute top-[35%] xl:right-[15%] lg:block xs:hidden lg:right-[9%]">
                <Image src="/images/roadMapBGImages/iconsSpl/meta.png" alt="xd Icon" width={80} height={80} className="w-[120px] h-[100px] "/>
            </div>}

            {(course == "Digital Marketing Course") && 
            <div className="xdIcon z-[11]  w-[90px] h-[90px] absolute top-[40%] xl:left-[10%] lg:left-[5%] lg:block xs:hidden">
                <Image src="/images/roadMapBGImages/iconsSpl/canva.png" alt="xd Icon" width={80} height={80} className="w-[90px] h-[90px] "/>
            </div>}

            {(course == "Digital Marketing Course") && 
            <div className="xdIcon z-[11]  w-[120px] h-[120px] absolute top-[53%] left-[6%] lg:block xs:hidden">
                <Image src="/images/roadMapBGImages/iconsSpl/seo.png" alt="xd Icon" width={80} height={80} className="w-[120px] h-[120px] "/>
            </div>}

            {(course == "Digital Marketing Course") && 
            <div className="xdIcon z-[11]  w-[170px] h-[150px] absolute top-[49%] xl:right-[13%] lg:block xs:hidden lg:right-[7%]">
                <Image src="/images/roadMapBGImages/iconsSpl/googleAnalytics.png" alt="xd Icon" width={80} height={80} className="w-[170px] h-[150px] "/>
            </div>}

            {(course == "Digital Marketing Course") && 
            <div className="xdIcon z-[11]  w-[80px] h-[80px] absolute top-[2%] left-[4%] lg:block xs:hidden">
                <Image src="/images/roadMapBGImages/iconsSpl/linkedInAds.png" alt="xd Icon" width={80} height={80} className="w-[80px] h-[80px] "/>
            </div>}

            {(course == "Digital Marketing Course") && 
            <div className="xdIcon z-[11]  w-[110px] h-[80px] absolute top-[1%] right-[40%] lg:block xs:hidden">
                <Image src="/images/roadMapBGImages/iconsSpl/google.png" alt="xd Icon" width={80} height={80} className="w-[110px] h-[80px] "/>
            </div>}

        </div>
      </>
   )
}

export default RoadMap