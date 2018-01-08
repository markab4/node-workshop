const jokeHandler = require("./jokeHandler.js")
const flags = require('flags')

//console.log(jokeHandler.createKnockKnock())
//console.log(jokeHandler.createOneLiner())

flags.defineString('jokeType')
flags.parse()

console.log(flags.get('jokeType'));
{
  flags.get('jokeType') == 'oneliner' ?
  console.log(jokeHandler.createOneLiner()) :
  console.log(jokeHandler.createKnockKnock())
}
