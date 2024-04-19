
const express = require('express');
const app = express();
app.use(express.json());
const users = [
  { id: 1, name: 'Keval Shah' },
  { id: 2, name: 'Virat Kolhi' },
];
app.get('/', (req, res) => {
  res.send('Hello, this is the root endpoint!');
});
app.get('/users', (req, res) => {
  res.json(users);
});

// Get a specific user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Add a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// Update a user by ID
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;
  const index = users.findIndex(u => u.id === userId);

  if (index !== -1) {
    users[index] = { ...users[index], ...updatedUser };
    res.json(users[index]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Delete a user by ID
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === userId);

  if (index !== -1) {
    const deletedUser = users.splice(index, 1)[0];
    res.json(deletedUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Set the port for the server to listen on
const port = 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
