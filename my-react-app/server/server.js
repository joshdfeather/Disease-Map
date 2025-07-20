const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(cors()); // Allow all CORS requests

// Proxy WHO life expectancy data
app.get("/api/life-expectancy", async (req, res) => {
  try {
    const url = "https://ghoapi.azureedge.net/api/WHOSIS_000001";
    const response = await axios.get(url);
    res.json(response.data); // Send WHO data to frontend
  } catch (error) {
    console.error("Proxy fetch error for Life Expectancy:", error.message);
    res.status(500).send("Failed to fetch Life Expectancy data from WHO API");
  }
});

// Proxy WHO HIV data
app.get("/api/hiv", async (req, res) => {
  try {
    const url = "https://ghoapi.azureedge.net/api/HIV_0000000001";
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Proxy fetch error for HIV data:", error.message);
    res.status(500).send("Failed to fetch HIV data from WHO API");
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
