const path = require('path');
const fs = require('fs');
const Rx = require('rxjs');

const indexPage = (req, res) => {
    const pathIndexHtml = path.resolve(__dirname, '..', 'build', 'index.html');
    Rx.Observable.bindNodeCallback(fs.readFile)(pathIndexHtml, 'utf8')
        .subscribe(
            str => {
                res.set('cache-control', 'public, max-age=0');
                res.set('Content-Type', 'text/html; charset=UTF-8');
                res.status(200).send(str);
            },
            err => {
                console.error(err);
                res.sendStatus(500)
            }
        );

};

module.exports = indexPage;