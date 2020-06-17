module.exports = async (client, message) => {
  
client.emit("guildMemberRemove", message.member)
  
}
