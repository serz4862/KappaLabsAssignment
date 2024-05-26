import React, { useState } from 'react';
import InputForm from './components/Input';
import OutputBox from './components/Output';
import axios from 'axios';
import './index.css'; // Make sure to import the CSS

const App = () => {
  const [output, setOutput] = useState('');

  const handleGenerate = async (inputData) => {
    try {
      const response = await axios.post('http://localhost:8000/api/generate', inputData);
      setOutput(response.data.output);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInsert = async (inputData) => {
    try {
      await axios.post('http://localhost:8000/api/insert', inputData);
      console.log('Data inserted successfully');
    } catch (error) {
      console.error(error);
    }
  };

  // const handleRegenerate = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:8000/api/regenerate', { selectedText: '', completeText: output, option: '' });
  //     setOutput(response.data.output);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className="container mx-auto p-4 border-solid border-2 border-gray-600 mt-8">
      <h1 className="text-3xl text-center font-bold mb-4">KAPPA LABS Assignment</h1>
      <InputForm onGenerate={handleGenerate} onInsert={handleInsert} />
      <OutputBox output={output} onInsert={handleInsert} />
    </div>
  );
};

export default App;
