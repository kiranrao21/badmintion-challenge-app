const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

let matches = [];

app.post('/api/add-match', (req, res) => {
  const { pairs, score } = req.body;
  // Calculate contribution based on the score
  let contribution;
  if (score < 10) {
    contribution = 70;
  } else if (score < 15) {
    contribution = 50;
  } else {
    contribution = 30;
  }

  matches.push({ pairs, score, contribution });
  res.status(201).json({ message: 'Match added successfully' });
});

app.get('/api/matches', (req, res) => {
  res.json(matches);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
