const ScopeCard = ({data}) => {
   const {id,heading,description} = data;
   return (
      <>
         <div className="CardCont z-10 lg:w-[30%] min-h-[10rem] bg-white rounded-[1rem] flex flex-col justify-center p-[2rem] md:w-[45%] sm:w-[70%] xs:w-[100%]">
            <p className="heading text-[#001F61] md:text-[25px] font-bold xs:text-[20px]">{heading}</p>
            <p className="heading text-[#020E2A] md:text-[15px]  font-normal xs:text-[13px]">{description}</p>
         </div>
      </>
   )
}

export default ScopeCard