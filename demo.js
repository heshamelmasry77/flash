// var _ = require('lodash');
//
// console.log(_.random(1,10));


const fs = require('fs');
// const data = require('./data');
//
// console.log(data.name);
//
//
// fs.readFile('./data.json','utf-8', (err, data) => {
//   var data = JSON.parse(data);
// console.log(data.name);
// });

let dataTwo = {
  "name": 'yasmine'
};
fs.writeFile('dataTest.json', JSON.stringify(dataTwo), (error) => {
  console.log(error);
});
