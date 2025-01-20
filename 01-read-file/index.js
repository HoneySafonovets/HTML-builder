const fs = require('node:fs');
const path = require('node:path');

const filePath = path.join('./01-read-file/text.txt');
const stream = fs.createReadStream(filePath, 'utf-8');

stream.on('data', data => {
  console.log(data);
})

// Привет! Если можешь проверь, пожалуйста, на день позже. Не все доделан постараюсь 22 числа все закончить!