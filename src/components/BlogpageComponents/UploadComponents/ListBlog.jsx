"use client";
import { BlogDataContext } from '@/context/BlogData';
import { useContext, useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import UploadBlog from './UploadBlog';
import PopUpCategoryDelete from './PopUpCategoryDelete';
import PopUpBlogUpdate from './PopUpBlogUpdate';
import Loader from '@/components/Loader';

const ListBlog = () => {
   const { multipleBlogData, GetBlogData, DeleteBlog, categoryData, GetCategoryData, blogLoadingStatus } = useContext(BlogDataContext);
   const [ADD, setADD] = useState(false);
   const [edit, setEdit] = useState(false);
   const [deleteData, setDeleteData] = useState(false);
   const [deleteObject, setDeleteObject] = useState({});
   const [updateObject, setUpdateObject] = useState({});

   useEffect(() => {
      if (multipleBlogData.length === 0) {
         GetBlogData();
      }
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
      if (deleteObject?.heading) {
         DeleteBlog(deleteObject.heading);
      }
   };

   const formatHeading = (heading = "", limit = 30) => {
      const formatted = heading.replace(/_/g, " ");
      return formatted.length > limit ? formatted.slice(0, limit) + "..." : formatted;
   };

   const columns = [
      {
         name: "Heading",
         wrap: true,
         selector: (row) => formatHeading(row?.heading || ""),
         sortable: true
      },
      {
         name: "Description",
         wrap: true,
         selector: (row) => (row?.description || "").length > 30
            ? row.description.slice(0, 30) + "..."
            : row.description || ""
      },
      {
         name: "Categories",
         wrap: true,
         selector: (row) => row?.category?.join(", ") || ""
      },
      {
         name: "Show On Front",
         cell: (row) => (
            row?.show_on_front ? (
               <div className="min-w-[1rem] min-h-[1rem] rounded-full bg-[#51e151]"></div>
            ) : (
               <div className="w-[1rem] h-[1rem] rounded-full bg-[#ff6868]"></div>
            )
         )
      },
      {
         name: "Edit",
         wrap: true,
         cell: (row) => (
            <button
               onClick={() => handleUpdate(row)}
               className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-400 transition"
            >
               Edit
            </button>
         )
      },
      {
         name: "Delete",
         wrap: true,
         cell: (row) => (
            <button
               onClick={() => handleDelete(row)}
               className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-400 transition"
            >
               Delete
            </button>
         )
      }
   ];

   return (
      <div className="p-4 max-w-7xl mx-auto">
         {multipleBlogData.length !== 0 ? (
            <>
               <div className="flex items-center justify-between mb-4">
                  <h1 className="text-2xl font-semibold">Blog List</h1>
                  <button
                     className="bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-blue-400 transition"
                     onClick={() => setADD(true)}
                  >
                     ADD
                  </button>
               </div>

               <div className="overflow-auto max-h-[70vh] bg-white shadow-md rounded-lg">
                  <DataTable
                     title="Blog List"
                     columns={columns}
                     data={multipleBlogData || []}
                     pagination
                     highlightOnHover
                     striped
                  />
               </div>
            </>
         ) : (
            <Loader />
         )}

         {ADD && <UploadBlog categoryData={categoryData} setADD={setADD} />}
         {deleteData && (
            <PopUpCategoryDelete
               heading="Delete"
               description="Do you want to Delete Blog?"
               popUpOpener={setDeleteData}
               deleteData={deleteBlogData}
            />
         )}
         {edit && (
            <PopUpBlogUpdate
               setUpdateObject={setUpdateObject}
               updateObject={updateObject}
               setEdit={setEdit}
            />
         )}
      </div>
   );
};

export default ListBlog;
