
import React from "react";

const TransactionFunnelAnalysis = () => {
  return (
    <div className="grid grid-row-2 gap-5">
    <div className="border border-gray-300 rounded-lg shadow-sm bg-white p-5">
      <h2 className="text-base font-semibold mb-4">Transaction Funnel Analysis</h2>
      <div className="grid grid-cols-3 text-sm font-medium text-gray-700 gap-y-4">
        <div className="space-y-4">
          <div className="flex items-center gap-1">
            Total Initiated <span className="text-gray-400 cursor-help">ⓘ</span>
          </div>
          <div className="flex items-center gap-1">
            Attempts <span className="text-gray-400 cursor-help">ⓘ</span>
          </div>
          <div className="flex items-center gap-1">
            Status Revert <span className="text-gray-400 cursor-help">ⓘ</span>
          </div>
          <div className="flex items-center gap-1">
            Success <span className="text-gray-400 cursor-help">ⓘ</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-black">3</span>
            <div className="h-4 w-full bg-blue-200 rounded">
              <div className="h-full bg-sky-500 rounded w-[100%]"></div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-black">0</span>
            <div className="h-4 w-full bg-red-100 rounded">
              <div className="h-full bg-red-300 rounded w-[0%]"></div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-black">0</span>
            <div className="h-4 w-full bg-gray-100 rounded">
              <div className="h-full bg-gray-400 rounded w-[0%]"></div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-black">0</span>
            <div className="h-4 w-full bg-gray-100 rounded">
              <div className="h-full bg-green-500 rounded w-[0%]"></div>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-right text-red-600 font-semibold">
          <div className="flex justify-end items-center gap-1">
            3 Bounced <span className="text-gray-400 cursor-help">ⓘ</span>
          </div>
          <div className="flex justify-end items-center gap-1">
            0 Dropped <span className="text-gray-400 cursor-help">ⓘ</span>
          </div>
          <div className="flex justify-end items-center gap-1">
            0 Failed <span className="text-gray-400 cursor-help">ⓘ</span>
          </div>
          <div></div>
        </div>
      </div>
    </div>

     <div className=" border border-gray-300 rounded-lg shadow-sm bg-white p-5">
      <h2 className="text-base font-semibold mb-4">Unique Transaction Funnel Analysis</h2>
      <div className="grid grid-cols-3 text-sm font-medium text-gray-700 gap-y-4">
        <div className="space-y-4">
          <div className="flex items-center gap-1">
            Total Initiated <span className="text-gray-400 cursor-help">ⓘ</span>
          </div>
          <div className="flex items-center gap-1">
            Attempts <span className="text-gray-400 cursor-help">ⓘ</span>
          </div>
          <div className="flex items-center gap-1">
            Status Revert <span className="text-gray-400 cursor-help">ⓘ</span>
          </div>
          <div className="flex items-center gap-1">
            Success <span className="text-gray-400 cursor-help">ⓘ</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-black">1</span>
            <div className="h-4 w-full bg-blue-200 rounded">
              <div className="h-full bg-sky-500 rounded w-[100%]"></div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-black">1</span>
            <div className="h-4 w-full bg-sky-500 rounded">
              <div className="h-full bg-red-300 rounded w-[0%]"></div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-black">0</span>
            <div className="h-4 w-full bg-gray-200 rounded">
              <div className="h-full bg-gray-400 rounded w-[0%]"></div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-black">3</span>
            <div className="h-4 w-full bg-gray-100 rounded">
              <div className="h-full bg-green-500 rounded w-[0%]"></div>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-right text-red-600 font-semibold">
          <div className="flex justify-end items-center gap-1">
            0 Retry<span className="text-gray-400 cursor-help">ⓘ</span>
          </div>
          <div className="flex justify-end items-center gap-1">
            1 Dropped <span className="text-gray-400 cursor-help">ⓘ</span>
          </div>
          <div className="flex justify-end items-center gap-1">
            0 Failed <span className="text-gray-400 cursor-help">ⓘ</span>
          </div>
           <div className="flex justify-end items-center gap-1">
            0 Failed <span className="text-gray-400 cursor-help">ⓘ</span>
          </div>
         
        </div>
      </div>
    </div>
    </div>
  );
};

export default TransactionFunnelAnalysis;
