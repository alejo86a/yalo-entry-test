const fs = require('fs');

const getDataFromFile = (fileName) =>{
    return fs.readFileSync(`./db/${fileName}.json`, 'utf8')
}

const setDataFromFile = (fileName, data) =>{
    if (!fs.existsSync('db')){
        fs.mkdirSync('db');
      }
      fs.writeFile('./db/'+fileName+'.json', data, function (err) {
        if (err) {
          return console.error(err);
        }
        console.log(fileName+" file created!");
      });
}

module.exports = {getDataFromFile, setDataFromFile};