const express = require('express');
const mongoose = require('mongoose'); //Used to communicate with mongodb  
const app = express();
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

//Middleware & Static files
app.use(express.json());
app.use(cors({ // add cors middleware
  origin: 'http://localhost:3000', // set allowed origin
  credentials: true // allow credentials (e.g. cookies)
}));


//Engine
app.set('view engine', 'js')

//connect to mongoDb
const dbURI = 'mongodb+srv://harl:SCRAM@sneakers-website.ewtozh0.mongodb.net/sneaker';
mongoose.connect(dbURI)
.then((result) => app.listen(4000))//listen to request after connection is complete
.catch((err) => console.log(err));

//routes
// app.get('/Sneakers-website', (req, res) => {
//     res.sendFile('Sneakers-website/build/index.html');
//   });
// app.get('/', (req, res) => res.render('/build/index.html'));
// app.get('/dashboard', (req, res) => res.render('dashboard'));

// serve static files from the build directory
app.use(express.static('build'))
app.use(authRoutes);