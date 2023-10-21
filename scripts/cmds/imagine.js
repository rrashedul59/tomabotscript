const axios = require("axios");

module.exports = {
config: {
    name: "imagine",
    version: "1.0",
    author: "Samir Thakuri",
    countDown: 30,
    role: 0,
    shortDescription: "Generate Images.",
    longDescription: "Featuring Image Generator AI From Your Prompt.",
    category: "ai",
    guide: {
      en: "{p}{n} <Prompt>",
    }
  },
  
  onStart: async function ({ api, event, args, message }) {
    try { 
      const samir = args.join(' ');
      const response = `https://generate.restfulapi.repl.co/generate-image?prompt=${samir},Full%20Realistics%20ultra%20hyper%20super%204k%20resolution%20midjourney%20de-fusion%20style`;
      await message.reply('Creating your imagination, please wait...');
      const form = {
      body: `✅ Here's your imagination!`
      };
      form.attachment = [];
      form.attachment[0] = await
      global.utils.getStreamFromURL(response);
      message.reply(form);
    } catch (error) {
      console.error(error);
      message.reply("An error occurred while fetching response");
    }
  }
};