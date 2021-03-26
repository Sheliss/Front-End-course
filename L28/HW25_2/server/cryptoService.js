const crypto = require('crypto-js');
const fs = require('fs');

// let date = (new Date()).toString().split(' ').splice(1,4).join(' ');

//console.log(date);



module.exports.createCrypt = data => {
    return new Promise((resolve, reject) => {

        const date = new Date();

        const parsedDate = date.toString().split(' ').splice(1, 4).join(' ');
        const filePath = __dirname + '/cryptData/log_' + date.toString().split(' ').splice(1, 1) + date.getTime() + '.json';

        let datedData = {};
        data = data.join(', ');
        datedData[parsedDate] = data;

        const cryptedData = JSON.stringify(crypto.AES.encrypt(JSON.stringify(datedData), 'key123').toString());


        fs.writeFile(filePath, cryptedData, (err) => {

            if (err) {
                console.log(err);
                throw (err);
            }
        })

        //const decryptedData = JSON.parse(crypto.AES.decrypt(cryptedData, 'key123').toString(crypto.enc.Utf8));
        resolve();
    });
}



module.exports.getCrytedFiles = () => {
    return new Promise((resolve, reject) => {
        let fileData = {};

        fs.readdir(__dirname + '/cryptData/', (err, files) => {
            if (err) {
                reject(err);
            }

            files.forEach(file => {
                /*
                fs.readFile(__dirname + '/cryptData/' + file, (err, data) => {
                    if(err) {
                        reject(err);
                    }
                    const tempData = JSON.parse(crypto.AES.decrypt(JSON.parse(data), 'key123').toString(crypto.enc.Utf8));
                    

                    fileData = Object.assign(fileData, tempData);

                    console.log(fileData);
                   
                })

                */
                const tempFileData = fs.readFileSync(__dirname + '/cryptData/' + file, (err, data) => {
                    if (err) {
                        reject(err);
                    }
                });

                fileData = Object.assign(fileData, JSON.parse(crypto.AES.decrypt(JSON.parse(tempFileData), 'key123').toString(crypto.enc.Utf8)));

            });

            resolve(fileData);
        });

    });

}