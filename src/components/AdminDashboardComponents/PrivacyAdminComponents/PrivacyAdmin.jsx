import React, { useEffect, useState } from 'react';
import UploadPrivacy from './UploadPolicy';
import Loader from '@/components/Loader';
import DataTable from 'react-data-table-component';
import EditPrivacy from './EditPrivacy';

const PrivacyAdmin = () => {
  const [add, setAdd] = useState(false);
  const [policyData, setPolicyData] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [edit,setEdit]=useState(false);
  const [upadteObject,setUpdateObject]=useState([]);
 

  useEffect(() => {
    GetPolicyData();
  }, []);

  const handleUpdate=(row)=>{
    setEdit(true);
    setUpdateObject(row)
  }
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
          {/* <div className="flex items-center justify-between mb-4">
            <h1 className="text-center text-2xl font-semibold mb-2 md:mb-0">Privacy Policy List</h1>
            <button 
              className="bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-blue-400 transition"
              onClick={() => setAdd(true)}
            >
              ADD
            </button>
          </div> */}

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
      {edit&&<EditPrivacy setEdit={setEdit} GetPolicyData={GetPolicyData} upadteObject={upadteObject} setUpdateObject={setUpdateObject}/>}
     
    </div>
  );
};

export default PrivacyAdmin;
