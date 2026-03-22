require('dotenv').config();
const express = require('express');
const path = require('path');
const router = require('./routes/router');
const loggerMiddleware = require('./middlewares/logger');
const { connectDB, sequelize } = require('./config/database');
const userRoutes = require('./routes/userRoutes');
require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(loggerMiddleware);

app.use('/', router);
app.use('/usuarios', userRoutes);

const start = async () => {
  await connectDB();
  await sequelize.sync({ alter: true });
  console.log('📦 Tablas sincronizadas');
  app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
  });
};

start();