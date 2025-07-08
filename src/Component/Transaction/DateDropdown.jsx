import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateDropdown = ({ selectedRange, setSelectedRange }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const iconRef = useRef(null);
  const dropdownRef = useRef(null);

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        iconRef.current &&
        !iconRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
        setShowCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleApply = () => {
    const start = format(range[0].startDate, "d MMM’’yy");
    const end = format(range[0].endDate, "d MMM’’yy");
    setSelectedRange(`${start} - ${end}`);
    setShowCalendar(false);
    setShowDropdown(false);
  };

  const handleReset = () => {
    const today = new Date();
    setRange([{ startDate: today, endDate: today, key: "selection" }]);
  };

  const rangeMap = {
    "Today": "Today",
    "Yesterday": "Yesterday",
    "Last 7 Days": "29 May’25 - 4 Jun’25",
    "Last 30 Days": "5 May’25 - 4 Jun’25",
    "Custom Range": "Custom Range"
  };

  return (
    <div className="relative inline-block mt-6">
      <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-600">
        <span>📅</span>
        <span className="ml-2">{selectedRange}</span>
        <span
          ref={iconRef}
          onClick={() => setShowDropdown(!showDropdown)}
          className={`ml-2 cursor-pointer transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`}
        >
          <ChevronDown size={18} className="text-black" />
        </span>
      </div>

      {showDropdown && (
        <div ref={dropdownRef} className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md z-10">
          {Object.keys(rangeMap).map((label) => (
            <div
              key={label}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                if (label === "Custom Range") {
                  setShowCalendar(true);
                } else {
                  setSelectedRange(rangeMap[label]);
                  setShowDropdown(false);
                }
              }}
            >
              {label}
            </div>
          ))}
        </div>
      )}

      {showCalendar && (
        <div className="absolute z-20 mt-2 shadow-lg border rounded bg-white p-4">
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="horizontal"
          />
          <div className="flex justify-between items-center px-2 mt-2 text-sm">
            <div className="text-gray-500">
              <span>{format(range[0].startDate, "d MMM’yy")}</span> &nbsp;:&nbsp;
              <span>{format(range[0].endDate, "d MMM’yy")}</span>
            </div>
            <div className="flex gap-4">
              <button onClick={handleReset} className="text-blue-600 font-medium hover:underline">Reset</button>
              <button onClick={handleApply} className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">Apply</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateDropdown;
