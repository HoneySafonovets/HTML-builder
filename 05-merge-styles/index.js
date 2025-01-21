const fs = require('node:fs');
const path = require('node:path');

const fileDirectory = './05-merge-styles/project-dist/';
const fileStyleDirectory = path.join(__dirname, 'styles');
const bundlePathFolder = path.join(__dirname, 'project-dist', 'bundle.css');
// const bundlePathFolder = path.join('./05-merge-styles/test-files/bundle.css');

const writeTofile = fs.createWriteStream(bundlePathFolder, 'utf-8', { flags: 'a' });


fs.readdir(fileStyleDirectory, 'utf-8', (err, files) => {
  if (err) {
    throw err;
  }
  files.forEach((e) => {
    if (path.extname(e) === '.css') {
      const stream = fs.createReadStream(`./05-merge-styles/styles/${e}`, 'utf-8');
      stream.on('data', data => {
        if (files.indexOf(files.indexOf(e)) === 0) {
          writeTofile.write(e)
        } else {
          fs.appendFile(bundlePathFolder, `\n${data}`, 'utf-8', (err) => {
            if (err) {
              throw err;
            };
          });
        }
      })
    }
  })
})

// node 05-merge-styles