module.exports = async (client, message, args) => {
  const Discord = require('discord.js');
  let embed = new Discord.MessageEmbed()
    .setDescription(
      "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ🎲  **PREFIJO DE LOS BOTS**  🎲\n\nTe mostrare los **prefijos** que tienen asignados los diferentes **BOTS**."
    )
    .addField("**MyBOT**", "`.`", true)
    .addField("**MEE6**", "`!`", true)
    .addField("**Octave**", "`_`", true)
    .addField("**Rythm**", "`.`", true)
    .addField("**Rythm 2**", "`,`", true)
    .addField("ㅤ", "ㅤ", true)
    .setFooter("© 2020 LaFalsaSquad", client.user.avatarURL)
    .setTimestamp()
    .setThumbnail("https://quidocs.es/wp-content/uploads/2019/03/quidocs.png")
    .setColor("BLACK");

  message.channel.send(embed);
};