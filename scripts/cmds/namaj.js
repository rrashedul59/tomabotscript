const axios = require('axios');

module.exports = {
  config: {
    name: "namaj",
    version: "1.0",
    author: "Your Name",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Get prayer times for Bangladesh states",
    },
    longDescription: {
      en: "This command retrieves prayer times for Bangladesh states from an API and sends them to the user when they type the command followed by a state name.",
    },
    category: "Religious",
    guide: {
      en: "To use this command, type `namaj [state name]`. For example, `namaj dhaka`.",
    },
  },

  // onStart is a function that will be executed when the command is executed
  onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }) {
    // Fetch data from API
    const { data } = await axios.get('https://api.pray.zone/v2/times/today.ajson?city=country/bangladesh');
    
    // Get state name from args
    const state = args.join(" ").trim().toLowerCase();
    
    // Find prayer times for state
    const prayerTimes = data.results.find(result => result.name.toLowerCase() === state);
    
    // Send response to user
    if (prayerTimes) {
      message.reply(`Prayer times for ${prayerTimes.name}: ${prayerTimes.times.Fajr}, ${prayerTimes.times.Dhuhr}, ${prayerTimes.times.Asr}, ${prayerTimes.times.Maghrib}, ${prayerTimes.times.Isha}`);
    } else {
      message.reply(`Sorry, I could not find prayer times for "${state}".`);
    }
  },
};
