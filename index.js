const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Define your API key
const apiKey = "@akhiroShotiVids";

// Middleware function to check API key
function checkApiKey(req, res, next) {
  const providedApiKey = req.query.apiKey;
  if (!providedApiKey || providedApiKey !== apiKey) {
    return res.status(401).json({ error: '𝖴𝗇𝖺𝗎𝗍𝗁𝗈𝗋𝗂𝗓𝖾𝖽 𝗎𝗌𝖾𝗋. 𝖯𝗅𝖾𝖺𝗌𝖾 𝗉𝗋𝗈𝗏𝗂𝖽𝖾 𝖺𝗇 𝖺𝗉𝗂𝖪𝖾𝗒 𝗍𝗈 𝗐𝗈𝗋𝗄' });
  }
  next();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const videoUrls = [
  'https://drive.google.com/uc?export=download&id=',
  'https://drive.google.com/uc?export=download&id=',
  'https://drive.google.com/uc?export=download&id=',
  'https://drive.google.com/uc?export=download&id='
];

shuffleArray(videoUrls);

// Apply middleware to the /api/video route
app.get('/api/video', checkApiKey, (req, res) => {
  res.json(videoUrls);
});

app.use(express.json());
app.listen(PORT, () => {
  console.log(`API server is running on port ${PORT}`);
});