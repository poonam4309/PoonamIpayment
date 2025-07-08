import React, { useState, useEffect } from "react";
import { Download } from "lucide-react";
import DateDropdown from "./DateDropdown";
import FilterDropdown from "./FilterDropdown";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FaFilter } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";
import { HiDotsVertical } from "react-icons/hi";
import { IoSettings } from "react-icons/io5";
import { TablePagination } from '@mui/material';




const TransactionDetails = () => {
  const location = useLocation();
  const { transactionCount } = location.state || {}


  const [selectedRange, setSelectedRange] = useState("29 May’25 - 4 Jun’25");
  const [tableData, setTableData] = useState([]);
  const [activeTab, setActiveTab] = useState("Payments");
  const [showFilter, setShowFilter] = useState(false);
  const [statusFilters, setStatusFilters] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // reset to first page
  };
  const rowsToDisplay = tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const dataMap = {
    "Today": {
      transaction: "₹0.00",
      settled: "₹10.00",
      refunds: "₹10.00",
      txn: "3 transactions",
      settlements: "2 settlements",
      refundCount: "1 refund",
      tableRows: [
        {
          date: "5 Jun",
          id: "TXN001",
          mode: "UPI",
          email: "today@example.com",
          amount: "₹100",
          status: "Success",
        },
        {
          date: "5 Jun",
          id: "TXN002",
          mode: "Card",
          email: "user@example.com",
          amount: "₹200",
          status: "Failed",
        },
      ],
    },
    "Yesterday": {
      transaction: "₹00.00",
      settled: "₹80.00",
      refunds: "₹0.00",
      txn: "1 transaction",
      settlements: "1 settlement",
      refundCount: "0 refunds",
      tableRows: [
        {
          date: "4 Jun",
          id: "TXN003",
          mode: "Netbanking",
          email: "yesterday@example.com",
          amount: "₹300",
          status: "Success",
        },
      ],
    },
    "Last 7 Days": {
      transaction: "₹10.00",
      settled: "₹4.00",
      refunds: "₹20.00",
      txn: "6 transactions",
      settlements: "5 settlements",
      refundCount: "2 refunds",
      tableRows: [
        {
          date: "1 Jun",
          id: "TXN101",
          mode: "UPI",
          email: "alice@example.com",
          amount: "₹500",
          status: "Success",
        },
        {
          date: "2 Jun",
          id: "TXN102",
          mode: "Card",
          email: "bob@example.com",
          amount: "₹100",
          status: "Failed",
        },
        {
          date: "3 Jun",
          id: "TXN103",
          mode: "Netbanking",
          email: "carol@example.com",
          amount: "₹300",
          status: "Success",
        },
      ],
    },
    "Custom Range": {
      transaction: "--",
      settled: "--",
      refunds: "--",
      txn: "--",
      settlements: "--",
      refundCount: "--",
      tableRows: [],
    },
    "29 May’25 - 4 Jun’25": {
      transaction: "₹0.00",
      settled: "₹10.00",
      refunds: "₹10.00",
      txn: "3 transactions",
      settlements: "2 settlements",
      refundCount: "1 refund",
      tableRows: [
        {
          date: "30 May",
          id: "TXN901",
          mode: "UPI",
          email: "may@example.com",
          amount: "₹900",
          status: "Success",
        },
      ],
    },
  };

  const display = dataMap[selectedRange] || dataMap["Last 7 Days"];

  useEffect(() => {
    setTableData(display.tableRows || []);
  }, [selectedRange]);

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-7">
        <h2 className=" text-3xl font-semibold text-gray-800 mr-5">
          Transactions Overview
        </h2>
        <div className=" cursor-pointer bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
          Total Settlement Amount: ₹0.96
        </div>
        <button className="ml-auto  border cursor-pointer   text-green-800 bg-gray-100 px-4 py-2 rounded-md text-sm hover:bg-green-900 hover:text-white">
          View Analytics
        </button>
      </div>
      {/* Tabs */}
      <div className="flex space-x-6 border-b border-gray-300 pb-2 mb-4">
        {["Payments", "Refunds", "Batch Refunds", "Refund Wallet"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-md font-medium cursor-pointer transition-all duration-200 ${activeTab === tab
              ? "text-black border-b-2 border-blue-600"
              : "text-gray-500"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === "Payments" && (
            <>
              {/* serach */}
              <div className="p-6 bg-gray-50 text-gray-700 rounded-md shadow-inner">
                <div className="flex flex-wrap items-center gap-9 mb-6">
                  <div className="flex items-center border border-gray-300 rounded-md px-2">
                    <select className="bg-transparent outline-none text-sm py-1 pr-2">
                      <option>PayU ID (Transaction ID)</option>
                      <option>Customer EmailId</option>
                      <option>Merchant Reference Id</option>
                      <option>Phone Number</option>
                      <option>Customer Number</option>
                      <option>UPI/Bank Reference Id</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Search PayU ID "
                      className="bg-transparent outline-none px-2 py-2 text-sm"
                    />
                  </div>

                  <button className="text-sm mb-7 border-gray-300 px-3 py-2 rounded-md flex items-center gap-1 ">
                    <DateDropdown selectedRange={selectedRange} setSelectedRange={setSelectedRange} />
                  </button>

                  <div className=" cursor-pointer flex items-center gap-2 text-gray-700 hover:bg-green-100">
                    <FilterDropdown className="" />
                  </div>

                  <button className=" cursor-pointer text-sm border border-gray-300 px-3 py-2 rounded-md flex items-center gap-1 text-gray-700 hover:bg-green-100">
                    <Download size={14} />
                    Download
                  </button>
                </div>

                {/* Stats Cards */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="rounded-lg bg-[#fefef9] shadow-sm border-l-[4px] border-[#aa1f1f] p-5 flex flex-col justify-between">
                    <div className="text-sm text-gray-500 mb-1">Total Transaction Amount<span className="cursor-help p-2">ⓘ</span></div>
                    <div className="text-xl font-semibold">{display.transaction}</div>
                    <button className="mt-2 text-sm text-green-700 flex items-center gap-1 cursor-pointer">
                      Refresh Balance
                    </button>
                  </div>
                  <div className="rounded-lg bg-white shadow-sm p-5 border-l-[4px] border-[#1faa65] flex flex-col justify-between">
                    <div className="text-sm text-gray-500 mb-1">Number of Transactions<span className="cursor-help p-2">ⓘ</span></div>
                    <div className="text-xl font-semibold">{display.settled}</div>

                  </div>
                  <div className="rounded-lg bg-white shadow-sm p-5 border-l-[4px] border-[#aa1f1f] flex flex-col justify-between">
                    <div className="text-sm text-gray-500 mb-1">Success Rate<span className="cursor-help p-2">ⓘ</span></div>
                    <div className="text-xl font-semibold">{display.refunds}</div>
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto rounded bg-blue-100 mt-4">
                  <table className="min-w-full text-sm text-left border border-gray-200">
                    <thead>
                      <tr className="text-gray-600">
                        <th className="py-2 px-4">DATE</th>
                        <th className="py-2 px-4">PAYU ID </th>
                        <th className="py-2 px-4">PAYMENT MODE</th>
                        <th className="py-2 px-4">EMAIL</th>
                        <th className="py-2 px-4">AMOUNT</th>
                        <th className="py-2 px-4">STATUS</th>
                        <th className="py-2 px-4 text-right">
                          <IoSettings className="text-xl cursor-pointer inline-block" />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {rowsToDisplay.length > 0 ? (
                        rowsToDisplay.map((row, i) => (
                          <tr key={i} className="bg-white border-t">
                            <td className="py-2 px-4">{row.date}</td>
                            <td className="py-2 px-4">{row.id}</td>
                            <td className="py-2 px-4">{row.mode}</td>
                            <td className="py-2 px-4">{row.email}</td>
                            <td className="py-2 px-4">{row.amount}</td>
                            <td className="py-2 px-4">{row.status}</td>
                            <td className="py-2 px-4 text-right relative group">
                              <HiDotsVertical className="text-xl cursor-pointer inline-block" />
                              <Link
                                to={`/transaction/${row.id}`}
                                className="absolute right-5 top-2 z-10 hidden group-hover:block bg-gray-200 text-black shadow px-3 py-1 text-sm border rounded"
                              >
                                Details
                              </Link>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="7" className="text-center py-6 text-gray-400">
                            No data available
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>

                  {/* Pagination Component */}
                  <div className="flex justify-end mt-2">
                    <TablePagination
                      component="div"
                      count={tableData.length}
                      page={page}
                      onPageChange={handleChangePage}
                      rowsPerPage={rowsPerPage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                      rowsPerPageOptions={[5, 10, 25]}
                    />
                  </div>
                </div>

              </div>
            </>
          )}

          {/* Add placeholder for other tabs */}
          {activeTab === "Refunds" && (
            <div className="p-6 bg-gray-50 text-gray-700 rounded-md shadow-inner">
              <div className="flex flex-wrap items-center gap-9 mb-6">
                <div className="flex items-center border border-gray-300 rounded-md px-2">
                  <select className="bg-transparent outline-none text-sm py-1 pr-2">
                    <option>PayU ID (Transaction ID)</option>
                    <option>Customer EmailId</option>
                    <option>Merchant Reference Id</option>
                    <option>Phone Number</option>
                    <option>Customer Number</option>
                    <option>UPI/Bank Reference Id</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Search PayU ID "
                    className="bg-transparent outline-none px-2 py-2 text-sm" />
                </div>

                <button className="text-sm mb-7 border-gray-300 px-3 py-2 rounded-md flex items-center gap-1 ">
                  <DateDropdown selectedRange={selectedRange} setSelectedRange={setSelectedRange} />
                </button>

                <div className="relative inline-block text-left ">
                  <button
                    onClick={() => setShowFilter(!showFilter)}>
                    <div className="text-sm border border-gray-300 px-3 py-2 rounded-md flex items-center gap-1 cursor-pointer">
                      <FaFilter size={14} />
                      Filter  <ChevronDown size={16} />
                    </div>
                  </button>
                  {showFilter && (
                    <div className="absolute z-10 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg p-2">
                      <div className="mb-2">
                        <label className="text-sm font-semibold mb-1 block">Filter</label>
                        <div className="flex items-center gap-1">
                          <input
                            type="text"
                            placeholder="Search"
                            className="flex-1 border border-gray-300 rounded-md px-2 py-1 text-sm"
                          />
                          <button className="text-sm px-2 py-1 bg-green-50 border border-blue-700 rounded text-blue-800">
                            Search
                          </button>
                        </div>
                      </div>

                      <div className="mt-3">
                        <p className="text-xs text-gray-500 font-semibold mb-2">STATUS</p>
                        {["Uploaded", "Queued", "Processing", "Completed"].map((status) => (
                          <div key={status} className="flex items-center gap-2 mb-1">
                            <input
                              type="checkbox"
                              checked={statusFilters.includes(status)}
                              onChange={() =>
                                setStatusFilters((prev) =>
                                  prev.includes(status)
                                    ? prev.filter((s) => s !== status)
                                    : [...prev, status]
                                )
                              }
                            />
                            <label className="text-sm">{status}</label>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-end gap-2 mt-4">
                        <button
                          onClick={() => {
                            setStatusFilters([]);
                            setShowFilter(false);
                          }}
                          className="text-sm px-3 py-1 border border-gray-300 rounded"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => setShowFilter(false)}
                          className="text-sm px-3 py-1 bg-blue-800 text-white rounded"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <button className="text-sm border border-gray-300 px-3 py-2 rounded-md flex items-center gap-1">
                  <Download size={14} />
                  Download
                </button>
              </div>

              {/* Stats Cards */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-lg bg-[#fefef9] shadow-sm border-l-[4px] border-[#aa1f1f] p-5 flex flex-col justify-between">
                  <div className="text-sm text-gray-800 font-medium mb-1">Total Refunds Amount</div>
                  <div className="text-xl font-semibold">{display.transaction}</div>

                  <button className="mt-2 text-sm text-green-700 flex items-center gap-1 cursor-pointer">
                    Refresh Balance
                  </button>
                </div>

                {/* Card 2 - Number of Refunds */}
                <div className="rounded-lg bg-white shadow-sm p-5 border-l-[4px] border-[#1faa65] flex flex-col justify-between">
                  <div className="text-sm text-gray-500 mb-1">Number of Refunds</div>
                  <div className="text-xl font-semibold">{display.settled}</div>
                 
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto rounded bg-blue-100 mt-4">
                <table className="min-w-full text-sm text-left border border-gray-200">
                  <thead>
                    <tr className="text-gray-600">
                      <th className="py-2 px-4">DATE</th>
                      <th className="py-2 px-4">PAYU ID (TRANSACTION ID)</th>
                      <th className="py-2 px-4">PAYMENT MODE</th>
                      <th className="py-2 px-4">EMAIL</th>
                      <th className="py-2 px-4">AMOUNT</th>
                      <th className="py-2 px-4">STATUS</th>

                    </tr>
                  </thead>
                  <tbody>
                    {tableData.length > 0 ? (
                      tableData.map((row, i) => (
                        <tr key={i} className="bg-white border-t">
                          <td className="py-2 px-4">{row.date}</td>
                          <td className="py-2 px-4">{row.id}</td>
                          <td className="py-2 px-4">{row.mode}</td>
                          <td className="py-2 px-4">{row.email}</td>
                          <td className="py-2 px-4">{row.amount}</td>
                          <td className="py-2 px-4">{row.status}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center py-6 text-gray-400">
                          No data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {activeTab === "Batch Refunds" && (
            <div className="p-6 bg-gray-50 text-gray-700 rounded-md shadow-inner ">
              <DateDropdown selectedRange={selectedRange} setSelectedRange={setSelectedRange} />
              <div className="relative inline-block text-left mb-4 p-5 ">
                <div className="flex flex-wrap gap-6 items-center mb-6 ">
                  {/* Filter Button */}
                  <button
                    onClick={() => setShowFilter(!showFilter)}
                    className=" cursor-pointer flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm   hover:bg-green-100"
                  >
                    <FaFilter size={14} />
                    Filter
                    <ChevronDown size={16} />
                  </button>

                  {/* Upload Button */}
                  <button className="cursor-pointer  text-white bg-green-800 flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm">
                    <Download size={14} />
                    <p className="">  Upload Batch Refunds</p>
                  </button>
                </div>


                {showFilter && (
                  <div className="absolute z-10 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg p-2">
                    <div className="mb-2">
                      <label className="text-sm font-semibold mb-1 block">Filter</label>
                      <div className="flex items-center gap-1">
                        <input
                          type="text"
                          placeholder="Search"
                          className="flex-1 border border-gray-300 rounded-md px-2 py-1 text-sm"
                        />
                        <button className="text-sm px-2 py-1 bg-green-50 border border-blue-700 rounded text-blue-800">
                          Search
                        </button>
                      </div>
                    </div>

                    <div className="mt-3">
                      <p className="text-xs text-gray-500 font-semibold mb-2">STATUS</p>
                      {["Uploaded", "Queued", "Processing", "Completed"].map((status) => (
                        <div key={status} className="flex items-center gap-2 mb-1">
                          <input
                            type="checkbox"
                            checked={statusFilters.includes(status)}
                            onChange={() =>
                              setStatusFilters((prev) =>
                                prev.includes(status)
                                  ? prev.filter((s) => s !== status)
                                  : [...prev, status]
                              )
                            }
                          />
                          <label className="text-sm">{status}</label>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-end gap-2 mt-4">
                      <button
                        onClick={() => {
                          setStatusFilters([]);
                          setShowFilter(false);
                        }}
                        className="text-sm px-3 py-1 border border-gray-300 rounded"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => setShowFilter(false)}
                        className="text-sm px-3 py-1 bg-blue-800 text-white rounded"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="overflow-x-auto rounded bg-blue-100 mt-4">
                <table className="min-w-full text-sm text-left border border-gray-200">
                  <thead>
                    <tr className="text-gray-600">
                      <th className="py-2 px-4">DATE</th>
                      <th className="py-2 px-4">PAYU ID (TRANSACTION ID)</th>
                      <th className="py-2 px-4">PAYMENT MODE</th>
                      <th className="py-2 px-4">EMAIL</th>
                      <th className="py-2 px-4">AMOUNT</th>
                      <th className="py-2 px-4 ">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.length > 0 ? (
                      tableData.map((row, i) => (
                        <tr key={i} className="bg-white border-t">
                          <td className="py-2 px-4">{row.date}</td>
                          <td className="py-2 px-4">{row.id}</td>
                          <td className="py-2 px-4">{row.mode}</td>
                          <td className="py-2 px-4">{row.email}</td>
                          <td className="py-2 px-4">{row.amount}</td>
                          <td className="py-2 px-4">{row.status}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center py-6 text-gray-400">
                          No data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "Refund Wallet" && (
            <div className="p-6 bg-gray-50 text-gray-700 rounded-md shadow-inner">
              <div className="flex flex-wrap items-center gap-9 mb-6">
                <div className="flex items-center border border-gray-300 rounded-md px-2">
                  <h1 className="bg-transparent outline-none text-sm py-1 pr-2 font-semibold text-green-800 border-r-x">
                    Search
                  </h1>
                  <input
                    type="text"
                    placeholder="Search unique identifier "
                    className="bg-transparent outline-none px-2 py-2 text-sm"
                  />
                </div>
                <button className="text-sm mb-7 border-gray-300 px-3 py-2 rounded-md flex items-center gap-1">
                  <DateDropdown selectedRange={selectedRange} setSelectedRange={setSelectedRange} />
                </button>
                <div className="relative inline-block text-left mb-1 p-5">
                  <button
                    onClick={() => setShowFilter(!showFilter)}>
                    <div className="text-sm border border-gray-300 px-3 py-2 rounded-md flex items-center gap-1 cursor-pointer hover:bg-green-100">
                      <FaFilter size={14} />
                      Filter  <ChevronDown size={16} />
                    </div>
                  </button>
                  {showFilter && (
                    <div className="absolute z-10 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg p-2">
                      <div className="mb-2">
                        <label className="text-sm font-semibold mb-1 block">Filter</label>
                        <div className="flex items-center gap-1">
                          <input
                            type="text"
                            placeholder="Search"
                            className="flex-1 border border-gray-300 rounded-md px-2 py-1 text-sm"
                          />
                          <button className="text-sm px-2 py-1 bg-green-50 border border-blue-700 rounded text-blue-800">
                            Search
                          </button>
                        </div>
                      </div>

                      <div className="mt-3">
                        <p className="text-xs text-gray-500 font-semibold mb-2">STATUS</p>
                        {["Uploaded", "Queued", "Processing", "Completed"].map((status) => (
                          <div key={status} className="flex items-center gap-2 mb-1">
                            <input
                              type="checkbox"
                              checked={statusFilters.includes(status)}
                              onChange={() =>
                                setStatusFilters((prev) =>
                                  prev.includes(status)
                                    ? prev.filter((s) => s !== status)
                                    : [...prev, status]
                                )
                              }
                            />
                            <label className="text-sm">{status}</label>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-end gap-2 mt-4">
                        <button
                          onClick={() => {
                            setStatusFilters([]);
                            setShowFilter(false);
                          }}
                          className="text-sm px-3 py-1 border border-gray-300 rounded" >
                          Cancel
                        </button>
                        <button
                          onClick={() => setShowFilter(false)}
                          className="text-sm px-3 py-1 bg-blue-800 text-white rounded"  >
                          Apply
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <button className="text-sm border border-gray-300 px-3 py-2 rounded-md flex items-center gap-1 hover:bg-green-100">
                  <Download size={14} />
                  Download
                </button>
              </div>
              {/* Stats Cards */}
              <div className="grid md:grid-cols-2 ">
                <div className="rounded-lg bg-[#fefef9] shadow-sm border-l-[4px] border-[#aa1f1f] p-5 flex flex-col justify-between  w-full max-w-md">
                  <div className="text-sm text-gray-800 font-medium mb-1">Available balance</div>
                  <div className="text-2xl font-semibold text-gray-700">₹0.00</div>
                  <button className="mt-2 text-sm text-green-700 flex items-center gap-1">
                    <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582M20 20v-5h-.581m-1.415 1.415A7.962 7.962 0 0112 20c-4.418 0-8-3.582-8-8" />
                    </svg>
                    Refresh Balance
                  </button>
                </div>
                {/* Card 2 - Number of Refunds */}
                <div className="rounded-xl bg-white  border-l-[4px] border-[#bae2fa] p-4 shadow-sm w-full max-w-md">
                  <div className="text-sm font-medium text-gray-900 mb-1">
                    Number of Refunds via wallet
                  </div>
                  <div className="text-2xl font-semibold text-gray-900 mb-3">0</div>
                  <div className="border-t border-gray-200  pt-2 ">
                    <a href="#" className=" text-sm text-green-700 hover:text-green-900 flex items-center justify-between">
                      See all refunds
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>

              </div>
              {/* Table */}
              <div className="overflow-x-auto rounded bg-blue-100 mt-4">
                <table className="min-w-full text-sm text-left border border-gray-200">
                  <thead>
                    <tr className="text-gray-600">
                      <th className="py-2 px-4">DATE</th>
                      <th className="py-2 px-4">PAYU ID (TRANSACTION ID)</th>
                      <th className="py-2 px-4">PAYMENT MODE</th>
                      <th className="py-2 px-4">EMAIL</th>
                      <th className="py-2 px-4">AMOUNT</th>
                      <th className="py-2 px-4">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.length > 0 ? (
                      tableData.map((row, i) => (
                        <tr key={i} className="bg-white border-t">
                          <td className="py-2 px-4">{row.date}</td>
                          <td className="py-2 px-4">{row.id}</td>
                          <td className="py-2 px-4">{row.mode}</td>
                          <td className="py-2 px-4">{row.email}</td>
                          <td className="py-2 px-4">{row.amount}</td>
                          <td className="py-2 px-4">{row.status}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center py-6 text-gray-400">
                          No data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TransactionDetails;
