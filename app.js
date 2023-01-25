const express = require('express');
const homeRoutes = require('./routes/homeRoutes');

const app = express();

require('dotenv').config({path:'./config/.env'})

const PORT = process.env.PORT

app.set('view engine', 'ejs');


//middlewares
app.use('/', homeRoutes);

app.listen(PORT, () => console.log(`on port ${PORT}`))