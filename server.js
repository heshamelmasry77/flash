const express = require('express');
const bodyParser =  require('body-parser');
const app = express();

app.use(express.static(__dirname));
// This let's body parser know that we expect JSON to be coming in with our HTTP request
app.use(bodyParser.json());

let messages = [
  {name: 'hesham', message: 'test 1'},
  {name: 'dod', message: 'test2'},
  {name: 'yasmine', message: 'test3'}
];

app.get('/messages', (req, res) => {
  res.send(messages);
});


app.post('/messages', (req, res) => {
  console.log(req.body);
  // adding the new message to my array messages
  messages.push(req.body);
  res.sendStatus(200);
});



const server = app.listen(3008, () => {
  console.log('server is listening on port', server.address().port)
});
