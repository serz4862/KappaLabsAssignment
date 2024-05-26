const express = require('express');
const axios = require('axios');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const router = express.Router();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

router.post('/generate', async (req, res) => {
  const { tone, length, features, positioning } = req.body;
  
  // Map the length to token count
  const lengthMapping = {
    Short: 50,   // Example token count
    Medium: 100, // Example token count
    Long: 150    // Example token count
  };
  
  const promptTemplate = `Generate a ${length} marketing copy in a ${tone} tone for a building with the following features: ${features}. The brand positioning is: ${positioning}.`;
  
  const options = {
    method: "POST",
    url: "https://api.edenai.run/v2/text/generation",
    headers: {
      authorization: `Bearer ${process.env.EDEN_AI_API_KEY}`,
    },
    data: {
      providers: "openai",
      text: promptTemplate,
      temperature: 0.7,
      max_tokens: lengthMapping[length],
      fallback_providers: "",
    },
  };
  
  try {
    const response = await axios.request(options);
    const generatedCopy = response.data.choices[0].text;
    res.json({ output: generatedCopy });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/insert', async (req, res) => {
  const { tone, length, features, positioning, output } = req.body;

  try {
    const { data, error } = await supabase
      .from('marketing_copies')
      .insert([{ tone, length, features, positioning, output }]);

    if (error) throw error;
    res.json({ message: 'Data inserted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/regenerate', async (req, res) => {
  const { selectedText, completeText, option } = req.body;
  const promptTemplate = `Regenerate the following text to make it ${option}: "${selectedText}". The complete context is: "${completeText}".`;

  const options = {
    method: "POST",
    url: "https://api.edenai.run/v2/text/generation",
    headers: {
      authorization: `Bearer ${process.env.EDEN_AI_API_KEY}`,
    },
    data: {
      providers: "openai",
      text: promptTemplate,
      temperature: 0.7,
      max_tokens: 150,  // Adjust based on requirement
      fallback_providers: "",
    },
  };

  try {
    const response = await axios.request(options);
    const regeneratedText = response.data.choices[0].text;
    const updatedText = completeText.replace(selectedText, regeneratedText);
    res.json({ output: updatedText });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
