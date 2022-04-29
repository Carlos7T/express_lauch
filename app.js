const express = require('express');
const app = express();
const port = 3000;

app.get( '/', (req, res) => res.send('Hello World!'));


app.get( '/launchx', (req, res) => {
    res.send("Bienvenidos a launchX!");
});

app.get('/node', (req, res) => { 
    const explorer1 = {id: 1, name: 'Explorer 1'};
    const explorer2 = {id: 2, name: 'Explorer 2'};
    const explorer3 = {id: 3, name: 'Explorer 3'};
});

app.get('/node/:id', (req, res) => {
    const id = req.params.id;
    const explorer = {id: id, name: 'Explorer ' + id};
    res.send(explorer);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));