const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
  config: {
    name: "info",
    version: "1.3",
    author: "AceGun",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: "Sends information about the bot and admin along with an image."
    },
    longDescription: {
      vi: "",
      en: "Sends information about the bot and admin along with an image."
    },
    category: "utility",
    guide: {
      en: "{pn}"
    },
    envConfig: {}
  },

  onStart: async function ({ message }) {
    const botName = "ToMa_Bot_V2";
    const botPrefix = "/";
    const authorName = "Sheikh Tamim";
    const authorFB = "https://www.facebook.com/profile.php?id=100069564157176";
    const authorInsta = "https://www.instagram.com/sheikh.tamim_lover";
    const status = "hi, crush ko po kayong lahat";

    const urls = JSON.parse(fs.readFileSync('tamim.json'));
    const link = urls[Math.floor(Math.random() * urls.length)];

    const now = moment().tz('Asia/Manila');
    const date = now.format('MMMM Do YYYY');
    const time = now.format('h:mm:ss A');

    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const days = Math.floor(uptime / (60 * 60 * 24));
    const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

    message.reply({
      body: `===「 Bot & Owner Info 」===\n❏Bot Name: ToMa_Bot_V2\n❏Bot Prefix: [ / ] \n❏Name: Sheikh Tamim\n❏Facebook: https://www.facebook.com/sheikhtamimofficial\n❏Instagram: https://www.instagram.com/sheikh.tamim_lover\n❏Status: => 𝑰 𝒉𝒂𝒕𝒆 𝒔𝒐𝒓𝒓𝒊𝒆𝒔!.....😩
\n❏Date: ${date}\n❏Time: ${time}\n❏Uptime: ${uptimeString}\n=====================`,
      attachment: await global.utils.getStreamFromURL(link)
    });
  },

  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "info") {
      this.onStart({ message });
    }
  }
};