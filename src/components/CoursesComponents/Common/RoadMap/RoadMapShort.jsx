import RoadMapCard from "./RoadMapCard"

const RoadMapShort = ({content}) => {
   return (
      <>
         <div className="upperCont w-[100%] pt-[3rem] z-10 pb-[0rem] px-[2rem] flex flex-col relative">
                    {content.map((data)=>{
                        return <div key={data.id} className={`xl:w-[65%] my-[1rem] ${data.id % 2 === 0 ?"md:self-end" : "md:self-start"} lg:w-[75%] md:w-[100%]`}>
                            <RoadMapCard data={data}/>
                        </div>
                    })}

                    <div className="sideLine h-[100%] w-[4rem]  absolute border-[3px] border-[#213B61] bg-transparent left-[-2rem]"></div>

                    <div className="sideLine h-[100%] w-[4rem]  absolute border-[3px] border-[#213B61] bg-transparent right-[-2rem]"></div>
                    
        </div>
      </>
   )
}

export default RoadMapShort