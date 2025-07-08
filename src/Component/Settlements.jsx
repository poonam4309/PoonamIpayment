import React, { useState } from "react";
import { ChevronDown, CalendarDays, Download, Filter } from "lucide-react";
import DateDropdown from "./DateDropdown";
import { useLocation } from "react-router-dom";

import { FaFilter } from "react-icons/fa";

const Settlements = () => {

 
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);

  const [selectedRange, setSelectedRange] = useState("29 May’25 - 4 Jun’25");
  const [showFilterBox, setShowFilterBox] = useState(false);
  const location = useLocation();
  // const { settlementCount } = location.state || {};

  
  return (
    <div className="p-6 bg-white rounded">
      <div className="flex items-center  justify-between mb-6 ">
        <h2 className="text-2xl font-semibold text-gray-800 ">Settlements</h2>
        <button
          onClick={() => setShowInvoiceModal(true)}
          className=" cursor-pointer text-green-800  border bg-gray-100 px-4 py-2 rounded hover:bg-green-900 hover:text-white text-sm font-medium"
        >
          Download Monthly Invoice
        </button>
        {showInvoiceModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 bg-opacity-40">
            <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
              <h2 className="text-lg font-semibold mb-4 ">Download Monthly Invoice</h2>

              <div className="space-y-4">
                {/* Select Year */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block  text-gray-500 text-sm font-medium mb-1">Select Year</label>
                    <select className="w-full border text-gray-500 border-gray-200 rounded px-3 py-2 text-sm">
                      <option>2025</option>
                      <option>2024</option>
                      <option>2023</option>
                    </select>
                  </div>

                  {/* Select Month */}
                  <div>
                    <label className="block text-sm text-gray-500 font-medium mb-1">Select Month</label>
                    <select className="w-full border text-gray-500 border-gray-100 rounded px-3 py-2 text-sm">
                      <option>January</option>
                      <option>February</option>
                      <option>March</option>
                      <option>April</option>
                      {/* ...add all months */}
                    </select>
                  </div>
                </div>
                {/* Invoice Type */}
                <div>
                  <label className="block text-sm  text-gray-500 font-medium mb-1">Invoice Type</label>
                  <select className="w-full border border-gray-300 text-gray-500 rounded px-3 py-2 text-sm">
                    <option>Summary</option>
                    <option>Detailed</option>
                    <option>Details</option>
                  </select>
                </div>
              </div>

              {/* Modal Buttons */}
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setShowInvoiceModal(false)}
                  className=" cursor-pointer px-4 py-2 text-sm border rounded text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    // Add download logic here
                    setShowInvoiceModal(false);
                  }}
                  className="cursor-pointer px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
      {/* Stats */}
    <div className="p-6 bg-gray-50 text-gray-700 rounded-md shadow-inner">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {/* Card 1 */}
        <div className=" bg-gradient-to-br from-green-50 to-white rounded-2xl p-5 shadow-md border border-green-100">
          <div className="text-gray-600 text-sm mb-1 font-medium flex items-center gap-1">
            Last Settled Amount <span className="cursor-help">ⓘ</span>
          </div>
          <div className="text-xl font-bold text-green-800">₹195.28</div>
          <div className="text-xs text-gray-500 mt-1">Settled on 22nd Jan’25</div>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-5 shadow-md border border-yellow-100">
          <div className="text-gray-600 text-sm mb-1 font-medium flex items-center gap-1">
            Total Settlement Pending <span className="cursor-help">ⓘ</span>
          </div>
          <div className="text-xl font-bold text-yellow-600">₹0.96</div>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-5 shadow-md border border-blue-100">
          <div className="text-gray-600 text-sm mb-1 font-medium flex items-center gap-1">
            Upcoming Settlement Amount <span className="cursor-help">ⓘ</span>
          </div>
          <div className="text-xl font-bold text-blue-700">₹0.00</div>
          <div className="text-xs text-gray-500 mt-1">Scheduled for 6th Jun</div>
        </div>
      </div>

      {/* Search + Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-4">
        <div className="flex items-center border border-gray-300 rounded px-3 py-2 w-full lg:max-w-sm ">
          <input
            type="text"
            placeholder="Search by UTR ID"
            className="w-full outline-none text-sm"
          />
          <button className="text-green-600 text-sm font-medium ml-2 cursor-pointer ">Search</button>
        </div>

        {/* Date Dropdown */}
        <div className="w-full lg:w-auto mb-7">
          <DateDropdown selectedRange={selectedRange} setSelectedRange={setSelectedRange} />
        </div>

        {/* Filter + Download */}
        <div className="relative w-full lg:w-auto">
          <div className="flex items-center gap-3">
            {/* Filter Button */}
            <button
              onClick={() => setShowFilterBox(!showFilterBox)}
              className=" mr-7 cursor-pointer flex items-center gap-1 border  border-gray-300 px-3 py-2 rounded text-sm text-gray-700 hover:bg-green-100"
            >
              <FaFilter size={16} /> Filter <ChevronDown size={16} />
            </button>

            {/* Download Button */}
            <button className="cursor-pointer flex items-center gap-1 border  border-gray-300 px-3 py-2 rounded text-sm text-gray-700 hover:bg-green-100">
              <Download size={16} /> Download
            </button>
          </div>

          {/* Filter Dropdown */}
          {showFilterBox && (
            <div className="mt-2 absolute bg-white border rounded-lg shadow-lg p-4 w-72 z-40">
              <div className="mb-3">
                <p className="text-xs text-gray-500 font-semibold mb-1">STATUS</p>
                {["Settled", "Processing", "In Progress", "On Hold"].map((item) => (
                  <div key={item} className="flex items-center mb-1">
                    <input type="checkbox" id={item} className="mr-2" />
                    <label htmlFor={item} className="text-sm text-gray-700">{item}</label>
                  </div>
                ))}
              </div>

              <div className="mb-3">
                <p className="text-xs text-gray-500 font-semibold mb-1">SETTLEMENT CYCLE</p>
                {["Priority Settlement", "Regular Settlement"].map((item) => (
                  <div key={item} className="flex items-center mb-1">
                    <input type="checkbox" id={item} className="mr-2" />
                    <label htmlFor={item} className="text-sm text-gray-700">{item}</label>
                  </div>
                ))}
              </div>

              <div className="flex justify-between border-t pt-3 mt-3">
                <button
                  onClick={() => setShowFilterBox(false)}
                  className="px-4 py-1 text-sm border rounded text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowFilterBox(false)}
                  className="px-4 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full text-sm rounded-lg">
          <thead className="bg-blue-100 text-gray-600 font-medium text-left">
            <tr>
              <th className="px-4 py-3">DATE</th>
              <th className="px-4 py-3">UTR NUMBER</th>
              <th className="px-4 py-3">SALES AMOUNT</th>
              <th className="px-4 py-3">FEES</th>
              <th className="px-4 py-3">SETTLED AMOUNT</th>
              <th className="px-4 py-3">STATUS</th>
            </tr>
          </thead>
          <tbody className="divide-y text-gray-800 border-t">
            <tr className="border-b bg-white">
              <td className="px-4 py-3">6 Jun’25</td>
              <td className="px-4 py-3">************</td>
              <td className="px-4 py-3">₹2.00</td>
              <td className="px-4 py-3">₹1.04</td>
              <td className="px-4 py-3">₹0.96</td>
              <td className="px-4 py-3">
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">
                  In Progress
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    </div>
  );
};

export default Settlements;
