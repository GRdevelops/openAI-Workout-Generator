import axios from 'axios';

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const response = await axios.post("https://api.openai.com/v1/chat/completions", {
        model: "gpt-3.5-turbo-1106",
        messages: [{ role: "user", content: req.body.message }],
        temperature: 0.8,
        max_tokens: 500,
      }, {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      });

      res.send(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).send(`Internal Server Error: ${error.message}`);
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
};
