const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post('/', (req, res) => {
  const { data } = req.body;

  if (!data || typeof data !== 'string') {
    return res.status(400).json({ error: "Invalid input. Expected a string field 'data'." });
  }

  const sortedCharacters = data.split('').sort();
  res.json({ word: sortedCharacters });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});