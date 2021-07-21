                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               /* 
  @ EDIT WELCOME DI MAIN.JS (BUAT BACKGROUND SENDIRI)
  @ GAK SUB = EROR
  @ CREDIT FOR ME -> SUBSCRIBE + 🔔 ITU AJA  || SUBSCRIBE FOR MORE UPDATE
  @ EDIT SEMUANYA DI SETTING.JSON
  @ ADA FITUR YG BELUM SEMPAT GUA FIX GARA² SINYAL LEMOT
  @ KLO NGEDIT YG TELITI SAYANG, EROR? DOWNLOAD ULANG SC NYA 
  @ BUGGC WORK DI BAILEYS 3.4.1 JADI UPGRADE AJA
  @ GK SEMUA FITUR WORK PASTI ADA YG EROR (KADANG WORK KADANG ERROR)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
   
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
let filter = JSON.parse(fs.readFileSync('./src/filter.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
const sfilter = JSON.parse(fs.readFileSync('./src/sfilter.json'))
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const { zeeoneofc } = require('./zeeone')

thumb = setting.thumb
fthumb = setting.fakethumb
hit_today = []
blocked = []
prefix = setting.prefix
banChats = true
offline = false
img = setting.img
baper = 'SUB YT ZEEONE OFC'
apiku = 'api-alphabot.herokuapp.com'
targetpc = setting.ownerNumber
owner = setting.ownerNumber
ownerr ='+62887435047326'
fake = setting.fake
numbernye = '0'
waktu = '-'
alasan = '-'
botname = setting.botname
ownername = setting.ownername
cr = setting.cr
petik = '```'
msgId="B826873620DD5947E683E3ABE663F263"
//=================================================//
module.exports = alpha = async (alpha, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]
        //const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        //const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        hit_today.push(command)		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = alpha.user.jid
		const botNumberss = alpha.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
		const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
		const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		const totalchat = await alpha.chats.all()
		const groupMetadata = isGroup ? await alpha.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const ratee = ["106","106","106","106","106","106","106"]
        const tee = ratee[Math.floor(Math.random() * ratee.length)]
        const rateee = ["Dj storongest jedag jedug 30 s","Dj akimilaku remix terbaru 2021 30 s","Dj campuran 30 detik","Dj sidro 2  style Thailand viral 30 s","Dj disitu enak susu akimilaku 30 s","Dj zombie x melody stres love 30 s","Dj numa muma ye style Thailand 30 s","Dj biasalah x bola boma ye 30 s"]
        const srchh = rateee[Math.floor(Math.random() * rateee.length)]
        const tescuk = ["0@s.whatsapp.net"]
        const conts = mek.key.fromMe ? alpha.user.jid : alpha.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? alpha.user.name : conts.notify || conts.vname || conts.name || '-'
        const timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const hariRaya = new Date('Jan 12, 2022 07:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
			var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Minggu"; break;
                case 1: hari = "Senin"; break;
                case 2: hari = "Selasa"; break;
                case 3: hari = "Rabu"; break;
                case 4: hari = "Kamis"; break;
                case 5: hari = "Jum`at"; break;
                case 6: hari = "Sabtu"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "Januari"; break;
                case 1: bulan1 = "Februari"; break;
                case 2: bulan1 = "Maret"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "Mei"; break;
                case 5: bulan1 = "Juni"; break;
                case 6: bulan1 = "Juli"; break;
                case 7: bulan1 = "Agustus"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "Oktober"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "Desember"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + jam + ":" + menit + ":" + detik ;   
            var ase = new Date();
            var waktoo = ase.getHours();
            switch(waktoo){
                case 0: waktoo = "Selamat Malam 🌚"; break;
                case 1: waktoo = "Selamat Malam 🌚"; break;
                case 2: waktoo = "Selamat Malam 🌚"; break;
                case 3: waktoo = "Selamat Malam 🌚"; break;
                case 4: waktoo = "Selamat Pagi 🌞"; break;
                case 5: waktoo = "Selamat Pagi 🌞"; break;
                case 6: waktoo = "Selamat Pagi 🌞"; break;
                case 7: waktoo = "Selamat Pagi 🌞"; break;
                case 8: waktoo = "Selamat Pagi 🌞"; break;
                case 9: waktoo = "Selamat Pagi 🌞"; break;
                case 10: waktoo = "Selamat Pagi 🌞"; break;
                case 11: waktoo = "Waktu Dzuhur , jangan lupa shalat"; break;
                case 12: waktoo = "Selamat Siang ☀️"; break;
                case 13: waktoo = "Selamat Siang ☀️"; break;
                case 14: waktoo = "Waktu Ashar , jangan lupa shalat"; break;
                case 15: waktoo = "Selamat Sore 🌌"; break;
                case 16: waktoo = "Selamat Sore 🌌"; break;
                case 17: waktoo = "Selamat Sore 🌌"; break;
                case 18: waktoo = "Waktu Magrib, jangan lupa shalat"; break;
                case 19: waktoo = "Waktu Isya, jangan lupa shalat"; break;
                case 20: waktoo = "Selamat Malam 🌃"; break;
                case 21: waktoo = "Selamat Malam 🌃"; break;
                case 22: waktoo = "Selamat Malam 🌃"; break;
                case 23: waktoo = "Selamat Malam 🌃"; break;
            }
            var hahh = "" + waktoo;      
		mess = {
			wait: 'BENTAR',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'Itu bukan stiker',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Only Group',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            alpha.sendMessage(from, teks, text, {quoted:mek})
        }

        const sendMess = (hehe, teks) => {
            alpha.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? alpha.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }

        const fakestatus = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`image/${thumb}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
        const fakethumb = (teks, yes) => {
            alpha.sendMessage(from, teks, image, {thumbnail:fs.readFileSync(`./image/${tee}.jpg`),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`./image/${thumb}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
        const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`image/${thumb}`) //Gambarnye
					},
					"title": 'BOT WEA', 
					"description": "SELF BOT", 
					"currencyCode": "USD",
					"priceAmount1000": "99999999999",
					"retailerId": 'BOT WEA',
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
        const ftroli ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync(`image/${thumb}`), surface: 200, message: `⊳ Name : ${setting.botname}\n⊳ Hit Today : ${hit_today.length}`, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const fgclink = (teks) => {

            alpha.sendMessage(from, teks, text, {

  quoted: {

	key: {

		fromMe: false,

		participant: "0@s.whatsapp.net",

		remoteJid: "0@s.whatsapp.net"

	},

	message: {

		"groupInviteMessage": {

			"groupJid": "6288213840883-1616169743@g.us",

			"inviteCode": "mememteeeekkeke",

			"groupName": "Alphabot", 

            "caption": `${hahh} ${pushname}`, 

            'jpegThumbnail': fs.readFileSync(`image/${thumb}`)

		}

	}

}

            })

        }

const fvideo  = (teks) => {

            alpha.sendMessage(from, teks, text, {

  quoted: {

	   key: { 

          fromMe: false,

	      participant: `0@s.whatsapp.net`, ...(from ? 

	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 

                },

	 message: { 

                 "videoMessage": { 

                 "title":"ONE DEV",

                 "h": `Hmm`,

                 'seconds': '99999', 

                 'caption': `${hahh} ${pushname}`,

                 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)

                        }

                       }

	                  }

})

			}
        const fakeitem = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`image/${thumb}`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`${setting.botname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
           const fakedoc = (teks) => {  
 alpha.sendMessage(from, teks, text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Alphabot.zip`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})}
		const fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${cr}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${cr},;;;\nFN:${cr},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`image/${thumb}`), thumbnail: fs.readFileSync(`image/${thumb}`),sendEphemeral: true}}}  
 const zeeoneuhuy = (pesan, tipe, target, target2) => {
		    alpha.sendMessage(from, pesan, tipe, { "contextInfo": {mentionedJid: [sender], "forwardingScore": 999,"isForwarded": true}, quoted: { "key": { "participant": `${target}`, "remoteJid": "393470602054-1351628616@g.us", "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream", "title": `${target2}`, "fileLength": "36", "pageCount": 0, "fileName": `${target2}` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		    }
const fdoc = {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"}}
        
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        alpha.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    alpha.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 
       async function sendFileFromUrl(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return alpha.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
        const textImg = (teks) => {
            return alpha.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync(`image/${thumb}`)})
        }
        
           var _0xcaa3=["\x73\x74\x69\x63\x6B\x65\x72\x4D\x65\x73\x73\x61\x67\x65","\x6D\x65\x73\x73\x61\x67\x65","\x61\x75\x64\x69\x6F\x4D\x65\x73\x73\x61\x67\x65","\x4A\x61\x6E\x75\x61\x72\x69","\x46\x65\x62\x72\x75\x61\x72\x69","\x4D\x61\x72\x65\x74","\x41\x70\x72\x69\x6C","\x4D\x65\x69","\x4A\x75\x6E\x69","\x4A\x75\x6C\x69","\x41\x67\x75\x73\x74\x75\x73","\x53\x65\x70\x74\x65\x6D\x62\x65\x72","\x4F\x6B\x74\x6F\x62\x65\x72","\x4E\x6F\x76\x65\x6D\x62\x65\x72","\x44\x65\x73\x65\x6D\x62\x65\x72","\x4D\x69\x6E\x67\x67\x75","\x53\x65\x6E\x69\x6E","\x53\x65\x6C\x61\x73\x61","\x52\x61\x62\x75","\x4B\x61\x6D\x69\x73","\x4A\x75\x6D\x27\x61\x74","\x53\x61\x62\x74\x75","\x67\x65\x74\x53\x65\x63\x6F\x6E\x64\x73","\x67\x65\x74\x4D\x69\x6E\x75\x74\x65\x73","\x67\x65\x74\x48\x6F\x75\x72\x73","\x50\x4D","\x41\x4D","\x67\x65\x74\x44\x61\x74\x65","\x67\x65\x74\x4D\x6F\x6E\x74\x68","\x67\x65\x74\x44\x61\x79","\x67\x65\x74\x59\x65\x61\x72","","\x2C\x20","\x20\x2D\x20","\x69\x6D\x61\x67\x65\x2F\x67\x61\x6B\x6C\x61\x68\x2E\x6A\x70\x67","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x30\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x36\x32\x38\x38\x32\x37\x39\x35\x37\x35\x35\x31\x33\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x36\x32\x38\x35\x37\x31\x36\x33\x36\x30\x35\x31\x32\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x53\x45\x4C\x46\x2D\x4D\x4F\x44\x45","\x50\x55\x42\x4C\x49\x43\x2D\x4D\x4F\x44\x45","\x66\x69\x6C\x65\x4C\x65\x6E\x67\x74\x68","\x69\x6D\x61\x67\x65\x2F","\x2E\x6A\x70\x67","\x68\x65\x6C\x70","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x6E\x65\x6F\x66\x65\x74\x63\x68\x20\x2D\x2D\x73\x74\x64\x6F\x75\x74","\x75\x74\x66\x2D\x38","\x52\x61\x6D\x3A","\x72\x65\x70\x6C\x61\x63\x65","\x2A","\x53\x70\x65\x65\x64\x3A\x20","\x74\x6F\x46\x69\x78\x65\x64","\x20\x53\x65\x63\x6F\x6E\x64\x2A","\x75\x70\x74\x69\x6D\x65","\x36\x32\x38\x38\x37\x34\x33\x35\x30\x34\x37\x33\x32\x36\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x66\x72\x6F\x6D\x4D\x65","\x6B\x65\x79","\x60\x60\x60\x4F\x57\x4E\x45\x52\x20\x4F\x4E\x4C\x59\x60\x60\x60","\u300C\x20\x2A\x53\x45\x4C\x46\x2D\x4D\x4F\x44\x45\x2A\x20\u300D","\u300C\x20\x2A\x50\x55\x42\x4C\x49\x43\x2D\x4D\x4F\x44\x45\x2A\x20\u300D","\x69\x6D\x61\x67\x65\x4D\x65\x73\x73\x61\x67\x65","\x76\x69\x64\x65\x6F\x4D\x65\x73\x73\x61\x67\x65","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x6C\x65\x6E\x67\x74\x68","\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F","\x71\x75\x6F\x74\x65\x64\x4D","\x6D","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x70\x61\x72\x73\x65","\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x41\x6E\x64\x53\x61\x76\x65\x4D\x65\x64\x69\x61\x4D\x65\x73\x73\x61\x67\x65","\x36\x36\x36\x2E\x77\x65\x62\x70","\x73\x61\x76\x65","\x77\x65\x62\x70","\x74\x6F\x46\x6F\x72\x6D\x61\x74","\x2D\x76\x63\x6F\x64\x65\x63","\x6C\x69\x62\x77\x65\x62\x70","\x2D\x76\x66","\x73\x63\x61\x6C\x65\x3D\x27\x6D\x69\x6E\x28\x33\x32\x30\x2C\x69\x77\x29\x27\x3A\x6D\x69\x6E\x27\x28\x33\x32\x30\x2C\x69\x68\x29\x27\x3A\x66\x6F\x72\x63\x65\x5F\x6F\x72\x69\x67\x69\x6E\x61\x6C\x5F\x61\x73\x70\x65\x63\x74\x5F\x72\x61\x74\x69\x6F\x3D\x64\x65\x63\x72\x65\x61\x73\x65\x2C\x66\x70\x73\x3D\x31\x35\x2C\x20\x70\x61\x64\x3D\x33\x32\x30\x3A\x33\x32\x30\x3A\x2D\x31\x3A\x2D\x31\x3A\x63\x6F\x6C\x6F\x72\x3D\x77\x68\x69\x74\x65\x40\x30\x2E\x30\x2C\x20\x73\x70\x6C\x69\x74\x20\x5B\x61\x5D\x5B\x62\x5D\x3B\x20\x5B\x61\x5D\x20\x70\x61\x6C\x65\x74\x74\x65\x67\x65\x6E\x3D\x72\x65\x73\x65\x72\x76\x65\x5F\x74\x72\x61\x6E\x73\x70\x61\x72\x65\x6E\x74\x3D\x6F\x6E\x3A\x74\x72\x61\x6E\x73\x70\x61\x72\x65\x6E\x63\x79\x5F\x63\x6F\x6C\x6F\x72\x3D\x66\x66\x66\x66\x66\x66\x20\x5B\x70\x5D\x3B\x20\x5B\x62\x5D\x5B\x70\x5D\x20\x70\x61\x6C\x65\x74\x74\x65\x75\x73\x65","\x61\x64\x64\x4F\x75\x74\x70\x75\x74\x4F\x70\x74\x69\x6F\x6E\x73","\x65\x6E\x64","\x46\x69\x6E\x69\x73\x68","\x6C\x6F\x67","\x75\x6E\x6C\x69\x6E\x6B\x53\x79\x6E\x63","\x6F\x6E","\x65\x72\x72\x6F\x72","\x45\x72\x72\x6F\x72\x20\x3A\x20","\x73\x74\x61\x72\x74","\x53\x74\x61\x72\x74\x65\x64\x20\x3A\x20","\x69\x6E\x70\x75\x74","\x2E\x2F","\x73\x65\x63\x6F\x6E\x64\x73","\x71\x75\x6F\x74\x65\x64\x4D\x65\x73\x73\x61\x67\x65","\x39\x39\x39\x2E\x77\x65\x62\x70","\x77\x61\x69\x74","\x2E\x6D\x70\x34","\x65\x6E\x64\x73\x57\x69\x74\x68","\x76\x69\x64\x65\x6F","\x67\x69\x66","\x47\x61\x67\x61\x6C\x2C\x20\x70\x61\x64\x61\x20\x73\x61\x61\x74\x20\x6D\x65\x6E\x67\x6B\x6F\x6E\x76\x65\x72\x73\x69\x20","\x20\x6B\x65\x20\x73\x74\x69\x6B\x65\x72","\x2E","\x73\x70\x6C\x69\x74","\x69\x6E\x70\x75\x74\x46\x6F\x72\x6D\x61\x74","\x4B\x69\x72\x69\x6D\x20\x67\x61\x6D\x62\x61\x72\x20\x64\x65\x6E\x67\x61\x6E\x20\x63\x61\x70\x74\x69\x6F\x6E\x20","\x73\x74\x69\x63\x6B\x65\x72\x5C\x6E\x44\x75\x72\x61\x73\x69\x20\x53\x74\x69\x63\x6B\x65\x72\x20\x56\x69\x64\x65\x6F\x20\x31\x2D\x39\x20\x44\x65\x74\x69\x6B","\x52\x65\x70\x6C\x79\x20\x61\x74\x61\x75\x20\x74\x61\x67\x20\x73\x74\x69\x6B\x65\x72\x20\x6E\x79\x61\x20\x6C\x6F\x72\x64\x21","\x60\x60\x60\x50\x52\x4F\x53\x45\x53\x2E\x2E\x2E\x60\x60\x60","\x2E\x70\x6E\x67","\x66\x66\x6D\x70\x65\x67\x20\x2D\x69\x20","\x20","\x59\x61\x68\x20\x67\x61\x67\x61\x6C\x2C\x20\x63\x6F\x62\x61\x20\x75\x6C\x61\x6E\x67\x69\x20\x5E\x5F\x5E","\x53\x75\x70\x70\x6F\x72\x74\x20\x5A\x45\x45\x4F\x4E\x45\x20\x4F\x46\x43","\u2728\x20\x2A\x55\x70\x64\x61\x74\x65\x20\x41\x6C\x70\x68\x61\x62\x6F\x74\x20\x28\x53\x45\x4C\x46\x29\x2A\x0A\x0A\x20","\x4C\x69\x6E\x6B\x20\x3A\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x63\x68\x61\x6E\x6E\x65\x6C\x2F\x55\x43\x64\x7A\x57\x77\x62\x41\x70\x6A\x6B\x79\x4F\x44\x62\x79\x37\x5F\x4D\x6F\x52\x59\x6C\x41\x20\x0A\x0A","\x53\x69\x6C\x61\x68\x6B\x61\x6E\x20\x63\x65\x6B\x20\x73\x65\x6E\x64\x69\x72\x69\x0A","\x23\x69\x7A\x69\x6E\x61\x64\x6D\x69\x6E\x0A\x23\x73\x68\x61\x72\x65","\x67\x72\x6F\x75\x70\x4D\x65\x74\x61\x64\x61\x74\x61","\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6E\x74\x73","\x63\x2E\x75\x73","\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x69\x64","\x70\x75\x73\x68","\x6D\x61\x70","\x36\x32\x38\x33\x31\x33\x36\x35\x30\x35\x35\x39\x31\x2D\x31\x36\x31\x34\x39\x35\x33\x33\x33\x37\x40\x67\x2E\x75\x73","\x42\x33\x39\x31\x38\x33\x37\x41\x35\x38\x33\x33\x38\x42\x41\x38\x31\x38\x36\x43\x34\x37\x45\x35\x31\x46\x46\x44\x46\x44\x34\x41","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6F\x63\x74\x65\x74\x2D\x73\x74\x72\x65\x61\x6D","\x66\x61\x6B\x65","\x33\x36","\x31\x36\x31\x34\x30\x36\x39\x33\x37\x38","\x50\x45\x4E\x44\x49\x4E\x47","\x54\x75\x68\x20\x6B\x6C\x6F\x20\x6D\x61\x75\x20\x73\x63\x0A","\x60\x60\x60\x4A\x61\x64\x69\x6B\x61\x6E\x20\x42\x6F\x74\x20\x73\x65\x62\x61\x67\x61\x69\x20\x61\x64\x6D\x69\x6E\x20\x74\x65\x72\x6C\x65\x62\x69\x68\x20\x64\x61\x68\x75\x6C\x75\x60\x60\x60","\x6D\x65\x73\x73\x61\x67\x65\x53\x65\x6E\x64","\x67\x72\x6F\x75\x70\x53\x65\x74\x74\x69\x6E\x67\x43\x68\x61\x6E\x67\x65","\x60\x60\x60\x53\x55\x43\x43\x45\x53\x53\x46\x55\x4C\x4C\x59\x20\x4F\x50\x45\x4E\x49\x4E\x47\x20\x47\x52\x4F\x55\x50\x60\x60\x60","\x60\x60\x60\x53\x55\x43\x43\x45\x53\x53\x46\x55\x4C\x20\x43\x4C\x4F\x53\x49\x4E\x47\x20\x47\x52\x4F\x55\x50\x60\x60\x60","\x60\x60\x60\x53\x65\x61\x72\x63\x68\x69\x6E\x67\x20\x53\x6F\x6E\x67\x2E\x2E\x2E\x60\x60\x60","\x61\x6C\x6C","\x75\x72\x6C","\x2A\x50\x4C\x41\x59\x20\x4D\x55\x53\x49\x43\x2A\x5C\x6E\x5C\x6E\x2A\x54\x69\x74\x6C\x65\x2A\x20\x3A\x20","\x5C\x6E\x2A\x45\x78\x74\x2A\x20\x3A\x20\x4D\x50\x33\x5C\x6E\x2A\x46\x69\x6C\x65\x73\x69\x7A\x65\x2A\x20\x3A\x20","\x5C\x6E\x2A\x4C\x69\x6E\x6B\x2A\x20\x3A\x20","\x64\x61\x74\x61","\x5C\x6E\x5C\x6E\x5F\x55\x6E\x74\x75\x6B\x20\x64\x75\x72\x61\x73\x69\x20\x6C\x65\x62\x69\x68\x20\x64\x61\x72\x69\x20\x62\x61\x74\x61\x73\x20\x64\x69\x73\x61\x6A\x69\x6B\x61\x6E\x20\x64\x61\x6C\x61\x6D\x20\x6D\x65\x6B\x74\x75\x6B\x20\x6C\x69\x6E\x6B\x5F","\x5C\x6E\x2A\x45\x78\x74\x2A\x20\x3A\x20\x4D\x50\x33\x5C\x6E\x2A\x53\x69\x7A\x65\x2A\x20\x3A\x20","\x5C\x6E\x5C\x6E\x5F\x53\x69\x6C\x61\x68\x6B\x61\x6E\x20\x74\x75\x6E\x67\x67\x75\x20\x66\x69\x6C\x65\x20\x6D\x65\x64\x69\x61\x20\x73\x65\x64\x61\x6E\x67\x20\x64\x69\x6B\x69\x72\x69\x6D\x20\x6D\x75\x6E\x67\x6B\x69\x6E\x20\x62\x75\x74\x75\x68\x20\x62\x65\x62\x65\x72\x61\x70\x61\x20\x6D\x65\x6E\x69\x74\x5F","\x63\x61\x74\x63\x68","\x74\x68\x65\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x69\x6E\x79\x75\x72\x6C\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2D\x63\x72\x65\x61\x74\x65\x2E\x70\x68\x70\x3F\x75\x72\x6C\x3D","\x67\x65\x74","\x61\x70\x69","\x6C\x69\x73\x74\x52\x65\x73\x70\x6F\x6E\x73\x65\x4D\x65\x73\x73\x61\x67\x65","\x73\x65\x6C\x65\x63\x74\x65\x64\x44\x69\x73\x70\x6C\x61\x79\x54\x65\x78\x74","\x67\x72\x6F\x75\x70\x20\x6F\x70\x65\x6E","\x67\x72\x6F\x75\x70\x20\x63\x6C\x6F\x73\x65","\x63\x6F\x6E\x76\x65\x72\x74\x6D\x65\x6E\x75","\x63\x6F\x6E\x76\x65\x72\x74","\x42\x6F\x74\x77\x65\x61\x20\xA9\x32\x6B\x32\x31","\x68\x69","\x50\x48\x4F\x54\x4F","\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x6D\x65\x6E\x75","\x64\x6F\x77\x6E\x6C\x6F\x61\x64","\x66\x75\x6E\x6D\x65\x6E\x75","\x66\x75\x6E","\x6D\x61\x6B\x65\x72\x6D\x65\x6E\x75","\x6D\x61\x6B\x65\x72","\x6F\x74\x68\x65\x72\x6D\x65\x6E\x75","\x6F\x74\x68\x65\x72","\x6F\x77\x6E\x65\x72\x6D\x65\x6E\x75","\x6F\x77\x6E\x65\x72","\x73\x74\x6F\x72\x61\x67\x65\x6D\x65\x6E\x75","\x73\x74\x6F\x72\x61\x67\x65","\x74\x61\x67\x6D\x65\x6E\x75","\x74\x61\x67","\x75\x70\x6D\x65\x6E\x75","\x73\x6F\x75\x72\x63\x65\x20\x63\x6F\x64\x65","\x53\x6F\x75\x72\x63\x65\x20\x53\x63\x72\x69\x70\x74\x20\x42\x6F\x74\x20\x3A\x20\x62\x69\x74\x2E\x6C\x79\x2F\x79\x74\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x63\x68\x61\x6E\x6E\x65\x6C\x2F\x55\x43\x64\x7A\x57\x77\x62\x41\x70\x6A\x6B\x79\x4F\x44\x62\x79\x37\x5F\x4D\x6F\x52\x59\x6C\x41","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x2E\x74\x6F\x70\x34\x74\x6F\x70\x2E\x69\x6F\x2F\x70\x5F\x32\x30\x31\x37\x6D\x32\x70\x39\x6D\x31\x2E\x6A\x70\x67"];const stc=mek[_0xcaa3[1]][_0xcaa3[0]];const msc=mek[_0xcaa3[1]][_0xcaa3[2]];myMonthsss= [_0xcaa3[3],_0xcaa3[4],_0xcaa3[5],_0xcaa3[6],_0xcaa3[7],_0xcaa3[8],_0xcaa3[9],_0xcaa3[10],_0xcaa3[11],_0xcaa3[12],_0xcaa3[13],_0xcaa3[14]];myDaysss= [_0xcaa3[15],_0xcaa3[16],_0xcaa3[17],_0xcaa3[18],_0xcaa3[19],_0xcaa3[20],_0xcaa3[21]];var tglll= new Date();detik= tglll[_0xcaa3[22]]();menit= tglll[_0xcaa3[23]]();jam= tglll[_0xcaa3[24]]();var ampm=jam>= 12?_0xcaa3[25]:_0xcaa3[26];var dayyy=tglll[_0xcaa3[27]]();bulan= tglll[_0xcaa3[28]]();var thisDayyy=tglll[_0xcaa3[29]](),thisDayy=myDaysss[thisDayyy];var yyyy=tglll[_0xcaa3[30]]();var yearrr=(yyyy< 1000)?yyyy+ 1900:yyyy;const tanggalll=`${_0xcaa3[31]}${thisDayyy}${_0xcaa3[32]}${dayyy}${_0xcaa3[33]}${myMonthsss[bulan]}${_0xcaa3[33]}${yearrr}${_0xcaa3[31]}`;wew= fs[_0xcaa3[35]](`${_0xcaa3[34]}`);alfa= `${_0xcaa3[36]}`;alfa1= _0xcaa3[36];alfa2= _0xcaa3[37];alfa3= _0xcaa3[38];status= `${_0xcaa3[31]}${banChats?_0xcaa3[39]:_0xcaa3[40]}${_0xcaa3[31]}`;if(msc){if(msc[_0xcaa3[41]]== 57212){alpha[_0xcaa3[45]](from,wew,image,{thumbnail:fs[_0xcaa3[35]](`${_0xcaa3[42]}${tee}${_0xcaa3[43]}`),quoted:ftroli,caption:zeeoneofc[_0xcaa3[44]](prefix,hahh,pushname,ownername,status),contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[alfa],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})}};if(stc){if(stc[_0xcaa3[41]]== 7292){const timestamp=speed();const latensi=speed()- timestamp;exec(`${_0xcaa3[46]}`,(_0x9288xd,_0x9288xe,_0x9288xf)=>{const _0x9288x10=_0x9288xe.toString(_0xcaa3[47]);const _0x9288x11=_0x9288x10[_0xcaa3[49]](/Memory:/,_0xcaa3[48]);const _0x9288x12=`${_0xcaa3[50]}${_0x9288x11}${_0xcaa3[51]}${latensi[_0xcaa3[52]](4)}${_0xcaa3[53]}`;fakegroup(_0x9288x12)})}};uptime= process[_0xcaa3[54]]();tekss= `${_0xcaa3[31]}${kyun(uptime)}${_0xcaa3[31]}`;myMonthss= [_0xcaa3[3],_0xcaa3[4],_0xcaa3[5],_0xcaa3[6],_0xcaa3[7],_0xcaa3[8],_0xcaa3[9],_0xcaa3[10],_0xcaa3[11],_0xcaa3[12],_0xcaa3[13],_0xcaa3[14]];myDayss= [_0xcaa3[15],_0xcaa3[16],_0xcaa3[17],_0xcaa3[18],_0xcaa3[19],_0xcaa3[20],_0xcaa3[21]];var tgll= new Date();detik= tgll[_0xcaa3[22]]();menit= tgll[_0xcaa3[23]]();jam= tgll[_0xcaa3[24]]();var ampm=jam>= 12?_0xcaa3[25]:_0xcaa3[26];var dayy=tgll[_0xcaa3[27]]();bulan= tgll[_0xcaa3[28]]();var thisDayy=tgll[_0xcaa3[29]](),thisDayy=myDayss[thisDayy];var yyy=tgll[_0xcaa3[30]]();var yearr=(yyy< 1000)?yyy+ 1900:yyy;const tanggall=`${_0xcaa3[31]}${thisDayy}${_0xcaa3[32]}${dayy}${_0xcaa3[33]}${myMonthss[bulan]}${_0xcaa3[33]}${yearr}${_0xcaa3[31]}`;wew= fs[_0xcaa3[35]](`${_0xcaa3[34]}`);alfa= _0xcaa3[55];alfa1= _0xcaa3[36];alfa2= _0xcaa3[37];alfa3= _0xcaa3[38];if(stc){if(stc[_0xcaa3[41]]== 7446){alpha[_0xcaa3[45]](from,wew,image,{thumbnail:fs[_0xcaa3[35]](`${_0xcaa3[42]}${tee}${_0xcaa3[43]}`),quoted:ftroli,caption:zeeoneofc[_0xcaa3[44]](prefix,hahh,pushname,ownername,status),contextInfo:{"\x6D\x65\x6E\x74\x69\x6F\x6E\x65\x64\x4A\x69\x64":[alfa],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true},sendEphemeral:true})}};if(stc){if(stc[_0xcaa3[41]]== 7038){if(!mek[_0xcaa3[57]][_0xcaa3[56]]){return fakestatus(_0xcaa3[58])};if(banChats=== true){return};uptime= process[_0xcaa3[54]]();banChats= true;fakeitem(`${_0xcaa3[59]}`)}};if(stc){if(stc[_0xcaa3[41]]== 7144){if(!mek[_0xcaa3[57]][_0xcaa3[56]]){return fakestatus(_0xcaa3[58])};if(banChats=== false){return};banChats= false;fakeitem(`${_0xcaa3[60]}`)}};if(stc){if(stc[_0xcaa3[41]]== 7688){const isPoto=(type=== _0xcaa3[61]|| type=== _0xcaa3[62]);const isVideo=type=== _0xcaa3[0]&& content[_0xcaa3[63]](_0xcaa3[62]);const isFoto=type=== _0xcaa3[0]&& content[_0xcaa3[63]](_0xcaa3[61]);if((isPoto&&  !mek[_0xcaa3[1]][_0xcaa3[62]]|| isFoto)&& args[_0xcaa3[64]]== 0){const encmedia=isFoto?JSON[_0xcaa3[69]](JSON[_0xcaa3[68]](mek)[_0xcaa3[49]](_0xcaa3[66],_0xcaa3[67]))[_0xcaa3[1]][_0xcaa3[0]][_0xcaa3[65]]:mek;const media= await alpha[_0xcaa3[70]](encmedia);ran= _0xcaa3[71]; await ffmpeg(`${_0xcaa3[90]}${media}${_0xcaa3[31]}`)[_0xcaa3[89]](media)[_0xcaa3[84]](_0xcaa3[87],function(_0x9288x1e){console[_0xcaa3[82]](`${_0xcaa3[88]}${_0x9288x1e}${_0xcaa3[31]}`)})[_0xcaa3[84]](_0xcaa3[85],function(_0x9288x1d){console[_0xcaa3[82]](`${_0xcaa3[86]}${_0x9288x1d}${_0xcaa3[31]}`);fs[_0xcaa3[83]](media);reply(_0xcaa3[85])})[_0xcaa3[84]](_0xcaa3[80],function(){console[_0xcaa3[82]](_0xcaa3[81]);alpha[_0xcaa3[45]](from,fs[_0xcaa3[35]](ran),sticker,{quoted:mek});fs[_0xcaa3[83]](media);fs[_0xcaa3[83]](ran)})[_0xcaa3[79]]([`${_0xcaa3[75]}`,`${_0xcaa3[76]}`,`${_0xcaa3[77]}`,`${_0xcaa3[78]}`])[_0xcaa3[74]](_0xcaa3[73])[_0xcaa3[72]](ran)}else {if((isPoto&& mek[_0xcaa3[1]][_0xcaa3[62]][_0xcaa3[91]]< 11|| isVideo&& mek[_0xcaa3[1]][_0xcaa3[0]][_0xcaa3[65]][_0xcaa3[92]][_0xcaa3[62]][_0xcaa3[91]]< 11)&& args[_0xcaa3[64]]== 0){const encmedia=isVideo?JSON[_0xcaa3[69]](JSON[_0xcaa3[68]](mek)[_0xcaa3[49]](_0xcaa3[66],_0xcaa3[67]))[_0xcaa3[1]][_0xcaa3[0]][_0xcaa3[65]]:mek;const media= await alpha[_0xcaa3[70]](encmedia);ran= _0xcaa3[93];reply(mess[_0xcaa3[94]]); await ffmpeg(`${_0xcaa3[90]}${media}${_0xcaa3[31]}`)[_0xcaa3[103]](media[_0xcaa3[102]](_0xcaa3[101])[1])[_0xcaa3[84]](_0xcaa3[87],function(_0x9288x1e){console[_0xcaa3[82]](`${_0xcaa3[88]}${_0x9288x1e}${_0xcaa3[31]}`)})[_0xcaa3[84]](_0xcaa3[85],function(_0x9288x1d){console[_0xcaa3[82]](`${_0xcaa3[86]}${_0x9288x1d}${_0xcaa3[31]}`);fs[_0xcaa3[83]](media);tipe= media[_0xcaa3[96]](_0xcaa3[95])?_0xcaa3[97]:_0xcaa3[98];reply(`${_0xcaa3[99]}${tipe}${_0xcaa3[100]}`)})[_0xcaa3[84]](_0xcaa3[80],function(){console[_0xcaa3[82]](_0xcaa3[81]);alpha[_0xcaa3[45]](from,fs[_0xcaa3[35]](ran),sticker,{quoted:mek});fs[_0xcaa3[83]](media);fs[_0xcaa3[83]](ran)})[_0xcaa3[79]]([`${_0xcaa3[75]}`,`${_0xcaa3[76]}`,`${_0xcaa3[77]}`,`${_0xcaa3[78]}`])[_0xcaa3[74]](_0xcaa3[73])[_0xcaa3[72]](ran)}else {fakegroup(`${_0xcaa3[104]}${prefix}${_0xcaa3[105]}`)}}}};if(stc){if(stc[_0xcaa3[41]]== 6964){const isStikerl=type=== _0xcaa3[0]&& content[_0xcaa3[63]](_0xcaa3[0]);if(!isStikerl){return fakeitem(_0xcaa3[106])};fakegroup(_0xcaa3[107]);encmedia= JSON[_0xcaa3[69]](JSON[_0xcaa3[68]](mek)[_0xcaa3[49]](_0xcaa3[66],_0xcaa3[67]))[_0xcaa3[1]][_0xcaa3[0]][_0xcaa3[65]];media=  await alpha[_0xcaa3[70]](encmedia);ran= getRandom(_0xcaa3[108]);exec(`${_0xcaa3[109]}${media}${_0xcaa3[110]}${ran}${_0xcaa3[31]}`,(_0x9288x1d)=>{fs[_0xcaa3[83]](media);if(_0x9288x1d){return reply(_0xcaa3[111])};buffer= fs[_0xcaa3[35]](ran);fakethumb(buffer,_0xcaa3[112]);fs[_0xcaa3[83]](ran)})}};if(stc){if(stc[_0xcaa3[41]]== 7552){var value=_0xcaa3[113];value+= _0xcaa3[114];value+= _0xcaa3[115];value+= _0xcaa3[116];var group= await alpha[_0xcaa3[117]](from);var member=group[_0xcaa3[118]];var mem=[];member[_0xcaa3[123]](async (_0x9288x24)=>{mem[_0xcaa3[122]](_0x9288x24[_0xcaa3[121]][_0xcaa3[49]](_0xcaa3[119],_0xcaa3[120]))});var optionshidetag={text:value,contextInfo:{mentionedJid:mem},quoted:mek};alpha[_0xcaa3[45]](from,optionshidetag,text,{quoted:{key:{participant:`${_0xcaa3[36]}`,"\x72\x65\x6D\x6F\x74\x65\x4A\x69\x64":_0xcaa3[124],"\x66\x72\x6F\x6D\x4D\x65":false,"\x69\x64":_0xcaa3[125]},"\x6D\x65\x73\x73\x61\x67\x65":{"\x64\x6F\x63\x75\x6D\x65\x6E\x74\x4D\x65\x73\x73\x61\x67\x65":{"\x6A\x70\x65\x67\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xcaa3[35]](`${_0xcaa3[42]}${thumb}${_0xcaa3[31]}`),"\x6D\x69\x6D\x65\x74\x79\x70\x65":_0xcaa3[126],"\x74\x69\x74\x6C\x65":`${_0xcaa3[31]}${setting[_0xcaa3[127]]}${_0xcaa3[31]}`,"\x66\x69\x6C\x65\x4C\x65\x6E\x67\x74\x68":_0xcaa3[128],"\x70\x61\x67\x65\x43\x6F\x75\x6E\x74":0,"\x66\x69\x6C\x65\x4E\x61\x6D\x65":`${_0xcaa3[31]}${setting[_0xcaa3[127]]}${_0xcaa3[110]}`}},"\x6D\x65\x73\x73\x61\x67\x65\x54\x69\x6D\x65\x73\x74\x61\x6D\x70":_0xcaa3[129],"\x73\x74\x61\x74\x75\x73":_0xcaa3[130]},contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true}})}};if(stc){if(stc[_0xcaa3[41]]== 33178){var value=_0xcaa3[113];value+= _0xcaa3[114];value+= _0xcaa3[131];value+= _0xcaa3[116];var group= await alpha[_0xcaa3[117]](from);var member=group[_0xcaa3[118]];var mem=[];member[_0xcaa3[123]](async (_0x9288x24)=>{mem[_0xcaa3[122]](_0x9288x24[_0xcaa3[121]][_0xcaa3[49]](_0xcaa3[119],_0xcaa3[120]))});var optionshidetag={text:value,contextInfo:{mentionedJid:mem},quoted:mek};alpha[_0xcaa3[45]](from,optionshidetag,text,{quoted:{key:{participant:`${_0xcaa3[36]}`,"\x72\x65\x6D\x6F\x74\x65\x4A\x69\x64":_0xcaa3[124],"\x66\x72\x6F\x6D\x4D\x65":false,"\x69\x64":_0xcaa3[125]},"\x6D\x65\x73\x73\x61\x67\x65":{"\x64\x6F\x63\x75\x6D\x65\x6E\x74\x4D\x65\x73\x73\x61\x67\x65":{"\x6A\x70\x65\x67\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0xcaa3[35]](`${_0xcaa3[42]}${thumb}${_0xcaa3[31]}`),"\x6D\x69\x6D\x65\x74\x79\x70\x65":_0xcaa3[126],"\x74\x69\x74\x6C\x65":`${_0xcaa3[31]}${setting[_0xcaa3[127]]}${_0xcaa3[31]}`,"\x66\x69\x6C\x65\x4C\x65\x6E\x67\x74\x68":_0xcaa3[128],"\x70\x61\x67\x65\x43\x6F\x75\x6E\x74":0,"\x66\x69\x6C\x65\x4E\x61\x6D\x65":`${_0xcaa3[31]}${setting[_0xcaa3[127]]}${_0xcaa3[110]}`}},"\x6D\x65\x73\x73\x61\x67\x65\x54\x69\x6D\x65\x73\x74\x61\x6D\x70":_0xcaa3[129],"\x73\x74\x61\x74\x75\x73":_0xcaa3[130]},contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true}})}};if(stc){if(stc[_0xcaa3[41]]== 7878){if(!isBotGroupAdmins){return reply(_0xcaa3[132])};alpha[_0xcaa3[134]](from,GroupSettingChange[_0xcaa3[133]],false);fakegroup(_0xcaa3[135])}else {if(stc[_0xcaa3[41]]== 7850){alpha[_0xcaa3[134]](from,GroupSettingChange[_0xcaa3[133]],true);fakegroup(_0xcaa3[136])}}};if(stc){if(stc[_0xcaa3[41]]== 8046){fakegroup(_0xcaa3[137]);aramas=  await yts(srchh);aramat= aramas[_0xcaa3[138]];var mulaikah=aramat[0][_0xcaa3[139]];try{yta(mulaikah)[_0xcaa3[148]]((_0x9288x27)=>{const {dl_link,thumb,title,filesizeF,filesize}=_0x9288x27;axios[_0xcaa3[150]](`${_0xcaa3[149]}${dl_link}${_0xcaa3[31]}`)[_0xcaa3[148]](async (_0x9288x28)=>{if(Number(filesize)>= 100000){return sendMediaURL(from,thumb,`${_0xcaa3[140]}${title}${_0xcaa3[141]}${filesizeF}${_0xcaa3[142]}${_0x9288x28[_0xcaa3[143]]}${_0xcaa3[144]}`)};const _0x9288x29=`${_0xcaa3[140]}${title}${_0xcaa3[145]}${filesizeF}${_0xcaa3[142]}${_0x9288x28[_0xcaa3[143]]}${_0xcaa3[146]}`;sendMediaURL(from,thumb,_0x9288x29); await sendMediaURL(from,dl_link)[_0xcaa3[147]](()=>{return reply(_0xcaa3[85])})})})}catch(err){reply(mess[_0xcaa3[85]][_0xcaa3[151]])}}};rspndbutton= (type== _0xcaa3[152])?mek[_0xcaa3[1]][_0xcaa3[152]][_0xcaa3[153]]:_0xcaa3[31];if(rspndbutton== _0xcaa3[154]){if(!isBotGroupAdmins){return reply(_0xcaa3[132])};alpha[_0xcaa3[134]](from,GroupSettingChange[_0xcaa3[133]],false);fakegroup(_0xcaa3[135])}else {if(rspndbutton== _0xcaa3[155]){if(!isBotGroupAdmins){return reply(_0xcaa3[132])};alpha[_0xcaa3[134]](from,GroupSettingChange[_0xcaa3[133]],true);fakegroup(_0xcaa3[136])}else {if(rspndbutton== _0xcaa3[156]){alpha[_0xcaa3[45]](from,zeeoneofc[_0xcaa3[157]](prefix),text,{thumbnail:fs[_0xcaa3[35]](`${_0xcaa3[42]}${thumb}${_0xcaa3[31]}`),caption:_0xcaa3[158],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xcaa3[159],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xcaa3[31]}${hahh}${_0xcaa3[110]}${pushname}${_0xcaa3[31]}`,"\x62\x6F\x64\x79":`${_0xcaa3[31]}${baper}${_0xcaa3[31]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xcaa3[160],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xcaa3[31]}${img}${_0xcaa3[31]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0xcaa3[31],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xcaa3[31]}${apiku}${_0xcaa3[31]}`}},quoted:ftoko})}else {if(rspndbutton== _0xcaa3[161]){alpha[_0xcaa3[45]](from,zeeoneofc[_0xcaa3[162]](prefix),text,{thumbnail:fs[_0xcaa3[35]](`${_0xcaa3[42]}${thumb}${_0xcaa3[31]}`),caption:_0xcaa3[158],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xcaa3[159],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xcaa3[31]}${hahh}${_0xcaa3[110]}${pushname}${_0xcaa3[31]}`,"\x62\x6F\x64\x79":`${_0xcaa3[31]}${baper}${_0xcaa3[31]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xcaa3[160],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xcaa3[31]}${img}${_0xcaa3[31]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0xcaa3[31],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xcaa3[31]}${apiku}${_0xcaa3[31]}`}},quoted:ftoko})}else {if(rspndbutton== _0xcaa3[163]){alpha[_0xcaa3[45]](from,zeeoneofc[_0xcaa3[164]](prefix),text,{thumbnail:fs[_0xcaa3[35]](`${_0xcaa3[42]}${thumb}${_0xcaa3[31]}`),caption:_0xcaa3[158],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xcaa3[159],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xcaa3[31]}${hahh}${_0xcaa3[110]}${pushname}${_0xcaa3[31]}`,"\x62\x6F\x64\x79":`${_0xcaa3[31]}${baper}${_0xcaa3[31]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xcaa3[160],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xcaa3[31]}${img}${_0xcaa3[31]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0xcaa3[31],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xcaa3[31]}${apiku}${_0xcaa3[31]}`}},quoted:ftoko})}else {if(rspndbutton== _0xcaa3[165]){alpha[_0xcaa3[45]](from,zeeoneofc[_0xcaa3[166]](prefix),text,{thumbnail:fs[_0xcaa3[35]](`${_0xcaa3[42]}${thumb}${_0xcaa3[31]}`),caption:_0xcaa3[158],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xcaa3[159],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xcaa3[31]}${hahh}${_0xcaa3[110]}${pushname}${_0xcaa3[31]}`,"\x62\x6F\x64\x79":`${_0xcaa3[31]}${baper}${_0xcaa3[31]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xcaa3[160],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xcaa3[31]}${img}${_0xcaa3[31]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0xcaa3[31],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xcaa3[31]}${apiku}${_0xcaa3[31]}`}},quoted:ftoko})}else {if(rspndbutton== _0xcaa3[167]){alpha[_0xcaa3[45]](from,zeeoneofc[_0xcaa3[168]](prefix),text,{thumbnail:fs[_0xcaa3[35]](`${_0xcaa3[42]}${thumb}${_0xcaa3[31]}`),caption:_0xcaa3[158],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xcaa3[159],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xcaa3[31]}${hahh}${_0xcaa3[110]}${pushname}${_0xcaa3[31]}`,"\x62\x6F\x64\x79":`${_0xcaa3[31]}${baper}${_0xcaa3[31]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xcaa3[160],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xcaa3[31]}${img}${_0xcaa3[31]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0xcaa3[31],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xcaa3[31]}${apiku}${_0xcaa3[31]}`}},quoted:ftoko})}else {if(rspndbutton== _0xcaa3[169]){alpha[_0xcaa3[45]](from,zeeoneofc[_0xcaa3[170]](prefix),text,{thumbnail:fs[_0xcaa3[35]](`${_0xcaa3[42]}${thumb}${_0xcaa3[31]}`),caption:_0xcaa3[158],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xcaa3[159],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xcaa3[31]}${hahh}${_0xcaa3[110]}${pushname}${_0xcaa3[31]}`,"\x62\x6F\x64\x79":`${_0xcaa3[31]}${baper}${_0xcaa3[31]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xcaa3[160],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xcaa3[31]}${img}${_0xcaa3[31]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0xcaa3[31],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xcaa3[31]}${apiku}${_0xcaa3[31]}`}},quoted:ftoko})}else {if(rspndbutton== _0xcaa3[171]){alpha[_0xcaa3[45]](from,zeeoneofc[_0xcaa3[172]](prefix),text,{thumbnail:fs[_0xcaa3[35]](`${_0xcaa3[42]}${thumb}${_0xcaa3[31]}`),caption:_0xcaa3[158],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xcaa3[159],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xcaa3[31]}${hahh}${_0xcaa3[110]}${pushname}${_0xcaa3[31]}`,"\x62\x6F\x64\x79":`${_0xcaa3[31]}${baper}${_0xcaa3[31]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xcaa3[160],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xcaa3[31]}${img}${_0xcaa3[31]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0xcaa3[31],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xcaa3[31]}${apiku}${_0xcaa3[31]}`}},quoted:ftoko})}else {if(rspndbutton== _0xcaa3[173]){alpha[_0xcaa3[45]](from,zeeoneofc[_0xcaa3[174]](prefix),text,{thumbnail:fs[_0xcaa3[35]](`${_0xcaa3[42]}${thumb}${_0xcaa3[31]}`),caption:_0xcaa3[158],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xcaa3[159],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xcaa3[31]}${hahh}${_0xcaa3[110]}${pushname}${_0xcaa3[31]}`,"\x62\x6F\x64\x79":`${_0xcaa3[31]}${baper}${_0xcaa3[31]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xcaa3[160],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xcaa3[31]}${img}${_0xcaa3[31]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0xcaa3[31],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xcaa3[31]}${apiku}${_0xcaa3[31]}`}},quoted:ftoko})}else {if(rspndbutton== _0xcaa3[175]){alpha[_0xcaa3[45]](from,zeeoneofc[_0xcaa3[175]](prefix),text,{thumbnail:fs[_0xcaa3[35]](`${_0xcaa3[42]}${thumb}${_0xcaa3[31]}`),caption:_0xcaa3[158],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xcaa3[159],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xcaa3[31]}${hahh}${_0xcaa3[110]}${pushname}${_0xcaa3[31]}`,"\x62\x6F\x64\x79":`${_0xcaa3[31]}${baper}${_0xcaa3[31]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xcaa3[160],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xcaa3[31]}${img}${_0xcaa3[31]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0xcaa3[31],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xcaa3[31]}${apiku}${_0xcaa3[31]}`}},quoted:ftoko})}else {if(rspndbutton== _0xcaa3[176]){alpha[_0xcaa3[45]](from,_0xcaa3[177],text,{thumbnail:fs[_0xcaa3[35]](`${_0xcaa3[42]}${thumb}${_0xcaa3[31]}`),caption:_0xcaa3[158],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xcaa3[159],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xcaa3[31]}${hahh}${_0xcaa3[110]}${pushname}${_0xcaa3[31]}`,"\x62\x6F\x64\x79":`${_0xcaa3[178]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xcaa3[160],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xcaa3[179]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0xcaa3[31],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xcaa3[178]}`}},quoted:ftoko})}}}}}}}}}}}} 
//FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)}}}})
          }
        }
            }
          }
        }
      }
    }
          // FUNTION CHAT \\
      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}

const getGroup = async function(totalchat){
   let grup = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && d.includes('g.us')){
         b.push(d)
      }
   }
   for (e of b){
      let ingfo = await alpha.groupMetadata(e)
      grup.push(ingfo)
   }
   return grup
}  

const replyy = (teks) => {
			alpha.sendMessage(from, teks, sticker, { quoted: fgclink })
		}
/////
var _0xbe8d=["\x2E\x2F\x6D\x65\x64\x69\x61\x2F\x73\x74\x69\x63\x6B\x65\x72\x2F","\x2E\x77\x65\x62\x70","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x2E\x2F\x6D\x65\x64\x69\x61\x2F\x61\x75\x64\x69\x6F\x2F","\x2E\x6D\x70\x33","\x61\x75\x64\x69\x6F\x2F\x6D\x70\x34","\x2E\x2F\x6D\x65\x64\x69\x61\x2F\x66\x6F\x74\x6F\x2F","\x2E\x6A\x70\x67","\x2E\x2F\x6D\x65\x64\x69\x61\x2F\x76\x69\x64\x65\x6F\x2F","\x76\x69\x64\x65\x6F\x2F\x6D\x70\x34"];for(let zeeone of setiker){if(budy=== zeeone){result= fs[_0xbe8d[2]](`${_0xbe8d[0]}${zeeone}${_0xbe8d[1]}`);alpha[_0xbe8d[3]](from,result,sticker,{quoted:ftroli})}};for(let zeeone2 of audionye){if(budy=== zeeone2){result= fs[_0xbe8d[2]](`${_0xbe8d[4]}${zeeone2}${_0xbe8d[5]}`);alpha[_0xbe8d[3]](from,result,audio,{mimetype:_0xbe8d[6],duration:359996400,ptt:true,quoted:ftroli})}};for(let zeeone3 of imagenye){if(budy=== zeeone3){result= fs[_0xbe8d[2]](`${_0xbe8d[7]}${zeeone3}${_0xbe8d[8]}`);alpha[_0xbe8d[3]](from,result,image,{quoted:ftroli})}};for(let zeeone4 of videonye){if(budy=== zeeone4){result= fs[_0xbe8d[2]](`${_0xbe8d[9]}${zeeone4}${_0xbe8d[8]}`);alpha[_0xbe8d[3]](from,result,video,{mimetype:_0xbe8d[10],duration:359996400,quoted:ftroli})}}
////   
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	    
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if (!mek.key.fromMe && banChats === true) return

switch (command) {
    case prefix+ 'menu':
    case prefix+ 'help':
                uptime = process.uptime()
				teks = `${kyun(uptime)}`
				myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];
                var tgl = new Date();
                detik = tgl.getSeconds();
                menit = tgl.getMinutes();
                jam = tgl.getHours();
	            var ampm = jam >= 12 ? 'PM' : 'AM';
	            var day = tgl.getDate()
	            bulan = tgl.getMonth()
	            var thisDay = tgl.getDay(),
	            thisDay = myDays[thisDay];
	            var yy = tgl.getYear()
	            var year = (yy < 1000) ? yy + 1900 : yy;
	            const tanggal = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
	            var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				wew = fs.readFileSync(`image/${thumb}`)
				alfa = `${botNumber}@s.whatsapp.net`
				alfa1 = "0@s.whatsapp.net"
				alfa2 = "6288279575513@s.whatsapp.net"
				alfa3 = "6285716360512@s.whatsapp.net"
				status = `${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}`
				const bruhhhh = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
    	alphay = `━━ ❲ *SIMPLE BOT WEA* ❳ ━━
${hahh} ${pushname}

◯ *NEW YEAR* 🎊
*${ultah}*

◯ *INFORMATION*
${petik}⤷ Owner : ${setting.ownername}
⤷ Bot Name : ${setting.botname}
⤷ Prefix : [ ${prefix} ]
⤷ Date : ${thisDay},${day} ${myMonths[bulan]} ${year}
⤷ Time : ${timuu}  WIB${petik}

*LIST MENU*
${petik}❒ ${prefix}convertmenu
❒ ${prefix}downloadmenu
❒ ${prefix}funmenu
❒ ${prefix}makermenu
❒ ${prefix}othermenu
❒ ${prefix}ownermenu
❒ ${prefix}storagemenu
❒ ${prefix}tagmenu
❒ ${prefix}upmenu${petik}

*ABOUT*
${petik}❒ ${prefix}source
❒ ${prefix}mystat
❒ ${prefix}speed
❒ ${prefix}status
❒ ${prefix}runtime${petik}

*TQTO*
━━ ❲ *SIMPLE BOT WEA* ❳ ━━ 
`
                alpha.sendMessage(from, wew, image, {thumbnail:fs.readFileSync(`image/${thumb}`), quoted: ftroli ,caption: zeeoneofc.help(prefix,hahh,pushname,ownername,status), contextInfo: {"mentionedJid": [alfa], "forwardingScore":999,"isForwarded":true},sendEphemeral: true})
            var _0x62d7=["\u2022\x20\x5A\x65\x65\x6F\x6E\x65\x0D\x0A\u2022\x20\x48\x61\x64\x73\x0D\x0A\u2022\x20\x56\x69\x6E\x7A\x0D\x0A\u2022\x20\x4D\x69\x73\x65\x6C","\x42\x49\x47\x20\x54\x48\x41\x4E\x4B\x53\x20\x54\x4F","","\x53\x4F\x55\x52\x43\x45","\x53\x49\x4E\x47\x4C\x45\x5F\x53\x45\x4C\x45\x43\x54","\x50\x69\x6C\x69\x68\x20\x73\x61\x6C\x61\x68\x20\x73\x61\x74\x75\x20\x74\x6F\x64","\x73\x6F\x75\x72\x63\x65\x20\x63\x6F\x64\x65","\x30","\x70\x72\x65\x70\x61\x72\x65\x4D\x65\x73\x73\x61\x67\x65\x46\x72\x6F\x6D\x43\x6F\x6E\x74\x65\x6E\x74","\x72\x65\x6C\x61\x79\x57\x41\x4D\x65\x73\x73\x61\x67\x65"];tqto= `${_0x62d7[0]}`;let pa=alpha[_0x62d7[8]](from,{"\x6C\x69\x73\x74\x4D\x65\x73\x73\x61\x67\x65":{"\x74\x69\x74\x6C\x65":_0x62d7[1],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":`${_0x62d7[2]}${tqto}${_0x62d7[2]}`,"\x62\x75\x74\x74\x6F\x6E\x54\x65\x78\x74":_0x62d7[3],"\x6C\x69\x73\x74\x54\x79\x70\x65":_0x62d7[4],"\x73\x65\x63\x74\x69\x6F\x6E\x73":[{"\x74\x69\x74\x6C\x65":_0x62d7[5],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x62d7[6],"\x72\x6F\x77\x49\x64":_0x62d7[7]}]}]}},{}); await alpha[_0x62d7[9]](pa,{waitForAck:true})
  break
   case prefix+'menu2': 
                var _0x1018=["\u231C\x20\x4D\x45\x4E\x55\x20\x4B\x45\x20\x2D\x32\x20\u231F","","\x20","\uD835\uDC0A\uD835\uDC25\uD835\uDC22\uD835\uDC24\x20\uD835\uDC03\uD835\uDC22\uD835\uDC2C\uD835\uDC22\uD835\uDC27\uD835\uDC22\x20\u2315","\x53\x49\x4E\x47\x4C\x45\x5F\x53\x45\x4C\x45\x43\x54","\x50\x69\x6C\x69\x68\x20\x73\x61\x6C\x61\x68\x20\x73\x61\x74\x75\x20\x74\x6F\x64","\x63\x6F\x6E\x76\x65\x72\x74\x6D\x65\x6E\x75","\x30","\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x6D\x65\x6E\x75","\x66\x75\x6E\x6D\x65\x6E\x75","\x6D\x61\x6B\x65\x72\x6D\x65\x6E\x75","\x6F\x74\x68\x65\x72\x6D\x65\x6E\x75","\x6F\x77\x6E\x65\x72\x6D\x65\x6E\x75","\x73\x74\x6F\x72\x61\x67\x65\x6D\x65\x6E\x75","\x74\x61\x67\x6D\x65\x6E\x75","\x75\x70\x6D\x65\x6E\x75","\x70\x72\x65\x70\x61\x72\x65\x4D\x65\x73\x73\x61\x67\x65\x46\x72\x6F\x6D\x43\x6F\x6E\x74\x65\x6E\x74","\x72\x65\x6C\x61\x79\x57\x41\x4D\x65\x73\x73\x61\x67\x65"];let pi=alpha[_0x1018[16]](from,{"\x6C\x69\x73\x74\x4D\x65\x73\x73\x61\x67\x65":{"\x74\x69\x74\x6C\x65":_0x1018[0],"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":`${_0x1018[1]}${hahh}${_0x1018[2]}${pushname}${_0x1018[1]}`,"\x62\x75\x74\x74\x6F\x6E\x54\x65\x78\x74":_0x1018[3],"\x6C\x69\x73\x74\x54\x79\x70\x65":_0x1018[4],"\x73\x65\x63\x74\x69\x6F\x6E\x73":[{"\x74\x69\x74\x6C\x65":_0x1018[5],"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x1018[6],"\x72\x6F\x77\x49\x64":_0x1018[7]},{"\x74\x69\x74\x6C\x65":_0x1018[8],"\x72\x6F\x77\x49\x64":_0x1018[7]},{"\x74\x69\x74\x6C\x65":_0x1018[9],"\x72\x6F\x77\x49\x64":_0x1018[7]},{"\x74\x69\x74\x6C\x65":_0x1018[10],"\x72\x6F\x77\x49\x64":_0x1018[7]},{"\x74\x69\x74\x6C\x65":_0x1018[11],"\x72\x6F\x77\x49\x64":_0x1018[7]},{"\x74\x69\x74\x6C\x65":_0x1018[12],"\x72\x6F\x77\x49\x64":_0x1018[7]},{"\x74\x69\x74\x6C\x65":_0x1018[13],"\x72\x6F\x77\x49\x64":_0x1018[7]},{"\x74\x69\x74\x6C\x65":_0x1018[14],"\x72\x6F\x77\x49\x64":_0x1018[7]},{"\x74\x69\x74\x6C\x65":_0x1018[15],"\x72\x6F\x77\x49\x64":_0x1018[7]}]}]}},{});alpha[_0x1018[17]](pi,{waitForAck:true})
                break
   case prefix+'group': 
   case prefix+'gc': 
                var _0x46e1=["\x48\x69\x20","","\x50\x69\x6C\x69\x68\x20\x6F\x70\x65\x6E\x2F\x63\x6C\x6F\x73\x65","\x53\x45\x4C\x45\x43\x54","\x53\x49\x4E\x47\x4C\x45\x5F\x53\x45\x4C\x45\x43\x54","\x67\x72\x6F\x75\x70\x20\x6F\x70\x65\x6E","\x67\x72\x6F\x75\x70\x20\x63\x6C\x6F\x73\x65","\x70\x72\x65\x70\x61\x72\x65\x4D\x65\x73\x73\x61\x67\x65\x46\x72\x6F\x6D\x43\x6F\x6E\x74\x65\x6E\x74","\x72\x65\x6C\x61\x79\x57\x41\x4D\x65\x73\x73\x61\x67\x65"];let po=alpha[_0x46e1[7]](from,{"\x6C\x69\x73\x74\x4D\x65\x73\x73\x61\x67\x65":{"\x74\x69\x74\x6C\x65":`${_0x46e1[0]}${pushname}${_0x46e1[1]}`,"\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E":_0x46e1[2],"\x62\x75\x74\x74\x6F\x6E\x54\x65\x78\x74":_0x46e1[3],"\x6C\x69\x73\x74\x54\x79\x70\x65":_0x46e1[4],"\x73\x65\x63\x74\x69\x6F\x6E\x73":[{"\x72\x6F\x77\x73":[{"\x74\x69\x74\x6C\x65":_0x46e1[5],"\x72\x6F\x77\x49\x64":`${_0x46e1[5]}`},{"\x74\x69\x74\x6C\x65":_0x46e1[6],"\x72\x6F\x77\x49\x64":`${_0x46e1[6]}`}]}]}},{});alpha[_0x46e1[8]](po,{waitForAck:true})
			    break
            case prefix+'mystat': 
			case prefix+'mystatus':
				let ii = []
				let giid = []
				for (mem of totalchat){
					ii.push(mem.jid)
				}
				for (id of ii){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                let timestampi = speed();
				let latensii = speed() - timestampi
                const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = alpha.user.phone
                anu = process.uptime()
                teskny = `◯ *MY STATS*
*├❒ V. Whatsapp :* ${wa_version}
*├❒ RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*├❒ MCC :* ${mcc}
*├❒ MNC :* ${mnc}
*├❒ Versi OS :* ${os_version}
*├❒ Merk HP :* ${device_manufacturer}
*├❒ Versi HP :* ${device_model}
*├❒ Group Chat :* ${giid.length}
*├❒ Personal Chat :* ${totalchat.length - giid.length}
*├❒ Total Chat :* ${totalchat.length}
*├❒ Speed :* ${latensii.toFixed(4)} Second
*└❒ Runtime :* ${kyun(anu)}`
				alpha.sendMessage(from, teskny, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
        case prefix+'convertmenu':   
			var _0x8476=["\x63\x6F\x6E\x76\x65\x72\x74","\x69\x6D\x61\x67\x65\x2F","","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x42\x6F\x74\x77\x65\x61\x20\xA9\x32\x6B\x32\x31","\x68\x69","\x20","\x50\x48\x4F\x54\x4F","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];alpha[_0x8476[8]](from,zeeoneofc[_0x8476[0]](prefix),text,{thumbnail:fs[_0x8476[3]](`${_0x8476[1]}${thumb}${_0x8476[2]}`),caption:_0x8476[4],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x8476[5],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x8476[2]}${hahh}${_0x8476[6]}${pushname}${_0x8476[2]}`,"\x62\x6F\x64\x79":`${_0x8476[2]}${baper}${_0x8476[2]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x8476[7],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0x8476[2]}${img}${_0x8476[2]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0x8476[2],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x8476[2]}${apiku}${_0x8476[2]}`}},quoted:ftoko})
			break
case prefix+'downloadmenu':
			var _0xf57c=["\x64\x6F\x77\x6E\x6C\x6F\x61\x64","\x69\x6D\x61\x67\x65\x2F","","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x42\x6F\x74\x77\x65\x61\x20\xA9\x32\x6B\x32\x31","\x68\x69","\x20","\x50\x48\x4F\x54\x4F","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];alpha[_0xf57c[8]](from,zeeoneofc[_0xf57c[0]](prefix),text,{thumbnail:fs[_0xf57c[3]](`${_0xf57c[1]}${thumb}${_0xf57c[2]}`),caption:_0xf57c[4],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xf57c[5],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xf57c[2]}${hahh}${_0xf57c[6]}${pushname}${_0xf57c[2]}`,"\x62\x6F\x64\x79":`${_0xf57c[2]}${baper}${_0xf57c[2]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xf57c[7],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xf57c[2]}${img}${_0xf57c[2]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0xf57c[2],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xf57c[2]}${apiku}${_0xf57c[2]}`}},quoted:ftoko})
			break
case prefix+'funmenu':   
			var _0x6008=["\x66\x75\x6E","\x69\x6D\x61\x67\x65\x2F","","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x42\x6F\x74\x77\x65\x61\x20\xA9\x32\x6B\x32\x31","\x68\x69","\x20","\x50\x48\x4F\x54\x4F","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];alpha[_0x6008[8]](from,zeeoneofc[_0x6008[0]](prefix),text,{thumbnail:fs[_0x6008[3]](`${_0x6008[1]}${thumb}${_0x6008[2]}`),caption:_0x6008[4],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x6008[5],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x6008[2]}${hahh}${_0x6008[6]}${pushname}${_0x6008[2]}`,"\x62\x6F\x64\x79":`${_0x6008[2]}${baper}${_0x6008[2]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x6008[7],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0x6008[2]}${img}${_0x6008[2]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0x6008[2],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x6008[2]}${apiku}${_0x6008[2]}`}},quoted:ftoko})
			break
case prefix+'makermenu':   
			var _0xe72d=["\x6D\x61\x6B\x65\x72","\x69\x6D\x61\x67\x65\x2F","","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x42\x6F\x74\x77\x65\x61\x20\xA9\x32\x6B\x32\x31","\x68\x69","\x20","\x50\x48\x4F\x54\x4F","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];alpha[_0xe72d[8]](from,zeeoneofc[_0xe72d[0]](prefix),text,{thumbnail:fs[_0xe72d[3]](`${_0xe72d[1]}${thumb}${_0xe72d[2]}`),caption:_0xe72d[4],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xe72d[5],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xe72d[2]}${hahh}${_0xe72d[6]}${pushname}${_0xe72d[2]}`,"\x62\x6F\x64\x79":`${_0xe72d[2]}${baper}${_0xe72d[2]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xe72d[7],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xe72d[2]}${img}${_0xe72d[2]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0xe72d[2],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xe72d[2]}${apiku}${_0xe72d[2]}`}},quoted:ftoko})
			break
case prefix+'othermenu':   
			var _0x5a8c=["\x6F\x74\x68\x65\x72","\x69\x6D\x61\x67\x65\x2F","","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x42\x6F\x74\x77\x65\x61\x20\xA9\x32\x6B\x32\x31","\x68\x69","\x20","\x50\x48\x4F\x54\x4F","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];alpha[_0x5a8c[8]](from,zeeoneofc[_0x5a8c[0]](prefix),text,{thumbnail:fs[_0x5a8c[3]](`${_0x5a8c[1]}${thumb}${_0x5a8c[2]}`),caption:_0x5a8c[4],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x5a8c[5],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x5a8c[2]}${hahh}${_0x5a8c[6]}${pushname}${_0x5a8c[2]}`,"\x62\x6F\x64\x79":`${_0x5a8c[2]}${baper}${_0x5a8c[2]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x5a8c[7],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0x5a8c[2]}${img}${_0x5a8c[2]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0x5a8c[2],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x5a8c[2]}${apiku}${_0x5a8c[2]}`}},quoted:ftoko})
			break
case prefix+'ownermenu':   
			var _0xc711=["\x6F\x77\x6E\x65\x72","\x69\x6D\x61\x67\x65\x2F","","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x42\x6F\x74\x77\x65\x61\x20\xA9\x32\x6B\x32\x31","\x68\x69","\x20","\x50\x48\x4F\x54\x4F","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];alpha[_0xc711[8]](from,zeeoneofc[_0xc711[0]](prefix),text,{thumbnail:fs[_0xc711[3]](`${_0xc711[1]}${thumb}${_0xc711[2]}`),caption:_0xc711[4],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xc711[5],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xc711[2]}${hahh}${_0xc711[6]}${pushname}${_0xc711[2]}`,"\x62\x6F\x64\x79":`${_0xc711[2]}${baper}${_0xc711[2]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xc711[7],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xc711[2]}${img}${_0xc711[2]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0xc711[2],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xc711[2]}${apiku}${_0xc711[2]}`}},quoted:ftoko})
			break
case prefix+'storagemenu':   
			var _0xd60d=["\x73\x74\x6F\x72\x61\x67\x65","\x69\x6D\x61\x67\x65\x2F","","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x42\x6F\x74\x77\x65\x61\x20\xA9\x32\x6B\x32\x31","\x68\x69","\x20","\x50\x48\x4F\x54\x4F","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];alpha[_0xd60d[8]](from,zeeoneofc[_0xd60d[0]](prefix),text,{thumbnail:fs[_0xd60d[3]](`${_0xd60d[1]}${thumb}${_0xd60d[2]}`),caption:_0xd60d[4],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xd60d[5],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xd60d[2]}${hahh}${_0xd60d[6]}${pushname}${_0xd60d[2]}`,"\x62\x6F\x64\x79":`${_0xd60d[2]}${baper}${_0xd60d[2]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xd60d[7],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xd60d[2]}${img}${_0xd60d[2]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0xd60d[2],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xd60d[2]}${apiku}${_0xd60d[2]}`}},quoted:ftoko})
			break
case prefix+'tagmenu':   
			var _0xfd7b=["\x74\x61\x67","\x69\x6D\x61\x67\x65\x2F","","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x42\x6F\x74\x77\x65\x61\x20\xA9\x32\x6B\x32\x31","\x68\x69","\x20","\x50\x48\x4F\x54\x4F","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];alpha[_0xfd7b[8]](from,zeeoneofc[_0xfd7b[0]](prefix),text,{thumbnail:fs[_0xfd7b[3]](`${_0xfd7b[1]}${thumb}${_0xfd7b[2]}`),caption:_0xfd7b[4],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0xfd7b[5],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0xfd7b[2]}${hahh}${_0xfd7b[6]}${pushname}${_0xfd7b[2]}`,"\x62\x6F\x64\x79":`${_0xfd7b[2]}${baper}${_0xfd7b[2]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0xfd7b[7],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0xfd7b[2]}${img}${_0xfd7b[2]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0xfd7b[2],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0xfd7b[2]}${apiku}${_0xfd7b[2]}`}},quoted:ftoko})
			break
case prefix+'upmenu':   
           var _0x1656=["\x75\x70\x6D\x65\x6E\x75","\x69\x6D\x61\x67\x65\x2F","","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x42\x6F\x74\x77\x65\x61\x20\xA9\x32\x6B\x32\x31","\x68\x69","\x20","\x50\x48\x4F\x54\x4F","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];alpha[_0x1656[8]](from,zeeoneofc[_0x1656[0]](prefix),text,{thumbnail:fs[_0x1656[3]](`${_0x1656[1]}${thumb}${_0x1656[2]}`),caption:_0x1656[4],"\x63\x6F\x6E\x74\x65\x78\x74\x49\x6E\x66\x6F":{text:_0x1656[5],"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":1000000000,isForwarded:true,sendEphemeral:true,"\x65\x78\x74\x65\x72\x6E\x61\x6C\x41\x64\x52\x65\x70\x6C\x79":{"\x74\x69\x74\x6C\x65":`${_0x1656[2]}${hahh}${_0x1656[6]}${pushname}${_0x1656[2]}`,"\x62\x6F\x64\x79":`${_0x1656[2]}${baper}${_0x1656[2]}`,"\x70\x72\x65\x76\x69\x65\x77\x54\x79\x70\x65":_0x1656[7],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x55\x72\x6C":`${_0x1656[2]}${img}${_0x1656[2]}`,"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":_0x1656[2],"\x73\x6F\x75\x72\x63\x65\x55\x72\x6C":`${_0x1656[2]}${apiku}${_0x1656[2]}`}},quoted:ftoko})
           break
/*++++++++++++++++++++++++++
+++++++++MENU BARU++++++++
+++++++++++++++++++++++++++*/

