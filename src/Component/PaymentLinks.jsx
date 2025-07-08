import React, { useState } from "react";
// import { MdOutlineRefresh } from "react-icons/md";
// import { FaArrowRight } from "react-icons/fa";
import TablePagination from "@mui/material/TablePagination";

const PaymentLinks = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");
  const [fromDate, setFromDate] = useState("2025-05-27");
  const [toDate, setToDate] = useState("2025-05-27");
  const [page, setPage] = useState(0);
  const rowsPerPage = 7;

  // Sample data
  const data = Array.from({ length: 23 }, (_, i) => ({
    txnId: `TXN${1000 + i}`,
    date: "2025-05-27 10:00 AM",
    bankDetails: "HDFC Bank",
      paymentMode: "Debit Card",
    amount: "₹1000",
    utr: `UTR${2000 + i}`,
    fileName: "bulkfile.csv",
    rowNo: i + 1,
     upiId: "anaya@upi",
    remark: "Verified",
    status: i % 2 === 0 ? "Completed" : "Pending",
  }));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const paginatedData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <div className="space-y-3 bg-gray-50 min-h-screen">
      {/* Bulk Upload */}
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
          <button className="bg-green-600 mt-5 text-white px-4 py-2 rounded hover:bg-green-700">
            Verify
          </button>
        </div>
        <a href="#" className="text-blue-500 underline text-sm">
          Download Simple CSV File Format
        </a>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded shadow space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-end">
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
              <option value="">Select Status</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          {/* <div className="flex flex-row gap-4">
            <button className="bg-green-600 text-white 3 rounded-full hover:bg-green-700">
              <MdOutlineRefresh />
            </button>
            <button className="bg-red-500 text-white 3 rounded-full hover:bg-red-600">
              <FaArrowRight />
            </button>
          </div> */}
        </div>
      </div>

      {/* Data Table */}
   <div className="overflow-x-auto rounded-2xl bg-white shadow-xl">
        <table className="w-full text-sm ">
          <thead className="">
            <tr className="bg-blue-100  text-gray-700">
              <th className="p-4 text-left">Sr No</th>
              <th className="p-4 text-left">Transaction ID</th>
              <th className="p-4 text-left">Bank Details</th>
              <th className="p-4 text-left">UTR No.</th>
              <th className="p-4 text-left">UPI ID</th>
              {/* <th className="p-4 text-left">Date & Time</th> */}
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Payment Mode</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>
       <tbody>
  {paginatedData.map((item, index) => (
    <tr key={item.id} className="border-t hover:bg-gray-50">
      <td className="px-4 py-3 text-center">{page * rowsPerPage + index + 1}</td>
      <td className="px-4 py-3 ">{item.txnId}</td>
      <td className="px-4 py-3 ">{item.bankDetails}</td>
      <td className="px-4 py-3 ">{item.utr}</td>
      <td className="px-4 py-3 ">{item.upiId}</td>
      {/* <td className="px-2 py-1">{item.dateTime}</td> */}
      <td className="px-4 py-3 ">{item.amount}</td>
        <td className="py-3 px-4">{item.paymentMode}</td>
      <td className="px-4 py-3 ">
        <span
          className={`px-2 py-2 rounded-xl text-black text-xs ${
            item.status === "Completed"
              ? "text-green-500"
              : item.status === "Pending"
              ? "text-yellow-600"
              : "text-red-500"
          }`}
        >
          {item.status}
        </span>
      </td>
      <td className="px-2 py-1">
        {/* Replace below with your actual action buttons/icons */}
        <button className="text-blue-600 hover:underline text-xs">View</button>
      </td>
    </tr>
  ))}
</tbody>

        </table>
      </div>

        <div className="flex justify-center bg-gray-200  rounded-xl mt-4">
          <TablePagination
            component="div"
            count={data.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={() => {}}
            rowsPerPageOptions={[]}
            labelDisplayedRows={({ from, to, count }) => `${from}-${to} of ${count}`}
          />
        </div>
      </div>
   
  );
};

export default PaymentLinks;
