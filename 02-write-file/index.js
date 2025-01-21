const fs = require('node:fs');
const path = require('node:path');
const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });
const filePath = path.join('./02-write-file/text.txt');

fs.exists(filePath, (exists) => {
  if (exists === false) {
    fs.createWriteStream(filePath, 'utf-8');
  }
});

// rl.question('Hello User! What do you want to write to the file?')
console.log('Hello User! What do you want to write to the file?');
rl.prompt();

rl.on('line', (line) => {
  if (line === 'exit') {
    console.log(`
      Goodbye!
    `)
    rl.close();
  } else {
    fs.appendFile(filePath, `  ${line}`, 'utf-8', (err) => {
      if (err) {
        throw err;
      };
    });
    rl.on('SIGINT', () => {
      console.log(`  Goodbye!`);
      rl.close();
    });
  }
});


// node 02-write-file