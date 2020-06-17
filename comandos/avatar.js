  module.exports = async (client, message) => { 
    
    const Discord = require('discord.js');
    let persona = message.mentions.users.first();
    if(!persona) return message.channel.send("Para mostrar el avatar debe **mencionar** a la persona");
    let embed = new Discord.MessageEmbed()
    .setTitle(persona.tag)
    .setColor("RANDOM")
    .setImage(persona.displayAvatarURL({ size: 1024}))
    
    message.channel.send(embed)
    
  }