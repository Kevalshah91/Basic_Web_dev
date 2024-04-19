const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const tutorialRoutes = require('./routes/tutorial.routes');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mango', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Test route
app.get('/', (req, res) => {
  res.send('Welcome to the Express-Mongo CRUD API');
});

// Include routes
app.use('/tutorials', tutorialRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
