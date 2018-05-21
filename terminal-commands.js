const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = (fileName) => {
  // your code here
  fs.open(fileName, 'w', (err, file)=>{
    if (err) throw err;
    console.log(`Success! ${fileName} created.`);
    fs.close(file, (err, file)=>{
      if (err) throw err;
    });
  });
};

module.exports.mkdir = (path) => {
  // your code here
  fs.mkdir(path, (err)=>{
    if (err) throw err;
    console.log(`Success! ${path} created.`);
  });
};
