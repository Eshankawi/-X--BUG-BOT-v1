/*
       𝐑𝐄𝐒𝐌𝐈 𝐃𝐀𝐑𝐈 𝐃𝐫𝐚𝐲𝐗𝐃 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥

  𝐋𝐀𝐑𝐀𝐍𝐆𝐀𝐍
 
- 𝐃𝐈 𝐋𝐀𝐑𝐀𝐍𝐆 𝐌𝐄𝐌𝐏𝐄𝐑𝐉𝐔𝐀𝐋 𝐒𝐂 𝐈𝐍𝐈
- 𝐃𝐈 𝐋𝐀𝐑𝐀𝐍𝐆 𝐌𝐄𝐌𝐏𝐄𝐑𝐁𝐀𝐆𝐈 𝐒𝐂 𝐈𝐍𝐈

𝐉𝐈𝐊𝐀 𝐌𝐄𝐋𝐀𝐍𝐆𝐆𝐀𝐑 𝐋𝐀𝐑𝐀𝐍𝐆𝐀𝐍 𝐘𝐀𝐍𝐆 𝐃𝐈 𝐁𝐄𝐑𝐈𝐊𝐀𝐍 𝐃𝐑𝐀𝐘, 𝐘𝐀𝐏𝐈𝐓 𝐒𝐄 𝐔𝐌𝐔𝐑 𝐇𝐈𝐃𝐔𝐏 + 𝟕 𝐓𝐔𝐑𝐔𝐍𝐀𝐍

𝐉𝐀𝐍𝐆𝐀𝐍 𝐋𝐔𝐏𝐀 𝐒𝐔𝐏𝐏𝐎𝐑𝐓

*///========

const fs = require('fs')
const chalk = require('chalk')
const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};

global.namaowner = "Eshan Kavishka"
global.owner = "94758178340"
global.namabot = "𝐄𝐒𝐇𝐔 𝐁𝐔𝐆"
global.botname = "𝐄𝐒𝐇𝐔 𝐁𝐔𝐆"
global.simbol = "⌑"
global.autoJoin = false
global.domain = "-"
global.apikey = "-"
global.capikey = "-"
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.dray = fs.readFileSync("./database/menu.mp4")
global.codeInvite = "FwtMxovJqW3Jj55x524hjT"
global.sessionName = 'drayyy' //Gausah Juga
global.save = "drayxd"
global.keyopenai = `sk-proj-EXdCaNbBfwrOJaqCjcTDT3BlbkFJyFvdbMAMopdT2vaEhuZj`
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = ""
global.author = "Sticker By Ｅꜱʜᴜ-BUG-BOT"

global.namastore = "Eshan Kavishka"
global.dana = "94789119916" // NOMER DANA KAMU
global.gopay = "" // NOMER GOPAY KAMU
global.ovo = "" // NOMER OVO KAMU
global.shp = "" // NOMER SHOPE KAMU
global.qris = fs.readFileSync("./database/dray/qris.jpg")
require("./database/youtube.js")

global.autojpmm = `JOIN SINI BANG

LINK LU :`// TEXT JPM LU

const mess = {
   wait: "Bentar ya bre..",
   success: "Berhasil, bang✔",
   save: "𝕊𝕌𝕂𝕊𝔼𝕊 𝕊𝔸𝕍𝔼 ℕ𝕆𝕄𝔼ℝ 𝕆𝕋𝕆𝕄𝔸𝕋𝕀𝕊",
   on: "Sudah Aktif", 
   off: "Sudah Off",
   query: {
       text: "Teks Nya Mana Kak?",
       link: "Link Nya Mana Kak?",
   },
   error: {
       fitur: "Mohon Maaf Kak Fitur Eror Silahkan Chat Developer Bot Agar Bisa Segera Diperbaiki",
   },
   only: {
       group: "This feature can only be used in groups, bro",
private: "Use this in a private chat with Bang Thomz to make it work",
owner: "Don't use this feature, damn it, you're not Bang Dray",
admin: "Don't use this feature, damn it, you're not an admin",
badmin: "Sorry, it seems you can't use this feature because the bot is not a group admin",
premium: "Only for Premium and murbug users",
   }
}

global.mess = mess
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
