const RoadMapCard = ({data}) => {
    const {id,heading,startingMonth,endingMonth,lessons} = data;
   return (
      <>
         <div className={`cardCont w-[100%] z-10 `}>
            {/* ================================ UPPER CARD ================================ */}
            <div className="upper bg-transparent w-[100%] pb-[.5rem] px-[.5rem] flex justify-between items-start ">
                <p className="text-[#0C2448] font-bold">Phase {id}</p>
                <p className="text-[#0C2448] font-bold">{startingMonth==endingMonth ? "Month "+startingMonth :"Months "+startingMonth+"-"+endingMonth}</p>
            </div>

            {/* ================================ LOWER CARD ================================ */}
            <div className="lower bg-[#0C2448] w-[100%] py-[1.5rem] px-[2rem]">
                <div className="upper w-[100%]">
                    <div className="inner w-[100%] flex justify-center">
                        <h2 className="heading text-[#FFFFFF] font-semibold text-[20px]">{heading}</h2>
                    </div>
                </div>
                <div className="lower flex justify-between md:flex-row xs:flex-col mt-[1rem]">
                    {
                        lessons.map((lessonsData)=>{
                            return <div key={lessonsData.id} className="detail md:mt-[0rem] xs:mt-[1rem]">
                            <p className="subHeading font-semibold text-[#C4EF01] text-[17px]">{heading}</p>
                            <ul className="list-disc pl-5 ">
                                {lessonsData.topics.map((lessionDetail)=>{
                                    return <li key={lessionDetail.id}  className="xl:text-[14px] text-[#FFFFFF] md:text-[13px] xs:text-[12px]">{lessionDetail.description}</li>
                                })}
                                
                            </ul>
                        </div>
                        })
                    }
                    

                    
                </div>
            </div>
            
         </div>
      </>
   )
}

export default RoadMapCard