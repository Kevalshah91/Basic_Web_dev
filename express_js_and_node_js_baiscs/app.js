const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Keval !');
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});