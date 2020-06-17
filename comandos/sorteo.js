module.exports = async (client, message, args) => {
  
const Discord = require('discord.js');  
const voiceChannel = message.member.voice.channel;
    let cooldown = new Set();
  
      if(!voiceChannel) return message.channel.send("Metete en un **canal de voz** primero, atontao")
  
  if(cooldown.has(message.guild.id)){ message.channel.send(`**${message.author.username}**, esperate unos segundicos que refresque mi memoria.`); return}
  
  cooldown.add(message.guild.id);
    setTimeout(async() => {cooldown.delete(message.guild.id)}, 30000)
  
        let numero = message.member.voice.channel.members.filter(m => !m.user.bot).size
         if(numero < 2) return message.channel.send("Has ganado debido a que eres el unico participante")
        let connection = await voiceChannel.join()
        let participantes = message.member.voice.channel.members.filter(m => !m.user.bot).map(g => g.user.tag)
        let winner = participantes[Math.floor(participantes.length * Math.random())]
        let msg1 = await message.channel.send("🔘 Analizando **humanos**....")
      
        setTimeout(async() => {await connection.play("https://cdn.glitch.com/e367237a-3c39-4a24-96c7-dfa5fe925d3d%2FSonido%20Futurista.mp3?v=1578179535540")}, 0)
        setTimeout(async() => {msg1.edit(`✅ He detectado **${numero}** humanos en mi alrededor.`)}, 5800)
        setTimeout(async() => {await connection.play("https://cdn.glitch.com/e367237a-3c39-4a24-96c7-dfa5fe925d3d%2FEl%20Elejido.mp3?v=1578180331574")}, 9000)
        setTimeout(async() => {msg1.edit(`Y el **ganador** es....`)}, 9200)
        setTimeout(async() => {msg1.edit(`El ganador es: **${winner}**`)}, 17300)
        setTimeout(async() => {voiceChannel.leave()}, 21000)
}