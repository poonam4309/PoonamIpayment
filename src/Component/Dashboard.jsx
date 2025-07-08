import React, { useState } from "react";
import DateDropdown from "./DateDropdown";
import SuccessfulTransactionsTrend from "./SuccessfulTransactionsTrend";
import TransactionFunnelAnalysis from "./TransactionFunnelAnalysis";
import PaymentHandleTips from "./PaymentHandleTips";
import { useNavigate } from "react-router-dom";



const Dashboard = () => {
  const [selectedRange, setSelectedRange] = useState("29 May’25 - 4 Jun’25");

  const navigate = useNavigate();

  const handleTransactionClick = () => {

    navigate("/transactions", { state: { transactionCount: display.txn } });
  };
  const handleSettlementClick = () => {
    navigate("/settlements", { state: { settlementCount: display.settlements } });
  };

  const dataMap = {
    "Today": {
      transaction: "₹200.00",
      settled: "₹150.00",
      refunds: "₹10.00",
      txn: "3 transactions",
      settlements: "2 settlements",
      refundCount: "1 refund"
    },
    "Yesterday": {
      transaction: "₹100.00",
      settled: "₹80.00",
      refunds: "₹0.00",
      txn: "1 transaction",
      settlements: "1 settlement",
      refundCount: "0 refunds"
    },
    "Last 7 Days": {
      transaction: "₹500.00",
      settled: "₹480.00",
      refunds: "₹20.00",
      txn: "6 transactions",
      settlements: "5 settlements",
      refundCount: "2 refunds"
    },
    "Custom Range": {
      transaction: "--",
      settled: "--",
      refunds: "--",
      txn: "--",
      settlements: "--",
      refundCount: "--"
    }
  };
  const tips = [
    {
      title: "Access PayU App",
      desc: "Access your business on the go with PayU App",
      onClick: () => window.open("https://payu.in", "_blank"), // external link
    },
    {
      title: "Customize Checkout",
      desc: "Customize the checkout page with brand logo, color and more!",
      onClick: () => navigate("/customize-checkout"), 
    },
    {
      title: "Know your Payment Modes",
      desc: "Check all the payment ",
      onClick: () => navigate("/payment-modes"),
    },
  ];

  const trendData = [
    { time: "3 Jun", UPI: 0.1 },
    { time: "4 Jun", UPI: 0.1 },
    { time: "5 Jun", UPI: 0.1 },
    { time: "6 Jun", UPI: 0.1 },
    { time: "7 Jun", UPI: 0.1 },
    { time: "8 Jun", UPI: 0.1 },
    { time: "9 Jun", UPI: 0.1 },
  ];

  const display = dataMap[selectedRange] || dataMap["Last 7 Days"];

  return (

    <div className="p-6 md:p-10 bg-white text-gray-800 font-sans ">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h1 className="text-3xl font-bold text-gray-800">Hi Reshma</h1>
          </div>
          <div className="p-5 ">
            <span className=" cursor-pointer bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">
              Upcoming Settlement Amount: ₹0.96
            </span>
          </div>

          {/* Date Dropdown */}
          <DateDropdown selectedRange={selectedRange} setSelectedRange={setSelectedRange} />

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-5 mt-6">
            <div className="border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-lg transition  bg-gradient-to-br from-white to-gray-100"
              onClick={handleTransactionClick}  >
              <div className="text-sm  mb-1 font-semibold">Total Transaction Amount</div>
              <div className="text-sm p-1 border-b border-gray-300 rounded">
                {display.transaction}
              </div>
              <div className="text-xs text-green-600 mt-1 cursor-pointer">{display.txn}</div>
            </div>
            <div className="border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-lg transition  bg-gradient-to-br from-white to-gray-100"
              onClick={handleSettlementClick}>
              <div className="text-sm  font-semibold mb-1">Total Settled Amount</div>
              <div className="text-sm p-1 border-b border-gray-300 rounded">{display.settled}</div>
              <div className="text-xs text-green-600 mt-1 cursor-pointer ">{display.settlements}</div>
            </div>
            <div className="border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-lg transition  bg-gradient-to-br from-white to-gray-100"
              onClick={handleSettlementClick}        >
              <div className="text-sm  font-semibold mb-1">Total Refunds</div>
              <div className="text-sm p-1 border-b border-gray-300 rounded">{display.refunds}</div>
              <div className="text-xs text-green-600 mt-1 cursor-pointer">{display.refundCount}</div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mt-6 ">
            <Card title="Success Rates" amount="--" subtext="0 successful txn" />
            <Card title="Avg. Transaction Size" amount="--" />
            <Card title="Preferred Payment Mode" amount="OTHERS" />
          </div>
        </div>
        {/* payments handle */}
        <PaymentHandleTips tips={tips} />
        {/* successful trend */}
        <div className="lg:col-span-2">
          <SuccessfulTransactionsTrend trendData={trendData} />
        </div>
        {/* Transaction Funnel Analysis */}
        <div className="lg:col-span-2 mt-6">
          <TransactionFunnelAnalysis />
        </div>
      </div>
    </div>

  );
};
// Reusable Card Component
    const Card = ({ title, amount, subtext }) => (
  <div className="border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-lg transition  bg-gradient-to-br from-white to-gray-100">
    <div className="text-sm text-gray-500 mb-1">{title}</div>
    <div className="text-md font-semibold">{amount}</div>
    {subtext && <div className="text-xs text-green-600 mt-1">{subtext}</div>}
  </div>
)
export default Dashboard;
