const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://Abhay:rO0w1Znbh4jBoVuG@cluster0.87x3azb.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(error => {
  console.error('Error connecting to MongoDB:', error);
});

app.get('/', (req, res) => {
  res.send('Hello, MongoDB!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

