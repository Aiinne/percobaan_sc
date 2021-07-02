//============================〔CASE BY MITSUHA〕============================\\
//============================〔TQTO JANGAN DIHAPUS〕============================\\
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { ind } = require('./bahasa')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const crypto = require('crypto')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const lolis = require('lolis.life')
const loli = new lolis()
const _leveling = JSON.parse(fs.readFileSync('./src/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./src/level.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const setiker = JSON.parse(fs.readFileSync('./src/stick.json'))
const _registered = JSON.parse(fs.readFileSync('./src/pengguna.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antitoxic = JSON.parse(fs.readFileSync('./src/antitoxic.json'))
const antiig = JSON.parse(fs.readFileSync('./src/antiig.json'))
const antiyt = JSON.parse(fs.readFileSync('./src/antiyt.json'))
const antibocil = JSON.parse(fs.readFileSync('./src/antibocil.json'))
const antiwibu = JSON.parse(fs.readFileSync('./src/antiwibu.json'))
const antixnxx = JSON.parse(fs.readFileSync('./src/antixnxx.json'))
const premium = JSON.parse(fs.readFileSync('./src/premium.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json'))

const vcard = 'BEGIN:VCARD\n' 
              + 'VERSION:3.0\n' 
              + 'FN: ACAツ\n' 
              + 'ORG: Owner MITSUHA BOTZ;\n' 
              + 'TEL;type=CELL;type=VOICE;waid=6285731261728:+62 85731261728\n'  
              + 'END:VCARD'
             
//============================〔SETTING〕============================\\
prefix = setting.prefix
owner = setting.ownerNumber
namaowner = setting.nama
namabot = setting.bot
nobot = setting.nobot
tz = setting.tz
cr = setting.cr
thumb = fs.readFileSync(`./lib/odc.jpeg`)
cap = `kenapa kenapa? karena elu wibu`
fake1 = setting.fake1
fake2 = setting.fake2
namo = ``
ator = ``
fakeimage = fs.readFileSync(`./lib/odc.jpeg`)
numbernye = '0'
on = false 
welcome = '*Jangan Temenin Member Yang Pake Profil Mikey!*'
leave = '*Lihatlah Kawan Si Asep Keluar*'
blocked = []
hit_today = []
//============================〔FUNCTION〕============================\\
function kyun(seconds){ 
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)}H ${pad(minutes)}M ${pad(seconds)}S`
}
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }
const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./src/pengguna.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./src/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./src/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./src/level.json', JSON.stringify(_level))
        }

                
async function starts() {
	const client = new WAConnection()
	//WWEB 
client.version = [2, 2119, 6]  //Fix Bug
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','blue'), color('!','red'), color(']','blue'), color(' Scan the qr code above'))
	})

	fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
	client.on('connecting', () => {
		start('2', 'Connecting...')
	})
	client.on('open', () => {
		success('2', 'Connected')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
   
const acaBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
            const bulan = acaBulan[moment().format('MM') - 1]
                    
const date = new Date().toLocaleDateString()
const jam = moment.tz('Asia/Jakarta').format('HH:mm')
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
   
	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `\`\`\`Selamat Datang Di Group @${num.split('@')[0]}\`\`\`
\`\`\`------------------------------------------------\`\`\`
\`\`\`Jangan Lupa Intro Cuk\`\`\`

\`\`\`nama :\`\`\`
\`\`\`umur :\`\`\`
\`\`\`kelas: \`\`\`
\`\`\`asal :\`\`\`

\`\`\`------------------------------------------------\`\`\`
\`\`\`Semoga Betah Di Grup\`\`\``

				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Semoga Mak Elu Sehat @${num.split('@')[0]} Hehe`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
		
			} else if (anu.action == 'promote') {
			const mdata = await client.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `*PROMOTE TERDETEKSI*
			
*Nomor* = ${num.replace('@s.whatsapp.net', '')}

*User* = @${num.split('@')[0]}

*Waktu* = ${jam}

*Group* = ${mdata.subject}
`
			client.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Kntl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fakeimage, "mimetype": "application/octet-stream", "title": `PROMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		} else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await client.groupMetadata(anu.jid)
			try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `*DEMOTE TERDETEKSI*
			
*Nomor* = ${num.replace('@s.whatsapp.net', '')}

*User* = @${num.split('@')[0]}

*Waktu* = ${jam}

*Group* = ${mdata.subject}
`
			client.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Ktl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fakeimage, "mimetype": "application/octet-stream", "title": `DEMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}) 
	client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})


	client.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
            if (mek.key.fromMe) return 
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const tescuk = ["0@s.whatsapp.net"]
			const type = Object.keys(mek.message)[0]
			const apiKey = setting.apiKey // contact me on whatsapp wa.me/6285892766102
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
    		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const q = args.join(' ')
			const isCmd = body.startsWith(prefix)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			

			mess = {
				
				wait: '*「 WAIT 」*  SEDANG DIPROSES',
				success: '*「 SUKSES 」 KAYAK MIE SUKSES *',
				error: {
					stick: '*「 GAGAL 」 ULANGI LAGI*',
					Iv: '*「 GA VALID 」 LINK GA VALID*'
				},
				only: {
					group: '*「 GRUP 」 KHUSUS GRUP*',
					ownerG: '*「 OWNER 」 KHUSUS OWNER GRUP*',
					ownerB: '*「 OWNER 」 KHUSUS OWNER BOT*',
					admin: '*「 ADMIN 」 KHUSUS ADMIN GRUP*',
					Badmin: '*「 BADMIN 」 BOT HARUS JADI ADMIN*'
				}
			}
            hit_today.push(command)
			const botNumber = client.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const totalchat = await client.chats.all()
			const isPrem = premium.includes(sender)
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : '' 
			const isAntiLink = isGroup ? antilink.includes(from) : false
            const isAntiToxic = isGroup ? antitoxic.includes(from) : false
			const isAntiXnxx = isGroup ? antixnxx.includes(from) : false
			const isAntiBocil = isGroup ? antibocil.includes(from) : false
			const isAntiYt = isGroup ? antiyt.includes(from) : false
			const isAntiWibu = isGroup ? antiwibu.includes(from) : false
			const isAntiIg = isGroup ? antiig.includes(from) : false
			const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isRegistered = checkRegisteredUser(sender)
            pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
		    
           const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: freply3, contextInfo: {"mentionedJid": memberr}})
			}
			
			const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
        
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
            let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			   
			function addMetadata(packname, author) {	
				if (!packname) packname = ' '; if (!author) author = ' ';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
		
//============================〔FUNCTION FITUR〕============================\\
          
       const levelRole = getLevelingLevel(sender)
        var role ='Newbie'
        if (levelRole <= 2) {
            role ='Newbie'
        } else if (levelRole <= 4) {
            role ='Beginner Grade 1'
        } else if (levelRole <= 6) {
            role ='Beginner Grade 2'
        } else if (levelRole <= 8) {
            role ='Beginner Grade 3'
        } else if (levelRole <= 10) {
            role ='Beginner Grade 4'
        } else if (levelRole <= 12) {
            role ='Private Grade 1'
        } else if (levelRole <= 14) {
            role ='Private Grade 2'
        } else if (levelRole <= 16) {
            role ='Private Grade 3'
        } else if (levelRole <= 18) {
            role ='Private Grade 4'
        } else if (levelRole <= 20) {
            role ='Private Grade 5'
        } else if (levelRole <= 22) {
            role ='Corporal Grade 1'
        } else if (levelRole <= 24) {
            role ='Corporal Grade 2'
        } else if (levelRole <= 26) {
            role ='Corporal Grade 3'
        } else if (levelRole <= 28) {
            role ='Corporal Grade 4'
        } else if (levelRole <= 30) {
            role ='Corporal Grade 5'
        } else if (levelRole <= 32) {
            role ='Sergeant Grade 1'
        } else if (levelRole <= 34) {
            role ='Sergeant Grade 2'
        } else if (levelRole <= 36) {
            role ='Sergeant Grade 3'
        } else if (levelRole <= 38) {
            role ='Sergeant Grade 4'
        } else if (levelRole <= 40) {
            role ='Sergeant Grade 5'
        } else if (levelRole <= 42) {
            role ='Staff Grade 1'
        } else if (levelRole <= 44) {
            role ='Staff Grade 2'
        } else if (levelRole <= 46) {
            role ='Staff Grade 3'
        } else if (levelRole <= 48) {
            role ='Staff Grade 4'
        } else if (levelRole <= 50) {
            role ='Staff Grade 5'
        } else if (levelRole <= 52) {
            role ='Sergeant Grade 1'
        } else if (levelRole <= 54) {
            role ='Sergeant Grade 2'
        } else if (levelRole <= 56) {
            role ='Sergeant Grade 3'
        } else if (levelRole <= 58) {
            role ='Sergeant Grade 4'
        } else if (levelRole <= 60) {
            role ='Sergeant Grade 5'
        } else if (levelRole <= 62) {
            role ='2nd Lt. Grade 1 '
        } else if (levelRole <= 64) {
            role ='2nd Lt. Grade 2'
        } else if (levelRole <= 66) {
            role ='2nd Lt. Grade 3'
        } else if (levelRole <= 68) {
            role ='2nd Lt. Grade 4'
        } else if (levelRole <= 70) {
            role ='2nd Lt. Grade 5'
        } else if (levelRole <= 72) {
            role ='1st Lt. Grade 1'
        } else if (levelRole <= 74) {
            role ='1st Lt. Grade 2'
        } else if (levelRole <= 76) {
            role ='1st Lt. Grade 3'
        } else if (levelRole <= 78) {
            role ='1st Lt. Grade 4'
        } else if (levelRole <= 80) {
            role ='1st Lt. Grade 5'
        } else if (levelRole <= 82) {
            role ='Major Grade 1'
        } else if (levelRole <= 84) {
            role ='Major Grade 2'
        } else if (levelRole <= 86) {
            role ='Major Grade 3'
        } else if (levelRole <= 88) {
            role ='Major Grade 4'
        } else if (levelRole <= 90) {
            role ='Major Grade 5'
        } else if (levelRole <= 92) {
            role ='Colonel Grade 1'
        } else if (levelRole <= 94) {
            role ='Colonel Grade 2'
        } else if (levelRole <= 96) {
            role ='Colonel Grade 3'
        } else if (levelRole <= 98) {
            role ='Colonel Grade 4'
        } else if (levelRole <= 100) {
            role ='Colonel Grade 5'
        } else if (levelRole <= 102) {
            role ='Brigadier Early'
        } else if (levelRole <= 104) {
            role ='Brigadier Silver'
        } else if (levelRole <= 106) {
            role ='Brigadier gold'
        } else if (levelRole <= 108) {
            role ='Brigadier Platinum'
        } else if (levelRole <= 110) {
            role ='Brigadier Diamond'
        } else if (levelRole <= 112) {
            role ='Major General Early'
        } else if (levelRole <= 114) {
            role ='Major General Silver'
        } else if (levelRole <= 116) {
            role ='Major General gold'
        } else if (levelRole <= 118) {
            role ='Major General Platinum'
        } else if (levelRole <= 120) {
            role ='Major General Diamond'
        } else if (levelRole <= 122) {
            role ='Lt. General Early'
        } else if (levelRole <= 124) {
            role ='Lt. General Silver'
        } else if (levelRole <= 126) {
            role ='Lt. General gold'
        } else if (levelRole <= 128) {
            role ='Lt. General Platinum'
        } else if (levelRole <= 130) {
            role ='Lt. General Diamond'
        } else if (levelRole <= 132) {
            role ='General Early'
        } else if (levelRole <= 134) {
            role ='General Silver'
        } else if (levelRole <= 136) {
            role ='General gold'
        } else if (levelRole <= 138) {
            role ='General Platinum'
        } else if (levelRole <= 140) {
            role ='General Diamond'
        } else if (levelRole <= 142) {
            role ='Commander Early'
        } else if (levelRole <= 144) {
            role ='Commander Intermediate'
        } else if (levelRole <= 146) {
            role ='Commander Elite'
        } else if (levelRole <= 148) {
            role ='The Commander Hero'
        } else if (levelRole <= 152) {
            role ='Legends'
        } else if (levelRole <= 154) {
            role ='Legends'
        } else if (levelRole <= 156) {
            role ='Legends'
        } else if (levelRole <= 158) {
            role ='Legends'
        } else if (levelRole <= 160) {
            role ='Legends'
        } else if (levelRole <= 162) {
            role ='Legends'
        } else if (levelRole <= 164) {
            role ='Legends'
        } else if (levelRole <= 166) {
            role ='Legends'
        } else if (levelRole <= 168) {
            role ='Legends'
        } else if (levelRole <= 170) {
            role ='Legends'
        } else if (levelRole <= 172) {
            role ='Legends'
        } else if (levelRole <= 174) {
            role ='Legends'
        } else if (levelRole <= 176) {
            role ='Legends'
        } else if (levelRole <= 178) {
            role ='Legends'
        } else if (levelRole <= 180) {
            role ='Legends'
        } else if (levelRole <= 182) {
            role ='Legends'
        } else if (levelRole <= 184) {
            role ='Legends'
        } else if (levelRole <= 186) {
            role ='Legends'
        } else if (levelRole <= 188) {
            role ='Legends'
        } else if (levelRole <= 190) {
            role ='Legends'
        } else if (levelRole <= 192) {
            role ='Legends'
        } else if (levelRole <= 194) {
            role ='Legends'
        } else if (levelRole <= 196) {
            role ='Legends'
        } else if (levelRole <= 198) {
            role ='Legends'
        } else if (levelRole <= 200) {
            role ='Legends'
        } else if (levelRole <= 210) {
            role ='Legends'
        } else if (levelRole <= 220) {
            role ='Legends'
        } else if (levelRole <= 230) {
            role ='Legends'
        } else if (levelRole <= 240) {
            role ='Legends'
        } else if (levelRole <= 250) {
            role ='Legends'
        } else if (levelRole <= 260) {
            role ='Legends'
        } else if (levelRole <= 270) {
            role ='Legends'
        } else if (levelRole <= 280) {
            role ='Legends'
        } else if (levelRole <= 290) {
            role ='Legends'
        } else if (levelRole <= 300) {
            role ='Legends'
        } else if (levelRole <= 310) {
            role ='Legends'
        } else if (levelRole <= 320) {
            role ='Legends'
        } else if (levelRole <= 330) {
            role ='Legends'
        } else if (levelRole <= 340) {
            role ='Legends'
        } else if (levelRole <= 350) {
            role ='Legends'
        } else if (levelRole <= 360) {
            role ='Legends'
        } else if (levelRole <= 370) {
            role ='Legends'
        } else if (levelRole <= 380) {
            role ='Legends'
        } else if (levelRole <= 390) {
            role ='Legends'
        } else if (levelRole <= 400) {
            role ='Legends'
        } else if (levelRole <= 410) {
            role ='Legends'
        } else if (levelRole <= 420) {
            role ='Legends'
        } else if (levelRole <= 430) {
            role ='Legends'
        } else if (levelRole <= 440) {
            role ='Legends'
        } else if (levelRole <= 450) {
            role ='Legends'
        } else if (levelRole <= 460) {
            role ='Legends'
        } else if (levelRole <= 470) {
            role ='Legends'
        } else if (levelRole <= 480) {
            role ='Legends'
        } else if (levelRole <= 490) {
            role ='Legends'
        } else if (levelRole <= 500) {
            role ='Legends'
        } else if (levelRole <= 600) {
            role ='Legends'
        } else if (levelRole <= 700) {
            role ='Legends'
        } else if (levelRole <= 800) {
            role ='Legends'
        } else if (levelRole <= 900) {
            role ='Legends'
        } else if (levelRole <= 1000) {
            role ='Legends'
        } else if (levelRole <= 2000) {
            role ='Legends'
        } else if (levelRole <= 3000) {
            role ='Legends'
        } else if (levelRole <= 4000) {
            role ='Legends'
        } else if (levelRole <= 5000) {
            role ='Legends'
        } else if (levelRole <= 6000) {
            role ='Legends'
        } else if (levelRole <= 7000) {
            role ='Legends'
        } else if (levelRole <= 8000) {
            role ='Legends'
        } else if (levelRole <= 9000) {
            role ='Legends'
        } else if (levelRole <= 10000) {
            role ='Legends'
           
           var prema ='Free'
			if (!isAdmin) {
				prema ='Adminban'
			}
			if (!isPremium) {
				prema ='Premium'
			} 
			if (!isOwner) {
				prema ='Owner'
			}
	}
	
	const fishh = [
	    '🐡 : 🐬 : 🐋',
		'🐋 : 🐋 : 🐋',
		'🐬 : 🐬 : 🐬',
		'🐟 : 🦐 : 🦈',
    '🦑 : 🦑 : 🐲',
    '🐡 : 🐡 : 🐡',
    '🐡 : 🦐 : 🐋',
    '🦐 : 🐬 : 🐟',
    '🐡 : 🐠 : 🐠',
    '🦀 : 🦀 : 🦀',
    '🦀 : 🐬 : 🐠',
    '🐙 : 🐡 : 🐋'
  ]
  const hewan = [
	    '🐃 : 🦔 : 🐏',
		'🐏 : 🐏 : 🐏',
		'🦔 : 🦔 : 🦔',
		'🐂 : 🦐 : 🐎',
    '🕊 : 🕊 : 🐃',
    '🐃 : 🐃 : 🐃',
    '🐃 : 🦔 : 🐏',
    '🦔 : 🦔 : 🐂',
    '🐃 : 🐎 : 🐎',
    '🐕 : 🐕 : 🐕',
    '🐕 : 🦔 : 🐎',
    '🐂 : 🐃 : 🐏'
  ]
  
            var premi = 'NO'
			if (isPrem) {
				premi = 'YES'
			 } 
			var sim = 'TIDAK AKTIF'
			if (isSimi) {
				sim = 'AKTIF'
			 } 
             var anlink = 'TIDAK AKTIF'
             if (isAntiLink) {
             anlink = 'AKTIF'
             }
             var anto = 'TIDAK AKTIF'
             if (isAntiToxic) {
             anto = 'AKTIF'
             }
             var lepel = 'TIDAK AKTIF'
             if (isLevelingOn) {
             lepel = 'AKTIF'
             }
             var anxn = 'TIDAK AKTIF'
             if (isAntiXnxx) {
             anxn = 'AKTIF'
             }
	         var anig = 'TIDAK AKTIF'
             if (isAntiIg) {
             anig = 'AKTIF'
             }
             var anyt = 'TIDAK AKTIF'
             if (isAntiYt) {
             anyt = 'AKTIF'
             }
             var anwibu = 'TIDAK AKTIF'
             if (isAntiWibu) {
             anwibu = 'AKTIF'
             }
             var anbo = 'TIDAK AKTIF'
             if (isAntiBocil) {
             anbo = 'AKTIF'
             }
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`「 _*SELAMAT*_ 」
├❏ Nama : ${pushname}
├❏ Nomer : ${sender.split("@")[0]}
├❏ Xp : ${getLevelingXp(sender)}
├❏ Pangkat : ${role}
├❏ Level : ${getLevel} ⊱ ${getLevelingLevel(sender)}
╰┈─────────────────➣
`)
                }
            } catch (err) {
                console.error(err)
            }
        }
  if (budy.includes("https://chat.whatsapp.com")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('*Sungkem Paduka Admin*')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*Tidak Bisa Kick Member Karna Bot Harus Jadi Admin*`)})
		  }
		 if (budy.includes("anji")){
		        if (!isGroup) return
		        if (!isAntiToxic) return
		        if (isGroupAdmins) return reply('*Sungkem Paduka Admin*')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*Tidak Bisa Kick Member Karna Bot Harus Jadi Admin*`)})
		  }
		 if (budy.includes("janc")){
		        if (!isGroup) return
		        if (!isAntiToxic) return
		        if (isGroupAdmins) return reply('*Sungkem Paduka Admin*')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*Tidak Bisa Kick Member Karna Bot Harus Jadi Admin*`)})
		  }
		 if (budy.includes("asu")){
		        if (!isGroup) return
		        if (!isAntiToxic) return
		        if (isGroupAdmins) return reply('*Sungkem Paduka Admin*')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*Tidak Bisa Kick Member Karna Bot Harus Jadi Admin*`)})
		  }
		 if (budy.includes("ngent")){
		        if (!isGroup) return
		        if (!isAntiToxic) return
		        if (isGroupAdmins) return reply('*Sungkem Paduka Admin*')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*Tidak Bisa Kick Member Karna Bot Harus Jadi Admin*`)})
		  }
		 if (budy.includes("kont")){
		        if (!isGroup) return
		        if (!isAntiToxic) return
		        if (isGroupAdmins) return reply('*Sungkem Paduka Admin*')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*Tidak Bisa Kick Member Karna Bot Harus Jadi Admin*`)})
		  }
		 if (budy.includes("memek")){
		        if (!isGroup) return
		        if (!isAntiToxic) return
		        if (isGroupAdmins) return reply('*Sungkem Paduka Admin*')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*Tidak Bisa Kick Member Karna Bot Harus Jadi Admin*`)})
		  }
		if (budy.includes("rigatou")){
		        if (!isGroup) return
		        if (!isAntiWibu) return
		        if (isGroupAdmins) return reply('*Sungkem Paduka Admin*')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*Tidak Bisa Kick Member Karna Bot Harus Jadi Admin*`)})
		  }
		if (budy.includes("hayou")){
		        if (!isGroup) return
		        if (!isAntiWibu) return
		        if (isGroupAdmins) return reply('*Sungkem Paduka Admin*')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*Tidak Bisa Kick Member Karna Bot Harus Jadi Admin*`)})
		  }
		if (budy.includes("chan")){
		        if (!isGroup) return
		        if (!isAntiWibu) return
		        if (isGroupAdmins) return reply('*Sungkem Paduka Admin*')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*Tidak Bisa Kick Member Karna Bot Harus Jadi Admin*`)})
		  }
		if (budy.includes("ayyu")){
		        if (!isGroup) return
		        if (!isAntiBocil) return
		        if (isGroupAdmins) return reply('*Sungkem Paduka Admin*')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*Tidak Bisa Kick Member Karna Bot Harus Jadi Admin*`)})
		  }
		if (budy.includes("yahaha")){
		        if (!isGroup) return
		        if (!isAntiBocil) return
		        if (isGroupAdmins) return reply('*Sungkem Paduka Admin*')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*Tidak Bisa Kick Member Karna Bot Harus Jadi Admin*`)})
		  }
		 if (budy.includes("www.xnxx.com")){
		        if (!isGroup) return
		        if (!isAntiXnxx) return
		        if (isGroupAdmins) return reply('*Sungkem Paduka Admin*')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*Tidak Bisa Kick Member Karna Bot Harus Jadi Admin*`)})
		  }
		if (budy.includes("https://www.instagram.com/")){
		        if (!isGroup) return
		        if (!isAntiIg) return
		        if (isGroupAdmins) return reply('*Sungkem Paduka Admin*')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*Tidak Bisa Kick Member Karna Bot Harus Jadi Admin*`)})
		  }
		if (budy.includes("https://youtube.com/channel/")){
		        if (!isGroup) return
		        if (!isAntiYt) return
		        if (isGroupAdmins) return reply('*Sungkem Paduka Admin*')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*Tidak Bisa Kick Member Karna Bot Harus Jadi Admin*`)})
		  }
		if (budy.includes("https://youtu.be/")){
		        if (!isGroup) return
		        if (!isAntiYt) return
		        if (isGroupAdmins) return reply('*Sungkem Paduka Admin*')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*Tidak Bisa Kick Member Karna Bot Harus Jadi Admin*`)})
		  }
//============================〔TAMBAHAN HIASAN〕============================\\
              
            tchat = `${totalchat.length}`   
            
          //const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Lari Cuk Ada ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/odc.jpeg')} } }\\
			
            const freply2 = {
		    key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*JANGAN LUPA DONASI YA BRO*\n*TOTAL PENGGUNA BOT*: ${_registered.length} USER`} } } 
		    
            const freply3 =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 10, status: 200, thumbnail: thumb, surface: 200, message: `TOTAL PENGGUNA: ${_registered.length}`, orderTitle: 'HALLO BANTU DONASI YA!', sellerJid: '0@s.whatsapp.net'} } } 
			
    const freply4 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": `「 *MITSUHA BOTZ* 」`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./lib/Logo.jpg')}}}
        
      const hour_now = moment().format('HH')
        var ucapanWaktu = 'Selamat Pagi🌄'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Selamat Pagi 🌅'
        } else if (hour_now >= '10' && hour_now <= '14') {
          ucapanWaktu = 'Selamat Siang 🌞'
        } else if (hour_now >= '14' && hour_now <= '17') {
          ucapanWaktu = 'Selamat Soree ☀️'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Selamat Malam 🌠'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Selamat Tengah Malam 🌌 '
        } else {
          ucapanWaktu = 'Selamat Malam!'
        }
                  if (budy.includes(`#menu`)) {
                  costum(`Maaf *${pushname}*, Command *#menu* Tidak Terdaftar Di Dalam *${prefix}menu*!`, text, tescuk, cr)
                  }   

             
			switch(command) {
//============================〔  MITSUHA BOT〕============================\\
				//case 'menu':\\
				//client.sendMessage(from, help(ucapanWaktu, jam, wit, wita, pushname, tchat, role, bulan, prefix, owner), text,{quoted: freply3})
				//break\\
				
                case 'menu':
				case 'help':       
if (!isRegistered) return reply( ind.noregis())     
menu = `${ucapanWaktu} ${pushname}

╭────⧉  *INFO USER*
│❒│NAMA : ${pushname}
│❒│PANGKAT : ${role}
│❒│BULAN : ${bulan}
│❒│PREMIUM : ${premi}
╰────────────────────
╭────⧉  *WAKTU INDONESIA*
│❒│WIB : Jam ${jam}
│❒│WIT : Jam ${wit}
│❒│WITA : Jam ${wita}
╰────────────────────
╭────⧉  *INFO DEVELOPER*
│❒│SC ORI : Mhankbarbar
│❒│DEVELOPER : Chaca
│❒│TOTAL USER VIP : ${premium.length} 
│❒│TOTAL CHAT : ${tchat} 
│❒│TOTAL HIT TODAY : ${hit_today.length}
│❒│TOTAL USER : ${_registered.length}
╰────────────────────
╭────⧉  *SOSIAL MEDIA*
│❒│https://bit.ly/35KCT4W
│❒│https://bit.ly/2T4dS1R
│❒│https://bit.ly/3wUSPNZ
╰────────────────────
 ╭────⧉  *ANIME MENU* 
 │❒│${prefix}neko
 │❒│${prefix}neko2
 │❒│${prefix}nekonime
 │❒│${prefix}waifu
 │❒│${prefix}waifu2
 │❒│${prefix}meow
 │❒│${prefix}husbu
 │❒│${prefix}shota
 │❒│${prefix}yuri
 │❒│${prefix}yuri2
 │❒│${prefix}yaoi
 │❒│${prefix}nsfwneko
 │❒│${prefix}nsfwblowjob
 │❒│${prefix}nsfwyuri
 │❒│${prefix}nsfwfoot
 │❒│${prefix}nsfwass
 │❒│${prefix}nsfworgy
 │❒│${prefix}nsfwero
 │❒│${prefix}nsfwbdsm
 │❒│${prefix}nsfwahegao
 ╰────────────────────
 ╭────⧉  *MAKER MENU* 
 │❒│${prefix}maker1
 │❒│${prefix}maker2
 │❒│${prefix}maker3
 │❒│${prefix}maker4
 │❒│${prefix}maker5
 │❒│${prefix}maker6
 │❒│${prefix}maker7
 │❒│${prefix}maker8
 │❒│${prefix}sertifikatepep
 │❒│${prefix}transformers
 │❒│${prefix}sticker
 │❒│${prefix}stickergif
 │❒│${prefix}attp
 │❒│${prefix}ubahstk
 │❒│${prefix}toimg
 │❒│${prefix}tahta
 │❒│${prefix}pornlogo
 │❒│${prefix}bplogo
 │❒│${prefix}marvellogo
 │❒│${prefix}avenglogo
 │❒│${prefix}text3d
 │❒│${prefix}snow
 │❒│${prefix}cloud
 │❒│${prefix}3dluxuary
 │❒│${prefix}thunder
 │❒│${prefix}chrome
 │❒│${prefix}water
 │❒│${prefix}ytcomand
 │❒│${prefix}tekstoimg
 │❒│${prefix}dropwater
 │❒│${prefix}splaybutton
 │❒│${prefix}gplaybutton
 ╰────────────────────
 ╭────⧉  *SOUND MENU* 
 │❒│${prefix}sound1
 │❒│${prefix}sound2
 │❒│${prefix}sound3
 │❒│${prefix}sound4
 │❒│${prefix}sound5
 │❒│${prefix}sound6
 │❒│${prefix}sound7
 │❒│${prefix}sound8
 │❒│${prefix}sound9
 │❒│${prefix}sound10
 │❒│${prefix}sound11
 │❒│${prefix}sound12
 │❒│${prefix}sound13
 │❒│${prefix}sound14
 │❒│${prefix}sound15
 │❒│${prefix}sound16
 │❒│${prefix}sound17
 │❒│${prefix}sound18 
 │❒│${prefix}sound19
 │❒│${prefix}sound20
 │❒│${prefix}sound21
 │❒│${prefix}sound22
 │❒│${prefix}sound23
 │❒│${prefix}sound24
 │❒│${prefix}sound25
 │❒│${prefix}sound26
 │❒│${prefix}sound27
 │❒│${prefix}sound28
 │❒│${prefix}sound29
 │❒│${prefix}sound30
 │❒│${prefix}sound31
 │❒│${prefix}sound32
 │❒│${prefix}sound33
 │❒│${prefix}sound34
 │❒│${prefix}sound35
 │❒│${prefix}sound36
 │❒│${prefix}sound37
 │❒│${prefix}sound38
 │❒│${prefix}sound39
 │❒│${prefix}sound40
 │❒│${prefix}sound41
 │❒│${prefix}sound42
 │❒│${prefix}sound43
 │❒│${prefix}sound44
 │❒│${prefix}sound45
 │❒│${prefix}sound46
 │❒│${prefix}sound47
 │❒│${prefix}sound48
 │❒│${prefix}sound49
 │❒│${prefix}sound50
 │❒│${prefix}sound51
 │❒│${prefix}sound52
 │❒│${prefix}sound53
 │❒│${prefix}sound54
 │❒│${prefix}sound55
 │❒│${prefix}sound56
 │❒│${prefix}sound57
 │❒│${prefix}sound58
 │❒│${prefix}sound59
 │❒│${prefix}sound60
 │❒│${prefix}sound61
 │❒│${prefix}sound62
 │❒│${prefix}sound63
 │❒│${prefix}sound64
 │❒│${prefix}sound65
 │❒│${prefix}sound66
 │❒│${prefix}sound67
 │❒│${prefix}sound68
 │❒│${prefix}sound69
 │❒│${prefix}sound70
 ╰────────────────────
 ╭────⧉  *STORAGE MENU*  
 │❒│${prefix}addsticker
 │❒│${prefix}addimage
 │❒│${prefix}addvn
 │❒│${prefix}addvideo
 │❒│${prefix}liststicker
 │❒│${prefix}listimage
 │❒│${prefix}listvn
 │❒│${prefix}listvideo
 │❒│${prefix}getsticker
 │❒│${prefix}getimage
 │❒│${prefix}getvn
 │❒│${prefix}getvideo
 ╰────────────────────
╭────⧉  *CEK MENU*
│❒│${prefix}alimcek
│❒│${prefix}sangecek
│❒│${prefix}iqcek
│❒│${prefix}pintarcek
│❒│${prefix}lesbicek
│❒│${prefix}jelekcek
│❒│${prefix}gantengcek
│❒│${prefix}cantikcek
│❒│${prefix}gaycek
│❒│${prefix}lesbicek
╰────────────────────
╭────⧉  *TAG MENU*
│❒│${prefix}jadian
│❒│${prefix}sange
│❒│${prefix}pintar
│❒│${prefix}bodoh
│❒│${prefix}ganteng
│❒│${prefix}cantik
│❒│${prefix}gay
│❒│${prefix}lesbi
╰────────────────────
 ╭────⧉  *GRUP MENU* 
 │❒│${prefix}sider
 │❒│${prefix}cekgrup
 │❒│${prefix}linkgc
 │❒│${prefix}add
 │❒│${prefix}kick
 │❒│${prefix}promote
 │❒│${prefix}demote
 │❒│${prefix}setname
 │❒│${prefix}setdesc
 │❒│${prefix}tagall
 │❒│${prefix}tagall2
 │❒│${prefix}tagall3
 │❒│${prefix}listadmins
 │❒│${prefix}simih
 │❒│${prefix}antilink
 │❒│${prefix}antitoxic
 │❒│${prefix}antixnxx
 │❒│${prefix}antiwibu
 │❒│${prefix}antibocil
 │❒│${prefix}antiyt
 │❒│${prefix}antiig
 ╰───────────────────
 ╭────⧉  *IMAGE MENU*  
 │❒│${prefix}ocr
 │❒│${prefix}wait
 │❒│${prefix}cat
 │❒│${prefix}kpop
 ╰────────────────────
 ╭────⧉  *GACHA MENU*  
 │❒│${prefix}cogan
 │❒│${prefix}cecan
 │❒│${prefix}cecanvietnam
 │❒│${prefix}cecanthailand
 │❒│${prefix}cecanmalay
 │❒│${prefix}cecanindo
 │❒│${prefix}cecanjapan
 │❒│${prefix}cecanchina
 │❒│${prefix}cecankorea
 ╰────────────────────
 ╭────⧉  *INDOHOT* 
 │❒│${prefix}indo1
 │❒│${prefix}indo2
 │❒│${prefix}indo3
 │❒│${prefix}indo4
 │❒│${prefix}indo5
 │❒│${prefix}indo6
 │❒│${prefix}indo7
 │❒│${prefix}indo8
 │❒│${prefix}indo9
 │❒│${prefix}indo10
 │❒│${prefix}indo11
 │❒│${prefix}indo12
 │❒│${prefix}indo13
 │❒│${prefix}indo14
 │❒│${prefix}indo15
 │❒│${prefix}indo16
 │❒│${prefix}indo17
 │❒│${prefix}indo18
 │❒│${prefix}indo19
 │❒│${prefix}indo20
 │❒│${prefix}indo21
 │❒│${prefix}indo22
 │❒│${prefix}indo23
 │❒│${prefix}indo24
 │❒│${prefix}indo25
 ╰────────────────────
 ╭────⧉  *FUN MENU* 
 │❒│${prefix}slot1
 │❒│${prefix}slot2
 │❒│${prefix}fish
 │❒│${prefix}hunt
 │❒│${prefix}dadu
 │❒│${prefix}halah
 │❒│${prefix}hilih
 │❒│${prefix}holoh
 │❒│${prefix}huluh
 │❒│${prefix}heleh
 │❒│${prefix}tebakgambar
 │❒│${prefix}tebakbendera
 │❒│${prefix}tebakangka 
 ╰────────────────────
 ╭────⧉  *PREMIUM MENU* 
 │❒│${prefix}stickernowm
 │❒│${prefix}ghea
 │❒│${prefix}rika
 │❒│${prefix}hijab
 │❒│${prefix}ukty
 │❒│${prefix}bocil
 │❒│${prefix}santuy
 │❒│${prefix}makegroup
 │❒│${prefix}kiss
 │❒│${prefix}peluk
 │❒│${prefix}solog
 ╰────────────────────
 ╭────⧉  *WALLPAPER* 
 │❒│${prefix}wallpaper1
 │❒│${prefix}wallpaper2
 │❒│${prefix}wallpaper3
 │❒│${prefix}wallpaper4
 │❒│${prefix}wallpaper5
 │❒│${prefix}wallpaper6
 │❒│${prefix}wallpaper7
 │❒│${prefix}wallpaper8
 │❒│${prefix}wallpaper9
 │❒│${prefix}wallpaper10
 ╰────────────────────
 ╭────⧉  *MEDIA MENU*  
 │❒│${prefix}meme
 │❒│${prefix}meme2
 │❒│${prefix}memeindo
 │❒│${prefix}darkjokes
 │❒│${prefix}darkjokes2
 │❒│${prefix}tts
 │❒│${prefix}tts2
 │❒│${prefix}pinterest
 │❒│${prefix}pinterest2
 │❒│${prefix}wiki
 │❒│${prefix}covidindo
 │❒│${prefix}infogempa
 ╰────────────────────
 ╭────⧉  *OTHER MENU* 
 │❒│${prefix}delete
 │❒│${prefix}cekchat
 │❒│${prefix}role
 │❒│${prefix}pesan
 │❒│${prefix}infonomor
 │❒│${prefix}artimimpi
 │❒│${prefix}artinama
 │❒│${prefix}owner
 │❒│${prefix}report
 │❒│${prefix}info
 │❒│${prefix}donasi
 │❒│${prefix}blocklist
 │❒│${prefix}translate
 │❒│${prefix}premiumlist
 ╰────────────────────
 ╭────⧉  *OWNER MENU* 
 │❒│${prefix}setwelcome
 │❒│${prefix}setleave
 │❒│${prefix}setprefix
 │❒│${prefix}setcr
 │❒│${prefix}setfake1
 │❒│${prefix}setfake2
 │❒│${prefix}setwm
 │❒│${prefix}leave
 │❒│${prefix}clone
 │❒│${prefix}bc
 │❒│${prefix}addprem
 │❒│${prefix}dellprem
 ╰──────────────────── 
 ╭────⧉  *THANKS TO* 
 │❒│MhankBarBar
 │❒│Oreo
 │❒│Nayla
 │❒│Aine Team
 │❒│Penyedia Rest Api
 │❒│All Kreator Bot
 ╰───────────────────`
client.sendMessage(from, menu, text, {caption: menu, quoted: freply3, contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6285731261728@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": { mentionedJid: [menu] }}}})
break
//============================〔MENU STORAGE〕============================\\
              case 'addsticker':
if (!isRegistered) return reply( ind.noregis())     
			    	if (!isQuotedSticker) return reply('Reply stiker nya')
			     	svst = body.slice(12)
			    	if (!svst) return reply('Nama sticker nya apa?')
			    	boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			     	delb = await client.downloadMediaMessage(boij)
			       	setiker.push(`${svst}`)
			    	fs.writeFileSync(`./src/stickers/${svst}.webp`, delb)
			     	fs.writeFileSync('./src/stick.json', JSON.stringify(setiker))
			    	client.sendMessage(from, `Sukses Menambahkan Sticker kedalam database\nSilahkan Cek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: freply3})
      				break
      case 'getsticker':
		        	case 'gets':
		if (!isRegistered) return reply( ind.noregis())     
		        	if (args.length < 1) return reply('Masukan nama yang terdaftar di list sticker')
		      		namastc = body.slice(12)
			     	result = fs.readFileSync(`./src/stickers/${namastc}.webp`)
			    	client.sendMessage(from, result, sticker)
			     	break
                    case 'liststicker':
		     		teks = '*Sticker List :*\n\n'
	    			for (let awokwkwk of setiker) {
			 		teks += `- ${awokwkwk}\n`
    				}
		      		teks += `\n*Total : ${setiker.length}*`
		      		client.sendMessage(from, teks.trim(), extendedText, {  quoted: freply3})
		      		break
		case 'addvn':
		if (!isRegistered) return reply( ind.noregis())     
			    	if (!isQuotedAudio) return reply('Reply vnnya blokk!')
			    	svst = body.slice(7)
		    		if (!svst) return reply('Nama audionya apa su?')
			    	boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			    	delb = await client.downloadMediaMessage(boij)
			    	audionye.push(`${svst}`)
			     	fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
			     	fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
			     	client.sendMessage(from, `Sukses Menambahkan Vn ke dalam database\nSilahkann Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: freply3}) 
			      	break
		 	case 'listvn':
		if (!isRegistered) return reply( ind.noregis())     
	         		case 'vnlist':
		     		teks = '*List Vn:*\n\n'
		     		for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
			      	}
			    	teks += `\n*Total : ${audionye.length}*`
		    		client.sendMessage(from, teks.trim(), extendedText, {  quoted: freply3})
		    		break
		case 'getvn':
		if (!isRegistered) return reply( ind.noregis())     
			        if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
			     	namastc = body.slice(7)
				    buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
			    	client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: freply3})
			     	break
		        	case 'addimage':
		if (!isRegistered) return reply( ind.noregis())     
		     		if (!isQuotedImage) return reply('Reply imagenya blokk!')
			    	svst = body.slice(10)
			    	if (!svst) return reply('Nama imagenya apa su?')
		     		boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	 	     		delb = await client.downloadMediaMessage(boij)
		     		imagenye.push(`${svst}`)
			    	fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
			    	fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
		      		client.sendMessage(from, `Sukses Menambahkan image ke dalam database\nSilahkan cek dengan cara ${prefix}listimage`, MessageType.text, { quoted: freply3})		     	 
		     		break
		        	case 'getimage':
                    case 'getimg':
                    if (!isRegistered) return reply( ind.noregis())     
			        if (args.length < 1) return reply('Masukan nama yang terdaftar di list image')
	      			namastc = body.slice(10)
	      			buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)
    				client.sendMessage(from, buffer, MessageType.image, {  quoted: freply3})
	      			break
		        	case 'imagelist':
		        	case 'listimage':
		if (!isRegistered) return reply( ind.noregis())     
		    		teks = '*List Image :*\n\n'
		    		for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
			      	}
			    	teks += `\n*Total : ${imagenye.length}*`
			    	client.sendMessage(from, teks.trim(), extendedText, {  quoted: freply3})
			    	break
		        	case 'addvideo':
		if (!isRegistered) return reply( ind.noregis())     
			    	if (!isQuotedVideo) return reply('Reply videonya blokk!')
			    	svst = body.slice(10)
			     	if (!svst) return reply('Nama videonya apa su?')
			     	boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			    	delb = await client.downloadMediaMessage(boij)
			    	videonye.push(`${svst}`)
			    	fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
			     	fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
			      	client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: freply3}) 
	     			break
			        case 'getvideo':
		    	    if (args.length < 1) return reply('Masukan nama yang terdaftar di list video')
			    	namastc = body.slice(10)
			    	buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)
			    	client.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: freply3})
			       	break
		           	case 'listvideo':
	           		case 'videolist':
	if (!isRegistered) return reply( ind.noregis())     
	    			teks = '*List Video :*\n\n'
	    			for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
		    		}
			    	teks += `\n*Total : ${videonye.length}*`
			    	client.sendMessage(from, teks.trim(), extendedText, {  quoted: freply3})
			      	break			
		        	
