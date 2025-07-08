import React, { useState } from 'react';
// import { CheckCircle, Clock, XCircle, Copy } from 'react-icons';
import { FaCheckCircle } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { GoXCircleFill } from "react-icons/go";
import { FaCopy } from "react-icons/fa";
import PayinDetails from './PayinDetails';

const Payin = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ name: '', amount: '', email: '' });
    const [generatedLink, setGeneratedLink] = useState('');

    const handleGenerateLink = () => {
        const link = `https://paymentgateway.com/pay/${Date.now()}`;
        setGeneratedLink(link);
        setStep(2);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedLink);
        alert('Link copied!');
    };


    return (
        <div className="p-6 space-y-6">
            <h2 className="text-2xl font-bold">Payin</h2>

            {/* Step 1: Create Payment Link */}
            {step === 1 && (
                <div className="bg-white p-6 rounded-lg shadow space-y-4">
                    <h3 className="text-lg font-semibold">Create Payment Link</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input type="text" placeholder="Customer Name" className="border p-2 rounded" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                        <input type="email" placeholder="Email" className="border p-2 rounded" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                        <input type="number" placeholder="Amount" className="border p-2 rounded" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
                    </div>
                    <button className="bg-blue-600 text-white  cursor-pointer px-4 py-2 rounded hover:bg-blue-700" onClick={handleGenerateLink}>Generate Link</button>
                </div>
            )}

            {/* Step 2: Show Link */}
            {step === 2 && (
                <div className="bg-white p-6 rounded-lg shadow space-y-4">
                    <h3 className="text-lg font-semibold">Generated Payment Link</h3>
                    <div className="flex items-center gap-4">
                        <input type="text" value={generatedLink} readOnly className="border p-2 rounded w-full" />
                        <button onClick={copyToClipboard} className="p-2 cursor-pointer bg-gray-200 rounded hover:bg-gray-300">
                            <FaCopy className="w-4 h-4" />
                        </button>
                    </div>
                    <button className="text-sm cursor-pointer text-blue-600 hover:underline" onClick={() => setStep(1)}>← Edit Link</button>
                </div>
            )}
            <PayinDetails />

        </div>
    );
};

export default Payin;
