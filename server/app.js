const express = require('express');
const mongoose = require('mongoose'); //Used to communicate with mongodb  
const app = express();
const authRoutes = require('./routes/authRoutes');

//Middleware & Static files
app.use(express.static('public'));

//Engine
app.set('view engine', 'ejs')

//connect to mongoDb
const dbURI = 'mongodb+srv://harl:SCRAM@sneakers-website.ewtozh0.mongodb.net/sneaker';
mongoose.connect(dbURI)
.then((result) => app.listen(3000))//listen to request after connection is complete
.catch((err) => console.log(err));

//routes
app.get('/', (req, res) => res.render(''));
app.get('/dashboard', (req, res) => res.render('dashboard'));
app.use(authRoutes);