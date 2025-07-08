import React, { useState } from "react";

const DirectPayForm = () => {
  const [formData, setFormData] = useState({
    transferBy: "Bank Account",
    accountNumber: "",
    accountHolder: "",
    bankName: "",
    ifsc: "",
    transferAmount: "",
    paymentMode: "IMPS",
    remark: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add your submit logic here (API call, validation, etc.)
  };

  return (
    <div className="bg-white shadow-md rounded-md  max-w-7xl mx-auto   ">
      <h2 className=" flex flex-row justify-center   text-white text-2xl font-semibold  pb-2 mb-4 bg-blue-400 rounded ">
        Directly Pay
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 p-6">
        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Select Transfer By *
            </label>
            <input
              type="text"
              name="transferBy"
              value={formData.transferBy}
              disabled
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm bg-gray-100"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Account Number *
            </label>
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm"
              placeholder="Enter Account Number"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Bank Name *
            </label>
            <input
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm"
              placeholder="Bank Name"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Transfer Amount *
            </label>
            <input
              type="text"
              name="transferAmount"
              value={formData.transferAmount}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm"
              placeholder="Transfer Amount"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Remark</label>
            <input
              type="text"
              name="remark"
              value={formData.remark}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm"
              placeholder="Remark"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Account Holder Name *
            </label>
            <input
              type="text"
              name="accountHolder"
              value={formData.accountHolder}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm"
              placeholder="Account Holder Name"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              IFSC Code *
            </label>
            <input
              type="text"
              name="ifsc"
              value={formData.ifsc}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm"
              placeholder="IFSC Code"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Payment Mode *
            </label>
            <input
              type="text"
              name="paymentMode"
              value={formData.paymentMode}
              disabled
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm bg-gray-100"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-span-2 text-center mt-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm font-medium"
          >
            Verify
          </button>
        </div>
      </form>
    </div>
  );
};

export default DirectPayForm;