//============================〔MENU SOUND〕============================\\
case 'sound1':
if (!isRegistered) return reply( ind.noregis())
satu = fs.readFileSync('./sound/sound1.mp3');
client.sendMessage(from, satu, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound2':
if (!isRegistered) return reply( ind.noregis())


dua = fs.readFileSync('./sound/sound2.mp3');
client.sendMessage(from, dua, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound3':
if (!isRegistered) return reply( ind.noregis())


tiga = fs.readFileSync('./sound/sound3.mp3');
client.sendMessage(from, tiga, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound4':
if (!isRegistered) return reply( ind.noregis())


empat = fs.readFileSync('./sound/sound4.mp3');
client.sendMessage(from, empat, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound5':
if (!isRegistered) return reply( ind.noregis())


lima = fs.readFileSync('./sound/sound5.mp3');
client.sendMessage(from, lima, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound6':
if (!isRegistered) return reply( ind.noregis())


enam = fs.readFileSync('./sound/sound6.mp3');
client.sendMessage(from, enam, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound7':
if (!isRegistered) return reply( ind.noregis())


tujuh = fs.readFileSync('./sound/sound7.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound8':
if (!isRegistered) return reply( ind.noregis())


lapan = fs.readFileSync('./sound/sound8.mp3');
client.sendMessage(from, lapan, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound9':
if (!isRegistered) return reply( ind.noregis())


bilan = fs.readFileSync('./sound/sound9.mp3');
client.sendMessage(from, bilan, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound10':
if (!isRegistered) return reply( ind.noregis())


puluh = fs.readFileSync('./sound/sound10.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound11':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound11.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break

case 'sound12':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound12.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound13':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound13.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound14':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound14.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound15':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound15.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound16':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound16.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound17':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound17.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound18':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound18.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound19':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound19.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound20':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound50.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound21':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound21.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound22':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound22.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound23':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound23.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound24':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound24.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound25':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound25.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound26':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound26.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound27':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound27.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound28':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound28.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound29':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound29.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound30':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound50.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound31':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound69.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound32':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound32.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound33':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound33.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound34':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound70.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound35':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound35.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound36':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound36.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound37':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound37.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound38':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound38.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound39':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound39.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound40':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound40.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound41':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound41.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound42':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound42.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound43':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound43.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound44':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound44.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound45':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound45.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound46':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound46.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound47':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound47.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound48':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound48.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound49':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound49.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound50':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound50.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound51':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound26.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound52':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound52.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound53':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound53.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound54':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound54.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound55':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound55.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound56':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound56.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound57':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound57.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound59':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound10.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound58':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound59.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound60':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound20.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound61':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound61.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound62':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound62.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound63':
if (!isRegistered) return reply( ind.noregis())

puluh = fs.readFileSync('./sound/sound63.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound64':
if (!isRegistered) return reply( ind.noregis())     
puluh = fs.readFileSync('./sound/sound64.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})
break
case 'sound65':
if (!isRegistered) return reply( ind.noregis())     
puluh = fs.readFileSync('./sound/sound65.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})
break
case 'sound66':
if (!isRegistered) return reply( ind.noregis())     
puluh = fs.readFileSync('./sound/sound66.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound67':
if (!isRegistered) return reply( ind.noregis())     
puluh = fs.readFileSync('./sound/sound67.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound68':
if (!isRegistered) return reply( ind.noregis())     
puluh = fs.readFileSync('./sound/sound68.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound69':
if (!isRegistered) return reply( ind.noregis())     
puluh = fs.readFileSync('./sound/sound69.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break
case 'sound70':
if (!isRegistered) return reply( ind.noregis())     
puluh = fs.readFileSync('./sound/sound70.mp3');
client.sendMessage(from, puluh, MessageType.audio, {quoted: freply3, mimetype: 'audio/mp4', ptt:true})

break  
//============================〔MENU GRUP〕============================\\
   case 'cekgrup':
   if (!isRegistered) return reply( ind.noregis())     
            if (!isGroup) return reply(mess.only.group)
            oh = (`*STATUS INFO CHAT GRUP*\n
            
├❏ Antilink ${anlink}
├❏ Antitoxic ${anto}
├❏ Antiig ${anig}
├❏ Antiyt ${anyt}
├❏ Antixnxx ${anxn}
├❏ Antibocil ${anbo}
├❏ Antiwibu ${anwibu}
├❏ Leveling ${lepel}
├❏ Simi ${sim}
╰┈─────────────────➣`)
client.sendMessage(from, oh, text, { quoted: freply3 })
            break
            
            case 'listadmins':
               if (!isRegistered) return reply( ind.noregis())     
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                   case 'tagall':
                      if (!isRegistered) return reply( ind.noregis())     
					if (!isGroup) return reply(mess.only.group)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                case 'tagall2':
if (!isRegistered) return reply( ind.noregis())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
                                case 'tagall3':
if (!isRegistered) return reply( ind.noregis())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, teks, text, {detectLinks: false, quoted: freply3})
					break
//============================〔MENU ADMIN〕============================\\
             case 'linkgc':
                if (!isRegistered) return reply( ind.noregis())     
				    if (!isGroup) return reply(`GRUB ONLY`) 
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await client.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    client.sendMessage(from, yeh, text, {quoted: freply3})			       
					break
                  case 'antibocil':
                     if (!isRegistered) return reply( ind.noregis())     
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('*TAMBAHKAN ANGKA 1 UNTUK ON ATAU 0 UNTUK OFF!*')
					if (Number(args[0]) === 1) {
						if (isAntiBocil) return reply('*SUDAH AKTIF* !!!')
						antibocil.push(from)
						fs.writeFileSync('./src/bocil.json', JSON.stringify(antibocil))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ ACTIVATED BOCIL*')
					} else if (Number(args[0]) === 0) {
						antibocil.splice(from, 1)
						fs.writeFileSync('./src/bocil.json', JSON.stringify(antibocil))
						reply('*❬ 𝗦𝗨??𝗦𝗘𝗦 ❭ DEACTIVATED BOCIL*')
					} else {
						reply(`*「 ❗ 」Tambah Parameter 1/enable Atau 0/disable*`)
					}
					break
					case 'antiwibu':
					   if (!isRegistered) return reply( ind.noregis())     
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('*TAMBAHKAN ANGKA 1 UNTUK ON ATAU 0 UNTUK OFF!*')
					if (Number(args[0]) === 1) {
						if (isAntiWibu) return reply('*SUDAH AKTIF* !!!')
						antiwibu.push(from)
						fs.writeFileSync('./src/antiwibu.json', JSON.stringify(antiwibu))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ ACTIVATED ANTIWIBU*')
					} else if (Number(args[0]) === 0) {
						antiwibu.splice(from, 1)
						fs.writeFileSync('./src/antiwibu.json', JSON.stringify(antiwibu))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ DEACTIVATED ANTIWIBU*')
					} else {
						reply(`*「 ❗ 」Tambah Parameter 1/enable Atau 0/disable*`)
					}
					break
					
					case 'antiyt':
					   if (!isRegistered) return reply( ind.noregis())     
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('*TAMBAHKAN ANGKA 1 UNTUK ON ATAU 0 UNTUK OFF!*')
					if (Number(args[0]) === 1) {
						if (isAntiYt) return reply('*SUDAH AKTIF* !!!')
						antiyt.push(from)
						fs.writeFileSync('./src/antiyt.json', JSON.stringify(antiyt))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ ACTIVATED ANTIYT*')
					} else if (Number(args[0]) === 0) {
						antiyt.splice(from, 1)
						fs.writeFileSync('./src/antiyt.json', JSON.stringify(antiyt))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ DEACTIVATED ANTIYT*')
					} else {
						reply(`*「 ❗ 」Tambah Parameter 1/enable Atau 0/disable*`)
					}
					break
					case 'antiig':
					   if (!isRegistered) return reply( ind.noregis())     
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('*TAMBAHKAN ANGKA 1 UNTUK ON ATAU 0 UNTUK OFF!*')
					if (Number(args[0]) === 1) {
						if (isAntiIg) return reply('*SUDAH AKTIF* !!!')
						antiig.push(from)
						fs.writeFileSync('./src/antiig.json', JSON.stringify(antiig))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ ACTIVATED ANTIIG*')
					} else if (Number(args[0]) === 0) {
						antiig.splice(from, 1)
						fs.writeFileSync('./src/antiig.json', JSON.stringify(antiig))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ DEACTIVATED ANTIIG*')
					} else {
						reply(`*「 ❗ 」Tambah Parameter 1/enable Atau 0/disable*`)
					}
					break
                  case 'antilink':
                     if (!isRegistered) return reply( ind.noregis())     
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('*TAMBAHKAN ANGKA 1 UNTUK ON ATAU 0 UNTUK OFF!*')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('*SUDAH AKTIF* !!!')
						antilink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ ACTIVATED ANTILINK*')
					} else if (Number(args[0]) === 0) {
						antilink.splice(from, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ DEACTIVATED ANTILINK*')
					} else {
						reply(`*「 ❗ 」Tambah Parameter 1/enable Atau 0/disable*`)
					}
					break
                    case 'antitoxic':
                     if (!isRegistered) return reply( ind.noregis())     
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('*TAMBAHKAN ANGKA 1 UNTUK ON ATAU 0 UNTUK OFF!')
					if (Number(args[0]) === 1) {
						if (isAntiToxic) return reply('*SUDAH AKTIF* !!!')
						antitoxic.push(from)
						fs.writeFileSync('./src/antitoxic.json', JSON.stringify(antitoxic))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ ACTIVATED ANTI TOXIC*')
					} else if (Number(args[0]) === 0) {
						antitoxic.splice(from, 1)
						fs.writeFileSync('./src/antitoxic.json', JSON.stringify(antitoxic))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ DEACTIVATED ANTI TOXIC*')
					} else {
						reply(`*「 ❗ 」Tambah Parameter 1/enable Atau 0/disable*`)
					}
					break
					case 'antixnxx':
					   if (!isRegistered) return reply( ind.noregis())     
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('*TAMBAHKAN ANGKA 1 UNTUK ON ATAU 0 UNTUK OFF!*')
					if (Number(args[0]) === 1) {
						if (isAntiXnxx) return reply('*SUDAH AKTIF* !!!')
						antixnxx.push(from)
						fs.writeFileSync('./src/antixnxx.json', JSON.stringify(antixnxx))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ ACTIVATED ANTIXNXX*')
					} else if (Number(args[0]) === 0) {
						antixnxx.splice(from, 1)
						fs.writeFileSync('./src/antixnxx.json', JSON.stringify(antixnxx))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ DEACTIVATED ANTIXNXX*')
					} else {
						reply(`*「 ❗ 」Tambah Parameter 1/enable Atau 0/disable*`)
					}
					break
              case 'leveling':
                 if (!isRegistered) return reply( ind.noregis())     
				if (!isGroup) return reply(`KHUSUS GRUP`)
				if (!isGroupAdmins) return reply(`KHUSUS ADMIN`)
                if (args.length < 1) return reply('ketik 1 untuk mengaktifkan, 0 untuk menonaktifkan')
                if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('fitur level sudah aktif sebelum nya')
                    _leveling.push(from)
                    fs.writeFileSync('./lib/leveling.json', JSON.stringify(_leveling))
                     reply('*「 ❗ 」Berhasil Mengaktifkan Mode Leveling Di Group Ini️*')
                } else if (args[0] === 'disable') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./lib/leveling.json', JSON.stringify(_leveling))
                     reply('*「 ❗ 」Berhasil Menonaktifkan Mode Leveling Di Group Ini️*')
                } else {
                    reply(`*「 ❗ 」Tambah Parameter 1/enable Atau 0/disable*`)
                }
					break
					case 'setname':
                if (!isGroup) return reply('khusus grup')
			    if (!isGroupAdmins) return reply('khusus admin')
				if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: freply4})
					break
                case 'setdesc':
                if (!isGroup) return reply('khusus grup')
			    if (!isGroupAdmins) return reply('khusus admin')
				if (!isBotGroupAdmins) return reply('BOT HARUS JADI ADMIN DULU')
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: freply4})
					break
					case 'sider':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				infom = await client.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
				tagg = []
				teks = `Telah Dibaca Oleh :\n\n`
				for(let i of infom.reads){
				teks += '@' + i.jid.split('@')[0] + '\n'
				teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
				tagg.push(i.jid)
				}
				mentions(teks, tagg, true)
				break
                                case 'promote':
                                   if (!isRegistered) return reply( ind.noregis())     
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				case 'demote':
				   if (!isRegistered) return reply( ind.noregis())     
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
					
				case 'add':
				   if (!isRegistered) return reply( ind.noregis())     
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
				//case 'kick':\\
				   if (!isRegistered) return reply( ind.noregis())     
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
					    //case 'kick':\\
                   if (!isRegistered) return reply( ind.noregis())     
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                teks += `yahahaha asep ke kick:\n`
                teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                client.groupRemove(from, mentioned)
                } else {
                mentions(`yahahaha asep ke kick @${mentioned[0].split('@')[0]} `, mentioned, true)
                client.groupRemove(from, mentioned)
                }
                break
                case 'kick':
                                   if (!isRegistered) return reply( ind.noregis())     
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					reply(`*MAAF FITUR INI DIMATIKAN OWNER*`)
					break
					case 'simih':
					if (!isOwner) return reply('*anda siapa? ini hanya untuk owner*')
					   if (!isRegistered) return reply( ind.noregis())     
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('Mode simi sudah aktif')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukses mengaktifkan mode simi di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
				case 'welcome':
				   if (!isRegistered) return reply( ind.noregis())     
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
                                      break
//============================〔MENU OWNER〕============================\\     
              
                   case 'addprem':
                      if (!isRegistered) return reply( ind.noregis())     
					if (!isOwner) return reply('*anda siapa? ini hanya untuk owner*')
					if (args.length < 1) return reply(`contoh ${prefix + command} 6285298595430\n\natau bisa juga dengan ${prefix + command} tag target`)
					adpr = body.slice(10)
					premium.push(`${adpr}@s.whatsapp.net`)
					fs.writeFileSync('./src/premium.json', JSON.stringify(premium))
					reply(`Berhasil Menambahkan ${adpr} Ke Daftar Premium`)
				
					break
					case 'dellprem':
					   if (!isRegistered) return reply( ind.noregis())     
					if (!isOwner) return reply(ind.ownerb())
					din02 = body.slice(11)
					delp = premium.indexOf(din02)
					premium.splice(delp, 1)
					fs.writeFileSync('./src/premium.json', JSON.stringify(premium))
					reply(`Berhasil Menghapus ${din02} Dari Daftar Premium`)
					
					break				
					case 'premiumlist':
					   if (!isRegistered) return reply( ind.noregis())     
					client.updatePresence(from, Presence.composing) 

					teks = `*JUMLAH USER PREMIUM*\n`
					no = 0
					for (let premi of premium) {
						no += 1
						teks += `${no.toString()}> @${premi.split('@')[0]}\n`
					}
					teks += `Jumlah User Premium : ${premium.length}\n *${pushname}*`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: freply4, contextInfo: {"mentionedJid": premium}})
					
					break
			 case 'setwm':
                     if (!isRegistered) return reply( ind.noregis())     
			if (!isOwner) return reply(mess.only.ownerB)
					ini_nama = args.join(" ").split("&")
					namo = ini_nama[0].trim()
					ator = ini_nama[1].trim()
					reply(`Namo Dan Ator berhasil di ubah menjadi ${namo} & ${ator}`)
					break 
				break 
                  case 'setleave':
                     if (!isRegistered) return reply( ind.noregis())     
			if (!isOwner) return reply(mess.only.ownerB)
			    if (args.length < 1) return reply('*Teks nya mana gan?*')
                    client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					leave = body.slice(9)
					client.sendMessage(from,`\`\`\`Leave berhasil di ubah menjadi : ${body.slice(9)}\`\`\``, text,{quoted : freply2})
				break 
				case 'setwelcome':
				   if (!isRegistered) return reply( ind.noregis())     
			if (!isOwner) return reply(mess.only.ownerB)
			    if (args.length < 1) return reply('*Teks nya mana gan?*')
                    client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					welcome = body.slice(11)
					client.sendMessage(from,`\`\`\`Welcome berhasil di ubah menjadi : ${body.slice(11)}\`\`\``, text,{quoted : freply2})
				break 
		       case 'setfake1':
if (!isRegistered) return reply( ind.noregis())
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return
					fake1 = args[0]
					setting.fake1 = fake1
					fs.writeFileSync('./src/settings.json', JSON.stringify(setting, null, '\t'))
					reply(`Fake1 berhasil di ubah menjadi : ${fake1}`)
					break
					case 'setfake2':
if (!isRegistered) return reply( ind.noregis())
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return
					fake2 = args[0]
					setting.fake2 = fake2
					fs.writeFileSync('./src/settings.json', JSON.stringify(setting, null, '\t'))
					reply(`Fake2 berhasil di ubah menjadi : ${fake2}`)
					break
					case 'setprefix':
					   if (!isRegistered) return reply( ind.noregis())     
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return
					prefix = args[0]
					setting.prefix = prefix
					fs.writeFileSync('./src/settings.json', JSON.stringify(setting, null, '\t'))
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
					break
				case 'setcr':
				   if (!isRegistered) return reply( ind.noregis())     
			if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return
			        cr = args[0]
			        setting.cr = cr
			        fs.writeFileSync('./src/setiings.json', JSON.stringify(setting, null, '\t'))
				    reply(`Sukses merubah cr, menjadi : ${cr}`)
				    break
              case 'leave':
                 if (!isRegistered) return reply( ind.noregis())     
                if (!isOwner) return reply('Kamu siapa?')
                    if (!isGroup) return reply(mess.only.group)
                    if (isGroupAdmins || isOwner) {
                    	client.groupLeave(from)
                    } else {
                        reply(mess.only.admin)
                    }
                    break
                    case 'clone':
                       if (!isRegistered) return reply( ind.noregis())     
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('Tag target yang ingin di clone')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Gagal om')
					}
					break
				case 'bc':
				   if (!isRegistered) return reply( ind.noregis())     
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
                     client.sendMessage(_.jid, buff, MessageType.image, {caption: `「 PESAN BROADCAST 」\n\nPengirim : owner\nNomor : wa.me/6285731261728\nPesan : ${body.slice(4)}`})
						}
						reply('Suksess broadcast ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「BROADCAST MITSUHA BOTZ」*\n\nPengirim : owner\nNomor : wa.me/6285731261728\nPesan : ${body.slice(4)}`)
						}
						reply('Suksess broadcast ')
					}
					break
					
					
//============================〔MENU MAKER〕============================\\      
      case 'magernulis':
      if (!isRegistered) return reply( ind.noregis())     
      if (args.length < 1) return reply(`Textnya Mana?? contoh *$${command} MITSUHA*`)
      reply('*「 WAIT 」*  SEDANG DIPROSES')
      iu = body.slice(11)
     pp = await getBuffer(`https://api.xteam.xyz/magernulis?nama= &kelas= &text=${iu}&APIKEY=0fb7a017cdaf4f85`)
      client.sendMessage(from, pp, MessageType.image, { quoted: freply3 })
      break
       case 'maker1':
          if (!isRegistered) return reply( ind.noregis())     
          if (args.length < 1) return reply(`Textnya Mana?? contoh *$${command} MITSUHA*`)
        reply('*「 WAIT 」*  SEDANG DIPROSES')
        hes = await fetchJson(`https://zahirr-web.herokuapp.com/api/maker3d?text=${body.slice(7)}&apikey=zahirgans`, { method: 'get' })
        hess = await getBuffer(hes.result.results)
        client.sendMessage(from, hess, MessageType.image, { quoted: freply3 })
        break
        case 'maker2':
          if (!isRegistered) return reply( ind.noregis())     
          if (args.length < 1) return reply(`Textnya Mana?? contoh *$${command} MITSUHA*`)
        reply('*「 WAIT 」*  SEDANG DIPROSES')
        hes = await fetchJson(`https://zahirr-web.herokuapp.com/api/maker2?text=${body.slice(7)}&apikey=zahirgans`, { method: 'get' })
        hess = await getBuffer(hes.result.results)
        client.sendMessage(from, hess, MessageType.image, { quoted: freply3 })
        break
        case 'maker3':
          if (!isRegistered) return reply( ind.noregis())     
          if (args.length < 1) return reply(`Textnya Mana?? contoh *$${command} MITSUHA*`)
        reply('*「 WAIT 」*  SEDANG DIPROSES')
        hes = await fetchJson(`https://zahirr-web.herokuapp.com/api/maker3?text=${body.slice(7)}&apikey=zahirgans`, { method: 'get' })
        hess = await getBuffer(hes.result.results)
        client.sendMessage(from, hess, MessageType.image, { quoted: freply3 })
        break
        case 'maker4':
          if (!isRegistered) return reply( ind.noregis())     
          if (args.length < 1) return reply(`Textnya Mana?? contoh *$${command} MITSUHA*`)
        reply('*「 WAIT 」*  SEDANG DIPROSES')
        hes = await fetchJson(`https://zahirr-web.herokuapp.com/api/maker4?text=${body.slice(7)}&apikey=zahirgans`, { method: 'get' })
        hess = await getBuffer(hes.result.results)
        client.sendMessage(from, hess, MessageType.image, { quoted: freply3 })
        break
      case 'maker5':
          if (!isRegistered) return reply( ind.noregis())
     if (args.length < 1) return reply(`Textnya Mana?? contoh *$${command} MITSUHA*`)
        reply('*「 WAIT 」*  SEDANG DIPROSES')
        hes = await fetchJson(`https://zahirr-web.herokuapp.com/api/maker3d?text=${body.slice(7)}&apikey=zahirgans`, { method: 'get' })
        hess = await getBuffer(hes.result.results)
        client.sendMessage(from, hess, MessageType.image, { quoted: freply3 })
        break
        case 'maker6':
          if (!isRegistered) return reply( ind.noregis())     
          if (args.length < 1) return reply(`Textnya Mana?? contoh *$${command} MITSUHA*`)
        reply('*「 WAIT 」*  SEDANG DIPROSES')
        hes = await fetchJson(`https://zahirr-web.herokuapp.com/api/maker3d/no2?text=${body.slice(7)}&apikey=zahirgans`, { method: 'get' })
        hess = await getBuffer(hes.result.results)
        client.sendMessage(from, hess, MessageType.image, { quoted: freply3 })
        break
        case 'maker7':
          if (!isRegistered) return reply( ind.noregis())     
          if (args.length < 1) return reply(`Textnya Mana?? contoh *$${command} MITSUHA*`)
        reply('*「 WAIT 」*  SEDANG DIPROSES')
        hes = await fetchJson(`https://zahirr-web.herokuapp.com/api/maker3d/no3?text=${body.slice(7)}&apikey=zahirgans`, { method: 'get' })
        hess = await getBuffer(hes.result.results)
        client.sendMessage(from, hess, MessageType.image, { quoted: freply3 })
        break
        case 'maker8':
          if (!isRegistered) return reply( ind.noregis())    
          if (args.length < 1) return reply(`Textnya Mana?? contoh *$${command} MITSUHA*`)
        reply('*「 WAIT 」*  SEDANG DIPROSES')
        hes = await fetchJson(`https://zahirr-web.herokuapp.com/api/maker3d/no4?text=${body.slice(7)}&apikey=zahirgans`, { method: 'get' })
        hess = await getBuffer(hes.result.results)
        client.sendMessage(from, hess, MessageType.image, { quoted: freply3 })
        break
        case 'sertifikatepep':
          if (!isRegistered) return reply( ind.noregis())     
          if (args.length < 1) return reply(`Textnya Mana?? contoh *$${command} MITSUHA*`)
        reply('*「 WAIT 」*  SEDANG DIPROSES')
        hes = await fetchJson(`https://zahirr-web.herokuapp.com/api/maker/special/epep?text=${body.slice(15)}&apikey=zahirgans`, { method: 'get' })
        hess = await getBuffer(hes.result.results)
        client.sendMessage(from, hess, MessageType.image, { quoted: freply3 })
        break
        case 'transformers':
          if (!isRegistered) return reply( ind.noregis())     
          if (args.length < 1) return reply(`Textnya Mana?? contoh *$${command} MITSUHA*`)
        reply('*「 WAIT 」*  SEDANG DIPROSES')
        hes = await fetchJson(`https://zahirr-web.herokuapp.com/api/maker/special/transformer?text=${body.slice(13)}&apikey=zahirgans`, { method: 'get' })
        hess = await getBuffer(hes.result.results)
        client.sendMessage(from, hess, MessageType.image, { quoted: freply3 })
        break
case 'bplogo':
          if (!isRegistered) return reply( ind.noregis())     
          if (args.length < 1) return reply(`Textnya Mana?? contoh *$${command} MITSUHA*`)
        reply('*「 WAIT 」*  SEDANG DIPROSES')
        hes = await getBuffer(`https://api.lolhuman.xyz/api/textprome/blackpink?apikey=476fa612fb3d4f042a1dd9bb&text=${body.slice(7)}`, { method: 'get' })
        client.sendMessage(from, hes, MessageType.image, { quoted: freply3 })
        break
       case 'gplaybutton':
          if (!isRegistered) return reply( ind.noregis())     
        iu = body.slice(12)
        if (args.length < 1) return reply(`Textnya Mana?? contoh *$${command} MITSUHA*`)
        reply('*「 WAIT 」*  SEDANG DIPROSES')
        hes = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/goldplaybutton?apikey=476fa612fb3d4f042a1dd9bb&text=${iu}`, { method: 'get' })
        client.sendMessage(from, hes, MessageType.image, { quoted: freply3 })
        break
        case 'splaybutton':
           if (!isRegistered) return reply( ind.noregis())     
        iu = body.slice(12)
        if (args.length < 1) return reply(`Textnya Mana?? contoh *$${command} MITSUHA*`)
        reply('*「 WAIT 」*  SEDANG DIPROSES')
        hes = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/silverplaybutton?apikey=476fa612fb3d4f042a1dd9bb&text=${iu}`, { method : 'get' })
        client.sendMessage(from, hes, MessageType.image, { quoted: freply3 })
        break
        case 'text3d':
           if (!isRegistered) return reply( ind.noregis())     
        iiu = body.slice(7)
        if (args.length < 1) return reply(`Textnya Mana?? contoh *$${command} MITSUHA*`)
        reply('*「 WAIT 」*  SEDANG DIPROSES')
        hes = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=n3zxghJzUiPwdTKWGkP96eiv16M&text=${iiu}`, { method : 'get' })
        client.sendMessage(from, hes, MessageType.image, { quoted: freply3 })
        break
        case 'snow':
           if (!isRegistered) return reply( ind.noregis())     
        iu = body.slice(5)
        if (args.length < 1) return reply(`Textnya Mana?? contoh *$${command} MITSUHA*`)
        reply('*「 WAIT 」*  SEDANG DIPROSES')
        hes = await getBuffer(`https://api.xteam.xyz/textpro/snowtext?text=${iu}&APIKEY=0fb7a017cdaf4f85`, { method : 'get' })
        client.sendMessage(from, hes, MessageType.image, { quoted: freply3 })
        break
        case 'cloud':
           if (!isRegistered) return reply( ind.noregis())     
        iu = body.slice(6)
        if (args.length < 1) return reply(`Textnya Mana?? contoh *$${command} MITSUHA*`)
        reply('*「 WAIT 」*  SEDANG DIPROSES')
        hes = await getBuffer(`https://api.xteam.xyz/textpro/cloudtext?text=${iu}&APIKEY=0fb7a017cdaf4f85`, { method : 'get' })
        client.sendMessage(from, hes, MessageType.image, { quoted: freply3 })
        break
        case '3dluxuary':
           if (!isRegistered) return reply( ind.noregis())     
        iu = body.slice(10)
        if (args.length < 1) return reply(`Textnya Mana?? contoh *$${command} MITSUHA*`)
        reply('*「 WAIT 」*  SEDANG DIPROSES')
        hes = await getBuffer(`https://api.xteam.xyz/textpro/3dluxury?text=${iu}&APIKEY=0fb7a017cdaf4f85`, { method : 'get' })
        client.sendMessage(from, hes, MessageType.image, { quoted: freply3 })
        break
            case 'thunder':
               if (!isRegistered) return reply( ind.noregis())   
  if (args.length < 1) return reply(`Textnya Mana?? contoh *$${command} MITSUHA*`)
            reply('*「 WAIT 」*  SEDANG DIPROSES')
            hooh = await getBuffer(`https://api.lolhuman.xyz/api/textprome/thunder?apikey=476fa612fb3d4f042a1dd9bb&text=${body.slice(8)}`, { method : 'get' })
            client.sendMessage(from, hooh, MessageType.image, { quoted: freply3 })
             break
             case 'chrome':
               if (!isRegistered) return reply( ind.noregis())     
               if (args.length < 1) return reply(`Textnya Mana?? contoh *$${command} MITSUHA*`)
            reply('*「 WAIT 」*  SEDANG DIPROSES')
            hooh = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/chrome?text=${body.slice(7)}&apikey=ikygans`, { method : 'get' })
            client.sendMessage(from, hooh, MessageType.image, { quoted: freply3 })
             break
             case 'tekstoimg':
               if (!isRegistered) return reply( ind.noregis())     
               if (args.length < 1) return reply(`Textnya Mana?? contoh *$${command} MITSUHA*`)
            reply('*「 WAIT 」*  SEDANG DIPROSES')
            hooh = await getBuffer(`http://zekais-api.herokuapp.com/text2png?text=${body.slice(10)}&color=aqua`, { method : 'get' })
            client.sendMessage(from, hooh, MessageType.image, { quoted: freply3 })
             break
             case 'ytcomand':
               if (!isRegistered) return reply( ind.noregis())     
               var gh = body.slice(9)
				var gbl = gh.split("|")[0];
				var gblk = gh.split("|")[1];
				if (args.length < 1) return reply(`Textnya Mana?? contoh *$${command} MITSUHA|BOTZ*`)
            reply('*「 WAIT 」*  SEDANG DIPROSES')
            hooh = await getBuffer(`http://zekais-api.herokuapp.com/ytc?image=https://i.pinimg.com/736x/30/e3/b3/30e3b3d7157a3cee502760a4a17c20fd.jpg&username=${gbl}&text=${gblk}`, { method : 'get' })
            client.sendMessage(from, hooh, MessageType.image, { quoted: freply3 })
             break
				case 'tahta':
				   if (!isRegistered) return reply( ind.noregis())     
                   F = body.slice(7)
                   if (args.length < 1) return reply(`Textnya Mana?? contoh *$${command} MITSUHA*`)
                   costum('SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?apikey=n3zxghJzUiPwdTKWGkP96eiv16M&text=${F}`)
                   client.sendMessage(from, anu, MessageType.image, {caption: `nihh kack`, quoted: freply3})
                   break
                   case 'dropwater':
				   if (!isRegistered) return reply( ind.noregis())     
                   F = body.slice(10)
                   if (args.length < 1) return reply(`Textnya Mana?? contoh *$${command} MITSUHA*`)
                   costum('SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/dropwater?apikey=n3zxghJzUiPwdTKWGkP96eiv16M&text=${F}`)
                   client.sendMessage(from, anu, MessageType.image, {caption: `nihh kack`, quoted: freply3})
                   break
               case 'pornlogo':
                  if (!isRegistered) return reply( ind.noregis())     
				var gh = body.slice(10)
				var gbl = gh.split("|")[0];
				var gblk = gh.split("|")[1];
				if (args.length < 1) return reply(`Textnya Mana?? contoh *$${command} MITSUHA|BOTZ*`)
				reply('*「 WAIT 」*  SEDANG DIPROSES')
				buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/pornhub?apikey=476fa612fb3d4f042a1dd9bb&text1=${gbl}&text2=${gblk}`, { method: 'get'})
				client.sendMessage(from, buffer, MessageType.image, {quoted: freply3})
				break
				case 'marvellogo':
				   if (!isRegistered) return reply( ind.noregis())     
				var gh = body.slice(11)
				var gbl = gh.split("|")[0];
				var gblk = gh.split("|")[1];
				if (args.length < 1) return reply(`Textnya Mana?? contoh *${prefix + command} MITSUHA|BOTZ*`)
				reply('*「 WAIT 」*  SEDANG DIPROSES')
				buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/marvelstudio?apikey=476fa612fb3d4f042a1dd9bb&text1=${gbl}&text2=${gblk}`, { method: 'get'})
				client.sendMessage(from, buffer, MessageType.image, {quoted: freply3})
				break
				case 'avenglogo':
				   if (!isRegistered) return reply( ind.noregis())     
				var gh = body.slice(11)
				var gbl = gh.split("|")[0];
				var gblk = gh.split("|")[1];
				if (args.length < 1) return reply(`Textnya Mana?? contoh *${prefix + command} MITSUHA|BOTZ*`)
				reply('*「 WAIT 」*  SEDANG DIPROSES')
				buffer = await getBuffer(`https://api.zeks.xyz/api/logoaveng?apikey=n3zxghJzUiPwdTKWGkP96eiv16M&text1=${gbl}&text2=${gblk}`, { method: 'get'})
				client.sendMessage(from, buffer, MessageType.image, {quoted: freply3})
				break
                 case 'water':
				   if (!isRegistered) return reply( ind.noregis())     
				var gh = body.slice(7)
				var gbl = gh.split("|")[0];
				var gblk = gh.split("|")[1];
				if (args.length < 1) return reply(`Textnya Mana?? contoh *${prefix + command} MITSUHA|BOTZ*`)
				reply('*「 WAIT 」*  SEDANG DIPROSES')
				bufferr = await fetchJson(`https://api.zeks.xyz/api/watercolour?apikey=n3zxghJzUiPwdTKWGkP96eiv16M&text1=${gbl}&text2=${gblk}`)
				buffer = await getBuffer(bufferr.result)
				client.sendMessage(from, buffer, MessageType.image, {quoted: freply3})
				break
//============================〔MENU OTHER〕============================\\        
        case 'makegroup':
     	if (!isRegistered) return reply(ind.noregis())
     if (!isPrem) return reply(`*maaf* ${pushname} *kamu bukan user premium!*`)
				const aineloh = body.slice(11)
				const ainenihh = aineloh.split("|")[0]
				const okelahh = aineloh.split("|")[1].replace("@","")
				if (args.length < 1) return reply(`Textnya Mana?? contoh *$${command} MITSUHA*`)
				client.groupCreate(`${ainenihh}`, [`62858266304780@s.whatsapp.net`,`${okelahh}@s.whatsapp.net`])
				reply('_Sucses creategroup_')
			break
 case 'pesan':
                   		if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`[❗] Cara mengirim pesan kepada pengguna whatsapp\nUsage :\n${prefix}${command} +codenegara|halo kak\n\nEx :\n${prefix}${command} +6289654360447|halo kak\nError :\n${prefix}${command} +62 8xx-xxx-xxx|halo kak\nError Auto Banned!`)
					var FG = body.slice(8)
					var F1 = FG.split("|")[0];
					var F2 = FG.split("|")[1];
					client.sendMessage(`${F1}@s.whatsapp.net`, `Pengirim : ${pushname}\nPesan : ${F2}`, text, {quoted:mek})
					reply('Berhasil mengirim pesan..')
				break
                case 'jadian':
					                if (!isGroup) return reply(mess.only.group)
					var ea = groupMembers
					var ae = groupMembers
					var xxx = ea[Math.floor(Math.random() * ae. length)]
					var yada = ae[Math.floor(Math.random() * ea.length)]
					let vejs = `Ciee... yang lagi jadian\n@${xxx.jid.split('@') [0]} ♥️ @${yada.jid.split('@')[0]}\nSemoga Langgeng Hii`
					mentions(vejs, [xxx.jid, yada.jid], true)
					break
					case 'sange':
					                if (!isGroup) return reply(mess.only.group)
					var eea = groupMembers
					var xxxx = eea[Math.floor(Math.random() * eea. length)]
					let vejis = `Yang tersange digrup adalah\n@${xxxx.jid.split('@') [0]} `
					mentions(vejis, [xxxx.jid], true)
					break
					case 'gay':
					                if (!isGroup) return reply(mess.only.group)
					var eexa = groupMembers
					var xxxxx = eexa[Math.floor(Math.random() * eexa. length)]
					let vejxis = `Yang gay digrup adalah\n@${xxxxx.jid.split('@') [0]} `
					mentions(vejxis, [xxxxx.jid], true)
					break
					case 'culun':
					                if (!isGroup) return reply(mess.only.group)
					var eexea = groupMembers
					var xxxexx = eexea[Math.floor(Math.random() * eexea. length)]
					let vejexis = `Yang culun digrup adalah\n@${xxxexx.jid.split('@') [0]} `
					mentions(vejexis, [xxxexx.jid], true)
					break
					case 'lesbi':
					                if (!isGroup) return reply(mess.only.group)
					var eexiea = groupMembers
					var xxxeixx = eexiea[Math.floor(Math.random() * eexiea. length)]
					let vejeixis = `Yang lesbi digrup adalah\n@${xxxeixx.jid.split('@') [0]} `
					mentions(vejeixis, [xxxeixx.jid], true)
					break
					case 'pintar':
					                if (!isGroup) return reply(mess.only.group)
					var erexiea = groupMembers
					var xrxxeixx = erexiea[Math.floor(Math.random() * erexiea. length)]
					let vrejeixis = `Yang pintar digrup adalah\n@${xrxxeixx.jid.split('@') [0]} `
					mentions(vrejeixis, [xrxxeixx.jid], true)
					break
					case 'ganteng':
					                if (!isGroup) return reply(mess.only.group)
					var erexieau = groupMembers
					var xrxxeixxu = erexieau[Math.floor(Math.random() * erexieau. length)]
					let vrejeixisu = `Yang ganteng digrup adalah\n@${xrxxeixxu.jid.split('@') [0]} `
					mentions(vrejeixisu, [xrxxeixxu.jid], true)
					break
					case 'cantik':
					                if (!isGroup) return reply(mess.only.group)
					var yerexiea = groupMembers
					var yxrxxeixx = yerexiea[Math.floor(Math.random() * yerexiea. length)]
					let yvrejeixis = `Yang cantik digrup adalah\n@${yxrxxeixx.jid.split('@') [0]} `
					mentions(yvrejeixis, [yxrxxeixx.jid], true)
					break
					case 'bodoh':
					                if (!isGroup) return reply(mess.only.group)
					var eexieai = groupMembers
					var xxxeixxi = eexieai[Math.floor(Math.random() * eexieai. length)]
					let vejeixisi = `Yang goblok digrup adalah\n@${xxxeixxi.jid.split('@') [0]} `
					mentions(vejeixisi, [xxxeixxi.jid], true)
					break
            case 'tebakgambar':
                        if (!isRegistered) return reply( ind.noregis())     
                        reply(`*SABAR YA MAS LAGI NYARI SOAL*`)
                        hiy = await fetchJson(`https://api.xteam.xyz/game/tebakgambar?APIKEY=0fb7a017cdaf4f85`)
                        hiya = await getBuffer(hiy.url)
                        tebak = `*JAWABAN* ${hiy.jawaban}`
                        setTimeout( () => {
				client.sendMessage(from, tebak, text, {quoted: freply3})
				}, 30000)
				setTimeout( () => {
				client.sendMessage(from, '_10 Detik lagi..._', text, {quoted: freply3})
				}, 20000)
				setTimeout( () => {
				client.sendMessage(from, '_20 Detik lagi..._', text, {quoted: freply3})
				}, 10000)
				
				setTimeout( () => {
				client.sendMessage(from, '_30 Detik lagi..._', text, {quoted: freply3})
				}, 2500)
				setTimeout( () => {
				client.sendMessage(from, hiya, MessageType.image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: freply3 })
				}, 0)
				break
				case 'tebakbendera':
                        if (!isRegistered) return reply( ind.noregis())     
                        reply(`*SABAR YA MAS LAGI NYARI SOAL*`)
                        hiy = await fetchJson(`https://api.xteam.xyz/game/tebakbendera?APIKEY=0fb7a017cdaf4f85`)
                        hiya = `TEBAK BRO GA BISA JAWAB DONASI HEHE ${hiy.bendera}`
                        tebak = `*JAWABAN* ${hiy.jawaban}`
                        setTimeout( () => {
				client.sendMessage(from, tebak, text, {quoted: freply3})
				}, 30000)
				setTimeout( () => {
				client.sendMessage(from, '_10 Detik lagi..._', text, {quoted: freply3})
				}, 20000)
				setTimeout( () => {
				client.sendMessage(from, '_20 Detik lagi..._', text, {quoted: freply3})
				}, 10000)
				setTimeout( () => {
				client.sendMessage(from, '_30 Detik lagi..._', text, {quoted: freply3})
				}, 2500)
				setTimeout( () => {
				client.sendMessage(from, hiya, text, { quoted: freply3 })
				}, 0)
				break
				case 'tebakangka':
                        if (!isRegistered) return reply( ind.noregis())     
                        reply(`*SABAR YA MAS LAGI NYARI SOAL*`)
                        hiy = await fetchJson(`https://api.xteam.xyz/game/tebakangka?q=8&APIKEY=0fb7a017cdaf4f85`)
                        hiya = `TEBAK BRO GA BISA JAWAB DONASI HEHE`
                        tebak = `*HASIL* ${hiy.hasil}\n\n*JAWABAN BOT* ${hiy.jawabanbot}\n*JAWABAN MU* ${hiy.jawabanmu}\n\n*POIN* ${hiy.poin}`
                        setTimeout( () => {
				client.sendMessage(from, tebak, text, {quoted: freply3})
				}, 30000)
				setTimeout( () => {
				client.sendMessage(from, '_10 Detik lagi..._', text, {quoted: freply3})
				}, 20000)
				setTimeout( () => {
				client.sendMessage(from, '_20 Detik lagi..._', text, {quoted: freply3})
				}, 10000)
				setTimeout( () => {
				client.sendMessage(from, '_30 Detik lagi..._', text, {quoted: freply3})
				}, 2500)
				setTimeout( () => {
				client.sendMessage(from, hiya, text, { quoted: freply3 })
				}, 0)
				break
            case 'artinama':
            if (!isRegistered) return reply( ind.noregis())     
            iu = body.slice(9)
            data = await fetchJson(`https://api.zeks.xyz/api/artinama?apikey=n3zxghJzUiPwdTKWGkP96eiv16M&nama=${iu}`)
            jawab = `${data.result}`
            reply(jawab)
            break 
            case 'ukty':
					if (!isRegistered) return reply( ind.noregis())
					if (!isPrem) return reply(`*maaf* ${pushname} *kamu bukan user premium!*`)
					reply(`*「 WAIT 」*  SEDANG DIPROSES`)
					wk = await fetchJson(`https://api-alphabot.herokuapp.com/api/asupan/ukty?apikey=Alphabot`, { method: 'get' })
					wkwk = await getBuffer(wk.result.url)
					client.sendMessage(from, wkwk, video, { mimetype: 'video/mp4', quoted: freply3 })
					break
					case 'hijab':
					if (!isRegistered) return reply( ind.noregis())
					if (!isPrem) return reply(`*maaf* ${pushname} *kamu bukan user premium!*`)
					reply(`*「 WAIT 」*  SEDANG DIPROSES`)
					wk = await fetchJson(`https://api-alphabot.herokuapp.com/api/asupan/hijaber?apikey=Alphabot`, { method: 'get' })
					wkwk = await getBuffer(wk.result.url)
					client.sendMessage(from, wkwk, MessageType.image, { quoted: freply3 })
					break
					case 'rika':
					if (!isRegistered) return reply( ind.noregis())
					if (!isPrem) return reply(`*maaf* ${pushname} *kamu bukan user premium!*`)
					reply(`*「 WAIT 」*  SEDANG DIPROSES`)
					wk = await fetchJson(`https://api-alphabot.herokuapp.com/api/asupan/rikagusriani?apikey=Alphabot`, { method: 'get' })
					wkwk = await getBuffer(wk.result.url)
					client.sendMessage(from, wkwk, video, { mimetype: 'video/mp4', quoted: freply3 })
					break
					case 'ghea':
					if (!isRegistered) return reply( ind.noregis())
					if (!isPrem) return reply(`*maaf* ${pushname} *kamu bukan user premium!*`)
					reply(`*「 WAIT 」*  SEDANG DIPROSES`)
					wk = await fetchJson(`https://api-alphabot.herokuapp.com/api/asupan/ghea?apikey=Alphabot`, { method: 'get' })
					wkwk = await getBuffer(wk.result.url)
					client.sendMessage(from, wkwk, video, { mimetype: 'video/mp4', quoted: freply3 })
					break
					case 'bocil':
					if (!isRegistered) return reply( ind.noregis())
					if (!isPrem) return reply(`*maaf* ${pushname} *kamu bukan user premium!*`)
					reply(`*「 WAIT 」*  SEDANG DIPROSES`)
					wk = await fetchJson(`https://api-alphabot.herokuapp.com/api/asupan/bocil?apikey=Alphabot`, { method: 'get' })
					wkwk = await getBuffer(wk.result.url)
					client.sendMessage(from, wkwk, video, { mimetype: 'video/mp4', quoted: freply3 })
					break
					case 'santuy':
					if (!isRegistered) return reply( ind.noregis())
					if (!isPrem) return reply(`*maaf* ${pushname} *kamu bukan user premium!*`)
					reply(`*「 WAIT 」*  SEDANG DIPROSES`)
					wk = await fetchJson(`https://api-alphabot.herokuapp.com/api/asupan/santuy?apikey=Alphabot`, { method: 'get' })
					wkwk = await getBuffer(wk.result.url)
					client.sendMessage(from, wkwk, video, { mimetype: 'video/mp4', quoted: freply3 })
					break
            case 'artimimpi':
            if (!isRegistered) return reply( ind.noregis())     
            iu = body.slice(10)
            data = await fetchJson(`https://api.zeks.xyz/api/artimimpi?apikey=n3zxghJzUiPwdTKWGkP96eiv16M&q=${iu}`)
            jawab = `${data.result.string}`
            reply(jawab)
            break
         case 'role':
            if (!isRegistered) return reply( ind.noregis())     
					costum( `role kamu saat ini adalah *${role}*`, text, tescuk, cr)
					break
          case 'dadu':
             if (!isRegistered) return reply( ind.noregis())     
          data = fs.readFileSync('./stiker/ycyvXz2DqkmFr7aFhCkEpKbBATtBTnUJrv067pE-3KI=.webp')
          client.sendMessage(from, data, sticker, { quoted: freply3 })
          break
            case 'infogempa':
               if (!isRegistered) return reply( ind.noregis())     
            data = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=476fa612fb3d4f042a1dd9bb`)
            jawab = `*WAKTU*: ${data.result.waktu}\n*MAGNITUDO*: ${data.result.magnitudo}\n*KEDALAMAN*: ${data.result.kedalaman}\n*LOKASI*: ${data.result.map}`
            reply(jawab)
            break
            case 'covidindo':
               if (!isRegistered) return reply( ind.noregis())     
            data = await fetchJson(`http://zekais-api.herokuapp.com/corona?country=indonesia`)
            jawab = `*TOTAL KASUS* = ${data.result.total_case}\n*TOTAL KEMATIAN* = ${data.result.total_deaths}\n*KASUS AKTIF* = ${data.result.total_active}\n*TOTAL TEST* = ${data.result.total_tests}\n*TOTAL SEMBUH* = ${data.result.recovered}\n*KASUS HARI INI* = ${data.result.today_cases}\n*KEMATIAN HARI INI* = ${data.result.today_deaths}`
            reply(jawab)
            break
              case 'wiki':
                 if (!isRegistered) return reply( ind.noregis())     
              iu = body.slice(5)
              anu = await fetchJson(`https://xinzbot-api.herokuapp.com/api/wikipedia?search=${iu}&apikey=XinzBot`, {method: 'get'})
              anu1 = `${anu.result.result}`
              client.sendMessage(from, anu1, text, {quoted: freply3})
              break
              case 'brainly':
                 if (!isRegistered) return reply( ind.noregis())     
              iu = body.slice(8)
              anu = await fetchJson(`https://api.xteam.xyz/brainly?soal=${iu}&APIKEY=0fb7a017cdaf4f85`, {method: 'get'})
              anu1 = `*SOAL* : ${anu.soal}\n\n*JAWABAN* : ${anu.jawaban}`
              client.sendMessage(from, anu1, text, {quoted: freply3})
              break
              case 'translate':
                 if (!isRegistered) return reply( ind.noregis())     
              iu = body.slice(10)
              anu = await fetchJson(`https://xinzbot-api.herokuapp.com/api/translate?code=id&kata=${iu}&apikey=XinzBot`, {method: 'get'})
              anu1 = `${anu.result}`
              client.sendMessage(from, anu1, text, {quoted: freply3})
              break
              case 'cantikcek':
                 if (!isRegistered) return reply( ind.noregis())     
              py12 = ['1','2','3','4','5','6','7','8','9','0']
              py22 = ['1','2','3','4','5','6','7','8','9','0']
              const p62 = py12[Math.floor(Math.random() * py12.length)]
              const p72 = py22[Math.floor(Math.random() * py22.length)]
              reply(`Hasil Rate Bot *${p62}${p72}%*`)
              break
              case 'gantengcek':
                 if (!isRegistered) return reply( ind.noregis())     
              py11 = ['1','2','3','4','5','6','7','8','9','0']
              py21 = ['1','2','3','4','5','6','7','8','9','0']
              const p61 = py11[Math.floor(Math.random() * py11.length)]
              const p71 = py21[Math.floor(Math.random() * py21.length)]
              reply(`Hasil Rate Bot *${p61}${p71}%*`)
              break
              case 'gaycek':
                 if (!isRegistered) return reply( ind.noregis())     
              py1w = ['1','2','3','4','5','6','7','8','9','0']
              py2w = ['1','2','3','4','5','6','7','8','9','0']
              const p6w = py1w[Math.floor(Math.random() * py1w.length)]
              const p7w = py2w[Math.floor(Math.random() * py2w.length)]
              reply(`Hasil Rate Bot *${p6w}${p7w}%*`)
              break
              case 'lesbicek':
                 if (!isRegistered) return reply( ind.noregis())     
              py1e = ['1','2','3','4','5','6','7','8','9','0']
              py2e = ['1','2','3','4','5','6','7','8','9','0']
              const p6e = py1e[Math.floor(Math.random() * py1e.length)]
              const p7e = py2e[Math.floor(Math.random() * py2e.length)]
              reply(`Hasil Rate Bot *${p6e}${p7e}%*`)
              break
              case 'jelekcek':
                 if (!isRegistered) return reply( ind.noregis())     
              py10 = ['1','2','3','4','5','6','7','8','9','0']
              py20 = ['1','2','3','4','5','6','7','8','9','0']
              const p60 = py10[Math.floor(Math.random() * py10.length)]
              const p70 = py20[Math.floor(Math.random() * py20.length)]
              reply(`Hasil Rate Bot *${p60}${p70}%*`)
              break
              case 'pintarcek':
                 if (!isRegistered) return reply( ind.noregis())     
              py14 = ['1','2','3','4','5','6','7','8','9','0']
              py24 = ['1','2','3','4','5','6','7','8','9','0']
              const p64 = py14[Math.floor(Math.random() * py14.length)]
              const p74 = py24[Math.floor(Math.random() * py24.length)]
              reply(`Hasil Rate Bot *${p64}${p74}%*`)
              break
              case 'iqcek':
                 if (!isRegistered) return reply( ind.noregis())     
              py1kk = ['1','2','3','4','5','6','7','8','9','0']
              py2kk = ['1','2','3','4','5','6','7','8','9','0']
              const p6kk = py1kk[Math.floor(Math.random() * py1kk.length)]
              const p7kk = py2kk[Math.floor(Math.random() * py2kk.length)]
              reply(`Hasil Rate Bot *${p6kk}${p7kk}%*`)
              break
              case 'sangecek':
                 if (!isRegistered) return reply( ind.noregis())     
              py1ss = ['1','2','3','4','5','6','7','8','9','0']
              py2ss= ['1','2','3','4','5','6','7','8','9','0']
              const p6ss = py1ss[Math.floor(Math.random() * py1ss.length)]
              const p7ss = py2ss[Math.floor(Math.random() * py2ss.length)]
              reply(`Hasil Rate Bot *${p6ss}${p7ss}%*`)
              break
              case 'alimcek':
                 if (!isRegistered) return reply( ind.noregis())     
              pfy1 = ['1','2','3','4','5','6','7','8','9','0']
              pfy2 = ['1','2','3','4','5','6','7','8','9','0']
              const pf6 = pfy1[Math.floor(Math.random() * pfy1.length)]
              const pf7 = pfy2[Math.floor(Math.random() * pfy2.length)]
              reply(`Hasil Rate Bot *${pf6}${pf7}%*`)
              break
              case 'fish':
                 if (!isRegistered) return reply( ind.noregis())     
              py1 = ['1','2','3','4','5','6','7','8','9','0']
              py2 = ['1','2','3','4','5','6','7','8','9','0']
              py3 = ['1','2','3','4','5','6','7','8','9','0']  
              py4 = ['1','2','3','4','5','6','7','8','9','0']
              py5 = ['1','2','3','4','5','6','7','8','9','0']
              const p6 = py1[Math.floor(Math.random() * py1.length)]
              const p7 = py2[Math.floor(Math.random() * py2.length)]
              const p8 = py3[Math.floor(Math.random() * py3.length)]
              const p9 = py4[Math.floor(Math.random() * py4.length)]
              const p10 = py5[Math.floor(Math.random() * py5.length)]
              reply(`*|[ HASIL PANCINGAN DI LAUT ]|*\n\n🐡 = ${p6}\n🐠 = ${p7}\n🐟 = ${p8}\n🐙 = ${p9}\n🦐 = ${p10}`)
              break
              case 'hunt':
                 if (!isRegistered) return reply( ind.noregis())     
              py1 = ['1','2','3','4','5','6','7','8','9','0']
              py2 = ['1','2','3','4','5','6','7','8','9','0']
              py3 = ['1','2','3','4','5','6','7','8','9','0']  
              py4 = ['1','2','3','4','5','6','7','8','9','0']
              py5 = ['1','2','3','4','5','6','7','8','9','0']
              const pyy6 = py1[Math.floor(Math.random() * py1.length)]
              const pyy7 = py2[Math.floor(Math.random() * py2.length)]
              const pyy8 = py3[Math.floor(Math.random() * py3.length)]
              const pyy9 = py4[Math.floor(Math.random() * py4.length)]
              const pyy10 = py5[Math.floor(Math.random() * py5.length)]
              reply(`*|[ HASIL PERBURUAN DI HUTAN ]|*\n\n🐂 = ${pyy6}\n🐃 = ${pyy7}\n🦌 = ${pyy8}\n🐫 = ${pyy9}\n🐓 = ${pyy10}`)
              break
              case 'hilih':
              if (!isRegistered) return reply( ind.noregis())    
              iu = body.slice(6)
              pp = await fetchJson(`https://bx-hunter.herokuapp.com/api/hilih?kata=${iu}&apikey=ikygans`)
              reply(`${pp.result.result}`)
              break
              case 'heleh':
              if (!isRegistered) return reply( ind.noregis())    
              iu = body.slice(6)
              pp = await fetchJson(`https://bx-hunter.herokuapp.com/api/heleh?teks=${iu}&apikey=ikygans`)
              reply(`${pp.result.result}`)
              break
              case 'holoh':
              if (!isRegistered) return reply( ind.noregis())    
              iu = body.slice(6)
              pp = await fetchJson(`https://bx-hunter.herokuapp.com/api/holoh?teks=asuu&apikey=ikygans`)
              reply(`${pp.result.result}`)
              break
              case 'huluh':
              if (!isRegistered) return reply( ind.noregis())    
              iu = body.slice(6)
              pp = await fetchJson(`https://bx-hunter.herokuapp.com/api/huluh?teks=asuu&apikey=ikygans`)
              reply(`${pp.result.result}`)
              break
              case 'halah':
              if (!isRegistered) return reply( ind.noregis())    
              iu = body.slice(6)
              pp = await fetchJson(`https://bx-hunter.herokuapp.com/api/halah?teks=asuu&apikey=ikygans`)
              reply(`${pp.result.result}`)
              break
              case 'slot1':
                 if (!isRegistered) return reply( ind.noregis())     
              const fishhh = fishh[Math.floor(Math.random() * fishh.length)]
              const fishhh2 = fishh[Math.floor(Math.random() * fishh.length)]
              const fishhh3 = fishh[Math.floor(Math.random() * fishh.length)]
              client.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n${fishhh}\n${fishhh2}<=====\n${fishhh3}\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3 Binatang Sama Berarti Kamu Win\n\nContoh : 🦂 : 🦂 : 🦂<=====`, text, { quoted: freply3 })
            break
            case 'slot2':
if (!isRegistered) return reply( ind.noregis())
              const p = hewan[Math.floor(Math.random() * hewan.length)]
              const p2 = hewan[Math.floor(Math.random() * hewan.length)]
              const p3 = hewan[Math.floor(Math.random() * hewan.length)]
              client.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n${p}\n${p2}<=====\n${p3}\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3 Binatang Sama Berarti Kamu Win\n\nContoh : 🦂 : 🦂 : 🦂<=====`, text, { quoted: freply3 })
            break
              case 'cekchat':
                 if (!isRegistered) return reply( ind.noregis())     
              costum(`*TOTAL CHAT BOT*: ${totalchat.length}`, text, tescuk, cr)
              break
              case 'author':
              case 'owner':
              case 'creator':
                 if (!isRegistered) return reply( ind.noregis())     
                  client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: freply3})
                  break
                  case 'toimg':
                     if (!isRegistered) return reply( ind.noregis())     
					if (!isQuotedSticker) return reply('❌ reply stickernya um ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi sticker ke gambar ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, MessageType.image, {quoted: freply3, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
					case 'daftar':
                			if (isRegistered) return  reply(`You Udah Terdaftar Sebelumnya`)
                			if (!q.includes('|')) return  reply(`Format Salah`)
                			const namaUser = q.substring(0, q.indexOf('|') - 0)
                			const umurUser = q.substring(q.lastIndexOf('|') + 1)
                			const serialUser = createSerial(20)
                			if(isNaN(umurUser)) return await reply('Umur harus berupa angka!!')
                			if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                			if (umurUser > 40) return reply(`your age is too  old maximum 40 years`)
                			if (umurUser < 12) return reply(`your age is too young minimum 12 years`)
                teks = `*PENDAFTARAN DIRI BERHASIL*
 
• Nama Pengguna: ${namaUser}
• No: wa.me/${sender.split("@")[0]}
• Umur Kamu: ${umurUser}
• Serial: ${serialUser}
• Total Pengguna: ${_registered.length}

terimakasih telah mendaftarkan diri dengan bot, ketik ${prefix}menu untuk menampilkan list menu`
                					if (isGroup) {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await client.sendMessage(from, teks, text, {quoted: freply4})
                    			addLevelingId(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                			} else {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await client.sendMessage(from, teks, text, {quoted: freply4, serialUser, time, sender})
                    			addLevelingId(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                			}
				        break
				case 'wait':
				   if (!isRegistered) return reply( ind.noregis())     
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: freply3, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Foto aja mas')
					}
					break
					case 'info':
					   if (!isRegistered) return reply( ind.noregis())     
				me = client.user
			    uptime = process.uptime()
				reply(`*Nama bot* : ${me.name}\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*The bot is active on* : ${kyun(uptime)}`)
			    break
		         case 'donasi':
		         if (!isRegistered) return reply( ind.noregis())     
		reply(`*MAU DONASI YA BANG :)*\n\n*PULSA* =  +62 857-3126-1728\n*PAKET KUOTA* = INDOSAT\n*DANA* = +62 85731261728`)
		break
				case 'blocklist':
				   if (!isRegistered) return reply( ind.noregis())     
					teks = 'This is list of blocked number :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: freply3, contextInfo: {"mentionedJid": blocked}})
					break
				case 'ocr':
				   if (!isRegistered) return reply( ind.noregis())     
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja mas')
					}
					break
			    case 'del':
		        case 'd':
		        case 'delete':
		   if (!isRegistered) return reply( ind.noregis())     
			    client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
				break
				case 'nekonime':
					if (!isRegistered) return reply( ind.noregis())
					reply(`*「 WAIT 」*  SEDANG DIPROSES`)
					wk = await fetchJson(`http://zekais-api.herokuapp.com/randomneko`, { method: 'get' })
					wkwk = await getBuffer(wk.result)
					client.sendMessage(from, wkwk, MessageType.image, { quoted: freply3 })
					break
					case 'kpop':
					if (!isRegistered) return reply( ind.noregis())
					reply(`*「 WAIT 」*  SEDANG DIPROSES`)
					wk = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=Tobzzz17`, { method: 'get' })
					wkwk = await getBuffer(wk.result)
					client.sendMessage(from, wkwk, MessageType.image, { quoted: freply3 })
					break
					case 'neko':
					if (!isRegistered) return reply( ind.noregis())
					reply(`*「 WAIT 」*  SEDANG DIPROSES`)
					wk = await getBuffer(`https://pencarikode.xyz/api/neko?apikey=pais`, { method: 'get' })
					client.sendMessage(from, wk, MessageType.image, { quoted: freply3 })
					break
					case 'neko2':
				if (!isRegistered) return reply(ind.noregis())
				anu = await fetchJson(`https://nekos.life/api/v2/img/neko`, {method: 'get'})
				buffer = await getBuffer(anu.url)
				client.sendMessage(from, buffer, image, {quoted: freply4})
				break
				case 'waifu2':
				if (!isRegistered) return reply(ind.noregis())
				anu = await fetchJson(`https://nekos.life/api/v2/img/waifu`, {method: 'get'})
				buffer = await getBuffer(anu.url)
				client.sendMessage(from, buffer, image, {quoted: freply4})
				break
				case 'meow':
				if (!isRegistered) return reply(ind.noregis())
				anu = await fetchJson(`https://nekos.life/api/v2/img/meow`, {method: 'get'})
				buffer = await getBuffer(anu.url)
				client.sendMessage(from, buffer, image, {quoted: freply4})
				break
				case 'yuri2':
				if (!isRegistered) return reply(ind.noregis())
				anu = await fetchJson(`https://nekos.life/api/v2/img/yuri`, {method: 'get'})
				buffer = await getBuffer(anu.url)
				client.sendMessage(from, buffer, image, {quoted: freply4})
				break
				case 'peluk':
				if (!isRegistered) return reply(ind.noregis())
				     if (!isPrem) return reply(`*maaf* ${pushname} *kamu bukan user premium!*`)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/hug', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
				case 'kiss':
				if (!isRegistered) return reply(ind.noregis())
				     if (!isPrem) return reply(`*maaf* ${pushname} *kamu bukan user premium!*`)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/kiss', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'solog':
				if (!isRegistered) return reply(ind.noregis())
				     if (!isPrem) return reply(`*maaf* ${pushname} *kamu bukan user premium!*`)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/solog', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
					case 'shota':
					if (!isRegistered) return reply( ind.noregis())
					reply(`*「 WAIT 」*  SEDANG DIPROSES`)
					wk = await fetchJson(`http://zekais-api.herokuapp.com/randomshota`, { method: 'get' })
					wkwk = await getBuffer(wk.result)
					client.sendMessage(from, wkwk, MessageType.image, { quoted: freply3 })
					break
					case 'nsfwneko':
					if (!isRegistered) return reply( ind.noregis())
					reply(`*「 WAIT 」*  SEDANG DIPROSES`)
					wk = await getBuffer(`https://api.xteam.xyz/randomimage/nsfwneko?APIKEY=0fb7a017cdaf4f85`, { method: 'get' })
					client.sendMessage(from, wk, MessageType.image, { quoted: freply3 })
					break
					case 'nsfwblowjob':
					if (!isRegistered) return reply( ind.noregis())
					
					reply(`*「 WAIT 」*  SEDANG DIPROSES`)
					wk = await getBuffer(`https://bx-hunter.herokuapp.com/api/nsfw/blowjob?apikey=ikygans`, { method: 'get' })
					client.sendMessage(from, wk, MessageType.image, { quoted: freply3 })
					break
					case 'nsfwyuri':
					if (!isRegistered) return reply( ind.noregis())
					
					reply(`*「 WAIT 」*  SEDANG DIPROSES`)
					wk = await fetchJson(`https://x-restapi.herokuapp.com/api/yuri-nsfw?apikey=BETA`, { method: 'get' })
					wkwk = await getBuffer(wk.url)
					client.sendMessage(from, wkwk, MessageType.image, { quoted: freply3 })
					break
					case 'nsfwboobs':
					if (!isRegistered) return reply( ind.noregis())
					
					reply(`*「 WAIT 」*  SEDANG DIPROSES`)
					wk = await fetchJson(`https://x-restapi.herokuapp.com/api/boobs-nsfw?apikey=BETA`, { method: 'get' })
					wkwk = await getBuffer(wk.url)
					client.sendMessage(from, wkwk, MessageType.image, { quoted: freply3 })
					break
					case 'nsfwfoot':
					if (!isRegistered) return reply( ind.noregis())
					
					reply(`*「 WAIT 」*  SEDANG DIPROSES`)
					wk = await fetchJson(`https://api-alphabot.herokuapp.com/api/nsfw/foot?apikey=Alphabot`, { method: 'get' })
					wkwk = await getBuffer(wk.result)
					client.sendMessage(from, wkwk, MessageType.image, { quoted: freply3 })
					break
                    case 'yuri':
if (!isRegistered) return reply( ind.noregis())
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=yuri`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					client.sendMessage(from, nye, MessageType.image, { quoted: freply3 })
					break
                   case 'yaoi':
if (!isRegistered) return reply( ind.noregis())
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=yaoi`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					client.sendMessage(from, nye, MessageType.image, { quoted: freply3 })
					break
					
                   case 'waifu':
if (!isRegistered) return reply( ind.noregis())              
				    p12 = await getBuffer(`https://bx-hunter.herokuapp.com/api/sfw/waifu?apikey=ikygans`)
				client.sendMessage(from, p12, MessageType.image, { quoted: freply3 })
				break
				case 'husbu':
if (!isRegistered) return reply( ind.noregis())              
				    p1 = await fetchJson(`https://api.xteam.xyz/randomimage/husbu?APIKEY=0fb7a017cdaf4f85`)
				pp2 = await getBuffer(p1.result.image)
				client.sendMessage(from, pp2, MessageType.image, { quoted: freply3 })
				break
				case 'nsfwass':
				if (!isRegistered) return reply( ind.noregis())              
				    pp2 = await getBuffer(`https://api.xteam.xyz/randomimage/ass?APIKEY=0fb7a017cdaf4f85`, { quoted: freply3 })
				client.sendMessage(from, pp2, MessageType.image, { quoted: freply3 })
				break
				case 'nsfworgy':
				if (!isRegistered) return reply( ind.noregis())              
				    pp2 = await getBuffer(`https://api.xteam.xyz/randomimage/orgy?APIKEY=0fb7a017cdaf4f85`, { quoted: freply3 })
				client.sendMessage(from, pp2, MessageType.image, { quoted: freply3 })
				break
				case 'nsfwero':
				if (!isRegistered) return reply( ind.noregis())              
				    pp2 = await getBuffer(`https://api.xteam.xyz/randomimage/ero?APIKEY=0fb7a017cdaf4f85`, { quoted: freply3 })
				client.sendMessage(from, pp2, MessageType.image, { quoted: freply3 })
				break
				case 'nsfwbdsm':
				if (!isRegistered) return reply( ind.noregis())              
				    pp2 = await getBuffer(`https://api.xteam.xyz/randomimage/bdsm?APIKEY=0fb7a017cdaf4f85`, { quoted: freply3 })
				client.sendMessage(from, pp2, MessageType.image, { quoted: freply3 })
				break
				case 'nsfwahegao':
				if (!isRegistered) return reply( ind.noregis())              
				    pp2 = await getBuffer(`https://api.xteam.xyz/randomimage/ahegao?APIKEY=0fb7a017cdaf4f85`, { quoted: freply3 })
				client.sendMessage(from, pp2, MessageType.image, { quoted: freply3 })
				break
				case 'attp':
				if (!isRegistered) return reply( ind.noregis())              
				          if (args.length < 1) return reply(`Textnya Mana?? contoh *$${command} MITSUHA*`)
				    pp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(5)}`, { quoted: freply3 })
				client.sendMessage(from, pp2, sticker, { quoted: freply3 })
				break
				case 'cecanvietnam':
					if (!isRegistered) return reply( ind.noregis())
					
					reply(`*「 WAIT 」*  SEDANG DIPROSES`)
					wk = await fetchJson(`https://api-alphabot.herokuapp.com/api/cewe/vietnam?apikey=Alphabot`, { method: 'get' })
					wkwk = await getBuffer(wk.result.url)
					client.sendMessage(from, wkwk, MessageType.image, { quoted: freply3 })
					break
					case 'cecanchina':
					if (!isRegistered) return reply( ind.noregis())
					
					reply(`*「 WAIT 」*  SEDANG DIPROSES`)
					wk = await fetchJson(`https://api-alphabot.herokuapp.com/api/cewe/china?apikey=Alphabot`, { method: 'get' })
					wkwk = await getBuffer(wk.result.url)
					client.sendMessage(from, wkwk, MessageType.image, { quoted: freply3 })
					break
					case 'cecanmalay':
					if (!isRegistered) return reply( ind.noregis())
					
					reply(`*「 WAIT 」*  SEDANG DIPROSES`)
					wk = await fetchJson(`https://api-alphabot.herokuapp.com/api/cewe/malaysia?apikey=Alphabot`, { method: 'get' })
					wkwk = await getBuffer(wk.result.url)
					client.sendMessage(from, wkwk, MessageType.image, { quoted: freply3 })
					break
					case 'cecankorea':
					if (!isRegistered) return reply( ind.noregis())
					
					reply(`*「 WAIT 」*  SEDANG DIPROSES`)
					wk = await fetchJson(`https://api-alphabot.herokuapp.com/api/cewe/korea?apikey=Alphabot`, { method: 'get' })
					wkwk = await getBuffer(wk.result.url)
					client.sendMessage(from, wkwk, MessageType.image, { quoted: freply3 })
					break
					case 'cecanindo':
					if (!isRegistered) return reply( ind.noregis())
					
					reply(`*「 WAIT 」*  SEDANG DIPROSES`)
					wk = await fetchJson(`https://api-alphabot.herokuapp.com/api/cewe/indonesia?apikey=Alphabot`, { method: 'get' })
					wkwk = await getBuffer(wk.result.url)
					client.sendMessage(from, wkwk, MessageType.image, { quoted: freply3 })
					break
					case 'cecanjapan':
					if (!isRegistered) return reply( ind.noregis())
					
					reply(`*「 WAIT 」*  SEDANG DIPROSES`)
					wk = await fetchJson(`https://api-alphabot.herokuapp.com/api/cewe/japan?apikey=Alphabot`, { method: 'get' })
					wkwk = await getBuffer(wk.result.url)
					client.sendMessage(from, wkwk, MessageType.image, { quoted: freply3 })
					break
					case 'cecanthailand':
					if (!isRegistered) return reply( ind.noregis())
					
					reply(`*「 WAIT 」*  SEDANG DIPROSES`)
					wk = await fetchJson(`https://api-alphabot.herokuapp.com/api/cewe/thailand?apikey=Alphabot`, { method: 'get' })
					wkwk = await getBuffer(wk.result.url)
					client.sendMessage(from, wkwk, MessageType.image, { quoted: freply3 })
					break
                   case 'pinterest2':
