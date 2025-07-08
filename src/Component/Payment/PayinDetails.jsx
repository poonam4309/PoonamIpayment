import React, { useState } from 'react'
import { TablePagination } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PayinDetails = () => {
    const payins = [
        { name: 'John Doe', amount: '500', date: '2025-05-30', mode: 'UPI', status: 'Success' },
        { name: 'Jane Smith', amount: '1200', date: '2025-05-29', mode: 'Card', status: 'Pending' },
        { name: 'Mark Joe', amount: '700', date: '2025-05-28', mode: 'Netbanking', status: 'Failed' },
    ];
    
    const [currentPage, setCurrentPage] = useState(1);
    const transactionsPerPage = 5;
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
    const navigate = useNavigate()
    const handleViewDetails = () => {
        navigate('/paying-view-details')
    }
    return (
        <div>
            {/* Recent Payins Table */}
            <div className="overflow-x-auto rounded-2xl bg-white shadow-md">
                <table className="w-full text-sm text-left ">
                    <thead className="bg-blue-100 text-gray-700">
                        <tr>
                            {/* <th className="p-3">Name</th> */}
                            <th className="p-4">User Name</th>
                            <th className="p-4">Amount</th>
                            <th className="p-4">Date</th>
                            <th className="p-4">Payment Mode</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payins.map((txn, index) => (
                            <tr key={txn.transactionId} className="border-t hover:bg-gray-50">
                                <td className="p-4">{txn.name}</td>
                                <td className="p-3">{txn.amount}</td>
                                <td className="p-3">{txn.date}</td>
                                <td className="p-3">{txn.mode}</td>
                                {/* <td className="p-3">{txn.status}</td> */}
                                {/* <td className="p-3">{txn.dateTime}</td>
                                <td className="p-3">{txn.paymentMode}</td> */}
                                <td className={`p-3 font-semibold ${getStatusColor(txn.status)}`}>
                                    {txn.status}
                                </td>
                                <td className="p-4">
                                    <button
                                        className="text-blue-600 font-bold hover:underline cursor-pointer"
                                        onClick={handleViewDetails}
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
                        count={payins.length}
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
    )
}

export default PayinDetails