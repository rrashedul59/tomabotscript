const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs")

module.exports = {
    config: {
        name: "cigarettes",
        aliases: ["cigarettes","cs","usb"],
        version: "1.0",
        author: "sandy",
        countDown: 5,
        role: 0,
        shortDescription: "we together",
        longDescription: "",
        category: "love",
        guide: {
			vi: "{pn} [@tag]",
			en: "{pn} [@tag]"
		}
    },



    onStart: async function ({ message, event, args }) {
        const mention = Object.keys(event.mentions);
        if (mention.length == 0) return message.reply("Please mention someone");
        else if (mention.length == 1) {
            const one = event.senderID, two = mention[0];
            bal(one, two).then(ptth => { message.reply({ body: "Just You And Me hah...😩", attachment: fs.createReadStream(ptth) }) })
        } else {
            const one = mention[1], two = mention[0];
            bal(one, two).then(ptth => { message.reply({ body: "Just You And Me hah...😩", attachment: fs.createReadStream(ptth) }) })
        }
    }


};

async function bal(one, two) {

    let avone = await jimp.read(`https://graph.facebook.com/${one}/picture?width=300&height=300&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)
    avone.circle()
    let avtwo = await jimp.read(`https://graph.facebook.com/${two}/picture?width=300&height=300&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)
    avtwo.circle()
    let pth = "abcd.png"
    let img = await jimp.read("https://i.imgur.com/XVkH5TC.jpg")

    img.resize(466, 659).composite(avone.resize(50, 50), 150, 140).composite(avtwo.resize(50, 50), 100, 190);

    await img.writeAsync(pth)
    return pth
    }