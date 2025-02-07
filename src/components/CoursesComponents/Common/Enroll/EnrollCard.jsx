const EnrollCard = ({data}) => {
    const {id,heading,description} = data;
   return (
      <>
         <div className="container lg:w-[25%] overflow-hidden mb-[1.5rem] md:w-[45%] xs:w-[100%]">
            <h3 className="heading text-[#FFFFFF] xl:text-[22px] font-bold lg:text-[20px]">{heading}</h3>
            <ul className="list-disc pl-5 mt-[1.5rem]">
               {description.map((descData)=>{
                  return <li key={descData.descriptionId} className="xl:text-[15px] text-[#C1EE04] md:text-[13px] xs:text-[12px]">{descData.desc}</li>
               })}
            </ul>
         </div>
      </>
   )
}

export default EnrollCard