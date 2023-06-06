const router = require('express').Router();
const fs = require('fs');

// this imporsts ths 'uuidv4' functin from the 'uuid' module to create unique identifiers
const { v4: uuidv4 } = require('uuid');

// route handler GET that uses asynchronous function
router.get('/api/notes', async (req, res) => {
    const jsonDB = await JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    res.json(jsonDB);
});

// adds a new note to existing JSON data in db.json and returns updata data as response
router.post('/api/notes', (req, res) => {
    const jsonDB = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    jsonDB.push(newNote);
    fs.writeFileSync("db/db.json", JSON.stringify(jsonDB));
    res.json(jsonDB);
});

module.exports = router;