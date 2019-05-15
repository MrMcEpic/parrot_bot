const addrole = require('../commands/addrole')
module.exports = (client, message) => {
  if (message.channel.name === 'introduction') {
    let list = []
    let words = message.content.toLowerCase();
    if (words.includes("budgie") || words.includes("parakeet")) {
      list.push('Budgie')
    }
    if (words.includes("conure")) {
      list.push('Conure')
    }
    if (words.includes("macaw")) {
      list.push('Macaw')
    }
    if (words.includes("cockatoo")) {
      list.push('Cockatoo')
    }
    if (words.includes("eclectus")) {
      list.push('Eclectus')
    }
    if (words.includes("amazon")) {
      list.push('Amazon')
    }
    if (words.includes("african grey") || words.includes("african gray") || words.includes("africangrey") || words.includes("africangray") || words.includes("african-grey") || words.includes("african-gray")) {
      list.push('African Grey')
    }
    if (words.includes("alexandrine")) {
      list.push('Alexandrine')
    }
    if (words.includes("lorikeet") || words.includes("lori")) {
      list.push('Lorikeet')
    }
    if (words.includes("caique")) {
      list.push('Caique')
    }
    if (words.includes("red-fan") || words.includes("red fan") || words.includes("redfan")) {
      list.push('Red-fan Parrot')
    }
    if (words.includes("senegal")) {
      list.push('Senegal')
    }
    if (words.includes("barraband")) {
      list.push('Barraband')
    }
    if (words.includes("cockatiel")) {
      list.push('Cockatiel')
    }
    if (words.includes("brotogeris")) {
      list.push('Brotogeris')
    }
    if (words.includes("quaker")) {
      list.push('Quaker')
    }
    if (words.includes("rosella")) {
      list.push('Rosella')
    }
    if (words.includes("kakariki")) {
      list.push('Kakariki')
    }
    if (words.includes("lovebird") || words.includes("love bird") || words.includes("love-bird")) {
      list.push('Lovebird')
    }
    if (words.includes("parrolet")) {
      list.push('Parrolet')
    }
    if (words.includes("canary")) {
      list.push('Canary')
    }
    if (words.includes("finch")) {
      list.push('Finch')
    }
    if (words.includes("duck")) {
      list.push('Ducks')
    }
    if (words.includes("ringneck") || words.includes("ring neck") || words.includes("ring-neck")) {
      list.push('Ringneck')
    }
    if (list.length > 0) {
      return addrole(message, list)
    } else {
      return addrole(message, ['Interested in birbs'])
    }
  }
}