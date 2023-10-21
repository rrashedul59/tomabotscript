
module.exports = {
	config: {
		name: "test",
		version: "1.1",
		author: "NIB",
		countDown: 5,
		role: 2,
		shortDescription: {
			vi: "",
			en: ""
		},
		longDescription: {
			vi: "",
			en: ""
		},
		category: "",
		guide: "",
		
	},

onStart: async function ({ event, message, getLang, usersData, api, args}) {
  console.log(" hshsh")
api.sendMessage("TEST RESULTS- Server-2 \nOk", event.threadID)
}
} 