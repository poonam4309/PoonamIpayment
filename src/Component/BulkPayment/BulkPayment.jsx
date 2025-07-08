import React, { useState } from 'react';
import { TablePagination } from '@mui/material';

const BulkPayment = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const transactionsPerPage = 5;
    const uploads = [
        {
            id: 'BPR-20210105-PTTGTH',
            file: 'conversion.csv',
            uploadedBy: 'Maria Thomas',
            uploadedAt: '05 Jan 2021 @ 12:03 GMT',
            status: 'validation_passed',
        },
        {
            id: 'BPR-20210105-SRLNRY',
            file: 'conversion.csv',
            uploadedBy: 'Maria Thomas',
            uploadedAt: '05 Jan 2021 @ 12:02 GMT',
            status: 'validation_failed',
        },
        {
            id: 'BPR-20210105-SNPNDB',
            file: 'conversion.csv',
            uploadedBy: 'Maria Thomas',
            uploadedAt: '05 Jan 2021 @ 12:00 GMT',
            status: 'validation_failed',
        },

    ];
    const getStatusColor = (status) => {
        switch (status) {
            case 'Success':
                return 'text-green-600';
            case 'Pending':
                return 'text-yellow-500';
            case 'Failed':
                return 'text-red-500';
            default:
                return 'text-gray-600';
        }
    };

    return (
        <div className="p-6 space-y-6">
            <h2 className="text-2xl font-bold">Bulk Uploads</h2>
            <div className="bg-white p-4 rounded shadow space-y-4">
                <h2 className="text-lg font-semibold">Bulk Upload</h2>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="flex-1">
                        <label className="text-sm text-gray-600">Upload CSV</label>
                        <input
                            type="file"
                            onChange={(e) => setFile(e.target.files[0])}
                            className="w-full border px-3 py-2 rounded text-sm"
                        />
                    </div>
                    <button className="bg-blue-600 mt-5 text-white px-4 py-2 rounded hover:bg-green-700">
                        Upload
                    </button>
                </div>
                <a href="#" className="text-blue-500 underline text-sm">
                    Download Simple CSV File Format
                </a>
            </div>
            {/* Filters and Actions */}
            <div className="flex flex-wrap gap-4 items-end">
                <div>
                    <label className="block text-sm font-medium">Reference</label>
                    <input
                        type="text"
                        placeholder="Reference Number"
                        className="border rounded px-3 py-2 w-64"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Dates</label>
                    <div className="flex gap-2">
                        <input type="date" className="border rounded px-3 py-2" />
                        <input type="date" className="border rounded px-3 py-2" />
                    </div>
                </div>

                {/* <label className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
                    Upload File
                    <input
                        type="file"
                        accept=".csv"
                        // onChange={handleFileUpload}
                        className="hidden"
                    />
                </label> */}

                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Search
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-2xl bg-white shadow-md">
                <table className="w-full text-sm text-left ">
                    <thead className="bg-blue-100 text-gray-700">
                        <tr>
                            {/* <th className="p-3">Name</th> */}
                            <th className="p-4">Reference ID</th>
                            <th className="p-4">File name</th>
                            <th className="p-4">Uploaded By</th>
                            <th className="p-4">Uploaded At</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {uploads.map((txn, index) => (
                            <tr key={txn.id} className="border-t hover:bg-gray-50">
                                <td className="p-4">{txn.id}</td>
                                <td className="p-4">{txn.file}</td>
                                <td className="p-3">{txn.uploadedBy}</td>
                                <td className="p-3">{txn.uploadedAt}</td>
                                {/* <td className="p-3">{txn.status}</td> */}

                                <td className={`p-3 font-semibold ${getStatusColor(txn.status)}`}>
                                    {txn.status}
                                </td>
                                <td className="p-4">
                                    <button
                                        className="text-blue-600 font-bold hover:underline cursor-pointer"
                                    // onClick={handleViewDetails}
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-2 flex justify-center bg-white p-1 rounded-xl shadow ">
                    <TablePagination
                        component="div"
                        count={uploads.length}
                        page={currentPage - 1}
                        onPageChange={(event, newPage) => setCurrentPage(newPage + 1)}
                        rowsPerPage={transactionsPerPage}
                        onRowsPerPageChange={() => { }}
                        rowsPerPageOptions={[]}
                        labelDisplayedRows={({ from, to, count }) => `${from}-${to} of ${count}`}
                    />
                </div>
            </div>
        </div>
    );
};

export default BulkPayment;
