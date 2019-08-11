const addrole = require('../commands/addrole')
const deleteandshare = require('../commands/deleteandshare')
module.exports = (client, message) => {
  if (message.channel.name === 'introduction') {

    //for roles that have one easy spelling
    const simpleRoles = ["Macaw", "Cockatoo", "Eclectus", "Amazon", "Alexandrine", "Caique", "Senegal", "Cockatiel", "Quaker", "Rosella", "Kakariki", "Parrotlet", "Canary", "Finch"];
    let listToAdd = []
    let words = message.content.toLowerCase();
    for (const role of simpleRoles) {
      if (words.includes(role.toLowerCase())) {
        listToAdd.push(role);
      }
    }

    //anti-spam
    if (words.includes("nude")) {
      return deleteandshare(client, message)
    }

    //list of alt spellings
    if (words.includes("budgie") || words.includes("parakeet")) {
      listToAdd.push('Budgie')
    }
    if (words.includes("conure") || words.includes("gcc")) {
      listToAdd.push('Conure')
    }
    if (words.includes("african grey") || words.includes("african gray") || words.includes("africangrey") || words.includes("africangray") || words.includes("african-grey") || words.includes("african-gray")) {
      listToAdd.push('African Grey')
    }
    if (words.includes("lorikeet") || words.includes("lori")) {
      listToAdd.push('Lorikeet')
    }
    if (words.includes("red-fan") || words.includes("red fan") || words.includes("redfan")) {
      listToAdd.push('Red-fan Parrot')
    }
    if (words.includes("barra")) {
      listToAdd.push('Barraband')
    }
    if (words.includes("broto")) {
      listToAdd.push('Brotogeris')
    }
    if (words.includes("lovebird") || words.includes("love bird") || words.includes("love-bird")) {
      listToAdd.push('Lovebird')
    }
    if (words.includes("duck")) {
      listToAdd.push('Ducks')
    }
    if (words.includes("ringneck") || words.includes("ring neck") || words.includes("ring-neck")) {
      listToAdd.push('Ringneck')
    }

    //list end
    if (listToAdd.length > 0) {
      message.react("❤")
      return addrole(message, listToAdd)
    }
    /*
    else {
         return addrole(message, ['Interested in birbs'])
       }
    */
  }
}