const { createReadStream, unlinkSync } = require("fs");
const { resolve } = require("path");
const axios = require("axios");


const animeVoiceApiUrl = "https://api.tts.quest/v3/voicevox/synthesis?text=";

module.exports = {
  config: {
    name: "anya",
    author: "Joshua Sy",
    countDown: 2,
    role: 0,
    version: "1.0.0",
     shortDescription: {
      en: "Conversation"
    },
    longDescription: {
      en: "conversation with the anya 😂"
    },
    category: "Talk",
    guide: {
      en: "{pn} <prompt>"
    }
  },
  onStart: async function({ api, event, args }) {
  const textToConvert = args.join(" ");
  const languageToSay = "tl"; 
  const pathFemale = resolve(__dirname, "cache", `${event.threadID}_female.mp3`);


  try {

    const animeVoiceApiText = encodeURIComponent(textToConvert);
    const animeVoiceApiFullUrl = `${animeVoiceApiUrl}${animeVoiceApiText}`;

    const animeVoiceRes = await axios.get(animeVoiceApiFullUrl);

    const animeVoicePath = resolve(__dirname, "cache", `${event.threadID}_anime_voice.mp3`);
    await global.utils.downloadFile(animeVoiceRes.data.mp3StreamingUrl, animeVoicePath);


    api.sendMessage(
      { attachment: createReadStream(animeVoicePath) },
      event.threadID,
      () => unlinkSync(animeVoicePath)
    );
  } catch (error) {
    console.error("Error sending TTS message:", error);
  }
}
};