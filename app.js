const express = require('express');
const connectDB = require('./config/database');
const homeRoutes = require('./routes/homeRoutes');

const app = express();

require('dotenv').config({path:'./config/.env'})

connectDB();

const PORT = process.env.PORT

app.set('view engine', 'ejs');


//middlewares
app.use('/', homeRoutes);

app.listen(PORT, () => console.log(`on port ${PORT}`))