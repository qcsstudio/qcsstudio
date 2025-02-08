import RoadMapCard from "./RoadMapCard"
import RoadMapLongCard from "./RoadMapLongCard"

const RoadMapLong = ({content}) => {
   return (
      <>
         <div className="upperCont w-[100%] pt-[3rem] z-10 pb-[0rem]  flex justify-center items-center gap-[2rem] flex-wrap md:px-[2rem] xs:px-[2rem]" >
            {
               content.map((data)=>{
                  return <RoadMapLongCard key={data.id} data={data}/>;
               })
            }
            
            
         </div>
      </>
   )
}

export default RoadMapLong