import express from 'express';
const comparator = require('./change-in-image')();
const router = express.Router();
const factory = (io)=>{

  router.post('/', function (req, res) {
    if (!req.files) {
      res.sendStatus(204);
      return;
    }
    const image = req.files.file;
    if (comparator.isinit()) {
      comparator.compare(image.data, (err, result) => {
        if (err) {   console.error(err);

          res.sendStatus(500);
        }

        // prévenir papa
        console.log(`resultat : ${result}`);
        io.sockets.emit('alert-children', {});
        res.sendStatus(204);
      });
    } else {
      comparator.setOriginal(image.data, (err, cb) => {
        if (err) {
          console.error(err);
          res.status(500).end(err);
        }
        res.sendStatus(204)

      })
    }

  });
  return router;
};


module.exports=   factory;
