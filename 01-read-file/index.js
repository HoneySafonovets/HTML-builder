const fs = require('node:fs');
const path = require('node:path');


let filePath = path.join('./text.txt');
let content = fs.createReadStream(filePath, 'utf-8')

// function read() {
//   fs.readFile('./text.txt', 'utf-8', (err, data) => {
//     console.log(data)
//   })
// }
content.on('data', (chunk) => {
  console.log(chunk)
});