module.exports = (message, list) => {
  let member = message.member
  if (message.member.roles.find(r => r.name === 'Interested in birbs') && list[0] != 'Interested in birbs') {
    let role = message.guild.roles.find(r => r.name === 'Interested in birbs')
    member.removeRole(role)
  }
  for (i in list) {
    let role = message.guild.roles.find(r => r.name === list[i])
    member.addRole(role)
  }
}