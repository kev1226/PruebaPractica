const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cryptoRoutes = require('./routes/cryptoRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/cryptos', cryptoRoutes);

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Servidor backend en puerto ${PORT}`);
    });
  })
  .catch(err => console.error('Error conectando a MongoDB:', err));
