const express = require('express')
const mongoose = require('mongoose')
const taskRoutes = require('./routes/taskRoutes')
const app = express()
const port = 3000




app.use(express.json()) // Middleware to parse JSON bodies


// db connect
mongoose.connect('mongodb://127.0.0.1:27017/todo')
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});


app.use(taskRoutes);



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})