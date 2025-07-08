import React, { useState } from 'react';

const Profile = ({ onProfileSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        address2: '',
        state: '',
        city: '',
        zipcode: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onProfileSubmit(formData);
    };

    return (
        <div>
            <div className='flex gap-5 '>
                <button className='bg-green-500 text-white p-2 rounded cursor-pointer'>PayInBalance : ₹ 100</button>
                {/* <button className='bg-red-500 text-white p-3 cursor-pointer'>PayOutBalance : ₹ 420.50</button> */}

            </div>


            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-4 shadow rounded-lg bg-white mt-6 space-y-4">
                <h2 className="text-xl font-bold mb-4">Profile Settings</h2>
                <input name="name" type="text" required placeholder="Name" className="w-full p-2 border rounded" onChange={handleChange} />
                <input name="address" type="text" required placeholder="Address" className="w-full p-2 border rounded" onChange={handleChange} />
                <input name="address2" type="text" required placeholder="Address2" className="w-full p-2 border rounded" onChange={handleChange} />
                <input name="state" type="text" required placeholder="State" className="w-full p-2 border rounded" onChange={handleChange} />
                <input name="city" type="text" required placeholder="City" className="w-full p-2 border rounded" onChange={handleChange} />
                <input name="zipcode" type="text" required placeholder="Zipcode" className="w-full p-2 border rounded" onChange={handleChange} />
                <input name="image" type="file" accept="image/*" className="w-full p-2 border rounded" onChange={handleChange} />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-600">Save</button>
            </form>
        </div>

    );
};

export default Profile;