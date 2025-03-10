import React, { useEffect, useState } from 'react';
import Loader from '@/components/Loader';
import DataTable from 'react-data-table-component';
import UploadTerm from './UploadTerm';
import EditTerms from './EditTerms';

const PrivacyPolicies = () => {
  const [add, setAdd] = useState(false);
  const [addButton,setAddButton]=useState(false);
   const [PrivacyData, setPrivacyData] = useState([]);
   const [loading, setLoading] = useState(false);
   const [updateRow, setUpdateRow] = useState(null);
   const [edit, setEdit] = useState(false);
 
   useEffect(() => {
     GetPrivacyData("privacy_policy");
   }, []);
 
   const GetPrivacyData = async (policyType) => {
     try {
       setLoading(true);
       const response = await fetch(`/api/admin/Policies?type=${policyType}`, {
         method: 'GET',
         headers: { 'Content-Type': 'application/json' },
       });
   
       if (!response.ok) {
         throw new Error(`HTTP error! Status: ${response.status}`);
       }
   
       const result = await response.json();
       setPrivacyData(result.data || []); 
     } catch (error) {
       console.error('Error fetching policy data: ', error);
       setPrivacyData([]);
     } finally {
       setLoading(false);
     }
   };
   
 
   
   const handleUpdate = (row) => {
     setUpdateRow(row); 
     setEdit(true);
   };
 
  
  const columns = [
    { name: "Title", selector: row => row.heading, sortable: true },
    { name: "Description", selector: row => row.description, sortable: false,selector: (row) => row.description.length > 30 ? row.description.slice(0, 30) + "..." : row.description },
    {
      name: "Edit",
      wrap: true,
      cell: (row) => (
        <button
          onClick={() => {
           handleUpdate(row) 
          }}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-400 transition"
        >
          Edit
        </button>
      ),
    },
  
  ];

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {loading ? (
        <Loader />
      ) : (
        <>
       {PrivacyData.length===0 && (
  <div className="flex items-center justify-between mb-4">
    <h1 className="text-center text-2xl font-semibold mb-2 md:mb-0">
      Privacy Policy Page
    </h1>
    <button 
      className="bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-blue-400 transition"
      onClick={() => setAdd(true)}
    >
      ADD
    </button>
  </div>
)}

          <div className="overflow-auto max-h-[70vh] bg-white shadow-md rounded-lg">
            <DataTable
              title="Privacy Policy Page"
              columns={columns}
              data={PrivacyData}
              pagination
              highlightOnHover
              striped
            />
          </div>
        </>
      )}

       {add && <UploadTerm setAdd={setAdd} type="privacy_policy"  url="/api/admin/Policies" />}
            {edit && (
              <EditTerms
                 type="privacy_policy"
                setEdit={setEdit}
                GetData={GetPrivacyData}
                updateRow={updateRow} 
                setUpdateRow={setUpdateRow} 
                url="/api/admin/Policies"
              />
            )}
     
    </div>
  );
};

export default PrivacyPolicies;