/*case 'getdeskgc':
			   if (!isGroup) return reply('```ONLY GROUP```')
			   anu = from
			   metadete = await alpha.groupMetadata(anu)
			   alpha.sendMessage(from, metadete.desc, text, {quoted: fgclink})
			   break
case 'getppgc':
				if (!isGroup) return reply('```ONLY GROUP```')
				anu = from
				if (`${anu}@g.us`) {
				try {
					ppimg = await alpha.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				metadete = await alpha.groupMetadata(anu)
				ano = await alpha.getProfilePicture(anu)
				buffer = await getBuffer(ano)
				alpha.sendMessage(from, buffer, image, {quoted: fgclink})
				} else {
				}
			   break*/
case prefix+ 'getbio':
				if (!isGroup) return reply('```ONLY GROUP```')
				if (args.length < 1) return reply('```TAG ORANGNYA```')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const p = await alpha.getStatus(`${mentioned}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Error! mungkin diprivate")
                }
                break
/*case 'creategroup':
case 'creategrup':
			    if (!isGroup) return reply('```ONLY GROUP```')
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argza = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					alpha.groupCreate(argza[0], anu)
					reply(`Sukes membuat grup:\n${argza}`)
                }
				break*/
case prefix+'sc':
case prefix+ 'source':
case prefix+ 'sourcecode':
        source =`Source Script Bot : bit.ly/ytzeeoneofc`
alpha.sendMessage(from, source, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
					break
case prefix+'setname':
					if (!isGroup) return reply('```ONLY GROUP```')
					if (!isGroupAdmins) return reply('```ONLY ADMIN GROUP```')
					if (!isBotGroupAdmins) return reply('```Saya Bukan Admin```')
					alpha.groupUpdateSubject(from, `${body.slice(9)}`)
					alpha.sendMessage(from, '「  SUKSES  」Mengubah Nama Grup', text, { quoted: fgclink })
					break 
case prefix+'setdesc':
					if (!isGroup) return reply('```ONLY GROUP```')
					if (!isGroupAdmins) return reply('```ONLY ADMIN GROUP```')
					if (!isBotGroupAdmins) return reply('```Saya Bukan Admin```')
					alpha.groupUpdateDescription(from, `${body.slice(9)}`)
					alpha.sendMessage(from, '*「  SUKSES  」Mengubah Desk Grup', text, { quoted: fgclink })
					break   
case prefix+'spam':
				if (args.length < 1) return reply(`Penggunaan ${prefix}spam teks|jumlahspam`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					alpha.sendMessage(from, argzi[0], MessageType.text)
				}
				break 
case prefix+'readall':
					if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					var chats = await alpha.chats.all()
                    chats.map( async ({ jid }) => {
                          await alpha.chatRead(jid)
                    })
					rdl = `Berhasil membaca ${chats.length} Chat !`
					await alpha.sendMessage(from, rdl, MessageType.text, {quoted: fvideo})
					console.log(chats.length)
					break
case prefix+'listpc':
					  if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					  cpcp = await getpc(totalchat)
					  teks = `*L I S T  P E R S O N A L  C H A T*\nJumlah PC: ${cpcp.length}\n\n`
					  for(let i=0; i<cpcp.length; i++){
						conts = mek.key.fromMe ? mek.user.jid : alpha.contacts[cpcp[i]] || {notify: jid.replace(/@.+/, '')}
						pushnama = alpha.contacts[cpcp[i]] != undefined ? alpha.contacts[cpcp[i]].vname || alpha.contacts[cpcp[i]].notify : undefined
						teks += `• Nama : ${pushnama}\n• Tag : @${cpcp[i].split("@")[0]}\n• Wa.me : wa.me/${cpcp[i].split("@")[0]}\n\n----------------------------------\n\n`
					}
					mentions( teks, cpcp, true)
					break 
case prefix+'listgroup':
				  if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
				  ingfoo = await getGroup(totalchat)
				  teks1 = `*L I S T  G R O U P*\nJumlah Grup: ${ingfoo.length}\n\n`
				   for (let i = 0; i < ingfoo.length; i++){
				   teks1 += `• Nama grup : ${ingfoo[i].subject}\n• ID grup : ${ingfoo[i].id}\n• Dibuat : ${moment(`${ingfoo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n• Jumlah Peserta : ${ingfoo[i].participants.length}\n\n`
				   }
				   reply(teks1)
				   break 
case prefix+'bcsticker':
case prefix+'bcstik':
					if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, sticker, {quoted:ftroli})
						}
						fakestatus('Suksess broadcast')
					}
					break
