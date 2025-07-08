import React, { useState } from "react";
import { BadgeCheck, Clock } from "lucide-react";
import TablePagination from "@mui/material/TablePagination";

const sampleData = [
    {
        txnId: "TXN001",
        dateTime: "2025-05-27 14:30",
        bankDetails: "ICICI Bank",
        clientName: "Rahul Sharma",
        amount: "₹2,500.00",
        utr: "UTR123456",
        charges: "₹50.00",
        remark: "Payment processed",
        status: "Completed",
    },
    {
        txnId: "TXN002",
        dateTime: "2025-05-27 12:00",
        bankDetails: "HDFC Bank",
        clientName: "Amit Verma",
        amount: "₹1,000.00",
        utr: "UTR654321",
        charges: "₹20.00",
        remark: "Pending settlement",
        status: "Pending",
    },
    {
        txnId: "TXN002",
        dateTime: "2025-05-27 12:00",
        bankDetails: "HDFC Bank",
        clientName: "Amit Verma",
        amount: "₹1,000.00",
        utr: "UTR654321",
        charges: "₹20.00",
        remark: "Pending settlement",
        status: "Pending",
    },
    {
        txnId: "TXN002",
        dateTime: "2025-05-27 12:00",
        bankDetails: "HDFC Bank",
        clientName: "Amit Verma",
        amount: "₹1,000.00",
        utr: "UTR654321",
        charges: "₹20.00",
        remark: "Pending settlement",
        status: "Pending",
    },
];

const PassBook = () => {
    const [showForm, setShowForm] = useState(false);
    const [status, setStatus] = useState("");
    const [fromDate, setFromDate] = useState("2025-05-27");
    const [toDate, setToDate] = useState("2025-05-27");
    const [search, setSearch] = useState("");

    // Filter data based on search
    const filteredData = sampleData.filter((txn) => {
        const query = search.toLowerCase();
        return (
            txn.txnId.toLowerCase().includes(query) ||
            txn.clientName.toLowerCase().includes(query) ||
            txn.bankDetails.toLowerCase().includes(query)
        );
    });

    const [currentPage, setCurrentPage] = useState(1);
    const transactionsPerPage = 10;

    const indexOfLastItem = currentPage * transactionsPerPage;
    const indexOfFirstItem = indexOfLastItem - transactionsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);


    return (
        <div className="max-w-8xl mx-auto">
            {/* Filters */}

            <div className="bg-white p-6 rounded-xl shadow space-y-6 mb-8">
                <h1 className="text-3xl font-semibold">Passbook</h1>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                    <div>
                        <label className="text-sm text-gray-600">From</label>
                        <input
                            type="date"
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                            className="w-full border px-3 py-2 rounded text-sm"
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-600">To</label>
                        <input
                            type="date"
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                            className="w-full border px-3 py-2 rounded text-sm"
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-600">Status</label>
                        <select
                            className="w-full border rounded px-3 py-2 text-sm"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="">All</option>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-sm text-gray-600">Client</label>
                        <select className="w-full border rounded px-3 py-2 text-sm">
                            <option value="">All Clients</option>
                            <option value="Rahul Sharma">Rahul Sharma</option>
                            <option value="Amit Verma">Amit Verma</option>
                        </select>
                    </div>
                    <div className="flex justify-center items-end">
                        <button
                            onClick={() => setShowForm(true)}
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm"
                        >
                            +Add
                        </button>
                    </div>
                    {showForm && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                            <div className="bg-white p-6 rounded shadow-lg w-[90%] max-w-md">
                                <h2 className="text-lg font-semibold mb-4">Add New Item</h2>
                                {/* Your form fields here */}
                                <form>
                                    <div className="grid grid-cols-2 gap-4 ">
                                        <label className="border-b rounded shadow">
                                            <input type="text" placeholder="name" className="text-justify items-center" />
                                        </label>
                                        <label className="">
                                            <input type="text" placeholder="" />
                                        </label>
                                    </div>
                                </form>
                                <button onClick={() => setShowForm(false)} className="mt-4 text-red-500">Close</button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Table */}
                <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-sm flex items-center gap-2">
                            Show
                            <select className="border rounded px-2 py-1 text-sm">
                                <option>10</option>
                                <option>25</option>
                                <option>50</option>
                            </select>
                            entries
                        </div>
                        <input
                            type="text"
                            placeholder="Search by  Bank"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="border px-3 py-1 rounded text-sm"
                        />
                    </div>

                    <div className="overflow-x-auto rounded-xl bg-white text-sm shadow-xl">
                        <table className="min-w-full text-sm  ">
                            <thead className="bg-blue-100 ">
                                <tr className="">
                                    <th className=" px-3 py-2 text-left">S.No</th>
                                    <th className=" px-3 py-2 text-left">Txn ID</th>
                                    <th className=" px-3 py-2 text-left">Date & Time</th>
                                    <th className=" px-3 py-2 text-left">Bank Details</th>
                                    <th className=" px-3 py-2 text-left">Client Name</th>
                                    <th className=" px-3 py-2 text-left">Amount</th>
                                    <th className=" px-3 py-2 text-left">UTR</th>
                                    <th className=" px-3 py-2 text-left">Charges</th>
                                    <th className=" px-3 py-2 text-left">Remark</th>
                                    <th className=" px-3 py-2 text-left">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.length === 0 ? (
                                    <tr>
                                        <td colSpan="10" className="text-center text-gray-500 py-4">
                                            No results found
                                        </td>
                                    </tr>
                                ) : (
                                    filteredData.map((txn, index) => (
                                        <tr key={index} className="hover:bg-gray-50 border-t">
                                            <td className=" px-3 py-2">{index + 1}</td>
                                            <td className=" px-3 py-2">{txn.txnId}</td>
                                            <td className=" px-3 py-2">{txn.dateTime}</td>
                                            <td className=" px-3 py-2">{txn.bankDetails}</td>
                                            <td className=" px-3 py-2">{txn.clientName}</td>
                                            <td className=" px-3 py-2">{txn.amount}</td>
                                            <td className=" px-3 py-2">{txn.utr}</td>
                                            <td className=" px-3 py-2">{txn.charges}</td>
                                            <td className=" px-3 py-2">{txn.remark}</td>
                                            <td className=" px-3 py-2">
                                                <span
                                                    className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${txn.status === "Completed"
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-yellow-100 text-yellow-700"
                                                        }`}
                                                >
                                                    {txn.status === "Completed" ? (
                                                        <BadgeCheck className="w-4 h-4" />
                                                    ) : (
                                                        <Clock className="w-4 h-4" />
                                                    )}
                                                    {txn.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* <div className="text-sm text-gray-600 mt-2">
                        Showing {filteredData.length} entries
                    </div> */}
                </div>
            </div>
            <div className="mt-6 bg-gray-200 rounded flex justify-center items-center">
                <TablePagination
                    component="div"
                    count={filteredData.length}
                    page={currentPage - 1} // MUI uses 0-based index
                    onPageChange={(event, newPage) => setCurrentPage(newPage + 1)}
                    rowsPerPage={transactionsPerPage}
                    onRowsPerPageChange={() => { }} // optional, can disable or make dynamic
                    rowsPerPageOptions={[]} // empty means no dropdown
                    labelDisplayedRows={({ from, to, count }) => `${from}-${to} of ${count}`}
                    showFirstButton={false}
                    showLastButton={false}
                />
            </div>


        </div>
    );
};

export default PassBook;
