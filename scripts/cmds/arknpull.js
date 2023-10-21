//arkn pull cmd by luxion jangan mengganti apapun dari script ini karena ini adalah script untuk MikuProject Game

//L
//U
//X
//I
//O
//N

//C
//O
//D
//E

//Don't change
//jangan ubah
module.exports = {
	config: {
    //Nama:Arkn: pull
    //Aliases: arknpull
    //author: Luxion
    //version: Beta 1.0 tahap uji coba
    //jangan ubah apapun
    //don't change anything
    //L
    //U
    //X
    //I
    //O
    //N
    //

    //
    //C
    //O
    //D
    //E

    //Hey
    //Not bad
    //Unyah
    //40044040040040
    //FDF
    //Arknpull=gacha
    //uwaaaahhh
    //anjas kelas
    //
		name: "arkn\x20pull", //arkn ya pull lah mwehwhe
		aliases: ["arkn", "arknpull" ],
		version: "1.0",
		author: "Luxion", //jika anda mengganti author anda akan dikick dari shenixTim
		countDown: 35,
		role: 0,
		shortDescription: "gacha item",
		longDescription: "CMD arkn pull by luxion in shenix tim",
    usage: "gacha kartu arknight",
		category: "MikuProjectGame",
		guide: "{pn}arkn pull for pull arkn card"
	}, //jangan ubah di bawah ini bahaya auto mokad🐥
  //wkwkwk canda intinya jangan ubah
  //ntar gw update

  //Luxion
  //Code

  //L
  //U
  //X
  //I
  //O
  //N

  //C
  //O
  //D
  //E

  //jangan ubah
	onStart: async function ({ message, usersData, args,event,api }) {
    const { senderID } = event;
    const userData = await usersData.get(senderID);
    const userMoney = await usersData.get(senderID, "money");
    if(userMoney < 1200) {
      return api.sendMessage("uang kamu kurang dari 1200$", event.threadID, event.messageID);
    } else {
      usersData.set(senderID, {
        money: userData.money - 1200,
        data: userData.data
      });
	    const link = [
        "https://i.imgur.com/vKNCLeq.jpg", //amiya (guard) #Skin: 114S0
"https://i.imgur.com/elnHmVQ.jpg", //la pluma 99
"https://i.imgur.com/1C1uqWO.jpg",
"https://i.imgur.com/1C1uqWO.jpg",
"https://i.imgur.com/1C1uqWO.jpg", //lancet-1 269
"https://i.imgur.com/h6nBLwe.jpg", 
"https://i.imgur.com/h6nBLwe.jpg",
"https://i.imgur.com/h6nBLwe.jpg",
  //castle-3 268
"https://i.imgur.com/iuA41BW.jpg",
"https://i.imgur.com/iuA41BW.jpg",
"https://i.imgur.com/iuA41BW.jpg", 
"https://i.imgur.com/iuA41BW.jpg",  //yato skin 265S0
"https://i.imgur.com/6lGvoTY.jpg",
"https://i.imgur.com/6lGvoTY.jpg",
"https://i.imgur.com/6lGvoTY.jpg",
"https://i.imgur.com/6lGvoTY.jpg",
  //yato skin 265U
];
const img = link[Math.floor(Math.random() * link.length)];
			api.sendMessage({
				attachment: await global.utils.getStreamFromURL(img)
			}, event.threadID,event.messageID);
		}
	}
};