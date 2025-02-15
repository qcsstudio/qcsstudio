"use client";
import { BlogDataContext } from '@/context/BlogData';
import { useContext, useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import UploadBlog from './UploadBlog';
import PopUpCategoryDelete from './PopUpCategoryDelete';
import PopUpBlogUpdate from './PopUpBlogUpdate';

const ListBlog = () => {
   const { multipleBlogData, GetBlogData, DeleteBlog, categoryData, GetCategoryData } = useContext(BlogDataContext);
   const [ADD, setADD] = useState(false);
   const [edit, setEdit] = useState(false);
   const [deleteData, setDeleteData] = useState(false);
   const [deleteObject, setDeleteObject] = useState({});
   const [updateObject, setUpdateObject] = useState({});

   useEffect(() => {
      GetBlogData();
      GetCategoryData();
   }, []);

   const handleUpdate = (row) => {
      setEdit(true);
      setUpdateObject(row);
   };

   const handleDelete = (row) => {
      setDeleteData(true);
      setDeleteObject(row);
   };

   const deleteBlogData = () => {
      DeleteBlog(deleteObject?.heading);
   };

   const columns = [
      { name: "Heading",wrap: true, selector: (row) => row.heading.length > 30 ? row.heading.slice(0, 30) + "..." : row.heading, sortable: true },
      { name: "Description",wrap: true, selector: (row) => row.description.length > 30 ? row.description.slice(0, 30) + "..." : row.description },
      { name: "Categories",wrap: true,  selector: (row) => row.category?.join(", ") || "" },
      {
         name: "Show On Front", cell: (row) => (
            <input type="checkbox" name="showOnFront" checked={row?.show_on_front} onChange={() => handleShowOnFront(row)} className="w-4 h-4" />
         )
      },
      {
         name: "Edit", Button: true,wrap: true, cell: (row) => (
            <button onClick={() => handleUpdate(row)}
               className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-400 transition"
            >Edit</button>
         )
      },
      {
         name: "Delete", Button: true,wrap: true, cell: (row) => (
            <button onClick={() => handleDelete(row)}
               className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-400 transition"
            >Delete</button>
         )
      }
   ];

   return (
      <div className="p-4 max-w-7xl mx-auto">
         <div className="flex  items-center justify-between mb-4">
            <h1 className='text-center text-2xl font-semibold mb-2 md:mb-0'>Blog List</h1>
            <button 
               className='bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-blue-400 transition'
               onClick={() => setADD(true)}
            >ADD</button>
         </div>
         
         <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <DataTable
               title="Blog List"
               columns={columns}
               data={multipleBlogData || []}
               pagination
               highlightOnHover
               striped
            />
         </div>
         
         {ADD && <UploadBlog categoryData={categoryData} setADD={setADD} />}
         {deleteData && <PopUpCategoryDelete heading="Delete" description="Do you want to Delete Blog?" popUpOpener={setDeleteData} deleteData={deleteBlogData} />}
         {edit && <PopUpBlogUpdate setUpdateObject={setUpdateObject} updateObject={updateObject} setEdit={setEdit} />}
      </div>
   );
};

export default ListBlog;