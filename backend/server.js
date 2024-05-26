const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const routes = require('./src/routes');
const axios = require('axios');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(express.json());

// Import routes
const routes = require('./src/routes');
app.use('/api', routes);

const port = process.env.PORT || 8000

app.listen(port, () => {
 try{
  console.log(`Server is running on http://localhost:${port}`);
 }
 catch(error){
  console.log("error");
 }
});
