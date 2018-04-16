const express = require('express');
const app = express();

app.use(express.static(__dirname));

let messages = [
  {name: 'hesham', message: 'test 1'},
  {name: 'dod', message: 'test2'},
  {name: 'yasmine', message: 'test3'}
];

app.get('/messages', (req, res) => {
  res.send(messages);
});

const server = app.listen(3008, () => {
  console.log('server is listening on port', server.address().port)
});