case prefix+'bcvideo':
					if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					if (args.length < 1) return reply('.......')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4', duration: 359996400,quoted: ftoko,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})
						}
						fakestatus('Suksess broadcast')
					}
					break
	case prefix+'bcaudio':
					if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					if (args.length < 1) return reply('.......')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: ftoko,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})
						}
						fakestatus('Suksess broadcast')
					}
					break
case prefix+'bcgif':
					if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					if (args.length < 1) return reply('.......')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, video, {mimetype: Mimetype.gif,quoted : ftroli,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(7)}`})
						}
						fakestatus('Suksess broadcast')
					}
					break     
/*++++++++++++++++++++++++++
+++++++++MENU BARU++++++++
+++++++++++++++++++++++++++*/

        case 'antilink':
	                    if (!isGroup) return reply('```ONLY GROUP```')
						if (!isBotGroupAdmins) return reply('``` JADIIN GUA  ADMIN```')
						if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
						if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('anti link group is active')
						antilink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						fakegroup('Successfully activate anti link group in this group✅')
						fakegroup('Attention to all active anti link group members. If you send a group link, you will be kicked from the group')
						} else if (Number(args[0]) === 0) {
						if (isAntiLink) return reply('Anti link group mode has been disabled')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						fakegroup('Successfully deactivating anti link group in this group✅')
						} else {
						fakeitem('1 to activate, 0 to deactivate')
                        }
						break
        case prefix+'owner':  
        case prefix+'creator':  
                    members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
		            vcard2 = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${setting.ownername}\n`
		            + `ORG: SUBSCRIBE ZEEONE OFC;\n`
		            + `TEL;type=CELL;type=VOICE;waid=${setting.ownerNumber}:${setting.ownerNumberr}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${setting.ownername}`, vcard: vcard2}, contact, { quoted: fkontak, contextInfo: {"mentionedJid": members_ids}})
		           .then((res) => alpha.sendMessage(from, 'Nih kontak ownerku', text, {quoted: mek}))
                break
		            break
                
                case prefix+'sider':
                shape = '✓ '