if (!isRegistered) return reply( ind.noregis())              
				    client.updatePresence(from, Presence.composing) 
				    data = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=${body.slice(11)}`, {method: 'get'})
				    reply(`*「 WAIT 」*  SEDANG DIPROSES`)
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    client.sendMessage(from, pok, MessageType.image, { quoted: freply3})
				    break
				case 'cat':
if (!isRegistered) return reply( ind.noregis())              
				    client.updatePresence(from, Presence.composing) 
				    data = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=cat`, {method: 'get'})
				    reply(`*「 WAIT 」*  SEDANG DIPROSES`)
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    client.sendMessage(from, pok, MessageType.image, { quoted: freply3})
				    break
				
				case 'cecan':
				
if (!isRegistered) return reply( ind.noregis())              
                     reply(`*「 WAIT 」*  SEDANG DIPROSES`)
				    pok = await getBuffer(`https://api.lolhuman.xyz/api/random/cecan?apikey=476fa612fb3d4f042a1dd9bb`, { method: 'get' })
				    client.sendMessage(from, pok, MessageType.image, { quoted: freply3})
				    break
				case 'cogan':
				
if (!isRegistered) return reply( ind.noregis())              
                      reply(`*「 WAIT 」*  SEDANG DIPROSES`)
				    pok = await getBuffer(`https://api.lolhuman.xyz/api/random/cogan?apikey=476fa612fb3d4f042a1dd9bb`, { method: 'get' })
				    client.sendMessage(from, pok, MessageType.image, { quoted: freply3})
				    break
                   case 'pinterest':
                      if (!isRegistered) return reply( ind.noregis())     
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=${body.slice(11)}`, {method: 'get'})
					reply(`*「 WAIT 」*  SEDANG DIPROSES`)
					b = JSON.parse(JSON.stringify(data));
					nimek =  b[Math.floor(Math.random() * b.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, MessageType.image, { quoted: freply3, caption: `*𝖕𝖎𝖓𝖙𝖊𝖗𝖊𝖘𝖙*`})
					break 
					case 'infonomor':
					   if (!isRegistered) return reply( ind.noregis())     
					b = body.slice(10)
					b1 = await fetchJson(` https://docs-jojo.herokuapp.com/api/infonomor?no=${b}`)
					jawab = `*Nomor*: ${b1.nomor}\n*Operator*: ${b1.op}\n*International*: ${b1.international}`
					reply(jawab)
					break
				case 'ubahstk':
				   if (!isRegistered) return reply( ind.noregis())     
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(`*「 GAGAL 」 ULANGI LAGI*`)
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: freply3})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':
min'(320,ih)':
force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(`SABAR, ANAK SABAR DISAYANG REHAN`)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`GAGAL AWOKAWOK`)
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: freply3})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':
min'(320,ih)':
force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption ${prefix}ubahstk atau reply/tag gambar`)
					}
			    break
			
			    case 's':
				case 'stiker':
				case 'sticker':
				case 'stikergif':
				case 'stickergif':
				   if (!isRegistered) return reply(ind.noregis())
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(`*「 GAGAL 」 ULANGI LAGI*`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(`MITSUHA`, `BOT`)} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: freply4})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`*「 GAGAL 」 ULANGI LAGI*`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(`MITSUHA`, `BOT`)} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: freply4})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					}
					break
				case 'stickernowm':
				if (!isPrem) return reply(`*maaf* ${pushname} *kamu bukan user premium!*`)
				   if (!isRegistered) return reply(ind.noregis())
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(`*「 GAGAL 」 ULANGI LAGI*`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: freply4})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`*「 GAGAL 」 ULANGI LAGI*`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: freply4})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Kirim gambar dengan caption ${prefix}stickernowm atau tag gambar yang sudah dikirim`)
					}
					break
					case 'tts':
            if (!isRegistered) return reply( ind.noregis())     
                jp1 = args[0]
                jp2 = args[1]
                reply(ind.wait)
                asu = await getBuffer(`http://zekais-api.herokuapp.com/speech?lang=${jp1}&text=${jp2}`)
                client.sendMessage(from, asu, audio, {mimetype: 'audio/mp4', quoted: freply3 })
                break
                case 'tts2':
            if (!isRegistered) return reply( ind.noregis())     
                b = body.slice(5)
                reply(ind.wait)
                asu = await getBuffer(`https://bx-hunter.herokuapp.com/api/tts?text=${b}&apikey=ikygans`)
                client.sendMessage(from, asu, audio, {mimetype: 'audio/mp4', quoted: freply3 })
                break
					case 'report':
					   if (!isRegistered) return reply( ind.noregis())     
                    const pesan = body.slice(8)
                    if (pesan.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: freply3})
                    var nomor = mek.participant
                    const teks1 = `*REPORT*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
                    var options = {
                    text: teks1,
                    contextInfo: {mentionedJid: [nomor]},
                    }
                   client.sendMessage('62857312617281@s.whatsapp.net', options, text, {quoted: freply3})
                    reply('Maaf ketidak nyamanan nya, kami akan memperbaikin nya secepatnya.\n\n-> Laporan main main akan dibanned dan ditegur Owner bot')
                    break 
                    case 'darkjokes':
if (!isRegistered) return reply( ind.noregis())              
				    p1 = await getBuffer(`https://api.xteam.xyz/randomimage/darkjoke?APIKEY=0fb7a017cdaf4f85`, { method: 'get' })
				client.sendMessage(from, p1, MessageType.image, { caption:`Ga ketawa autid kek ${pushname}`, quoted: freply3 })
				break
                       case 'darkjokes2':
