import React, { useEffect, useState } from "react";
import axios from "axios";

const CryptoList = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/cryptos") // Cambia esto si tu backend corre en otro lado
      .then(res => setCryptos(res.data))
      .catch(err => console.error("Error fetching cryptos:", err));
  }, []);

  return (
    <div className="container">
      <h1>Top Criptomonedas</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio actual</th>
            <th>Capitalización</th>
            <th>% Cambio 24h</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map(c => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>${c.current_price.toLocaleString()}</td>
              <td>${c.market_cap.toLocaleString()}</td>
              <td
                style={{ color: c.price_change_percentage_24h > 0 ? "green" : "red" }}
              >
                {c.price_change_percentage_24h.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoList;
// and a POST route to update the cryptocurrency data from an external API.
// The GET route retrieves all cryptocurrencies from the database and sorts them by market cap. 