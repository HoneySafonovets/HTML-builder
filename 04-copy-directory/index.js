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
  // fs.readdir(newFolderPath, 'utf-8', (err, newFiles) => {
  //   if (err) {
  //     throw err;
  //   };
  //   // newFiles.filter((e) => )

  // });
  files.forEach((e) => {
    fs.copyFile(`${folderPath}${e}`, `${newFolderPath}${e}`, fs.constants.COPYFILE_FICLONE, (err) => {
      if (err) {
        console.log(err);
      }
    });
  });
});

// node 04-copy-directory