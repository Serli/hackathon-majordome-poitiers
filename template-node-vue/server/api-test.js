const express = require('express');
const ws = require('./ws');

const router = express.Router();
const result = [1, 2, 3, 4].map(id => {
    return {id, name: `user-${id}`};
});
// Exemple d'appel get
router.get('/', function (req, resp) {
    ws.get('https://api.github.com/users/github')
        .then(r => resp.set('Content-cache','').json(r))
        .catch(err => {
            console.error('error', err);
            resp.sendStatus(500);
        });

});

// Exemple d'appel post via un get
router.get('/call-post', function (req, resp) {
    ws.post('http://localhost:9000/api/test', {call: 'post value'})
        .then(r => resp.json(r))
        .catch(err => {
            console.error('error', err);
            resp.sendStatus(500);
        });

});

// Exemple de la session
router.get('/session', function (req, resp) {
    // example session
    const increment = () => {
        if (!req.session.incr) {
            req.session.incr = 1;
        } else {
            req.session.incr++;
        }
        return req.session.incr;
    };
    const incr = increment();
    resp.set('cache-control', 'public, max-age=0');
    resp.json({incr});
});


// Exemple de post
router.post('/', function (req, resp) {
    const value = req.body;
    console.log('Valeur des headers:', req.headers);
    console.log('Valeur du body:' + JSON.stringify(value));

    resp.json(result);
});

router.put('/:key', function (req, resp) {
    resp.json(result)
});

router.delete('/:key', function (req, resp) {
    resp.sendStatus(200);
});


module.exports = router;