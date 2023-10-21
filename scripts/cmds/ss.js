const fetch = require('node-fetch');
const fs = require('fs-extra');

module.exports = {
  config: {
    name: "ss",
    version: "1.0",
    author: "SiAM",
    countDown: 5,
    role: 2,
    shortDescription: {
      en: "Take a screenshot of a webpage or Google search results.",
    },
    longDescription: {
      en: "This command takes a screenshot of a webpage or Google search results.",
    },
    category: "Utility",
    guide: {
      en: "{pn} 'url'\n{pn} g- 'text'",
    },
  },

  onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName }) {
   if (args.length === 0) {
      message.reply(`invalid input⚠️\nPlease follow:\n${p}screenshot <url> \nor\n${p}screenshot -g <text>.`);
      return;
    }

    let url;
    if (args[0] === '-g') {
      if (args.length < 2) {
        message.reply(`invalid text input after -g Tag⚠️\nPlease follow:\n${p}screenshot -g YourText`);
        return;
      }
      const query = args.slice(1).join('+');
      url = `https://www.google.com/search?q=${query}&tbm=isch`;
    } else {
      url = args[0];
      if (!url.match(/^https?:\/\/.+$/)) {
        url = `https://${url}`;
      }
    }
    const apiURL = `https://image.thum.io/get/width/1920/crop/400/fullpage/noanimate/${url}`;
    try {
      const res = await fetch(apiURL);
      if (!res.ok) {
        message.reply(`API not responding. try again later..!`);
        return;
      }
      const buffer = await res.buffer();
      const tag = Date.now();      fs.writeFileSync(`${tag}.jpg`, buffer);
      
      message.reply({
        body: `Here is the screenshot: `,
        attachment: fs.createReadStream(`${tag}.jpg`),
      }, () => fs.unlinkSync(`${tag}.jpg`));
    } catch (err) {
      console.log(err);
      message.reply(`There was an error generating the screenshot for ${url}.`);
    }
  },
};