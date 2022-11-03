const { Client } = require('pg');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const config = require('./config.js')[process.env.NODE_ENV || "dev"]
const PORT = config.port;

const client = new Client({
  connectionString: config.connectionString
});

client.connect();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`)
});


app.get('/expenses', (req, res) => {
  client.query("SELECT * FROM expenses")
    .then(result => {
      res.status(200).send(result.rows)
    })
});