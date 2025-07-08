import React, { useState } from 'react';
import Papa from 'papaparse';

const BulkUploads = () => {
  const [csvData, setCsvData] = useState([]);
  const [error, setError] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setError(null);

    if (file && file.type === 'text/csv') {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          // Basic validation: check required columns
          const requiredColumns = ['Reference ID', 'File name', 'Uploaded By', 'Uploaded At', 'Status'];
          const isValid = requiredColumns.every(col => result.meta.fields.includes(col));

          if (!isValid) {
            setError("CSV format invalid. Please ensure it has all required headers.");
            setCsvData([]);
            return;
          }

          setCsvData(result.data);
        },
        error: () => {
          setError("Failed to parse the CSV file.");
        },
      });
    } else {
      setError("Please upload a valid CSV file.");
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Bulk Uploads</h2>

      {/* Upload Section */}
      <div className="flex items-center gap-4">
        <label className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
          Upload File
          <input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            className="hidden"
          />
        </label>
      </div>

      {/* Error */}
      {error && <div className="text-red-500">{error}</div>}

      {/* CSV Preview */}
      {csvData.length > 0 && (
        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                {Object.keys(csvData[0]).map((header) => (
                  <th key={header} className="text-left px-4 py-2">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {csvData.map((row, index) => (
                <tr key={index} className="border-t">
                  {Object.keys(row).map((col, i) => (
                    <td key={i} className="px-4 py-2">{row[col]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BulkUploads;
