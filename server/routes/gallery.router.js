const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js')

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;

    const queryText = `UPDATE gallery SET likes=likes+1 WHERE id=$1;`;
    const values = [galleryId]

    pool.query(queryText, values)
        .then(response => {
            console.log('response from DB: ', response);
            res.sendStatus(200);
        })
        .catch(err => {
            console.log('Error from DB: ', err);
            res.sendStatus(500)
        })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM gallery ORDER BY id;`
    pool.query(queryText)
        .then(response => {
            console.log('Response from DB: ', response)
            res.send(response.rows)
        }).catch(err => {
            console.log('Error on GET from DB: ', err);
            res.sendStatus(500);
        });
});
         // END GET Route

// POST Route
router.post('/', (req, res) => {
    const picToAdd = req.body;
    const queryText = `
        INSERT INTO gallery (path, description)
        VALUES ($1, $2);
    `
    
    console.log('req.body = ', req.body)
    
    let values = [picToAdd.path, picToAdd.description];
    pool.query(queryText, values)
        .then(response => {
            console.log('POST response from DB: ', response);
            res.sendStatus(201)            
        })
        .catch(err => {
            console.log('Error from DB on POST: ', err);
            res.sendStatus(500);
        })
    })

    // DELETE Route
    router.delete('/:id', (req, res) => {
        const picToDelete = req.params.id;
        const queryText = `DELETE FROM gallery WHERE id=$1`
        const values = [picToDelete];
        pool.query(queryText, values)
            .then(response => {
                res.sendStatus(200)
            }).catch(err => {
                console.log('Error on Delete from DB: ', err);
                res.sendStatus(500);
            })
    })

module.exports = router;