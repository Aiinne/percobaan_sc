const { 
	MessageType,
	Mimetype,
	mentionedJid
} = require('@adiwajshing/baileys')
const fs = require('fs')
const { ind } = require('../language')
const { getBuffer } = require('../lib/functions')
const moment = require('moment-timezone')
const date = new Date().toLocaleDateString()
const waktunow = moment.tz('Asia/Jakarta').format("HH:mm:ss")
numbernye = '0'
fakeimage = fs.readFileSync(`./lib/aine.jpeg`)

module.exports = welcome = async ( client , mem , image, waktunow, numbernye, fakeimage ) => {
	const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
	const isWelcome = welkom.includes(mem.jid)
	if (!isWelcome) return
		try {
			const mdata = await client.groupMetadata(mem.jid)
			if (mem.action == 'add') {
				num = mem.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${mem.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				const buffer = await getBuffer(ppimg)
				client.sendMessage(mdata.id , buffer , MessageType.image, { caption : ind.welcome(mdata , num) , contextInfo: {"mentionedJid": [num]}})
			} else if (mem.action == 'remove') {
				mim = mem.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${mim.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				let buffer = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buffer, MessageType.image, {caption: ind.left(mdata , mim) , contextInfo: {"mentionedJid": [mim]}})
			} else if (mem.action == 'promote') {
			const mdata = await client.groupMetadata(mem.jid)
			cum = mem.participants[0]
			try {
					ppimg = await client.getProfilePicture(`${cum.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buffer = await getBuffer(ppimg)
			client.sendMessage(mdata.id, buffer, MessageType.image, {caption : ind.promote(mdata , cum), contextInfo: {mentionedJid: [cum]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Kntl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fakeimage, "mimetype": "application/octet-stream", "title": `PROMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		} else if (mem.action == 'demote') {
			cam = mem.participants[0]
			const mdata = await client.groupMetadata(mem.jid)
			try {
					ppimg = await client.getProfilePicture(`${cam.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buffer = await getBuffer(ppimg)
			client.sendMessage(mdata.id, buffer, MessageType.image, {caption : ind.demote(mdata , cam), contextInfo: {mentionedJid: [cam]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Ktl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fakeimage, "mimetype": "application/octet-stream", "title": `DEMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}
