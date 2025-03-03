'use client';
import React, { useState, useEffect } from 'react';
import Loader from '@/components/Loader';
import DataTable from 'react-data-table-component';

const NewsLetter = () => {
    const [emails, setEmails] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getNewsletterData = async () => {
            try {
                const response = await fetch("/api/newsLetter");
                if (response.ok) {
                    const result = await response.json();
                    setEmails(result.newsletters || []);
                } else {
                    console.error("Failed to fetch newsletters");
                }
            } catch (error) {
                console.error("Error fetching newsletter data:", error);
            } finally {
                setLoading(false);
            }
        };

        getNewsletterData();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0]; // Extract YYYY-MM-DD format
    };

    const columns = [
        {
            name: 'S.No',
            selector: (row, index) => index + 1,
            sortable: false,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Subscription Date',
            selector: row => formatDate(row.createdAt) || 'N/A',
            sortable: true,
        }
    ];

    return (
        <div className="p-4 bg-white rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Newsletter Subscribers</h2>
            {loading ? (
                <div className="flex justify-center items-center h-40">
                    <Loader />
                </div>
            ) : emails.length === 0 ? (
                <p>No subscribers found.</p>
            ) : (
                <DataTable
                    columns={columns}
                    data={emails}
                    pagination
                    highlightOnHover
                    responsive
                />
            )}
        </div>
    );
};

export default NewsLetter;
