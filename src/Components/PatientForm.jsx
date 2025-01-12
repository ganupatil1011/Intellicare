import React, { useState } from "react";

const PatientForm = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Patient Data Input Form</h2>
      <form>
        {/* Basic Patient Information */}
        <h3 className="text-xl font-semibold mb-2">Basic Patient Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Date of Birth</label>
            <input
              type="date"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Gender</label>
            <select className="w-full p-2 border rounded">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block font-medium">Contact Information</label>
            <input
              type="text"
              placeholder="Phone or Email"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Symptoms */}
        <h3 className="text-xl font-semibold mt-6 mb-2">Symptoms</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-medium">Symptom Description</label>
            <input
              type="text"
              placeholder="Enter symptoms"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Duration</label>
            <input
              type="text"
              placeholder="E.g., 3 days"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Severity</label>
            <select className="w-full p-2 border rounded">
              <option value="">Select Severity</option>
              <option value="mild">Mild</option>
              <option value="moderate">Moderate</option>
              <option value="severe">Severe</option>
              <option value="critical">Critical</option>
            </select>
          </div>
        </div>

        {/* Medical History */}
        <h3 className="text-xl font-semibold mt-6 mb-2">Medical History</h3>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block font-medium">Previous Medical Conditions</label>
            <textarea
              placeholder="E.g., Hypertension, Diabetes"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Allergies</label>
            <input
              type="text"
              placeholder="E.g., Penicillin, Dust"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-medium">Family History</label>
            <textarea
              placeholder="E.g., Heart disease, Cancer"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* File Upload */}
        <h3 className="text-xl font-semibold mt-6 mb-2">Diagnostic Results</h3>
        <div className="flex flex-col items-center justify-center border-2 border-dashed p-4 rounded-md">
          <input
            type="file"
            multiple
            onChange={handleFileUpload}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded"
          >
            Upload Reports
          </label>
          <div className="mt-2">
            {uploadedFiles.map((file, index) => (
              <p key={index} className="text-sm">
                {file.name}
              </p>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-right">
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientForm;
