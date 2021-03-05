const fs = require('fs');

const LOG_FILE_PATH = './logs/logs.txt'; // лютый хардкод

function logMiddleware(req, res, next) {
    console.log(req.method, req.originalUrl, new Date());

    // fs.appendFile();
    fs.appendFile(LOG_FILE_PATH, `${req.method} ${req.originalUrl} ${new Date()}\n`, (err) => {
        if (err) {
            console.log(err);
        }
    });

    next();
}

module.exports.logMiddleware = logMiddleware;
