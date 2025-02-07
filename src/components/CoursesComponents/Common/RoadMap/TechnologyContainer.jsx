import TechnologyCard from "./TechnologyCard"

const TechnologyContainer = ({technologies}) => {
   return (
      <>
         <div className="technologyContainer  w-[100%] mt-[2rem] pb-[2rem] 2xl:px-[149px] bg-[#29ABE233]/20  shadow-lg xl:px-[100px] border border-[#0096E3] rounded-[1rem] overflow-hidden flex justify-center items-center flex-wrap ">
            {technologies.map((data)=>{
                return <TechnologyCard key={data.id} data={data}/>
            })}
        </div>
      </>
   )
}

export default TechnologyContainer