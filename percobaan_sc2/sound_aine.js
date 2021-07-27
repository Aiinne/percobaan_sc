let fetch = require("node-fetch")
let arrs = []
fetch('https://raw.githubusercontent.com/qisyana/scrape/main/aine.txt')
  .then(res => res.text())
  .then(txt => arrs = txt.split('\n'))
let handler = async (m, { conn }) => {
  let ainee = arr[Math.floor(Math.random() * arrs.length)]
  if (!ainee) throw false
  await conn.sendFile(m.chat, ainee, ainee, null, m, true, { mimetype: 'audio/mp4' })
}
handler.customPrefix = /^aine$/i
handler.command = new RegExp

module.exports = 
