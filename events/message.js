const addrole = require('../commands/addrole')
module.exports = (client, message) => {
  if (message.channel.name === 'introduction') {
    let list = []
    let words = message.content.toLowerCase();
    if (words.search("budgie") >= 0 || words.search("parakeet") >= 0) {
      list.push('Budgie')
    }
    if (words.search("conure") >= 0) {
      list.push('Conure')
    }
    if (words.search("macaw") >= 0) {
      list.push('Macaw')
    }
    if (words.search("cockatoo") >= 0) {
      list.push('Cockatoo')
    }
    if (words.search("eclectus") >= 0) {
      list.push('Electus')
    }
    if (words.search("amazon") >= 0) {
      list.push('Amazon')
    }
    if (words.search("african grey") >= 0 || words.search("african gray") >= 0 || words.search("africangrey") >= 0 || words.search("africangray") >= 0 || words.search("african-grey") >= 0 || words.search("african-gray") >= 0) {
      list.push('African Grey')
    }
    if (words.search("alexandrine") >= 0) {
      list.push('Alexandrine')
    }
    if (words.search("lorikeet") >= 0) {
      list.push('Lorikeet')
    }
    if (words.search("caique") >= 0) {
      list.push('Caique')
    }
    if (words.search("red-fan") >= 0 || words.search("red fan") >= 0 || words.search("redfan") >= 0) {
      list.push('Red-fan Parrot')
    }
    if (words.search("senegal") >= 0) {
      list.push('Senegal')
    }
    if (words.search("barraband") >= 0) {
      list.push('Barraband')
    }
    if (words.search("cockatiel") >= 0) {
      list.push('Cockatiel')
    }
    if (words.search("brotogeris") >= 0) {
      list.push('Brotogeris')
    }
    if (words.search("quaker") >= 0) {
      list.push('Quaker')
    }
    if (words.search("rosella") >= 0) {
      list.push('Rosella')
    }
    if (words.search("kakariki") >= 0) {
      list.push('Kakariki')
    }
    if (words.search("lovebird") >= 0 || words.search("love bird") >= 0 || words.search("love-bird") >= 0) {
      list.push('Lovebird')
    }
    if (words.search("parrolet") >= 0) {
      list.push('Parrolet')
    }
    if (words.search("canary") >= 0) {
      list.push('Canary')
    }
    if (words.search("finch") >= 0) {
      list.push('Finch')
    }
    if (words.search("duck") >= 0) {
      list.push('Ducks')
    }
    if (list.length > 0) {
      return addrole(message, list)
    } else {
      return addrole(message, ["Interested in birbs"])
    }
  }
}