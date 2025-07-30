const express = require('express');
const axios = require('axios');
const app = express();

// Reemplaza estos datos con los de tu WooCommerce
const WOO_URL = 'https://tu-tienda.com/wp-json/wc/v3';
const CONSUMER_KEY = 'ck_tu_consumer_key';
const CONSUMER_SECRET = 'cs_tu_consumer_secret';

app.get('/productos', async (req, res) => {
  try {
    const response = await axios.get(`${WOO_URL}/products`, {
      auth: {
        username: CONSUMER_KEY,
        password: CONSUMER_SECRET
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor MCP corriendo en puerto ${PORT}`);
});