if (!isRegistered) return reply( ind.noregis())
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=darkjokes`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					client.sendMessage(from, nye, MessageType.image, { caption:`Ga ketawa autid kek ${pushname}\n\n\nJangan lupa subscribe yo\nhttps://youtube.com/channel/UC-fcNjQQ5LXV50sSV6s2eXg`, quoted: freply3 })
					break
                          case 'meme':
					if (!isRegistered) return reply( ind.noregis())
					reply(`*「 WAIT 」*  SEDANG DIPROSES`)
					wk = await fetchJson(`http://zekais-api.herokuapp.com/memeindo`, { method: 'get' })
					wkwk = await getBuffer(wk.result)
					client.sendMessage(from, wkwk, MessageType.image, { quoted: freply3 })
					break
					case 'meme2':
					if (!isRegistered) return reply( ind.noregis())
					reply(`*「 WAIT 」*  SEDANG DIPROSES`)
					wk = await getBuffer(`https://api.xteam.xyz/randomimage/meme2?APIKEY=0fb7a017cdaf4f85`, { method: 'get' })
					client.sendMessage(from, wk, MessageType.image, { quoted: freply3 })
					break
case 'memeindo':
if (!isRegistered) return reply( ind.noregis())
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest?keyword=memeindo`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					client.sendMessage(from, nye, MessageType.image, { caption:`Ga ketawa autid kek ${pushname}\n\n\nJangan lupa subscribe yo\nhttps://youtube.com/channel/UC-fcNjQQ5LXV50sSV6s2eXg`, quoted: freply3 })
					break
					             
