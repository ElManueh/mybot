module.exports = async (client, member) => { 

   const Discord = require('discord.js');
   let canal = client.channels.cache.get('661183526363856896');
   let rango = member.guild.roles.cache.get("692676986660716617");
   
     await canal.send(`${member.user}, Bienvenid@ a **${member.guild.name}**`);
  
  if(member.roles.cache.has(rango)) return canal.send("ya tienes el rol");
  
     await member.roles.add(rango)
     await canal.send(`Te he otorgado el rango **${rango.name}**, con el podras comenzar una nueva aventura en el servidor.`)
  
}