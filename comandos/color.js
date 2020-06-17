  module.exports = async (client, message) => { 
    
    const Discord = require('discord.js');
    
    if(message.member.roles.highest == 692676986660716617 || message.member.roles.highest == 529015342073249792) return message.channel.send("No puedo cambiarte el color de este **rol**")
   
    message.channel.send("Dime en código **HEX**, el color que quieres que te ponga *(__incluyendo el #__)*")
    
    const filter = m => m.content.startsWith('#') && m.content.length == 7 && m.author.id === message.author.id
    const collector = message.channel.createMessageCollector(filter, { time: 15000 , max: 1 });

collector.on('collect', m => { let role = message.member.roles.highest
                                   role.setColor(m.content) });
    
collector.on('end', collected => { if(collected.size == 0) return message.channel.send("Color No Actualizado ❌")
                                  
                                   message.channel.send("Color Actualizado ✅")});
    
  }