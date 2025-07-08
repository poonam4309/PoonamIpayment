import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SuccessfulTransactionsTrend = ({ trendData }) => {
  const [isSplitByMode, setIsSplitByMode] = useState(true);
  const [selectedMetric, setSelectedMetric] = useState("Txn. amount");

  const getYAxisFormatter = () => {
    return selectedMetric === "Txn. amount"
      ? (val) => `₹${val.toFixed(1)}`
      : (val) => `${val}`;
  };

  const getTooltipFormatter = (value) => {
    return selectedMetric === "Txn. amount" ? `₹${value}` : value;
  };

  const getYAxisDomain = () => {
    return selectedMetric === "Txn. amount" ? [0, 1] : [0, 10];
  };

  return (
    <div className="border border-gray-200 rounded-xl shadow-sm bg-white p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
        <h2 className="text-base font-semibold text-gray-800">
          Successful Transactions Trend
        </h2>

        <div className="flex items-center gap-4">
          {/* Toggle */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-700">Split by payment modes</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isSplitByMode}
                onChange={() => setIsSplitByMode(!isSplitByMode)}
              />
              <div className="w-11 h-6 bg-gray-300 peer-checked:bg-green-600 rounded-full transition-all duration-300"></div>
              <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 peer-checked:translate-x-full"></div>
            </label>
          </div>

          {/* Dropdown */}
          <select
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value)}
            className="border border-gray-300 text-sm rounded px-2 py-1 bg-white"
          >
            <option>Txn. volume</option>
            <option>Txn. amount</option>
          </select>
        </div>
      </div>

      {/* Legends */}
      {isSplitByMode && (
        <div className="flex flex-wrap gap-3 text-sm text-gray-700 mb-2 px-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span> UPI
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gray-800"></span> Credit Card
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-sky-400"></span> Debit Card
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-orange-500"></span> Netbanking
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gray-400"></span> Others
          </div>
        </div>
      )}

      {/* Chart */}
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="time" fontSize={11} />
            <YAxis
              fontSize={12}
              domain={getYAxisDomain()}
              allowDecimals={true}
              tickFormatter={getYAxisFormatter()}
            />
            <Tooltip
              formatter={getTooltipFormatter}
              labelStyle={{ fontSize: 12 }}
              itemStyle={{ fontSize: 12 }}
            />

            {isSplitByMode ? (
              <>
                <Line type="monotone" dataKey="UPI" stroke="#facc15" strokeWidth={2} dot />
                <Line type="monotone" dataKey="CreditCard" stroke="#1f2937" strokeWidth={2} dot />
                <Line type="monotone" dataKey="DebitCard" stroke="#38bdf8" strokeWidth={2} dot />
                <Line type="monotone" dataKey="Netbanking" stroke="#f97316" strokeWidth={2} dot />
                <Line type="monotone" dataKey="Others" stroke="#9ca3af" strokeWidth={2} dot />
              </>
            ) : (
              <Line
                type="monotone"
                dataKey={selectedMetric === "Txn. amount" ? "UPI" : "volumeTotal"}
                stroke="#0f766e"
                strokeWidth={2}
                dot={{ r: 3, stroke: "#0f766e", strokeWidth: 1, fill: "#0f766e" }}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SuccessfulTransactionsTrend;
