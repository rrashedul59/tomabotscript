const axios = require("axios");
 
module.exports = {
	config: {
		name: "artall",
		version: "2.0",
		author: "NTKhang",
		countDown: 700,
		role: 2,
		shortDescription: {
			vi: "Chuyển ảnh thành hình vẽ anime",
			en: "Image to anime"
		},
		longDescription: {
			vi: "Chuyển đổi ảnh thành hình vẽ anime",
			en: "Convert photos into anime drawings"
		},
		category: "box chat",
		guide: {
			vi: "   {pn} [<url ảnh> | reply 1 ảnh] [type]",
			en: "   {pn} [<image url> | reply an image] [type]"
		}
	},
 
	langs: {
		vi: {
			invalidUrl: "⚠️ Url hình ảnh không hợp lệ, vui lòng phản hồi 1 hình ảnh hoặc nhập url hình ảnh",
			error: "❌ Có lỗi xảy ra:\n%1"
		},
		en: {
			invalidUrl: "⚠️ Invalid image url, please reply an image or enter an image url",
			error: "❌ An error occurred:\n%1"
		}
	},
 
	onStart: async function ({ message, event, args, getLang }) {
		let imageUrlInPut;
		let type;
		if (["photo", "sticker"].includes(event.messageReply?.attachments[0]?.type)) {
			imageUrlInPut = event.messageReply.attachments[0].url;
			type = args[0] ? Number(args[0]) : 1;
		}
		else if (args[0]?.match(/(https?:\/\/.*\.(?:png|jpg|jpeg))/g)) {
			imageUrlInPut = args[0];
			type = args[1] ? Number(args[1]) : 1;
		}
		else {
			return message.reply(getLang("invalidUrl"));
		}
		try {
			const promises = [];
			for (let i = 1; i <= 14; i++) {
				promises.push(axios.get("https://goatbotserver.onrender.com/taoanhdep/art", {
					params: {
						image: imageUrlInPut,
						type: i
					}
				}));
			}
			const responses = await Promise.all(promises);
			const getImagePromises = responses.map(res => global.utils.getStreamFromURL(res.data.data.effect_img));
			const images = await Promise.all(getImagePromises);
			 for (let i = 0; i < images.length; ) {
				await message.reply({
					attachment: images
				});
			}
		}
		catch (error) {
			const err = error.response.data.message;
			message.reply(getLang("error", err));
		}
	}
};          