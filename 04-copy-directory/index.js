const fs = require('node:fs');
const path = require('node:path');

const folderPath = path.join('./04-copy-directory/files/');
const newFolderPath = path.join('./04-copy-directory/files-copy/');

fs.exists(newFolderPath, (exists) => {
  if (exists === false) {
    fs.mkdir(newFolderPath,(err) => {
      if (err) {
        console.log(err);
      }
    })
  }
});

fs.readdir(folderPath, 'utf-8', (err, files) => {
  if (err) {
    throw err;
  };
  files.forEach((e) => {
    fs.copyFile(`${folderPath}${e}`, `${newFolderPath}${e}`, fs.constants.COPYFILE_FICLONE, (err) => {
      if (err) {
        console.log(err);
      }
    });
  });
  fs.readdir(newFolderPath, 'utf-8', (err, newFiles) => {
    if (err) {
      throw err;
    };

    if (files.length < newFiles.length) {
      newFiles.forEach((e) => {
        if (files.indexOf(e) === -1) {
          console.log('Work!')
          fs.rm(`${newFolderPath}${e}`, (err) => {
            if (err) {
              throw err;
            }
          });
        }
      })
    }
  });
});

// node 04-copy-directory