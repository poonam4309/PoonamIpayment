import React, { useState } from "react";
import { Pencil, Eye, Trash2 } from "lucide-react";

const Client = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesToShow, setEntriesToShow] = useState(10);

  const clients = [
    { id: 1, name: "Rahul Sharma", email: "rahul@example.com", status: "Active" },
    { id: 2, name: "Priya Singh", email: "priya@example.com", status: "Pending" },
    { id: 3, name: "Amit Verma", email: "amit@example.com", status: "Inactive" },
    { id: 4, name: "Neha Patil", email: "neha@example.com", status: "Active" },
    { id: 5, name: "Suresh Mehta", email: "suresh@example.com", status: "Pending" },
    { id: 6, name: "Divya Jain", email: "divya@example.com", status: "Active" },
  ];

  const filteredClients = clients
    .filter(client =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, entriesToShow);

  return (
    <div className="p-6">
      <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Client Management</h2>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <label htmlFor="entries">Show</label>
            <select
              id="entries"
              className="border border-gray-300 rounded px-2 py-1"
              value={entriesToShow}
              onChange={(e) => setEntriesToShow(parseInt(e.target.value))}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
            </select>
            <span>entries</span>
          </div>

          <input
            type="text"
            placeholder="Search client..."
            className="border border-gray-300 rounded px-3 py-1 text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-x-auto bg-white shadow-xl rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-blue-100 uppercase text-xs text-gray-600">
            <tr>
              <th className="px-6 py-3">Sr no</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.length > 0 ? (
              filteredClients.map((client, index) => (
                <tr key={client.id} className="border-b hover:bg-gray-50 transition">
                  <td className="px-6 py-3 font-medium">{index + 1}</td>
                  <td className="px-6 py-3">{client.name}</td>
                  <td className="px-6 py-3">{client.email}</td>
                  <td className="px-6 py-3">
                    <span
                      className={`px-2 py-1 text-xs rounded-full font-semibold ${
                        client.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : client.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {client.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 flex justify-center gap-3 text-gray-600">
                    <button title="View"><Eye className="w-4 h-4 hover:text-blue-500  cursor-pointer" /></button>
                    <button title="Edit"><Pencil className="w-4 h-4 hover:text-green-500  cursor-pointer" /></button>
                    <button title="Delete"><Trash2 className="w-4 h-4 hover:text-red-500  cursor-pointer" /></button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-5 text-gray-500">
                  No clients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Client;
