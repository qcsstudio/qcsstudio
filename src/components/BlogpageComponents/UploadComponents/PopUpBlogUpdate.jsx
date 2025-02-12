"use client"
import { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { BlogDataContext } from "@/context/BlogData";
import { MultiSelect } from 'primereact/multiselect';


const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const PopUpBlogUpdate = ({ setUpdateObject, setEdit, updateObject }) => {
    const { GetCategoryData, categoryData, UpdateBlog } = useContext(BlogDataContext);

    // Form Input Values:
    const [title, setTitle] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState([]);
    const [showOnFront, setShowOnFront] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    // console.log("selectedCategories" , selectedCategories);

    useEffect(()=>{
        GetCategoryData();
    },[])
    useEffect(() => {
        
        setTitle(updateObject.heading);
        setDescription(updateObject.description);
        setShowOnFront(updateObject.show_on_front);
        setThumbnail(updateObject.thumbnail);

        if (updateObject.category && Array.isArray(updateObject.category) && categoryData.length > 0) {
            // Find matching objects from categoryData based on names
            const selectedCats = categoryData.filter(cat => updateObject.category.includes(cat.name));
            setSelectedCategories(selectedCats);
        }

    }, [updateObject,categoryData])

    const handleCategoryChange = (e) => {
        setSelectedCategories(e.value);
    };

    const editor = useRef(null);


    // Handle Images:
    const handleImageChange = (e) => {
        const file = e?.target?.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file); // Convert to Base64
            reader.onload = () => setThumbnail(reader.result); // Store Base64 string
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const cate = selectedCategories.map((data) => data.name);
        setCategory(cate);
        UpdateBlog(updateObject.heading, { title, thumbnail, category: cate, showOnFront, description });
        setUpdateObject({});
        setEdit(false);
    }




    return (
        <>
            <div className="blogContainer w-[100%] absolute top-[0] left-[0] h-[120vh]">
                <div className="innerContainer w-[100%]  flex  justify-center items-center">

                    <form onSubmit={handleSubmit} className="blogForm w-[100%] flex flex-col p-[2rem] rounded-[1rem] bg-[#ffffff] gap-[2rem]">
                        <div className="topParent w-[100%] flex justify-end">

                            <div className="topCont px-[1rem] py-[.5rem]  cursor-pointer border border-[#c0c0c0] rounded-[.5rem] hover:bg-[red] hover:text-[#ffffff]" onClick={() => setEdit(false)}>X</div>

                        </div>
                        <p className="heading text-center text-[2rem] font-semiblod">Upload Blog</p>

                        <input placeholder="Enter Blog Title" type="text" name="heading" id="heading"
                            onChange={(e) => setTitle(e.target.value)} value={title} className="w-[100%] border border-[#d1d1d1] px-[1rem] py-[.5rem] rounded-[.5rem]" />

                        <input type="file" accept="image/*" onChange={handleImageChange} className="w-[100%] border border-[#d1d1d1] px-[1rem] py-[.5rem] rounded-[.5rem]" />

                        <JoditEditor
                            ref={editor}
                            value={description}
                            onChange={newContent => setDescription(newContent)}
                            className="w-[100%] min-h-[70vh] border  border-[#d1d1d1] px-[1rem] py-[.5rem] rounded-[.5rem]"
                        />

                        <div className="showOnFrontCont w-[100%] flex items-center gap-[1rem]">
                            <label htmlFor="show_on_front">Show on Front</label>
                            <input type="checkbox" name="show_on_front" id="show_on_front" checked={showOnFront} onChange={(e) => setShowOnFront(e.target.checked)} />
                        </div>
                        {
                            selectedCategories && <MultiSelect
                                value={selectedCategories}
                                onChange={handleCategoryChange}
                                options={categoryData}
                                optionLabel="name"
                                placeholder="Select Categories"
                                maxSelectedLabels={3}
                                className="w-full md:w-[20rem] p-2 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 mb-4"
                                panelClassName="z-50"
                            />
                        }


                        <div className="w-[100%] flex justify-center">
                            <button className="px-[4rem] py-[.7rem] rounded-[.5rem] bg-[rgba(9,9,121,1)] text-[#ffffff] w-[30%]">Submit</button>
                        </div>

                    </form>
                </div>
            </div>

        </>
    )
}

export default PopUpBlogUpdate