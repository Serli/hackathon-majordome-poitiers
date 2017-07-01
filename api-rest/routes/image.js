import express from 'express';
const Jimp = require("jimp");
const factory = require('./change-in-image');
let comparator;
const router = express.Router();
const fact = (io) => {

  router.post('/', function (req, res) {
    if (!req.files) {
      res.sendStatus(204);
      return;
    }
    const image = req.files.file;
    const zoneId = req.body.zoneId;

    if (comparator) {
      comparator.compare(image.data, (err, result) => {
        if (err) {
          console.error(err);
          res.sendStatus(500);
        }


        console.log(`resultat : ${result}`);
        if(result) {
            console.log("prévenir papa");
            io.sockets.emit('alert-children', {});
        }
        res.sendStatus(204);
      });
    } else {
      const zoneIdObj = getPercentageCrop(zoneId);
      console.log(zoneIdObj);
      Jimp.read(image.data).then(img => {
        const x = zoneIdObj.x;
        const y = zoneIdObj.y;
        const w = img.bitmap.width * 0.333;
        const h = img.bitmap.height * 0.333;
        comparator = factory(x, y, w, h);
        console.log('x :' + x + ' y :' + y + ' width: ' + w + 'height: ' + h);
        comparator.setOriginal(image.data, (err, cb) => {
          if (err) {
            console.error(err);
            res.status(500).end(err);
          }
          res.sendStatus(204)

        })
      });
    }

  });


  function getPercentageCrop(zoneId) {
    console.log('get percentage zone id :', zoneId);
    switch (zoneId) {
        case '1' :
            return { x: 0, y: 0 };
        case '2' :
            return { x: 33, y: 0 };
        case '3' :
            return { x: 66, y: 0 };

        case '4' :
            return { x: 0, y: 33 };
        case '5' :
            return { x: 33, y: 33 };
        case '6' :
            return { x: 66, y: 33 };

        case '7' :
            return { x: 0, y: 66 };
        case '8' :
            return { x: 33, y: 66 };
        case '9' :
            return { x: 66, y: 66 };

    }
  }
  return router;
};


module.exports = fact;
