const personData = require('./Person.data');

const getPerson = (req, res) => {
    const person = personData.getPersonData();
    let tempArray = [];

    if (Object.keys(req.query).length === 0) {
        for (let key in person) {
            tempArray.push(person[key]);
        }
    }

    if (Object.keys(req.query).length != 0) {
        let tempKeys = Object.keys(req.query);
        for(i = 0; i < tempKeys.length; i++) {
            if(person[tempKeys[i]] === undefined) {
                continue;
            }
            tempArray.push(person[tempKeys[i]]);
        }
    }
    res.send(tempArray.join(', '));
}

const getName = (req, res) => {
    const person = personData.getPersonData();

    res.send(person.name);
}

const getAddress = (req, res) => {
    const person = personData.getPersonData();

    res.send(person.city + ", " + person.street + ", " + person.postcode);
}

const getPostRecipient = (req, res) => {
    const person = personData.getPersonData();

    res.send(person.name + ", " + person.surname + ", " + person.city + ", " +
        person.street + ", " + person.postcode);
}

module.exports = {
    getPerson,
    getName,
    getAddress,
    getPostRecipient
}