module.exports = {
 config: {
 name: "Toma",
 version: "1.0",
 author: "Jaychris Garcia",
 countDown: 5,
 role: 0,
 shortDescription: "no prefix",
 longDescription: "no prefix",
 category: "no prefix",
 }, 
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "Toma") {
 return message.reply({
 body: "hello, i'm ToMa. follow my master Sheikh Tamim.",
 attachment: await global.utils.getStreamFromURL("https://imgur.io/a/qB5IRUz")
 });
 }
 }
}