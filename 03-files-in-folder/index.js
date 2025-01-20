const fs = require('node:fs');
const path = require('node:path');

const fileDirectory = './03-files-in-folder/secret-folder/';

fs.readdir(fileDirectory, 'utf-8', (err, files) => {
  if (err) {
    throw err;
  }
  files.forEach((e) => {
    fs.stat(`${fileDirectory}${e}`, {withFileTypes: true}, (err, stats) => {
      if (err) {
        throw err;
      }
      if (stats.isFile(e)) {
        console.log(`${e.split('.')[0]} - ${path.extname(e).replace('.', '')} - ${stats.size / 1000}kb`);
      }
    });
  })
})

// <file name>-<file extension>-<file size> node 03-files-in-folder