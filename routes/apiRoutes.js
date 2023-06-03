const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// GET route to retrieve all notes
router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

//TODO: POST route to add a note
