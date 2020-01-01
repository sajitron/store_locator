const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

//* load env variables
dotenv.config({ path: '.env' });

connectDB();

const app = express();

//* body parser
app.use(express.json());

//* Enable cors
app.use(cors());

//* Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//* Routes
app.use('/api/v1/stores', require('./routes/stores'));

const PORT = process.env.PORT || 4500;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
