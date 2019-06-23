module.exports = (client, message) => {
  const channel = client.channels.get("374191834827718658")
  channel.send(message.author.username)
}