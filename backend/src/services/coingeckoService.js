const axios = require('axios');

const getCryptoData = async () => {
  const url = 'https://api.coingecko.com/api/v3/coins/markets';
  const params = {
    vs_currency: 'usd',
    order: 'market_cap_desc',
    per_page: 10,
    page: 1,
    sparkline: false,
  };

  const { data } = await axios.get(url, { params });
  return data;
};

module.exports = { getCryptoData };
// This service fetches cryptocurrency data from the CoinGecko API.
// It retrieves the top 10 cryptocurrencies by market cap in USD.