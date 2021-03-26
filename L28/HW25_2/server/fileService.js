const fs = require('fs');

const dataPath = __dirname + '/db/arrayDB.json';


const fileCreation = dataJson => {
    return new Promise((resolve, reject) => {
        fs.writeFile(dataPath, dataJson, (err) => {
            if(err) {
                reject(err);
            }
            resolve();
        });
    });
};

module.exports.createFile = dataJson => {
    return new Promise((resolve, reject) => {
        fs.access(dataPath, fs.constants.F_OK, (err) => {
            if(err) {
                let newTempArr = [];
                console.log(newTempArr);
                newTempArr.push(dataJson);
                newTempArr = JSON.stringify(newTempArr);
                
                fileCreation(newTempArr)
                    .then(() => resolve())
                    .catch(() => reject(console.log('create err')));
            } else {
                reject(`File exist`);
            }
        });
    });
}


module.exports.getFile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(dataPath, (err, data) => {
            if(err) {
                console.log('file err');
                reject('err');
            }
            resolve(data);
        });
    });
}

module.exports.updateFile = incomeData => {
    return this.getFile()
        .then(arrayData => {
            arrayData = JSON.parse(arrayData);
            arrayData.push(incomeData);
            return arrayData = JSON.stringify(arrayData);
        })
        .then(newData => {
            return fileCreation(newData);
        })
}

module.exports.fileDelete = () => {
    return new Promise((resolve, reject) => {
        fs.unlink(dataPath, (err) => {
            if(err) {
                reject(err);
            }
            resolve();
        })
    });
}