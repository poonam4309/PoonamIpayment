import React from "react";
import { Share2, Copy, ChevronRight } from "lucide-react";

const PaymentHandleTips = ({ tips }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-800">Payment Handle</h2>

      {/* Payment Handle Box */}
      <div className="border border-gray-300 rounded-lg p-5 shadow-sm">
        <h4 className="text-base font-medium mb-1">Payment Handle</h4>
        <p className="text-sm text-gray-600 mb-3">
          Share this link to start accepting payments
        </p>
        <div className="flex items-center bg-gray-100 rounded px-2 py-2 overflow-auto">
          <input
            type="text"
            readOnly
            value="https://pmny.in/FJv5WIT..."
            className="flex-1 bg-transparent text-sm text-gray-700"
          />
          <div className="flex space-x-2 ml-2">
            <Share2 size={18} className="text-gray-600 cursor-pointer" />
            <Copy size={18} className="text-gray-600 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Help & Tips */}
      <div className="pt-4 max-h-60">
        <h4 className="font-semibold text-xl mb-4 border-b p-4 border-gray-400">
          Help & Tips
        </h4>
        <ul className="space-y-4">
          {tips.map((item, index) => (
            <li
              key={index}
              onClick={item.onClick}
              className="cursor-pointer group"
            >
              <div className="flex items-center justify-between text-green-600 font-semibold">
                <span>{item.title}</span>
                <ChevronRight
                  size={18}
                  className="text-black group-hover:translate-x-1 transition"
                />
              </div>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PaymentHandleTips;
