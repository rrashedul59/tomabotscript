const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");
const { getPrefix } = global.utils;
const { commands, aliases } = global.GoatBot;
const doNotDelete = "[ Made By Sheikh Tamim ]";
/** 
* @author NTKhang
* @author: do not delete it
* @message if you delete or edit it you will get a global ban
*/

module.exports = {
	config: {
		name: "help",
		version: "1.12",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "Xem cách dùng lệnh",
			en: "View command usage"
		},
		longDescription: {
			vi: "Xem cách sử dụng của các lệnh",
			en: "View command usage"
		},
		category: "info",
		guide: {
			vi: "{pn} [để trống | <số trang> | <tên lệnh>]",
			en: "{pn} [empty | <page number> | <command name>]"
		},
		priority: 1
	},

	langs: {
		vi: {
			help: "╭─────────────⭓\n%1\n├─────⭔\n│ Trang [ %2/%3 ]\n│ Hiện tại bot có %4 lệnh có thể sử dụng\n│ » Gõ %5help <số trang> để xem danh sách các lệnh\n│ » Gõ %5help để xem chi tiết cách sử dụng lệnh đó\n├────────⭔\n│ %6\n╰─────────────⭓",
			help2: "%1├───────⭔\n│ » Hiện tại bot có %2 lệnh có thể sử dụng\n │ » Gõ %3help <tên lệnh> để xem chi tiết cách sử dụng lệnh đó\n│ %4\n╰─────────────⭓",
			commandNotFound: "Lệnh \"%1\" không tồn tại",
			getInfoCommand: "╭── NAME ────⭓\n│ %1\n├── INFO\n│ Mô tả: %2\n│ Các tên gọi khác: %3\n│ Các tên gọi khác trong nhóm bạn: %4\n│ Version: %5\n│ Role: %6\n│ Thời gian mỗi lần dùng lệnh: %7s\n│ Author: %8\n├── Usage\n│ %9\n├── Notes\n│ Nội dung bên trong <XXXXX> là có thể thay đổi\n│ Nội dung bên trong [a|b|c] là a hoặc b hoặc c\n╰──────⭔",
			doNotHave: "Không có",
			roleText0: "0 (Tất cả người dùng)",
			roleText1: "1 (Quản trị viên nhóm)",
			roleText2: "2 (Admin bot)",
			roleText0setRole: "0 (set role, tất cả người dùng)",
			roleText1setRole: "1 (set role, quản trị viên nhóm)",
			pageNotFound: "Trang %1 không tồn tại"
		},
		en: {
			help:   `╭─────────────⭓\n├───⭓ AI CHATBOTS
│⭔toma ⭔hina ⭔esu ⭔nuzu ⭔kitti
|⭔hamza ⭔anya 
╰───────────⧕\n
╭───⭓ BANGLA CHATBOTS
|⭔bou -[For Boys]
|⭔jamai -[For Girls]
╰───────────⧕
╭───⭓ AI/GPT
|⭔tamu ⭔billu ⭔aimoji 
|⭔gpt ⭔catgpt ⭔catgpt2
|⭔ai/ai2/ai3 
╰───────────⧕
╭───⭓ TEXT TO VOICE
|⭔say ⭔saybn ⭔botsay
╰───────────⧕
╭───⭓ IMAGE
│⭔art ⭔rbg
╰───────────⧕
╭───⭓ CONTACTS ADMIN
│⭔called ⭔support 
|⭔requestmain ⭔info
╰───────────⧕ 
╭───⭓ GROUP MEMBERS
│⭔rules ⭔adduser ⭔uid  
│⭔count ⭔countall ⭔userinfo
│⭔tid ⭔rules ⭔r ⭔groupinfo
|⭔rank ⭔busy  ⭔pp
╰───────────⧕ 
╭───⭓ TEXT TO IMAGE MAKER
│⭔2 ⭔crt ⭔openjourney
|⭔imagine ⭔IMagine ⭔prodia
╰───────────⧕
╭───⭓ ISLAMIC KNOWLEDGE
|⭔hadis ⭔moqqa ⭔namaj
╰───────────⧕
╭───⭓ LOGO MAKER
│⭔textpro ⭔thunder ⭔bigtext
|⭔space ⭔IMagine ⭔prodia
╰───────────⧕
╭───⭓ PICTURE SEARCH
|⭔pin ⭔img ⭔img2 
|⭔cat ⭔dog ⭔catsay
|⭔cdp/2/3/4
╰───────────⧕
╭───⭓ ANIME
│⭔anivid ⭔animevid ⭔manga
|⭔aniblur ⭔waifu ⭔animeme
|⭔animeinfo ⭔cosplay
╰───────────⧕ 
╭───⭓ POKÉMON
│⭔poke ⭔pokebot ⭔pokedex
│⭔pokechamps ⭔poketrade
╰───────────⧕
╭───⭓SOCOAL INFO
|⭔instainfo ⭔userinfo ⭔tikinfo
╰───────────⧕
╭───⭓ MEDIA Downloader
│⭔music ⭔insta ⭔tik-a/-v 
│⭔videofb ⭔fb ⭔ytb-a/-v
╰───────────⧕
╭───⭓ LYRICS
│⭔play ⭔lyrics ⭔lyrics2
╰───────────⧕
╭───⭓ GAMIMG STORE
│⭔appstore ⭔playstore
╰───────────⧕
╭───⭓ ENGLISH DETILS 
│⭔translate ⭔trans 
|⭔dictionary ⭔fixgrammar
╰───────────⧕
╭───⭓ GAME
│⭔ttt ⭔truthordare ⭔sicbo
|⭔slot ⭔choose ⭔arkn
|⭔rps ⭔slot ⭔arknpull
╰───────────⧕
╭───⭓ STATUS
|⭔bored ⭔advice ⭔advice2
|⭔pickuplines ⭔motivate
|⭔quote ⭔quote2 ⭔quote3
|⭔aniquote ⭔aniquote2 
|taylorquote ⭔joke
╰───────────⧕
╭───⭓ ENTERTAINMENT
│⭔spank ⭔fak ⭔marry 
|⭔dhbc ⭔gay ⭔clown
│⭔slap ⭔kiss/kiss2 
│⭔spidy ⭔balls ⭔fuck
│⭔fact ⭔alert ⭔ball
|⭔unforgivable ⭔avoid
|⭔hack ⭔affect ⭔bored 
|⭔bed ⭔sed ⭔affect ⭔gay
|⭔biden ⭔post ⭔blink ⭔ws
|⭔jail ⭔ship/pair/2/3/4 
|⭔propose ⭔spiderman ⭔spank
|⭔toilet ⭔trash ⭔trigger
|⭔cs ⭔us ⭔wanted ⭔buttslap
|⭔hubble ⭔blink ⭔hitler 
|⭔cdm ⭔hell/2 ⭔hug 
|⭔married
╰───────────⧕
╭───⭓ COVER
│⭔avatar ⭔avatar2 
│⭔fbcover ⭔cover ⭔cover2
│⭔cover3 ⭔cover4 ⭔cardinfo/2
|⭔gfx ⭔gfx2/3/4/5
╰───────────⧕
╭───⭓ ECONOMY 
|⭔Bank ⭔top ⭔balance
|⭔balancetop
╰───────────⧕
╭───⭓ PIC UPLOAD
|⭔imgbb ⭔imgur ⭔wtr
╰───────────⧕
╭───⭓ Google SEARCH
|⭔google ⭔chrome ⭔googleimg 
|⭔ss 
╰───────────⧕
╭───⭓ WIKI
|⭔wiki ⭔basicai
╰───────────⧕
╭───⭓ MOVIE
│⭔movie ⭔movieinfo ⭔exerciseinfo 
╰───────────⧕
╭───⭓ CALCULATE
|⭔calculate ⭔math ⭔binary
╰───────────⧕
╭───⭓ IMAGINE WORD FINDER
|⭔prompt ⭔prompt2 ⭔prompt3
╰───────────⧕
╭───⭓ EMOJIMEANS
│⭔emojimean ⭔emojimix
╰───────────⧕
╭───⭓ QUIZE & EARN 
│⭔pubg ⭔daily ⭔quiz
╰───────────⧕
╭───⭓ MOOD
|⭔beauty ⭔ugly
╰───────────⧕
╭───⭓ COIN
|⭔currency ⭔crypto
╰───────────⧕
╭───⭓ BD SIM OFFER
│⭔offer ⭔phone
╰───────────⧕
╭───⭓SIGMA
|⭔chad ⭔women
╰───────────⧕
╭───⭓OTHER
|⭔qrcode ⭔moon ⭔weather
|⭔love ⭔v2a ⭔ping ⭔ip
|⭔ipshow
├───────────⧕\(এগুলো সম্পূণ্য হচ্ছে কমান্ড,কমান্ডগুলো ইউজ করতে প্রথম এ [/ স্ল্যাশ দিয়ে] স্পেস ছাড়া কমান্ড এর নাম দিয়ে ইন্টার করুন)[Example:- /help]├─────⭔\n│ » Type %5help <cmd> to learn.\n├────────⭔\n│ %6\n╰─────────────⭓`,
			help2: "%1├───────⭔\n│ » Currently, the bot has %2 commands that can be used\n│ » Type %3help <command name> to view the details of how to use that command\n│ %4\n╰─────────────⭓",
			commandNotFound: "Command \"%1\" does not exist",
			getInfoCommand: "─── NAME ────⭓\n» %1\n─── INFO\n» Description: %2\n\─── Usage\n%9\n───────⭔",
			doNotHave: "Do not have",
			roleText0: "0 (All users)",
			roleText1: "1 (Group administrators)",
			roleText2: "2 (Admin bot)",
			roleText0setRole: "0 (set role, all users)",
			roleText1setRole: "1 (set role, group administrators)",
			pageNotFound: "Page %1 does not exist"
		}
	},

	onStart: async function ({ message, args, event, threadsData, getLang, role }) {
		const langCode = await threadsData.get(event.threadID, "data.lang") || global.GoatBot.config.language;
		let customLang = {};
		const pathCustomLang = path.join(__dirname, "..", "..", "languages", "cmds", `${langCode}.js`);
		if (fs.existsSync(pathCustomLang))
			customLang = require(pathCustomLang);
		const { threadID } = event;
		const threadData = await threadsData.get(threadID);
		const prefix = getPrefix(threadID);
		let sortHelp = threadData.settings.sortHelp || "name";
		if (!["category", "name"].includes(sortHelp))
			sortHelp = "name";
		const commandName = (args[0] || "").toLowerCase();
		const command = commands.get(commandName) || commands.get(aliases.get(commandName));
		// ———————————————— LIST ALL COMMAND ——————————————— //
		if (!command && !args[0] || !isNaN(args[0])) {
			const arrayInfo = [];
			let msg = "";
			if (sortHelp == "name") {
				const page = parseInt(args[0]) || 1;
				const numberOfOnePage = 30;
				for (const [name, value] of commands) {
					if (value.config.role > 1 && role < value.config.role)
						continue;
					let describe = name;
					let shortDescription;
					const shortDescriptionCustomLang = customLang[name]?.shortDescription;
					if (shortDescriptionCustomLang != undefined)
						shortDescription = checkLangObject(shortDescriptionCustomLang, langCode);
					else if (value.config.shortDescription)
						shortDescription = checkLangObject(value.config.shortDescription, langCode);
					if (shortDescription && shortDescription.length < 40)
						describe += `: ${shortDescription.charAt(0).toUpperCase() + shortDescription.slice(1)}`;
					arrayInfo.push({
						data: describe,
						priority: value.priority || 0
					});
				}
				arrayInfo.sort((a, b) => a.data - b.data);
				arrayInfo.sort((a, b) => a.priority > b.priority ? -1 : 1);
				const { allPage, totalPage } = global.utils.splitPage(arrayInfo, numberOfOnePage);
				if (page < 1 || page > totalPage)
					return message.reply(getLang("pageNotFound", page));
				const returnArray = allPage[page - 1] || [];
				const startNumber = (page - 1) * numberOfOnePage + 1;
				msg += (returnArray || []).reduce((text, item, index) => text += ` ${index + startNumber}${index + startNumber < 10 ? " " : ""}. ${item.data}\n`, '').slice(0, -1);
				await message.reply(getLang("help", msg, page, totalPage, commands.size, prefix, doNotDelete));
			}
			else if (sortHelp == "category") {
				for (const [, value] of commands) {
					if (value.config.role > 1 && role < value.config.role)
						continue;
					if (arrayInfo.some(item => item.category == value.config.category.toLowerCase())) {
						const index = arrayInfo.findIndex(item => item.category == value.config.category.toLowerCase());
						arrayInfo[index].names.push(value.config.name);
					}
					else
						arrayInfo.push({
							category: value.config.category.toLowerCase(),
							names: [value.config.name]
						});
				}
				arrayInfo.sort((a, b) => (a.category < b.category ? -1 : 1));
				arrayInfo.forEach((data, index) => {
					const categoryUpcase = `${index == 0 ? `╭` : `├`}─── ${data.category.toUpperCase()} ${index == 0 ? "⭓" : "⭔"}`;
					data.names = data.names.sort().map(item => item = `${item}`);
					msg += `${categoryUpcase}\n${data.names.join("\n")}\n`;
				});
				message.reply(getLang("help2", msg, commands.size, prefix, doNotDelete));
			}
		}
		// ———————————— COMMAND DOES NOT EXIST ———————————— //
		else if (!command && args[0]) {
			return message.reply(getLang("commandNotFound", args[0]));
		}
		// ————————————————— INFO COMMAND ————————————————— //
		else {
			const configCommand = command.config;
			const author = configCommand.author;

			const descriptionCustomLang = customLang[configCommand.name]?.longDescription;
			let description;
			if (descriptionCustomLang != undefined)
				description = checkLangObject(descriptionCustomLang, langCode);
			else if (configCommand.longDescription)
				description = checkLangObject(configCommand.longDescription, langCode);
			const aliasesString = configCommand.aliases ? configCommand.aliases.join(", ") : getLang("doNotHave");
			const aliasesThisGroup = threadData.data.aliases ? (threadData.data.aliases[configCommand.name] || []).join(", ") : getLang("doNotHave");
			let roleOfCommand = configCommand.role;
			let roleIsSet = false;
			if (threadData.data.setRole?.[configCommand.name]) {
				roleOfCommand = threadData.data.setRole[configCommand.name];
				roleIsSet = true;
			}

			const roleText = roleOfCommand == 0 ?
				(roleIsSet ? getLang("roleText0setRole") : getLang("roleText0")) :
				roleOfCommand == 1 ?
					(roleIsSet ? getLang("roleText1setRole") : getLang("roleText1")) :
					getLang("roleText2");

			let guide;
			if (customLang[configCommand.name]?.guide != undefined)
				guide = customLang[configCommand.name].guide;
			else
				guide = configCommand.guide[langCode] || configCommand.guide["en"];
			guide = guide || {
				body: ""
			};
			if (typeof guide == "string")
				guide = { body: guide };
			const guideBody = guide.body
				.replace(/\{prefix\}|\{p\}/g, prefix)
				.replace(/\{name\}|\{n\}/g, configCommand.name)
				.replace(/\{pn\}/g, prefix + configCommand.name);

			const formSendMessage = {
				body: getLang("getInfoCommand", configCommand.name, description, aliasesString, aliasesThisGroup, configCommand.version, roleText, configCommand.countDown || 1, author || "", `${guideBody.split("\n").join("\n")}`)
			};

			if (guide.attachment) {
				if (typeof guide.attachment == "object") {
					formSendMessage.attachment = [];
					for (const pathFile in guide.attachment) {
						if (!fs.existsSync(pathFile)) {
							const cutFullPath = pathFile.split("/").filter(item => item != "");
							cutFullPath.pop();
							for (let i = 0; i < cutFullPath.length; i++) {
								const path = cutFullPath.slice(0, i + 1).join('/');
								if (!fs.existsSync(path))
									fs.mkdirSync(path);
							}
							const getFile = await axios.get(guide.attachment[pathFile], { responseType: 'arraybuffer' });
							fs.writeFileSync(pathFile, Buffer.from(getFile.data));
						}
						formSendMessage.attachment.push(fs.createReadStream(pathFile));
					}
				}
			}
			return message.reply(formSendMessage);
		}
	}
};

function checkLangObject(data, langCode) {
	if (typeof data == "string")
		return data;
	if (typeof data == "object" && !Array.isArray(data))
		return data[langCode] || data.en || "";
	return "";
}