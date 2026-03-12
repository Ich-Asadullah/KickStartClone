const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(bodyParser.json());

const authRoute = require('./routes/auth');
const projectRoute = require('./routes/project');
const backersRoute = require('./routes/backer');
const entrepreneurRoute = require('./routes/entrepreneur');
const visitorsRoute = require('./routes/visitor');

// const dbURI = process.env.MONGO_URI;
mongoose.connect('mongodb+srv://mrbilal:password@cluster0.mongodb.net/kickstarter')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


app.use('/api/projects', projectRoute);
app.use('/api/auth', authRoute);
app.use('/api/backers', backersRoute);
app.use('/api/entrepreneur', entrepreneurRoute);
app.use('/api/visitors', visitorsRoute);




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});