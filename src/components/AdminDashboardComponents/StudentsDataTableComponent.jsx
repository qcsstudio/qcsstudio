"use client";
import { StudentDataContext } from '@/context/StudentDataContext';
import React, { useContext, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Loading spinner icon
function StudentsDataTableComponent() {
    const { apiStudentData, setApiStudentData, GetStudentData } = useContext(StudentDataContext);

    useEffect(() => {
        if (!apiStudentData) {
            GetStudentData();
        }
    }, [apiStudentData]);

    const columns = [
        { name: "Full Name", selector: (row) => row.fullName, sortable: true },
        { name: "Email", selector: (row) => row.email, sortable: true },
        { name: "Address", selector: (row) => row.address, sortable: true },
        { name: "College Name", selector: (row) => row.collegeName, sortable: true },
        { name: "Passion", selector: (row) => row.calculated_passion, sortable: true },
        { name: "Option A", selector: (row) => row.option_a, sortable: true },
        { name: "Option B", selector: (row) => row.option_b, sortable: true },
        { name: "Option C", selector: (row) => row.option_c, sortable: true },
        { name: "Option D", selector: (row) => row.option_d, sortable: true },
        { name: "Option E", selector: (row) => row.option_e, sortable: true },
        { name: "Created At", selector: (row) => new Date(row.createdAt).toLocaleDateString(), sortable: true },
    ];

    return (
        <div className="overflow-x-scroll mx-auto my-4">
            {
                apiStudentData ? <> <h1 className="text-2xl font-bold mb-4">Students Data Table</h1>
                    <DataTable
                        title="Students List"
                        columns={columns}
                        data={apiStudentData || []} // Fallback to empty array if no data
                        pagination
                        highlightOnHover
                        striped
                    /> </> : <>
                    <div className="flex items-center justify-center h-64">
                        <AiOutlineLoading3Quarters className="text-blue-500 animate-spin text-4xl" />
                        <span className="ml-3 text-lg text-gray-600">Fetching Data...</span>
                    </div>
                </>
            }

        </div>
    );
}

export default StudentsDataTableComponent;
