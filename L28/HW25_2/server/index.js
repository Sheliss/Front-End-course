const express = require('express');
const bodyParser = require('body-parser');


const apiService = require('./apiService');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', (req, res) => {
    res.send('It works');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });

app.post('/data/update', apiService.updateArray);
app.post('/data/create', apiService.createFile);
app.get('/data/status-check', apiService.checkStatus);
app.delete('/data', apiService.deleteFile);
app.get('/data/get', apiService.getCryptData);