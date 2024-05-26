// src/components/InputForm.js

import React, { useState } from 'react';

const InputForm = ({ onGenerate, onInsert }) => {
  const [tone, setTone] = useState('Casual');
  const [length, setLength] = useState('Short');
  const [features, setFeatures] = useState('');
  const [positioning, setPositioning] = useState('');

  const handleGenerate = () => {
    const inputData = { tone, length, features, positioning };
    onGenerate(inputData);
  };

  const handleInsert = () => {
    const inputData = { tone, length, features, positioning };
    onInsert(inputData);
  };

  return (
    <div className="space-y-4 p-4 bg-gray-100 rounded-md shadow-md">
        <div className='flex items-center justify-around'>
        {/* <div className='flex'> */}
        <label className="block">
        <span className="text-gray-700 pb-2 pt-2">Brand Positioning:</span>
        <textarea
          value={positioning}
          onChange={(e) => setPositioning(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="2-3 sentences about the brand positioning"
        ></textarea>
      </label>
      {/* </div> */}
      <label className="block">
        <span className="text-gray-700">Features of the Building:</span>
        <textarea
          value={features}
          onChange={(e) => setFeatures(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="2-3 sentences about the features"
        ></textarea>
      </label>
        </div>
      <div className='flex items-center justify-around'>
      <label className="block">
        <span className="text-gray-700">Tone:</span>
        <select
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="Casual">Casual</option>
          <option value="Formal">Formal</option>
          <option value="Grandiose">Grandiose</option>
        </select>
      </label>
      <label className="block">
        <span className="text-gray-700">Length of the Copy:</span>
        <select
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="Short">Short</option>
          <option value="Medium">Medium</option>
          <option value="Long">Long</option>
        </select>
      </label>
      
      
      </div>
{/* button to generate */}
      <div className="space-x-4 flex items-center justify-center">
        <button
          onClick={handleGenerate}
          className=" px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Generate
        </button>
       
      </div>
    </div>
  );
};

export default InputForm;
