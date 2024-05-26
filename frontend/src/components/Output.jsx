// src/components/OutputBox.js

import React from 'react';
import axios from 'axios'

const OutputBox = ({ output, onInsert }) => {
  const handleInsert = async (inputData) => {
    try {
      await axios.post('http://localhost:8000/api/insert', inputData);
      console.log('Data inserted successfully');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="space-y-4 p-4 bg-gray-100 rounded-md shadow-md ">
      <h3 className="text-xl font-semibold ml-8">Generated Output</h3>
      <textarea
        readOnly
        value={output}
        className="h-48 mt-1 block w-full border-double border-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        placeholder="output Text"
      />
      <div className="space-x-4 flex items-center justify-center">
      <button
          onClick={handleInsert}
          className=" px-16 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Insert in DB
        </button> 
      </div>
    
    </div>
  );
};

export default OutputBox;
