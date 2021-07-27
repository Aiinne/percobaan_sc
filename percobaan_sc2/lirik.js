
			case 'lirik':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (args.length < 1) return reply('Lirik lagunya mana kak?')
				liriknyee = body.slice(7)
				anu = await fetchJson(`https://some-random-api.ml/lyrics?title=${liriknyee}`, {method: 'get'})
			  lirisk = `Judul : ${anu.title}\nArtis : ${anu.author}\n\nLirik :\n${anu.lyrics}`
        buffer = await getBuffer(anu.thumbnail.genius)
        client.sendMessage(from, buffer, image, {quoted: mek, caption: lirisk})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
