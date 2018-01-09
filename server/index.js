var express = require('express')
var app = express()

app.get('/', function(req, res){
  res.send('hello')
  res.end()
})

app.get('/danger', function(req, res) {
  res.status(400).send('DANGER!')
})

app.get('/random/:times', function(req, res) {
  console.log(req.params)
  //res.send('not danger!')
  var results = []
  for(var i = 0; i <req.params.times; i++){
    results.push(i)
  }
  res.status(200).json(results)
})

app.listen(8080, function() { //callback
  console.log('server started')
})
