const PopUpCategoryDelete = ({heading,description,popUpOpener,deleteData}) => {
    
    const handleNo = ()=>{
        popUpOpener(false);
    }
    
    const handleYes = ()=>{
        deleteData();
        popUpOpener(false);
    }

    return (
    <>
        <div className="popUpCont w-[20vw] px-[2rem] py-[1rem] rounded-[1rem] absolute top-[50%] right-[50%] bg-[#ffffff] flex flex-col gap-[.5rem]">
            <div className="topParent w-[100%] flex justify-end">

                <div className="topCont px-[1rem] py-[.5rem]  cursor-pointer border border-[#c0c0c0] rounded-[.5rem] hover:bg-[red] hover:text-[#ffffff]" onClick={()=>setEdit(false)}>X</div>

            </div>

            <h1 className="w-[100%]  text-[1.2rem] font-semiBold">{heading}</h1>
            <p>{description}</p>
            <div className="lowerContainer w-[100%] flex justify-end gap-[1rem] mt-[1rem]">
                <button className="yes px-[1rem] py-[.3rem] rounded-[.5rem] text-[#ffffff] bg-[#39a339] hover:bg-[#267626]" onClick={handleYes}>Yes</button>
                <button className="no px-[1rem] py-[.3rem] rounded-[.5rem] text-[#ffffff] bg-[#bf3f3f] hover:bg-[#d85e5e]" onClick={handleNo}>No</button>
            </div>
         </div>
    </>
)
}

export default PopUpCategoryDelete