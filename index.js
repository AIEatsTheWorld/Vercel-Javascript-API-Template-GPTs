require("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

app.post("/your-api", async (req, res) => {
  // API logic here
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
