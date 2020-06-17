module.exports = async (client, message) => {
  
client.emit("guildMemberAdd", message.member)
  
}
