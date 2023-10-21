const axios = require('axios');
module.exports = {
config: {
name: "catgpt2",
aliases: ["catgp2"],
usePrefix: false,//true or False
version: "1.0.0",
author: "Minn", //don't change please:(( explore explore din mga site/apis jan, wag puro chage credits
countDown: 3,//countDown 1-100
role: 0,//role (0-Alluser) (1-Group Chat admin) (2-Admin bot)
shortDescription: {
vi: "",
en: ""
},
longDescription: {
vi: "",
en: ""
},
category: "ai",
guide: {
vi: "",
en: "<text>"
}
},
langs: {
vi: {
null: ""
},
en: {
null: ""
}
},
onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }) {
const q = args.join("catgpt2");
  try {
    const response = await axios.post("https://catgpt.guru/api/chat", {
      messages: [
        {
          role: "user",
          content: q,
        },
      ],
    });
    api.sendMessage(response.data, event.threadID, event.messageID);
  } catch (error) {
    console.error(error);
    api.sendMessage('catgpt didn\'t meow back:(', event.threadID, event.messageID);
  }
},
};