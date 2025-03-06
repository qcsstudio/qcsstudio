import React, { useEffect, useState } from 'react';
import UploadPrivacy from './UploadPolicy';
import Loader from '@/components/Loader';
import DataTable from 'react-data-table-component';

const PrivacyAdmin = () => {
  const [add, setAdd] = useState(false);
  const [policyData, setPolicyData] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [del,setDel] = useState(false);

  useEffect(() => {
    GetPolicyData();
  }, []);

  const GetPolicyData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/admin/privacyPolicy", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setPolicyData(result.policy_data || []); 
    } catch (error) {
      console.error("Error fetching policy data: ", error);
      setPolicyData([]); 
    } finally {
      setLoading(false);
    }
  };

  const handleDelete=(row)=>{

  }
  const columns = [
    { name: "Title", selector: row => row.heading, sortable: true },
    { name: "Description", selector: row => row.description, sortable: false },
    {
      name: "Edit",wrap: true, cell: (row) => (
         <button onClick={() => handleUpdate(row)}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-400 transition"
         >Edit</button>
      )
   },
   {
      name: "Delete",wrap: true, cell: (row) => (
         <button onClick={() => handleDelete(row)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-400 transition"
         >Delete</button>
      )
   }
  ];

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-center text-2xl font-semibold mb-2 md:mb-0">Privacy Policy List</h1>
            <button 
              className="bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-blue-400 transition"
              onClick={() => setAdd(true)}
            >
              ADD
            </button>
          </div>

          <div className="overflow-auto max-h-[70vh] bg-white shadow-md rounded-lg">
            <DataTable
              title="Privacy Policy List"
              columns={columns}
              data={policyData}
              pagination
              highlightOnHover
              striped
            />
          </div>
        </>
      )}

      {add && <UploadPrivacy setAdd={setAdd} />}
      {del &&  <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleNo}
        >
       
          <div
            className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] bg-white rounded-lg px-6 py-4 shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
           
            <div className="absolute top-2 right-2">
              <button
                className="px-3 py-1 border border-gray-300 rounded-md hover:bg-red-500 hover:text-white transition duration-200"
                onClick={handleNo}
                tabIndex={0}
              >
                X
              </button>
            </div>
  
            
            <h1 className="text-lg font-semibold text-center">{heading}</h1>
            <p className="text-gray-600 text-center">{description}</p>
  
            
            <div className="w-full flex justify-center gap-4 flex-wrap mt-4">
              <button
                className="px-6 py-2 rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-200"
                onClick={handleYes}
                tabIndex={0}
              >
                Yes
              </button>
              <button
                className="px-6 py-2 rounded-md text-white bg-red-500 hover:bg-red-600 transition duration-200"
                onClick={handleNo}
                tabIndex={0}
              >
                No
              </button>
            </div>
          </div>
        </div>}
    </div>
  );
};

export default PrivacyAdmin;
