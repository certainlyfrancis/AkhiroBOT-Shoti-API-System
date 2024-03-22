const express = require("express");
const gradient = require("gradient-string");

const app = express();
const PORT = 3000;

const apiKey = "@akhiroShotiVids";

function checkApiKey(req, res, next) {
  const providedApiKey = req.query.apiKey;
  if (!providedApiKey || providedApiKey !== apiKey) {
    return res
      .status(401)
      .json({
        error:
          "Unauthorized user. Please provide an API key to work, If you dont have the API key. Please contact the admin to have the key",
      });
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
  'https://drive.google.com/uc?export=download&id=1Cs6xdqRLo_BigcvYVszQdrurwJL5Em8q',
  'https://drive.google.com/uc?export=download&id=1DGjmoPZmiAU_KVKBAOqdLlk2FfyAj89p',
  'https://drive.google.com/uc?export=download&id=1D1Ae2WOz_mJMpRQOAaEto9MaVHuVapkB',
  'https://drive.google.com/uc?export=download&id=1DKNhm7enV-iSB2v5zqBigR_4hBkQnyaJ',
  'https://drive.google.com/uc?export=download&id=1DHPRIfLCm_OfqgxsAXOXiMYD-DzVHWN_',
  'https://drive.google.com/uc?export=download&id=1DEheeUuoH7IAP9QROGxqmCHpFnEu32WW',
  'https://drive.google.com/uc?export=download&id=1ChQIPa_Jep8rY1y9auKZ-vdfESP2oLn8',
  'https://drive.google.com/uc?export=download&id=1DP1LIHZc76Kv_iNCom1gQLWD2u44Uo67',
  'https://drive.google.com/uc?export=download&id=1D4e1JAgku07D9-RZzbCoDHY4RbomoosS',
  'https://drive.google.com/uc?export=download&id=1DSxHSEtxdBnQo5YqpKcFKxN5rvcj_uUh'
];

shuffleArray(videoUrls);

app.get("/api/video", checkApiKey, (req, res) => {
  try {
    const randomIndex = Math.floor(Math.random() * videoUrls.length);
    res.json({ data: [videoUrls[randomIndex]] });
  } catch (error) {
    console.error("Error fetching video:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.use(express.json());

console.log(`
             █▀ █░█ █▀█ ▀█▀ █
             ▄█ █▀█ █▄█ ░█░ █`);
console.log(``);
console.log(gradient.retro(`[ A K H I R O ] Starting shoti api..`));
console.log(gradient.retro(`[ A K H I R O ] Reading shoti vids..`));
console.log(
  gradient.retro(`[ A K H I R O ] Successfully loaded shoti vids...`),
);
console.log(gradient.retro(`[ A K H I R O ] Activated Shoti API..`));
console.log();
console.log(
  gradient.retro(`[ A K H I R O ] Welcome to official AkhiroBOT shoti api, If you manage to find this api. Please dont own my file and also this file is for personal usage for AkhiroBot. Have Fun!!

CREATED BY: AkhiroDEV`),
);

app.listen(PORT, () => {
  console.log(gradient.retro(`[ A K H I R O ] Running on Port ${PORT}`));
});
