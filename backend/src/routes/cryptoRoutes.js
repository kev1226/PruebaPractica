const express = require('express');
const router = express.Router();
const { getCryptoData } = require('../services/coingeckoService');
const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
  id: String,
  symbol: String,
  name: String,
  current_price: Number,
  market_cap: Number,
  price_change_percentage_24h: Number,
}, { timestamps: true });

const Crypto = mongoose.model('Crypto', cryptoSchema);

router.get('/', async (req, res) => {
  try {
    const cryptos = await Crypto.find().sort({ market_cap: -1 });
    res.json(cryptos);
  } catch (err) {
    res.status(500).json({ error: 'Error obteniendo criptomonedas' });
  }
});

router.post('/update', async (req, res) => {
  try {
    const data = await getCryptoData();
    await Crypto.deleteMany({});
    await Crypto.insertMany(data);
    res.json({ message: 'Datos actualizados exitosamente' });
  } catch (err) {
    res.status(500).json({ error: 'Error actualizando datos' });
  }
});

module.exports = router;
// This code defines the routes for handling cryptocurrency data.
// It includes a GET route to fetch all cryptocurrencies from the database