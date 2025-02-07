const RoadMapShortCard = ({data}) => {
    const {id,heading,startingMonth,endingMonth,lessons} = data;
    
   return (
      <>
        <div  className={`xl:w-[27%] md:min-h-[70vh] z-10  py-[2rem] px-[2rem] bg-white rounded-[1rem] lg:w-[33%] md:w-[40%] sm:w-[100%] xs:min-h-[50vh]`} style={{background: "rgb(36,63,102)",background: "linear-gradient(180deg, rgba(36,63,102,1) 0%, rgba(2,13,41,1) 100%)"}}>
                <div className="upperCont w-[100%] flex flex-col items-center leading-tight font-semibold">
                    <h2 className="heading text-[18px] text-[#527CBD]">Phase {id}: <span className="text-[#ffffff]">{heading}</span></h2>
                    <p className="months text-[18px] text-[#527CBD]">{(startingMonth==endingMonth?"("+"Month"+startingMonth+")":"("+"Months"+startingMonth+"-"+endingMonth+")")}</p>
                </div>
                <div className="lowerCont mt-[1rem]">
                    {
                        lessons.map((lessionsData)=>{
                            return <div key={lessionsData.id} className="innerCont">
                            <p className="heading text-[#C4EF01] xl:text-[16px] lg:text-[13px]">{lessionsData.heading}</p>
                            <ul className="list-disc pl-5">
                                <li className="xl:text-[15px] text-[#ffffff] lg:text-[12px] xs:text-[15px]">{lessionsData.topics}</li>
                            </ul>
                        </div>
                        })
                    }
                    
                    
                </div>
        </div>
     </>
   )
}

export default RoadMapShortCard