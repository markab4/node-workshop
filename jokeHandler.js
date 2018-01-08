const one_liner = require('one-liner-joke')
const knock_knock = require('knock-knock-jokes')

module.exports =  {
  createKnockKnock: function() {
    return knock_knock()
  },
  createOneLiner: function() {
    return one_liner.getRandomJoke().body
  }
}