//============================〔INDOHOT〕============================\\
case 'indo1':

if (!isRegistered) return reply( ind.noregis())

				   teks = '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file'
				   client.sendMessage(from, teks, text, { quoted: freply3 })  
				   break
				   case 'indo2':

if (!isRegistered) return reply( ind.noregis())

				   teks = '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file'
				   client.sendMessage(from, teks, text, { quoted: freply3 })  
				   break
				   case 'indo3':

if (!isRegistered) return reply( ind.noregis())

				   teks = '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.mp4/file'
				   client.sendMessage(from, teks, text, { quoted: freply3 }) 				    
				   break
				   case 'indo4':

if (!isRegistered) return reply( ind.noregis())

				   teks = '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file'
				   client.sendMessage(from, teks, text, { quoted: freply3 })  				   
				   break
				   case 'indo5':

if (!isRegistered) return reply( ind.noregis())

				   teks = '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file'
				   client.sendMessage(from, teks, text, { quoted: freply3 })  				   
				   break
				   case 'indo6':

if (!isRegistered) return reply( ind.noregis())

				   teks = '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file'
				   client.sendMessage(from, teks, text, { quoted: freply3 })  				   
				   break
                   case 'indo7':

if (!isRegistered) return reply( ind.noregis())
   
				   teks = '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file'
				   client.sendMessage(from, teks, text, { quoted: freply3 })  				   
				   break
		           case 'indo8':

