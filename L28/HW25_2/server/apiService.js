const fileService = require('./fileService');
const infoService = require('./infoService');
const cryptoService = require('./cryptoService');

const createFile = (req, res) => {
    const newArray = req.body.values.split(',').map(item => item.trim());

    fileService.createFile(newArray)
        .then(() => 
            cryptoService.createCrypt(newArray)
            .then(() => res.send('CREATE AND CRYPT OK'))    
        )
        .catch(() => res.send('CREATE ERROR'));
}

const updateArray = (req, res) => {
    const newArray = req.body.values.split(',').map(item => item.trim());

    fileService.updateFile(newArray)
        .then(() => 
            cryptoService.createCrypt(newArray)
            .then(() => res.send('UPDATE AND CRYPT OK'))
        )
        .catch(() => res.send('NO FILE'));
    
}

const deleteFile = (req, res) => {
    fileService.fileDelete()
        .then(() => res.send('DELETE OK'))
        .catch(() => res.send('DELETE ERROR'));
}

const checkStatus = (req, res) => {
    fileService.getFile()
        .then(fileData => {
            return parsedData = JSON.parse(fileData);
        })
        .then(parsedData => {
            infoService.getInfo(parsedData)
                .then((infoData) => res.send(infoData))
        })
        .catch(() => res.send('ERROR'));
}

const getCryptData = (req, res) => {
    cryptoService.getCrytedFiles()
        .then((fileData) => res.send(fileData))
        .catch((err) => res.send(err))
}

module.exports = {
    updateArray,
    createFile,
    deleteFile,
    checkStatus,
    getCryptData
}