"use client"
import { BlogDataContext } from '@/context/BlogData';
import { useContext, useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import UploadBlog from './UploadBlog';
import PopUpCategoryDelete from './PopUpCategoryDelete';
import PopUpBlogUpdate from './PopUpBlogUpdate';

const ListBlog = () => {
   const {multipleBlogData,setmultipleBlogData, GetBlogData,DeleteBlog,categoryData,GetCategoryData} = useContext(BlogDataContext);
   const [ADD,setADD] = useState(false);
   const [edit,setEdit] = useState(false);
   const [deleteData,setDeleteData] = useState(false);
   const [deleteObject, setDeleteObject] = useState({});
   const [updateObject, setUpdateObject] = useState({});

   useEffect(()=>{
      GetBlogData();
      GetCategoryData();
   },[]);

   const handleUpdate = (row)=>{
      setEdit(true);
      setUpdateObject(row);
   }

   const handleDelete = (row)=>{
      setDeleteData(true);
      setDeleteObject(row);
   }

   const deleteBlogData = ()=>{
      console.log(deleteObject?.heading);
      DeleteBlog(deleteObject?.heading);
   }



   const columns = [
      { name: "Heading", selector: (row) => row.heading.length > 30 ? row.heading.slice(0,30)+"...":row.heading , sortable: true },
      { name: "Description", selector: (row) => row.description.length > 30 ? row.description.slice(0,30)+"...":row.description},
      { name: "Categories", selector: (row) => row.category?.join(", ") || ""},
      { name: "Show On Front", cell: (row) => (
         <input type="checkbox" name="showOnFront" id="showOnFront" checked={row?.show_on_front} onChange={() => handleShowOnFront(row)} />)},
         {
            name: "Edit", Button: true, cell: (row) => (
               <button onClick={() => handleUpdate(row)}
                  className="bg-[#5eef5e] text-white px-3 py-1 rounded hover:bg-[#9cee9c]"
               >Edit</button>
            )
         },
         {
            name: "Delete", Button: true, cell: (row) => (
               <button onClick={() => handleDelete(row)}
                  className="bg-[#ff5757] text-white px-3 py-1 rounded hover:bg-[#e89090]"
               >Delete</button>
            )
      }
   ];

   return (
      <>  
         <div className="parentContainer relative">
            <h1 className='text-center font-semibold text-[1.5rem] mb-[2rem]'>Blog List</h1> 
            <button className='absolute top-[1rem] right-[5rem] bg-[#4586c3] px-[1rem] py-[.5rem] hover:bg-[#6babe7] text-[#ffffff] rounded-[.5rem]' onClick={()=>setADD(true)}>ADD</button>
            <DataTable
               title="Blog List"
               columns={columns}
               data={multipleBlogData || []}
               pagination
               highlightOnHover
               striped
            />
            
            {ADD&&<UploadBlog categoryData={categoryData} setADD={setADD}/>}
            {deleteData&& <PopUpCategoryDelete  heading={"Delete"} description={"Do you want to Delete Blog !"} popUpOpener={setDeleteData} deleteData={deleteBlogData}/>}
            {edit && <PopUpBlogUpdate setUpdateObject={setUpdateObject}  updateObject={updateObject} setEdit={setEdit}/>}
         </div>
      </>
   )
}

export default ListBlog;