if (!isRegistered) return reply( ind.noregis())
   
				   teks = '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file'
				   client.sendMessage(from, teks, text, { quoted: freply3 })   			   
				   break
				   case 'indo9':

if (!isRegistered) return reply( ind.noregis())
   
				   teks = '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/aipi6xisyppe751/VID-20210107-WA1465.mp4/file'
				   client.sendMessage(from, teks, text, { quoted: freply3 })				   
				   break
				   case 'indo10':

if (!isRegistered) return reply( ind.noregis())
   
				   teks = '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file'
				   client.sendMessage(from, teks, text, { quoted: freply3 })
				   break
				   case 'indo11':

if (!isRegistered) return reply( ind.noregis())
   
				   teks = '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file'
				   client.sendMessage(from, teks, text, { quoted: freply3 })  				   
				   break
				   case 'indo12':

if (!isRegistered) return reply( ind.noregis())
   
				   teks = '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file'
				   client.sendMessage(from, teks, text, { quoted: freply3 })   				   
				   break
				   case 'indo13':

if (!isRegistered) return reply( ind.noregis())
   
				   teks = '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file'
				   client.sendMessage(from, teks, text, { quoted: freply3 })  			   
				   break
				   case 'indo14':

if (!isRegistered) return reply( ind.noregis())
   
				   teks = '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file'
				   client.sendMessage(from, teks, text, { quoted: freply3 })   				   
				   break
	               case 'indo15':

