module.exports = {
	config: {
	  name: "autoseen",
	  version: "1.0.0",
	  hasPermssion: 0,
	  author: "Sheikh Tamim",
	  description: "mark group",
	  commandCategory: "system",
    usages: "",
	  cooldowns: 0
  },
    onStart: async function(){},
    onChat: async function ({ api, event, args }) 
      { api.markAsReadAll(() => {});
    }
};  

module.exports.run = async function({}) {}