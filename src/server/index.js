const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect ("", {
    useNewUrlParser : true,
});

app.listen(3001, ()=> {
    console.log('server running on  port 3001')
})