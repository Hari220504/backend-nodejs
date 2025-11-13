const express = require('express');
const cors = require('cors');
require('dotenv').config();


const conn = require('./db/connection');
const app = express();


app.use(cors());
app.use(express.json());

const traineeRoutes = require('./routes/trainee-routes');
app.use('api/v1/trainees', traineeRoutes);


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`); 
});