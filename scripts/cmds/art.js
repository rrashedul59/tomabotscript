const fs = require("fs");
const axios = require("axios");
const path = require("path");
const FormData = require("form-data");

module.exports = {
  config: {
    name: "0art",
    aliases: [""],
    version: "2.0",
    author: "JARiF | modified by RUBISH",
    countDown: 5,
    role: 0,
    category: "edit image",
  },

  onStart: async function ({ event, message, getLang, threadsData, api, args }) {
    if (!event.messageReply || event.messageReply.attachments.length === 0 || event.messageReply.attachments[0].type !== "photo") {
      return message.reply("❌ | Please reply with an image.");
    }

    const imageUrl = event.messageReply.attachments[0].url;
    let prompt = args.join(" | ").trim();

    if (!prompt) {
      prompt = "same pose, same person, same environment, all same just add anime effect,anime look,boy will be a boy,girl will be a girl";
    }

    try {
      const transformingMessage = await message.reply("⏳ | Transforming image, please wait...");

      const formData = new FormData();
      formData.append("key", "f8867efa27ecd74b2eedbeff0bc43adb");
      formData.append("image", imageUrl);

      const imgbbResponse = await axios.post("https://api.imgbb.com/1/upload", formData, {
        headers: formData.getHeaders()
      });
      const imgbbImageUrl = imgbbResponse.data.data.url;

      const response = await axios.get(`https://api.annie-jarif.repl.co/art?imgurl=https://i.imgur.com/mnt0fzn.jpg&prompt=cute&apikey=annie_emma`, {
        responseType: 'arraybuffer'
      });

      const imageBuffer = Buffer.from(response.data);
      const pathSave = path.join(__dirname, "tmp", "art.png");

      await saveArrayBufferToFile(imageBuffer, pathSave);

      await api.sendMessage(
        {
          attachment: fs.createReadStream(pathSave),
        },
        event.threadID,
        async () => {
          fs.unlinkSync(pathSave);
          await api.unsendMessage(transformingMessage.messageID); // Auto unsend the "⏳ | Transforming image, please wait..." message
        }
      );
    } catch (e) {
      console.error(e);
      message.reply("❌ | An error occurred while processing the image.");
    }
  },
};

async function saveArrayBufferToFile(arrayBuffer, filePath) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, Buffer.from(arrayBuffer), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}