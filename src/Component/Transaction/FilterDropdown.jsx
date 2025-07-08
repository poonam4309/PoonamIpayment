import React, { useState, useRef, useEffect } from "react";
import { Filter, ChevronDown } from "lucide-react";

const FilterDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Filter Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm border border-gray-300 px-3 py-2 rounded-md flex items-center gap-1"
      >
        <Filter size={14} />
        Filter
        <ChevronDown size={16} />
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute right-0 top-12 z-50 w-[640px] bg-white shadow-xl rounded-md border p-4 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          <div className="grid grid-cols-2 gap-6">
            {/* Section 1 - Source */}
            <div>
              <h4 className="text-sm font-semibold mb-2 text-gray-600">SOURCE</h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Payment Gateway", "Buttons", "Payment Links", "SI-Transaction", "SI-Registration",
                  "Payment Handle", "Invoice", "Events", "Web Stores", "POS", "StoreFront QR"
                ].map((item, i) => (
                  <label key={i} className="text-sm text-gray-700 flex gap-2 items-center">
                    <input type="checkbox" className="accent-green-600" />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Section 2 - Status */}
            <div>
              <h4 className="text-sm font-semibold mb-2 text-gray-600">TRANSACTION STATUS</h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Success", "In Progress", "User Cancelled", "Failed", "Auto Refund", "User Dropped",
                  "Bounced", "Refund Success", "Refund Failed", "Refund Pending"
                ].map((item, i) => (
                  <label key={i} className="text-sm text-gray-700 flex gap-2 items-center">
                    <input type="checkbox" className="accent-green-600" />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Section 3 - Payment Mode */}
            <div>
              <h4 className="text-sm font-semibold mb-2 text-gray-600">PAYMENT MODE</h4>
              <div className="grid grid-cols-2 gap-2">
                {["Credit Card", "Debit Card", "Netbanking", "EMI", "Cash", "COD"].map((item, i) => (
                  <label key={i} className="text-sm text-gray-700 flex gap-2 items-center">
                    <input type="checkbox" className="accent-green-600" />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Section 4 - More Filters */}
            <div>
              <h4 className="text-sm font-semibold mb-2 text-gray-600">MORE FILTERS</h4>
              <div className="grid grid-cols-2 gap-2">
                {["Initiated by IVR", "Email Invoice", "Unique Transactions"].map((item, i) => (
                  <label key={i} className="text-sm text-gray-700 flex gap-2 items-center">
                    <input type="checkbox" className="accent-green-600" />
                    {item}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-end gap-2">
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded">
              Cancel
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-green-600 text-white rounded">
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
