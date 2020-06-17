  module.exports = async (client, message, args) => { 
    const Discord = require('discord.js');
    const voiceChannel = message.member.voice.channel;
    
    message.delete({timeout: 3000})    
    
    let audios = ["https://cdn.glitch.com/e367237a-3c39-4a24-96c7-dfa5fe925d3d%2FRAMADAN_REMIZX.mp3?v=1586121454148",
                  "https://cdn.glitch.com/e367237a-3c39-4a24-96c7-dfa5fe925d3d%2FWhatsApp%20Audio%202020-01-02%20at%2022.55.41.ogg?v=1586180861132",
                  "https://cdn.glitch.com/e367237a-3c39-4a24-96c7-dfa5fe925d3d%2FWhatsApp%20Audio%202020-01-02%20at%2022.55.40%20(1).ogg?v=1586180861378",
                  "https://cdn.glitch.com/e367237a-3c39-4a24-96c7-dfa5fe925d3d%2FWhatsApp%20Audio%202020-01-02%20at%2022.55.41%20(2).ogg?v=1586180861650",
                  "https://cdn.glitch.com/e367237a-3c39-4a24-96c7-dfa5fe925d3d%2FWhatsApp%20Audio%202020-01-02%20at%2022.55.42%20(4).ogg?v=1586180862331",
                  "https://cdn.glitch.com/e367237a-3c39-4a24-96c7-dfa5fe925d3d%2FWhatsApp%20Audio%202020-01-02%20at%2022.55.42.ogg?v=1586180862832",
                  "https://cdn.glitch.com/e367237a-3c39-4a24-96c7-dfa5fe925d3d%2FWhatsApp%20Audio%202020-01-02%20at%2022.55.11.ogg?v=1586180863245",
                  "https://cdn.glitch.com/e367237a-3c39-4a24-96c7-dfa5fe925d3d%2FWhatsApp%20Audio%202020-01-02%20at%2022.55.40.ogg?v=1586180863700",
                  "https://cdn.glitch.com/e367237a-3c39-4a24-96c7-dfa5fe925d3d%2FWhatsApp%20Audio%202020-01-02%20at%2022.55.10.ogg?v=1586180863976",
                  "https://cdn.glitch.com/e367237a-3c39-4a24-96c7-dfa5fe925d3d%2FWhatsApp%20Audio%202020-01-02%20at%2022.55.19%20(1).ogg?v=1586180864312",
                  "https://cdn.glitch.com/e367237a-3c39-4a24-96c7-dfa5fe925d3d%2FWhatsApp%20Audio%202020-01-02%20at%2022.55.42%20(2).ogg?v=1586180864644",
                  "https://cdn.glitch.com/e367237a-3c39-4a24-96c7-dfa5fe925d3d%2FWhatsApp%20Audio%202020-01-02%20at%2022.55.41%20(1).ogg?v=1586180865203",
                  "https://cdn.glitch.com/e367237a-3c39-4a24-96c7-dfa5fe925d3d%2FWhatsApp%20Audio%202020-01-02%20at%2022.55.42%20(3).ogg?v=1586180865287",
                  "https://cdn.glitch.com/e367237a-3c39-4a24-96c7-dfa5fe925d3d%2FWhatsApp%20Audio%202020-04-06%20at%2015.37.08.ogg?v=1586180865413",
                  "https://cdn.glitch.com/e367237a-3c39-4a24-96c7-dfa5fe925d3d%2FWhatsApp%20Audio%202020-01-02%20at%2022.55.43%20(3).ogg?v=1586180865545",
                  "https://cdn.glitch.com/e367237a-3c39-4a24-96c7-dfa5fe925d3d%2FWhatsApp%20Audio%202020-01-02%20at%2022.55.19.ogg?v=1586180865679",
                  "https://cdn.glitch.com/e367237a-3c39-4a24-96c7-dfa5fe925d3d%2FWhatsApp%20Audio%202020-01-02%20at%2022.55.43%20(2).ogg?v=1586180865806",
                  "https://cdn.glitch.com/e367237a-3c39-4a24-96c7-dfa5fe925d3d%2FWhatsApp%20Audio%202020-01-02%20at%2022.55.39.ogg?v=1586180865993",
                  "https://cdn.glitch.com/e367237a-3c39-4a24-96c7-dfa5fe925d3d%2FWhatsApp%20Audio%202020-01-02%20at%2022.55.42%20(1).ogg?v=1586180866109",
                  "https://cdn.glitch.com/e367237a-3c39-4a24-96c7-dfa5fe925d3d%2FWhatsApp%20Audio%202020-01-02%20at%2022.55.43.ogg?v=1586180866237",
                  "https://cdn.glitch.com/e367237a-3c39-4a24-96c7-dfa5fe925d3d%2FWhatsApp%20Audio%202020-01-02%20at%2022.55.11%20(1).ogg?v=1586180866527",
                  "https://cdn.glitch.com/e367237a-3c39-4a24-96c7-dfa5fe925d3d%2FWhatsApp%20Audio%202020-01-02%20at%2022.55.43%20(1).ogg?v=1586180866758",
                  "https://cdn.glitch.com/e367237a-3c39-4a24-96c7-dfa5fe925d3d%2FWhatsApp%20Audio%202020-01-02%20at%2022.55.10%20(1).ogg?v=1586180866986",
                  "https://cdn.glitch.com/e367237a-3c39-4a24-96c7-dfa5fe925d3d%2FWhatsApp%20Audio%202020-01-02%20at%2022.55.39%20(1).ogg?v=1586180867022"
                  ]
    let aleatorio = audios[Math.floor(audios.length * Math.random())];
    
      if(!voiceChannel) return message.channel.send("Metete en un **canal de voz** primero, atontao")

        let connection = await voiceChannel.join()
        await connection.play(aleatorio)
    }