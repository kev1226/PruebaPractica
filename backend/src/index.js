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

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Conectado a MongoDB');
        app.listen(process.env.PORT, () =>
            console.log(`Servidor backend en puerto ${process.env.PORT}`)
        );
    })
    .catch(err => console.error('Error conectando a MongoDB:', err));
