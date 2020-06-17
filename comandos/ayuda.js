module.exports = async (client, message, args) => { 
  
 const Discord = require('discord.js'); 
 let embed = new Discord.MessageEmbed()
          .setDescription("ㅤㅤㅤㅤㅤㅤㅤㅤㅤ🕵️   **AYUDAMEEEEE**   🕵️\n\nBreve info acerca de <@661176943638741014> desarrollada por <@219739628196855808>.\nㅤ")
          .addField("♋ ▸ **Dueño:**","`ElManueh#2897`", true)
          .addField("📟 ▸ **Comandos:**","`.audio\n.avatar\n.color\n.prefix\n.sorteo`", true)
          .setThumbnail("https://image.jimcdn.com/app/cms/image/transf/none/path/sedb86637183ff231/image/i60fbb3fd09e6a9c2/version/1381648282/image.png")
          .setFooter("© 2020 LaFalsaSquad",client.user.avatarURL)
          .setTimestamp()
          .setColor("BLACK")

        message.channel.send(embed)
}