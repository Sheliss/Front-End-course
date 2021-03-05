const express = require('express');
const personService = require('./Person.service');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.get('/person', personService.getPerson);
app.get('/person/name', personService.getName);
app.get('/person/address', personService.getAddress);
app.get('/person/post/recipient', personService.getPostRecipient);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });