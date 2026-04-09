require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');

const app = express();
connectDB();

app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api', require('./src/routes/auth.routes'));
app.use('/api', require('./src/routes/user.routes'));
app.use('/api', require('./src/routes/upload.routes'));

app.listen(3000, () => console.log('Servidor corriendo 🚀'));