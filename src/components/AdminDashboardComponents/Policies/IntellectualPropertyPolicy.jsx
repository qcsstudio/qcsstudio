import React, { useEffect, useState } from "react";
import UploadTerm from "./UploadTerm";
import Loader from "@/components/Loader";
import DataTable from "react-data-table-component";
import EditTerms from "./EditTerms";

const IntellectualPropertyPolicy = () => {
  const [add, setAdd] = useState(false);
  const [termsData, setTermsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updateRow, setUpdateRow] = useState(null);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    GetTermsOfServices();
  }, []);

  const GetTermsOfServices = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/admin/IntellectualPropertyPolicy", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setTermsData(result.terms_data || []);
    } catch (error) {
      console.error("Error fetching policy data: ", error);
      setTermsData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = (row) => {
    setUpdateRow(row);
    setEdit(true);
  };

  const columns = [
    { name: "Title", selector: (row) => row.heading, sortable: true },
    {
      name: "Description",
      sortable: false,
      selector: (row) =>
        row.description.length > 30
          ? row.description.slice(0, 30) + "..."
          : row.description,
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
      ),
    },
  ];
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-center text-2xl font-semibold mb-2 md:mb-0">
          Privacy Policy List
        </h1>
        <button
          className="bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-blue-400 transition"
          onClick={() => setAdd(true)}
        >
          ADD
        </button>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="overflow-auto max-h-[70vh] bg-white shadow-md rounded-lg">
            <DataTable
              title="Terms of Services List"
              columns={columns}
              data={termsData}
              pagination
              highlightOnHover
              striped
            />
          </div>
        </>
      )}

      {add && (
        <UploadTerm
          setAdd={setAdd}
          url="/api/admin/IntellectualPropertyPolicy"
        />
      )}
      {edit && (
        <EditTerms
          setEdit={setEdit}
          GetData={GetTermsOfServices}
          updateRow={updateRow}
          setUpdateRow={setUpdateRow}
          url="/api/admin/IntellectualPropertyPolicy"
        />
      )}
    </div>
  );
};

export default IntellectualPropertyPolicy;
