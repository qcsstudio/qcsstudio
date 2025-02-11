"use client"
import Button from '@/components/Button/Button';
import { BlogDataContext } from '@/context/BlogData';
import { useContext, useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import PopUp from './PopUpCategoryUpdate';
import PopUpCategoryUpdate from './PopUpCategoryUpdate';
import UploadCategory from './UploadCategory';
import PopUpCategoryDelete from './PopUpCategoryDelete';
const ListCategory = () => {
    const { categoryData, setCategoryData, GetCategoryData, DeleteCategoryData} = useContext(BlogDataContext);
    const [edit, setEdit] = useState(false);
    const [ADD, setADD] = useState(false);
    const [deleteData, setDeleteData] = useState(false);
    const [deleteObject, setDeleteObject] = useState({});
    const [popUpHandler, setPopUpHandler] = useState(false);
    const [categoryUpdate, setCategoryUpdate] = useState({name:"",show_on_front:false});

    useEffect(() => {
        GetCategoryData();
    }, []);

    const handleShowOnFront = (row) => {
        console.log(row?.show_on_front);
    }

    const handleUpdate = (row) => {
        setCategoryUpdate({name:row.name,show_on_front:row.show_on_front});
        setEdit(true);
    }

    const handleDelete = (row) => {
        setDeleteData(true);
        setDeleteObject(row);
    }

    const deleteCategoryData = () =>{
        DeleteCategoryData(deleteObject?.name);
    }

    const columns = [
        { name: "Name", selector: (row) => row.name, sortable: true },
        {
            name: "Show on Front", cell: (row) => (
                <input type="checkbox" name="showOnFront" id="showOnFront" checked={row?.show_on_front} onChange={() => handleShowOnFront(row)} />
            )
        },
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
        <>  <div className="parentContainer relative">
            <h1 className='text-center font-semibold text-[1.5rem] mb-[2rem]'>Category List</h1> 
            <button onClick={()=>setADD(true)} className='absolute top-[1rem] right-[5rem] bg-[#4586c3] px-[1rem] py-[.5rem] hover:bg-[#6babe7] text-[#ffffff] rounded-[.5rem]' >ADD</button>
            <DataTable
                title="Category List"
                columns={columns}
                data={categoryData || []}
                pagination
                highlightOnHover
                striped
            />
            {edit?<PopUpCategoryUpdate setEdit={setEdit} categoryUpdate={categoryUpdate} setCategoryUpdate={setCategoryUpdate}/>:""}
            {ADD&&<UploadCategory setADD={setADD}/>}
            {deleteData&&<PopUpCategoryDelete setPopUpHandler={setPopUpHandler} heading={"Delete"} description={"Do you want to Delete Category !"} popUpOpener={setDeleteData} deleteData={deleteCategoryData}/>}
            
        </div>
        </>
    )
}

export default ListCategory