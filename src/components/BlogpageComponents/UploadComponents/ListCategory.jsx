"use client";
import Button from '@/components/Button/Button';
import { BlogDataContext } from '@/context/BlogData';
import { useContext, useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import PopUpCategoryUpdate from './PopUpCategoryUpdate';
import UploadCategory from './UploadCategory';
import PopUpCategoryDelete from './PopUpCategoryDelete';
import Loader from '@/components/Loader';

const ListCategory = () => {
    const { categoryData, setCategoryData, GetCategoryData, DeleteCategoryData,blogLoadingStatus } = useContext(BlogDataContext);
    const [edit, setEdit] = useState(false);
    const [ADD, setADD] = useState(false);
    const [deleteData, setDeleteData] = useState(false);
    const [deleteObject, setDeleteObject] = useState({});
    const [categoryUpdate, setCategoryUpdate] = useState({ name: "", show_on_front: false });

    useEffect(() => {
        GetCategoryData();
    }, []);

    const handleShowOnFront = (row) => {
        console.log(row?.show_on_front);
    };

    const handleUpdate = (row) => {
        setCategoryUpdate({ name: row.name, show_on_front: row.show_on_front });
        setEdit(true);
    };

    const handleDelete = (row) => {
        setDeleteData(true);
        setDeleteObject(row);
    };

    const deleteCategoryData = () => {
        DeleteCategoryData(deleteObject?.name);
    };

    const columns = [
        { name: "Name", selector: (row) => row.name, sortable: true },
        {
            name: "Show on Front",
            cell: (row) => (
                row?.show_on_front ? <div className="green min-w-[1rem] min-h-[1rem]  rounded-[5rem] bg-[#51e151]"></div> :<div className="red w-[1rem] h-[1rem] rounded-[5rem] bg-[#ff6868]"></div>
            ),
        },
        {
            name: "Edit",
            cell: (row) => (
                <button
                    onClick={() => handleUpdate(row)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-400 text-sm"
                >
                    Edit
                </button>
            ),
        },
        {
            name: "Delete",
            cell: (row) => (
                <button
                    onClick={() => handleDelete(row)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-400 text-sm"
                >
                    Delete
                </button>
            ),
        },
    ];

    return (
        <>
        {categoryData?
        <div className="relative p-4 flex flex-col gap-5">
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h1 className="text-center text-2xl font-semibold mb-4 md:mb-0">
                    Category List
                </h1>
                <button
                    onClick={() => setADD(true)}
                    className="bg-blue-500 px-4 py-2 hover:bg-blue-400 text-white rounded-md self-center md:self-auto"
                >
                    ADD
                </button>
            </div>

            
            <div className="overflow-x-auto">
                <DataTable
                    title="Category List"
                    columns={columns}
                    data={categoryData || []}
                    pagination
                    highlightOnHover
                    striped
                />
            </div>

            {/* Popups (Modals) */}
            {edit && (
                <PopUpCategoryUpdate
                    setEdit={setEdit}
                    categoryUpdate={categoryUpdate}
                    setCategoryUpdate={setCategoryUpdate}
                />
            )}
            {ADD && <UploadCategory setADD={setADD} />}
            {deleteData && (
                <PopUpCategoryDelete
                    heading="Delete"
                    description="Do you want to delete this category?"
                    popUpOpener={setDeleteData}
                    deleteData={deleteCategoryData}
                />
            )}
        </div>:<Loader/>}</>
    );
};

export default ListCategory;
