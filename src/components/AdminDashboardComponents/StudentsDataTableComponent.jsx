"use client";
import { StudentDataContext } from '@/context/StudentDataContext';
import React, { useContext, useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Loader from '../Loader';

function StudentsDataTableComponent() {
    const { apiStudentData, GetStudentData } = useContext(StudentDataContext);
    const [show, setShow] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

    useEffect(() => {
        if (!apiStudentData) {
            GetStudentData();
        }
    }, [apiStudentData]);

    const handleViewDetails = (student) => {
        setSelectedStudent(student);
        setShow(true);
    };

    const handleCloseModal = () => {
        setShow(false);
        setSelectedStudent(null);
    };

    const columns = [
        {
            name: "Actions",
            cell: (row) => (
                <button
                    className="bg-green-500 px-3 py-1 rounded-md text-white"
                    onClick={() => handleViewDetails(row)}
                >
                    View Details
                </button>
            ),
            ignoreRowClick: true,
        },
        { name: "Full Name", selector: (row) => row.fullName, sortable: true, wrap: true, minwidth: "180px" },
        { name: "Email", selector: (row) => row.email, sortable: true, wrap: true, minwidth: "200px" },
        { name: "Address", selector: (row) => row.address, sortable: true, wrap: true, minwidth: "200px" },
        { name: "College Name", selector: (row) => row.collegeName, sortable: true, wrap: true, minwidth: "200px" },
        { name: "Passion", selector: (row) => row.calculated_passion, sortable: true, wrap: true, minwidth: "150px" },
        { name: "Option A", selector: (row) => row.option_a, sortable: true, wrap: true, minwidth: "120px" },
        { name: "Option B", selector: (row) => row.option_b, sortable: true, wrap: true, minwidth: "120px" },
        { name: "Option C", selector: (row) => row.option_c, sortable: true, wrap: true, minwidth: "120px" },
        { name: "Option D", selector: (row) => row.option_d, sortable: true, wrap: true, minwidth: "120px" },
        { name: "Option E", selector: (row) => row.option_e, sortable: true, wrap: true, minwidth: "120px" },
        { name: "Created At", selector: (row) => new Date(row.createdAt).toLocaleDateString(), sortable: true, wrap: true, minwidth: "150px" },
    ];

    return (
        <div className="w-full mx-auto my-4 flex flex-col items-center px-4">
            {apiStudentData ? (
                <>
                    <h1 className="text-2xl font-bold mb-4 text-center">Students Data Table</h1>
                    <div className="w-full overflow-x-auto">
                        <DataTable
                            title="Students List"
                            columns={columns}
                            data={apiStudentData || []}
                            pagination
                            highlightOnHover
                            striped
                            responsive
                            fixedHeader
                            fixedHeaderScrollHeight="500px"
                            customStyles={{
                                table: {
                                    style: {
                                        width: "100%",
                                        minWidth: "600px", 
                                    },
                                },
                                rows: {
                                    style: {
                                        minHeight: "60px", 
                                    },
                                },
                                headCells: {
                                    style: {
                                        backgroundColor: "#f3f4f6",
                                        fontSize: "14px",
                                        fontWeight: "bold",
                                        textAlign: "center",
                                    },
                                },
                                cells: {
                                    style: {
                                        wordBreak: "break-word",
                                        fontSize: "14px",
                                        minWidth: "120px",
                                    },
                                },
                            }}
                        />
                    </div>
                </>
            ) : (
                <Loader />
            )}

            {/* Student Details Modal */}
            {show && selectedStudent && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
                        <h2 className="text-xl font-bold mb-2">Student Details</h2>
                        <div className="space-y-2">
                            <p><strong>Full Name:</strong> {selectedStudent.fullName}</p>
                            <p><strong>Email:</strong> {selectedStudent.email}</p>
                            <p><strong>Address:</strong> {selectedStudent.address}</p>
                            <p><strong>College Name:</strong> {selectedStudent.collegeName}</p>
                            <p><strong>Passion:</strong> {selectedStudent.calculated_passion}</p>
                            <p><strong>Option A:</strong> {selectedStudent.option_a}</p>
                            <p><strong>Option B:</strong> {selectedStudent.option_b}</p>
                            <p><strong>Option C:</strong> {selectedStudent.option_c}</p>
                            <p><strong>Option D:</strong> {selectedStudent.option_d}</p>
                            <p><strong>Option E:</strong> {selectedStudent.option_e}</p>
                            <p><strong>Created At:</strong> {new Date(selectedStudent.createdAt).toLocaleDateString()}</p>
                        </div>

                        <button
                            className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md w-full"
                            onClick={handleCloseModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default StudentsDataTableComponent;
