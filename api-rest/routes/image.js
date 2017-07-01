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
      Jimp.read(image.data).then(img => {
        const x = zoneIdObj.x;
        const y = zoneIdObj.y;
        const w = img.bitmap.width * 0.2;
        const h = img.bitmap.height * 0.2;
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
        return {x: 0, y: 0};
      case '2' :
        return {x: 20, y: 0};
      case '3' :
        return {x: 40, y: 0};
      case '4' :
        return {x: 60, y: 0};
      case '5' :
        return {x: 80, y: 0};

      case '6' :
        return {x: 0, y: 20};
      case '7' :
        return {x: 20, y: 20};
      case '8' :
        return {x: 40, y: 20};
      case '9' :
        return {x: 60, y: 20};
      case '10' :
        return {x: 80, y: 20};

      case '11' :
        return {x: 0, y: 40};
      case '12' :
        return {x: 20, y: 40};
      case '13' :
        return {x: 40, y: 40};
      case '14' :
        return {x: 60, y: 40};
      case '15' :
        return {x: 80, y: 40};


      case '16' :
        return {x: 0, y: 60};
      case '17' :
        return {x: 20, y: 60};
      case '18' :
        return {x: 40, y: 60};
      case '19' :
        return {x: 60, y: 60};
      case '20' :
        return {x: 80, y: 60};

      case '21' :
        return {x: 0, y: 80};
      case '22' :
        return {x: 20, y: 80};
      case '23' :
        return {x: 40, y: 80};
      case '24' :
        return {x: 60, y: 80};
      case '25' :
        return {x: 80, y: 80};


    }
  }
  return router;
};


module.exports = fact;
