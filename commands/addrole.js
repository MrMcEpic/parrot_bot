module.exports = (message, list) => {
  console.log(list)
  for (i in list) {
    let member = message.member;
    let role = message.guild.roles.find(r => r.name === list[i]);
    member.addRole(role)
  }
}