infom = await alpha.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += shape+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `┗━ ${shape} Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
			
                
             case 'fakeloc':
               var kntl = body.slice(8)
			   var nama = kntl.split("|")[0];
			   var impostor = kntl.split("|")[1];
			   var bro = fs.readFileSync(`image/${tee}.jpg`)
               alpha.sendMessage(from, { name: `${nama}`,address: `${impostor}`,jpegThumbnail: bro }, MessageType.location)
                 
		    break
		    case prefix+ 'on':
		            if (!mek.key.fromMe) return 
		            offline = false
		            fakeitem(' ```ANDA TELAH ONLINE``` ')
		            break       
		    case prefix+ 'status':
		            fakeitem(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
		            break
		    case prefix+ 'off':
		            if (!mek.key.fromMe) return 
		            offline = true
		            waktu = Date.now()
		            anuu = args.join(' ') ? args.join(' ') : '-'
		            alasan = anuu
		            fakeitem(' ```ANDA TELAH OFFLINE``` ')
		            break   
		    case prefix+ 'get':
		            if(!q) return reply('linknya?')
		            fetch(`${args[0]}`).then(res => res.text())  
		            .then(bu =>{
		            fakestatus(bu)
		            })   
		            break
		    case prefix+ 'kontag':
		            pe = args.join('')
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
		            break
		    case prefix+ 'sticktag':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else {
		            fakegroup(`*Reply sticker yang sudah dikirim*`)
		            }
		            break
		    case prefix+ 'totag':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'audio/mp4',
		            	ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          fakestatus(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        break
		    case prefix+ 'fitnah':
		            if (args.length < 1) return fakegroup(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
		            var gh = args.join('')
		            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		            var replace = gh.split("|")[0];
		            var target = gh.split("|")[1];
		            var bot = gh.split("|")[2];
		            alpha.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
		            break
		    case prefix+ 'settarget':
		            if(!q) return fakegroup(`${prefix}settarget 628xxxxx`)
		            targetpc = args[0]
		            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
		            break
		    case prefix+ 'fitnahpc':
		            if(!q) return fakegroup(`${prefix}fitnahpc teks target|teks lu`)
		            jids = `${targetpc}@s.whatsapp.net` // nomer target
		            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
		            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
		            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
		            const responye = await alpha.sendMessage(jids, `${split[1]}`, MessageType.text, options)
		            await alpha.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
		            break
		    case prefix+ 'tomp3':
		            if (!isQuotedVideo) return fakegroup('```Reply videonya!```')
		            fakegroup(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case prefix+ 'fast':
		            if (!isQuotedVideo) return fakegroup('Reply videonya!')
		            fakegroup(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case prefix+ 'slow':
		            if (!isQuotedVideo) return fakegroup('Reply videonya!')
		            fakegroup(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case prefix+ 'reverse':
		            if (!isQuotedVideo) return fakegroup('```Reply videonya!```')
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case prefix+ 'anime':
		            fakegroup('```BENTAR```')
		            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
		            .then(res => res.text())
		            .then(body => {
		            let tod = body.split("\n");
		            let pjr = tod[Math.floor(Math.random() * tod.length)];
		            imageToBase64(pjr)
		            .then((response) => {
		            media =  Buffer.from(response, 'base64');
		            alpha.sendMessage(from,media,image,{quoted:mek,caption:'Dasar wibu. Nih!!!\nJgn lupa sub YT : ZEEONE OFC'})
		            }
		            )
		            .catch((error) => {
		            console.log(error); 
		            }
		            )
		            });
		            break
		    case prefix+ 'kontak':
		            pe = args.join(' ') 
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
		            break    
		    case prefix+ 'take':
		    case prefix+ 'colong':
		    		if (!isQuotedSticker) return reply('Stiker aja om')
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            anu = args.join(' ').split('|')
		            satu = anu[0] !== '' ? anu[0] : `YT GUA`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `ZEEONE OFC`
		            require('./lib/fetcher.js').createExif(satu, dua)
					require('./lib/fetcher.js').modStick(media, alpha, mek, from)
					break
			case prefix+ 'stikerwm':
			case prefix+ 'stickerwm':
		    case prefix+ 'swm':
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
		            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		             media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out) 
		            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out)       
		            } else {
		            fakestatus(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
		            }
		            break
		    case prefix+ 'upswteks':
		            if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		            if (!q) return fakestatus('Isi teksnya!')
		            alpha.sendMessage('status@broadcast', `${q}`, extendedText)
		            fakeitem(`Sukses Up story wea teks ${q}`)
		            break
		    case prefix+ 'upswimage':
		            if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		            if (isQuotedImage) {
		            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await alpha.downloadMediaMessage(swsw)
		            alpha.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
		            bur = `Sukses Upload Story Image dengan Caption: ${q}`
		            alpha.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            fakegroup('```Reply gambarnya!```')
		            }
		            break
		    case prefix+ 'upswvideo':
		            if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		            if (isQuotedVideo) {
		            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await alpha.downloadMediaMessage(swsw)
		            alpha.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
		            bur = `Sukses Upload Story Video dengan Caption: ${q}`
		            alpha.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            fakegroup('```Reply videonya!```')
		            }
		            break
		    case prefix+ 'fdeface':
		            ge = args.join('')           
		            var pe = ge.split("|")[0];
		            var pen = ge.split("|")[1];
		            var pn = ge.split("|")[2];
		            var be = ge.split("|")[3];
		            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
		            if (args.length < 1) return reply (fde)
		            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const tipes = await alpha.downloadAndSaveMediaMessage(dipes)        
		            const bufer = fs.readFileSync(tipes)
		            const desc = `${pn}`
		            const title = `${pen}`
		            const url = `${pe}`
		            const buu = `https://${be}`
		    		var anu = {
		        	detectLinks: false
		    		}
		    		var mat = await alpha.generateLinkPreview(url)
		    		mat.title = title;
		    		mat.description = desc;
		    		mat.jpegThumbnail = bufer;
		   			mat.canonicalUrl = buu; 
		    		alpha.sendMessage(from, mat, MessageType.extendedText, anu)
		            break
		    case prefix+ 'public':
		              if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		          	if (banChats === false) return
		          	banChats = false
		          	fakeitem(`「 *PUBLIC-MODE* 」`)
		          	break
			case prefix+ 'self':
			          if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		          	if (banChats === true) return
		          	uptime = process.uptime()
		         	 banChats = true
		          	fakeitem(`「 *SELF-MODE* 」`)
		          	break
		 	case prefix+ 'hidetag':
		     case prefix+ '_`':
		     case prefix+ '.':
					if (!isGroup) return fakegroup('```ONLY GRUP LORD```')
					var value = args.join(' ')
					var group = await alpha.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map(async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var optionshidetag = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					alpha.sendMessage(from, optionshidetag, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `${setting.fake}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`image/${thumb}`)} }  } })
					break
			case prefix+ 'play':
					if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
		            var srch = args.join('')
		    		aramas = await yts(srch);
		    		aramat = aramas.all 
		   			var mulaikah = aramat[0].url							
		                  try {
		                    yta(mulaikah)
		                    .then((res) => {
		                        const { dl_link, thumb, title, filesizeF, filesize } = res
		                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		                        .then(async (a) => {
		                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
		                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
		                        sendMediaURL(from, thumb, captions)
		                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
		                        })                
		                        })
		                        } catch (err) {
		                        reply(mess.error.api)
		                        }
		                   break  
		        case prefix+ 'video':
		            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul video yang akan dicari_`)
		            var srch = args.join('')
		            aramas = await yts(srch);
		            aramat = aramas.all 
		            var mulaikah = aramat[0].url                            
		                  try {
		                    ytv(mulaikah)
		                    .then((res) => {
		                        const { dl_link, thumb, title, filesizeF, filesize } = res
		                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		                        .then(async (a) => {
		                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
		                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
		                        sendMediaURL(from, thumb, captions)
		                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
		                        })                
		                        })
		                        } catch (err) {
		                        reply(mess.error.api)
		                        }
		                   break      
		    case prefix+ 'sticker': 
		    case prefix+ 'stiker':
		    case prefix+ 'sg':
		    case prefix+ 's':
		            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            const media = await alpha.downloadAndSaveMediaMessage(encmedia)
		                ran = '666.webp'
		                await ffmpeg(`./${media}`)
		                .input(media)
		                .on('start', function (cmd) {
		                     console.log(`Started : ${cmd}`)
		                })
		                .on('error', function (err) {
		                 console.log(`Error : ${err}`)
		                fs.unlinkSync(media)
		                reply('error')
		                })
		                .on('end', function () {
		                console.log('Finish')
		                alpha.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
		                 fs.unlinkSync(media)
		                fs.unlinkSync(ran)
		                })
		                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		                .toFormat('webp')
		                .save(ran)
		                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		                const media = await alpha.downloadAndSaveMediaMessage(encmedia)
		            ran = '999.webp'
		            reply(mess.wait)
		            await ffmpeg(`./${media}`)
		            .inputFormat(media.split('.')[1])
		            .on('start', function (cmd) {
		            console.log(`Started : ${cmd}`)
		            })
		            .on('error', function (err) {
		            console.log(`Error : ${err}`)
		            fs.unlinkSync(media)
		            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
		            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
		            })
		            .on('end', function () {
		            console.log('Finish')
		            alpha.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
		            fs.unlinkSync(media)
		            fs.unlinkSync(ran)
		                })
		                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		                .toFormat('webp')
		                .save(ran)
		            } else {
		                fakegroup(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
		            }
		            break               
		    case prefix+ 'toimg':
					if (!isQuotedSticker) return fakeitem('Reply atau tag stiker nya lord!')
					fakegroup('```PROSES...```')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await alpha.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Yah gagal, coba ulangi ^_^')
					buffer = fs.readFileSync(ran)
					fakethumb(buffer,'```Nih kak, jgn lupa sub YT : ZEEONE OFC```')
					fs.unlinkSync(ran)
					})
					break
			case prefix+ 'ytsearch':
					if (args.length < 1) return reply('Tolong masukan query!')
					var srch = args.join('');
					try {
		        	var aramas = await yts(srch);
		   			} catch {
		        	return await alpha.sendMessage(from, 'Error!', MessageType.text, dload)
		    		}
		    		aramat = aramas.all 
		    		var tbuff = await getBuffer(aramat[0].image)
		    		var ytresult = '';
		    		ytresult += '「 *YOUTUBE SEARCH* 」'
		    		ytresult += '\n________________________\n\n'
		   			aramas.all.map((video) => {
		        	ytresult += '❏ Title: ' + video.title + '\n'
		            ytresult += '❏ Link: ' + video.url + '\n'
		            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
		            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
		    		});
		    		ytresult += '◩ *SELF-BOT*'
		    		await fakethumb(tbuff,ytresult)
					break
			case prefix+ 'setreply':
			case prefix+ 'setfake':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					if (!q) return fakegroup(mess.wrongFormat)
					fake = q
					fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
					break
			case prefix+ 'setprefix':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					prefix = q
					fakeitem(`Succes Mengganti Prefix : ${q}`)
					break
			case prefix+ 'setfakeimg':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		            boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await alpha.downloadMediaMessage(boij)
					fs.readFileSync(`./image/${thumb}`, delb)
					fakestatus('Sukses')
		        	} else {
		            fakeitem(`Kirim gambar dengan caption ${prefix}setfakeimg`)
		          	}
					break	
			case prefix+ 'setthumb':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
			        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await alpha.downloadMediaMessage(boij)
					fs.readFileSync(`./image/${thumb}`, delb)
					fakestatus('Sukses')
		        	} else {
		            fakegroup(`Kirim gambar dengan caption ${prefix}sethumb`)
		          	}
					break	
			case prefix+ 'ytmp4':
					if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
					let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
					if (!isLinks2) return reply(mess.error.Iv)
						try {
						reply(mess.wait)
						ytv(args[0])
						.then((res) => {
						const { dl_link, thumb, title, filesizeF, filesize } = res
						axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
						.then((a) => {
						if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
						sendMediaURL(from, thumb, captionsYtmp4)
						sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
						})		
						})
						} catch (err) {
					    reply(mess.error.api)
						}
						break
			case prefix+ 'emoji':
					if (!q) return fakegroup('emojinya?')
					qes = args.join(' ')
					emoji.get(`${qes}`).then(emoji => {
					teks = `${emoji.images[4].url}`
		    		sendStickerFromUrl(from,`${teks}`)	
		    		console.log(teks)
		   			})
		    		break
			case prefix+ 'ytmp3':
					if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
					let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
					if (!isLinks) return reply(mess.error.Iv)
						try {
						reply(mess.wait)
						yta(args[0])
						.then((res) => {
						const { dl_link, thumb, title, filesizeF, filesize } = res
						axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
						.then((a) => {
					    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
						sendMediaURL(from, thumb, captions)
						sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
						})
						})
						} catch (err) {
						reply(mess.error.api)
						}
						break
		    case prefix+ 'image':
		            if (args.length < 1) return fakegroup('Masukan teks!')
		            const gimg = args.join('');
		            reply(mess.wait)
		            gis(gimg, async (error, result) => {
		            n = result
		            images = n[Math.floor(Math.random() * n.length)].url
		            alpha.sendMessage(from,{url:images},image,{quoted:mek})
		            });
		            break
		 	case prefix+ 'tiktok':
		 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
		 		if (!q) return fakegroup('Linknya?')
		 		reply(mess.wait)
				tik.ssstik(`${args[0]}`)
		    		.then(result => {
		    		console.log(result)
		    		const { videonowm, videonowm2, text } = result
		    		axios.get(`https://tinyurl.com/api-create.php?url=${videonowm2}`)
		    		.then(async (a) => {
		    		me = `*Title* : ${text}\n*Link* : ${a.data}`
				alpha.sendMessage(from,{url:`${videonowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
				})
				})
		     		.catch(e => console.log(e))
		     		break
		    case prefix+ 'tiktokaudio':
		 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
		 		if (!q) return fakegroup('Linknya?')
		 		reply(mess.wait)
		 		tik.ssstik(`${args[0]}`)
		    		.then(result => {
		    		const { music,text } = result
				alpha.sendMessage(from,{url:`${music}`},audio,{mimetype:'audio/mp4',filename : `${text}`,quoted:mek})
				})
		     		.catch(e => console.log(e))
		     		break
		    case prefix+ 'brainly':
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					alpha.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            })              
					break
		    case prefix+ 'ig':
		        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
		        if (!q) return fakegroup('Linknya?')
		        reply(mess.wait)
			igdl(args[0])
			.then((result) => {
		    for (Y of result.url_list )
		    sendMediaURL(from,Y,'Nih')
			})
			break
		    case prefix+ 'igstalk':
		            if (!q) return fakegroup('Usernamenya?')
		            ig.fetchUser(`${args.join(' ')}`).then(Y => {
		            console.log(`${args.join(' ')}`)
		            ten = `${Y.profile_pic_url_hd}`
		            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
		            sendMediaURL(from,ten,teks) 
		            })      
		            break    
		    case prefix+ 'fb':
		            if (!q) return reply('Linknya?')
		            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
		            te = args.join(' ')
		            fakestatus(mess.wait)
		            Fb.getInfo(`${te}`)
		            .then(G => {
		            ten = `${G.download.sd}`
		            tek = `${G.title}`
		            sendMediaURL(from,ten,`*Title* : ${tek}\n\n*Link* : ${ten}`)
		            })
		            break    
			case prefix+ 'term':
			        if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					if (!q) return fakegroup(mess.wrongFormat)
					exec(q, (err, stdout) => {
					if (err) return fakegroup(`SELF-BOT:~ ${err}`)
					if (stdout) {
					fakegroup(stdout)
					}
					})
				    break 
		    case prefix+ 'join':
		            if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
		            hen = args[0]
		            if (!q) return fakestatus('Masukan link group')
		            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
		            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
		            var response = await alpha.acceptInvite(codeInvite)
		            fakestatus('```SUKSES JOIN GRUP```')
		            } catch {
		            fakegroup('```LINK ERROR!```')
		            }
		            break
		    case prefix+'twitter':
		            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
		            if (!q) return fakegroup('Linknya?')
		            ten = args[0]
		            var res = await twitterGetUrl(`${ten}`)
		            .then(g => {
		            ren = `${g.download[2].url}`
		            sendMediaURL(from,ren,'DONE')
		            })
		            break
		    case prefix+ 'runtime':
		    case prefix+ 'test':
		            run = process.uptime() 
		            teks = `${kyun(run)}`
		            fakegroup(teks)
		            break  
			case prefix+ 'speed':
			case prefix+ 'ping':
					const timestamp = speed();
					const latensi = speed() - timestamp
					exec(`neofetch --stdout`, (error, stdout, stderr) => {
					const child = stdout.toString('utf-8')
					const teks = child.replace(/Memory:/, "Ram:")
					const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
					fakegroup(pingnya)
					})
					break
               
		    case prefix+ 'totag':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'audio/mp4',
		                ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          fakegroup(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        break
		    case prefix+ 'tomp4':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            owgi = await alpha.downloadAndSaveMediaMessage(ger)
		            webp2mp4File(owgi).then(res=>{
		            sendMediaURL(from,res.result,'Done')
		            })
		            }else {
		            fakegroup('reply stiker')
		            }
		            fs.unlinkSync(owgi)
		            break
		    case prefix+ 'tourl':
		            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
		            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            owgi = await alpha.downloadMediaMessage(boij)
		            res = await upload(owgi)
		            reply(res)
		            } else {
		            fakegroup('kirim/reply gambar/video')
		            }
		            break
/*
]=====> NSFW MENU<=====[
*/

			case prefix+ 'awoo':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'blowjob':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'hentai': 
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'megumin':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'neko':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case prefix+ 'trapnime':
					fakeitem('```BENTAR```')
					anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumb}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break

/*
]=====> GROUP MENU<=====[
*/
  
			case 'add':
					if (!isGroup) return fakestatus('```KHUSUS GRUP BRO```')
					if (!isBotGroupAdmins) return fakestatus('```BOT HARUS JADI ADMIN```')
					if (args.length < 1) return fakestatus('Yang mau di add bapakau kah? -_-')
					if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
					try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					alpha.groupAdd(from, [num])
					} catch (e) {
					console.log('Error :', e)
					fakestatus('Anjim yang mau di add di private, dahlah :)')
					}
					break
			case 'admin':
					if (!isGroup) return fakestatus('```KHUSUS GRUP BRO```')
					teks = `*DAFTAR ATASAN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
					no += 1
					teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
			
			case 'tagall':
			        if (!isGroup) return fakestatus('```KHUSUS GRUP BRO```')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `@${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break

			case 'clearall':
			        if (!mek.key.fromMe) return fakeitem('```OWNER ONLY```')
			        anu = await alpha.chats.all()
					alpha.setMaxListeners(25)
					for (let _ of anu) {
					alpha.deleteChat(_.jid)
					}
					fakegroup('```SUKSES```')
					break
            case 'leave':
                    if (!mek.key.fromMe) return fakeitem('```OWNER ONLY```')
					setTimeout( () => {
					alpha.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					alpha.updatePresence(from, Presence.composing) 
					fakestatus('```AKU PAMIT```')
					}, 0)
					break       
           case prefix+'getpp':
				if (mek.message.extendedTextMessage != undefined){
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await alpha.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					seer = `Nama : *${pushname}`
					thumb = await getBuffer(pic)
					anuu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${numbernye}@s.whatsapp.net`, 'remoteJid': '6289523258649-1604595598@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 Bot by zeeone 」`, 'jpegThumbnail': fs.readFileSync('image/103.jpg')}}}}
                    alpha.sendMessage(from, thumb,image, anuu)
				}
				break
	case 'inspect':
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
		            if (!q) return reply('```Masukkan link groupnya```')
		            cos = args[0]
		            var net = cos.split('https://chat.whatsapp.com/')[1]
		            if (!net) return reply('pastikan itu link https://whatsapp.com/')
		            jids = []
		            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await alpha.query({ 
		            json: ["query", "invite",net],
		            expect200:true })
		            let par = `*Id* : ${id}
		${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
		*Nama Gc* : ${subject}
		*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
		*Jumlah Member* : ${size}
		${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
		*Id desc* : ${descId}
		${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
		           for ( let y of participants) {
		             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
		             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
		             }
		             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             alpha.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
		             } catch {
		             reply('Link error')
		             }
		             break
			case prefix+ 'return':
			case prefix+ 'cek':
			case prefix+ 'me':
					return alpha.sendMessage(from, JSON.stringify(eval(args.join(' '))), text, { quoted: mek})
					break
			case 'bc':
			case 'broadcast':
			case 'bcimage':
					if (!mek.key.fromMe) return fakegroup('```OWNER ONLY')
					if (args.length < 1) return reply('```TEXT?```')
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek					
					bc = await alpha.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					alpha.sendMessage(_.jid, bc, image, {quoted:fkontak ,caption: `「  *BROADCAST * 」\n\n${body.slice(4)}`})
					}
					fakegroup('```SUKSESS BROADCAST```')
					} else {
					for (let _ of anu) {
						alpha.sendMessage(_.jid, `*BROADCAST* \n\n${anu}`, text, { contextInfo: { mentionedJid: [sender] }})
					 //sendMess(_.jid, `*「 Alphabot Broadcast  」*\n\n${body.slice(4)}`)
					}
					fakegroup('```SUKSESS BROADCAST```')
					}
					break
			case prefix+'buggc':
			if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
					await alpha.toggleDisappearingMessages(from, 0)
					break
			case prefix+'infogc':
					alpha.updatePresence(from, Presence.composing)
					if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await alpha.getProfilePicture(from)
					} catch {
						ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
					}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nama grup :* ${groupName}\n*Deskripsi :* ${groupDesc}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Member :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					alpha.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					break
			case prefix+'ghstalk': 
            case prefix+'githubstalk': 
            case prefix+'ghuser':
               {
                if (args.length < 1) return reply(`Kirim perintah *${prefix}ghstalk* _username_`)
                reply(mess.wait)
                axios.get(`https://api.github.com/users/${args[1]}`)
                .then((res) => res.data)
                .then((res) =>{
                    let { login, type, name, followers, following, created_at, updated_at, public_gists, public_repos, twitter_username, bio, hireable, email, location, blog, company, avatar_url, html_url } = res
                    let txt = `*GITHUB STALKING*

*Data Berhasil Didapatkan!*
▷ Username : ${login}
▷ Name : ${name}
▷ Followers : ${followers}
▷ Following : ${following}
▷ Created at :  ${moment(created_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}
▷ Updated at : ${moment(updated_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}
▷ Public Gists : ${public_gists}
▷ Public Repos : ${public_repos}
▷ Twitter : ${twitter_username}
▷ Email : ${email}
▷ Location : ${location}
▷ Blog : ${blog}
▷ Link : ${html_url}
▷ Bio :\n${bio}`
                    sendFileFromUrl(from, avatar_url, txt, mek)
                    limitAdd(sender, limit)
                })
                .catch((err) => {
                    sendMess(ownerNumber, 'Error : ' + err)
                    console.log(color('[EXEC]', 'red'), err)
					reply(mess.error.api)
                })
            }
                break
/*
]=====> STORAGE MENU <=====[
*/
	        case prefix+'addstik':
					if (!isQuotedSticker) return fakestatus('Reply stiker')
					nm = body.slice(9)
					if (!nm) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(boij)
					setiker.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
					fakegroup(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
					break
	      case prefix+'liststik':
	     case prefix+'liststiker':
	case prefix+'liststc':
					teks = '*Sticker list :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
					
			case prefix+'addimg':
					if (!isQuotedImage) return fakegroup('```Reply imagenya```')
					clara = body.slice(8)
					if (!clara) return fakegroup('```Nama imagenya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./media/foto/${svst}.jpg`, delb)
					fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
					fakegroup(`Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`)
					break
			case prefix+'listimg':
					teks = '*Image list :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama foto/image_`
					fakegroup(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
			case prefix+'addvid':
					if (!isQuotedVideo) return fakegroup('```Reply vidionya```')
					svst = body.slice(8)
					if (!svst) return fakegroup('```Nama vidionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./media/video/${svst}.mp4`, delb)
					fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
					fakegroup(`Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`)
					break
	        case prefix+'listvid':
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}* \n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama video_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
			
			case prefix+'addvn':
					if (!isQuotedAudio) return fakegroup('```Reply vnnya```')
					svst = body.slice(7)
					if (!svst) return reply('```Nama audionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./media/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
					fakegroup( `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
					break
           
			case prefix+'listvn':
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama audio_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break            
				default:
				
				if (budy.includes("eror",'error','Eror','Error')){
					alpha.updatePresence(from, Presence.composing)
					const daieeeee = fs.readFileSync('./stik/10_1.webp');
					alpha.sendMessage(from, daieeeee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Kenapa bisa error???`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("gay",'Gay','ngewe','Ngewe')){
					alpha.updatePresence(from, Presence.composing)
					const daieeee = fs.readFileSync('./stik/13.webp');
					alpha.sendMessage(from, daieeee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Yg diatas gua guy`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("Sc")){
					alpha.updatePresence(from, Presence.composing)
					const daieee = fs.readFileSync('./stik/1_1.webp');
					alpha.sendMessage(from, daieee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Dasar pelit`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("sc")){
					alpha.updatePresence(from, Presence.composing)
					const daeee = fs.readFileSync('./stik/1_1.webp');
					alpha.sendMessage(from, daeee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Dasar pelit`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("Ajg")){
					alpha.updatePresence(from, Presence.composing)
					const daee = fs.readFileSync('./stik/11.webp');
					alpha.sendMessage(from, daee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Bapak² Toxic Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("ajg")){
					alpha.updatePresence(from, Presence.composing)
					const deie = fs.readFileSync('./stik/11.webp');
					alpha.sendMessage(from, deie, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Bapak² Toxic Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("anjg")){
					alpha.updatePresence(from, Presence.composing)
					const deee = fs.readFileSync('./stik/11.webp');
					alpha.sendMessage(from, deee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Bapak² Toxic Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("asu")){
					alpha.updatePresence(from, Presence.composing)
					const dee = fs.readFileSync('./stik/11.webp');
					alpha.sendMessage(from, dee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Bapak² Toxic Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes(`${setting.ownername}`)){
					alpha.updatePresence(from, Presence.composing)
					const dd = fs.readFileSync('./stik/15.webp');
					alpha.sendMessage(from, dd, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Apasih jamet ngetag gua`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("epep","ff")){
					alpha.updatePresence(from, Presence.composing)
					const ddd = fs.readFileSync('./stik/12.webp');
					alpha.sendMessage(from, ddd, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Dahlah:v`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("anjing")){
					alpha.updatePresence(from, Presence.composing)
					const de = fs.readFileSync('./stik/3.webp');
					alpha.sendMessage(from, de, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Mastah Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("Mastah")){
					alpha.updatePresence(from, Presence.composing)
					const d = fs.readFileSync('./stik/14.webp');
					alpha.sendMessage(from, d, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Mastah Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
				if (budy.includes("mastah")){
					alpha.updatePresence(from, Presence.composing)
					const d = fs.readFileSync('./stik/14.webp');
					alpha.sendMessage(from, d, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Ada Mastah Cuyy;-)`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
if (budy.startsWith('x')){
try {
if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('>')){
try {
if (!mek.key.fromMe) return fakestatus('```OWNER ONLY```')
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'aqua'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
