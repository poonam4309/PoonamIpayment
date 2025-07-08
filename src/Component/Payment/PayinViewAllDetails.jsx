import React, { useState } from 'react'

const PayinViewAllDetails = () => {
    const [payin, setPayin] = useState({
        id: 'TX12345',
        amount: 'ICICI Bank, AC No: 1234567890',
        charges: 'UTR20240527001',
        netAmount: 'user@upi',
        utr: '2025-05-27 14:00',
        date: '₹5,000',
        time: 'UPI',
        status: 'Success'
    });
    const getStatusColor = (status) => {
        switch (status) {
            case 'Success':
                return 'text-green-600';
            case 'Pending':
                return 'text-yellow-500';
            case 'Failed':
                return 'text-red-500';
            default:
                return 'text-gray-600';
        }
    };
    return (
        <div className="flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-xl">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-semibold text-gray-800 text-center w-full mb-3">
                        Payin Details
                    </h3>
                </div>
                <div className="space-y-2 text-gray-700">
                    <p><strong>User Name:</strong> {payin.transactionsId}</p>
                    <p><strong> Amount: </strong> {payin.userName}</p>
                    <p><strong>Date:</strong>{payin.type}</p>
                    <p><strong>Time:</strong> {payin.bankDetails}</p>
                    <p><strong>Payment Mode:</strong>{payin.paymentMode}</p>
                    <p><strong>Charges</strong> {payin.charges}</p>
                    <p>
                        <strong>Status:</strong>{' '}
                        <span className={getStatusColor(payin.status)}>
                            {payin.status}
                        </span>
                    </p>
                    <p><strong>Generated Link:</strong> {payin.link}</p>
                </div>
            </div>
        </div>
    )
}

export default PayinViewAllDetails