if (!isRegistered) return reply( ind.noregis())
   
				   teks = '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file'
				   client.sendMessage(from, teks, text, { quoted: freply3 })   				   
				   break
    	           case 'indo16':

if (!isRegistered) return reply( ind.noregis())

				   teks = '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file'
				   client.sendMessage(from, teks, text, { quoted: freply3 })   			   
				   break
				   case 'indo17':

if (!isRegistered) return reply( ind.noregis())

				   teks = '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file'
				   client.sendMessage(from, teks, text, { quoted: freply3 }) 			   
				   break
				   case 'indo18':

if (!isRegistered) return reply( ind.noregis())

				   teks =  '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file'
				   client.sendMessage(from, teks, text, { quoted: freply3 })				   
				   break
				   case 'indo19':

if (!isRegistered) return reply( ind.noregis())

				   teks = '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file'
				   client.sendMessage(from, teks, text, { quoted: freply3 }) 				   
				   break
				   case 'indo20':

if (!isRegistered) return reply( ind.noregis())

				   teks = '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file'
				   client.sendMessage(from, teks, text, { quoted: freply3 })				   
				   break
				   case 'indo21':

if (!isRegistered) return reply( ind.noregis())

				   teks = '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file'
				   client.sendMessage(from, teks, text, { quoted: freply3 }) 				   
				   break
				   case 'indo22':

