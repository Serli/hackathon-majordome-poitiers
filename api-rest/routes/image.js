import express from 'express';
const comparator = require('./change-in-image')();
const router = express.Router();

router.post('/', function (req, res) {
    if (!req.files) {
        res.sendStatus(204);
        return;
    }
    const image = req.files[0];
    if (comparator.isinit()) {
        comparator.compare(image, (err, result) => {
            if (err) {
                console.error(err);
                res.sendStatus(500);
            }

            // prévenir papa
            console.log(`resultat : $[result}`)
            res.sendStatus(204);
        });
    } else {
        comparator.setOriginal(image.data, (err, cb) => {
            if (err) {
                console.error(err);
                res.sendStatus(500);
            }
            res.sendStatus(204)

        })
    }

});


export default router;
