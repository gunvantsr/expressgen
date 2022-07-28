const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = '5000' || process.env.PORT;
const { DB_URI } = require('./config/config');

mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected successfully!');
  })
  .catch((error) => {
    console.log(error);
  });

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/health', (req, res) => {
  const healthCheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now(),
  };
  try {
    res.send(healthCheck);
  } catch (error) {
    healthCheck.message = error;
    res.status(503), send();
  }
});

app.listen(PORT, () => {
  console.log(`app is listening on http://localhost:${PORT}..`);
});
