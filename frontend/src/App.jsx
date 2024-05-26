
import React, { useState } from 'react';
import InputForm from './components/Input';
import OutputBox from './components/Output';
import './index.css'; // Make sure to import the CSS

const App = () => {
  const [output, setOutput] = useState('');

  const handleGenerate = (inputData) => {
    // Simulate the generation of the description (replace with actual API call)
    const { tone, length, features, positioning } = inputData;
    const lengthMapping = {
      'Short': '4-6 sentences',
      'Medium': '8-10 sentences',
      'Long': '15-20 sentences'
    };
    const generatedOutput = `Tone: ${tone}\nLength: ${lengthMapping[length]}\nFeatures: ${features}\nPositioning: ${positioning}\n\nGenerated description here...`;
    setOutput(generatedOutput);
  };

  const handleInsert = (inputData) => {
    // Simulate inserting data into the database (replace with actual API call)
    console.log('Inserting into DB:', inputData);
  };

  const handleRegenerate = () => {
    // Simulate regenerating the output (replace with actual API call if needed)
    if (output) {
      const newOutput = output + '\n\nRegenerated description here...';
      setOutput(newOutput);
    }
  };

  return (
    <div className="container mx-auto p-4 border-solid border-2 border-gray-600 mt-8">
      <h1 className="text-3xl text-center font-bold mb-4">KAPPA LABS Assignment</h1>
      <div className='border-solid border-2 border-gray-400'>
      <InputForm onGenerate={handleGenerate} onInsert={handleInsert} />
      <OutputBox output={output} onRegenerate={handleRegenerate} />
      </div>
    </div>
  );
};

export default App;