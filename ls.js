const fs = require('fs');

// fs.readdir('./', 'uft8', (err, files) => {
//   if(err){
//     throw err;
//   } else {
//     process.stdout.write(files.join('\n'))
//     process.stdout.write('prompt > ');
//   }
// })

const lsFunc = () => {
  return fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(files.join('\n'));
      process.stdout.write('prompt > ');
    }
  });
};

const fileInfo = (file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      throw err;;
    } else {
      process.stdout.write(data);
    }
  });
};


module.exports = {
  lsFunc,
  fileInfo
}