if (!isRegistered) return reply( ind.noregis())

				   teks =  '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file'		   
				   client.sendMessage(from, teks, text, { quoted: freply3 }) 
				   break
				   case 'indo23':

if (!isRegistered) return reply( ind.noregis())

				   teks = '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file'
				   client.sendMessage(from, teks, text, { quoted: freply3 })				   
				   break
				   case 'indo24':

if (!isRegistered) return reply( ind.noregis())
				
				   teks = '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/j3hxseqc3uoc1v7/VID-20210107-WA1526.mp4/file'
				   client.sendMessage(from, teks, text, { quoted: freply3 })  
				   break
				
				   case 'indo25':

if (!isRegistered) return reply( ind.noregis())
				   teks =  '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/j3hxseqc3uoc1v7/VID-20210107-WA1526.mp4/file'
				   client.sendMessage(from, teks, text, { quoted: freply3 })   
				   break
 //============================〔MENU WALLPAPER〕============================\\      
                  case 'wallpaper1':
if (!isRegistered) return reply( ind.noregis())
                 pyyy6 = fs.readFileSync('./wallpaper/wallpaper1.jpg')
                  client.sendMessage(from, pyyy6, MessageType.image, {quoted: freply3, caption: '*WALLPAPER*'})
                    break
                    case 'wallpaper2':
if (!isRegistered) return reply( ind.noregis())
                  jamal = fs.readFileSync('./wallpaper/wallpaper2.jpg')
                  client.sendMessage(from, jamal, MessageType.image, {quoted: freply3, caption: '*WALLPAPER*'})
                    break
                    case 'wallpaper3':
if (!isRegistered) return reply( ind.noregis())
                  jamal = fs.readFileSync('./wallpaper/wallpaper3.jpg')
                  client.sendMessage(from, jamal, MessageType.image, {quoted: freply3, caption: '*WALLPAPER*'})
                    break
                    case 'wallpaper4':
if (!isRegistered) return reply( ind.noregis())
                  jamal = fs.readFileSync('./wallpaper/wallpaper4.jpg')
                  client.sendMessage(from, jamal, MessageType.image, {quoted: freply3, caption: '*WALLPAPER*'})
                    break
                    case 'wallpaper5':
if (!isRegistered) return reply( ind.noregis())
                  jamal = fs.readFileSync('./wallpaper/wallpaper5.jpg')
                  client.sendMessage(from, jamal, MessageType.image, {quoted: freply3, caption: '*WALLPAPER*'})
                    break
                    case 'wallpaper6':
if (!isRegistered) return reply( ind.noregis())
                  jamal = fs.readFileSync('./wallpaper/wallpaper6.jpg')
                  client.sendMessage(from, jamal, MessageType.image, {quoted: freply3, caption: '*WALLPAPER*'})
                    break
                    case 'wallpaper7':
if (!isRegistered) return reply( ind.noregis())
                  jamal = fs.readFileSync('./wallpaper/wallpaper7.jpg')
                  client.sendMessage(from, jamal, MessageType.image, {quoted: freply3, caption: '*WALLPAPER*'})
                    break
                    case 'wallpaper8':
if (!isRegistered) return reply( ind.noregis())
                  jamal = fs.readFileSync('./wallpaper/wallpaper8.jpg')
                  client.sendMessage(from, jamal, MessageType.image, {quoted: freply3, caption: '*WALLPAPER*'})
                    break
                    case 'wallpaper9':
if (!isRegistered) return reply( ind.noregis())
                  jamal = fs.readFileSync('./wallpaper/wallpaper9.jpg')
                  client.sendMessage(from, jamal, MessageType.image, {quoted: freply3, caption: '*WALLPAPER*'})
                    break
                    case 'wallpaper10':
if (!isRegistered) return reply( ind.noregis())
                  jamal = fs.readFileSync('./wallpaper/wallpaper10.jpg')
                  client.sendMessage(from, jamal, MessageType.image, {quoted: freply3, caption: '*WALLPAPER*'})
                    break

                    
default:
                  if (body.startsWith(`${prefix}${command}`)) {
                  costum(`Maaf *${pushname}*, Command *${prefix}${command}* Tidak Terdaftar Di Dalam *${prefix}menu*!`, text, tescuk, cr)
                  }    
        
                  if (budy.includes(`cok`)) {
                  	oh = fs.readFileSync(`./stiker/Dosa.webp`)
                  client.sendMessage(from, oh, sticker, {quoted: freply3})			
                  break
                  }
		if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
  }   
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts() 