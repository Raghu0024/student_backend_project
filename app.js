const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3004;
const db = new sqlite3.Database('./students.db');

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Define API routes
app.get('/students', (req, res) => {
  db.all('SELECT * FROM students', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ students: rows });
  });
});

app.post('/students', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    res.status(400).json({ error: 'Name and email are required' });
    return;
  }
  db.run('INSERT INTO students (name, email) VALUES (?, ?)', [name, email], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Student added successfully' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
