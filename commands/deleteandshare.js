module.exports = (client, message) => {
  const member = message.member
  const channel = client.channels.get("374191834827718658")
  channel.send(member.author.username)
}