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


app.get('/', (req, res) => {
  client.query("SELECT * FROM expenses")
    .then(result => {
      res.status(200).send(result.rows)
    })
});

// delete by id
app.delete('/delete/:id', (req, res) => {
  let id = req.params.id;
  client.query("DELETE FROM expenses WHERE id=$1", [id], (error, result) => {
    if (error) {
      console.log(error);
    } else if (result.rowCount === 0) {
      res.status(404).send('Expense not found');
    }
    res.status(201).send('Expense was removed successfully')
  });
});

app.delete('/removeAll', (req, res) => {
  client.query("DELETE FROM expenses")
    .then(result => {
      res.status(201).send('Removed all rows from table')
    })
});

app.post('/add_bill', (req, res) => {
  const { expense_name, expense_price } = req.body;
  client.query('INSERT INTO expenses(expense_name, expense_price) VALUES($1, $2) RETURNING *;', [req.body.expense_name, req.body.expense_price])
    .then(result => {
      res.status(201).send(result.rows)
    })
})