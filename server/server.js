const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8000;

app.post("/generate-workout", async (req, res) => {
  try {
    const response = await axios.post("https://api.openai.com/v1/chat/completions", {
      model: "gpt-3.5-turbo-1106",
      messages: [{ role: "user", content: req.body.message }],
      temperature: 0.8,
      max_tokens: 500,
    }, {
      headers: {
        Authorization: `Bearer ${process.env.VITE_OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => console.log(`Your server is running on PORT ${PORT}`));

