//السورس الاساسي لـ اظهار رابط موقعك في ريبل ات 
const express = require("express")
const app = express();

app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});
//https://ra3dstudio.com CopyRight Codes
//كود تثبيت حسابك ٢٤ ساعة في روم فويس
const { Client } = require('discord.js-selfbot-v13');
const client = new Client(); // All partials are loaded automatically

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})
//ثبات فويس 24 ساعه v13 بدون اي مشاكل
const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => {
    
    setInterval( async () => {
    client.channels.fetch(process.env.channel) 
     .then((channel) => { 
      const VoiceConnection = joinVoiceChannel({
        selfDeaf: false,
          selfMute: true,
        
        
       channelId: channel.id, 
       guildId: channel.guild.id, 
       adapterCreator: channel.guild.voiceAdapterCreator 
       });
    }).catch((error) => { return; });
    }, 1000)
}); 
//https://ra3dstudio.com CopyRight Codes
client.login(process.env.token);
//https://ra3dstudio.com CopyRight Codes