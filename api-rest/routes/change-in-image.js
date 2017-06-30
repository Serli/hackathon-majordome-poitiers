const Jimp = require("jimp");
const getPixels = require("get-pixels");


module.exports = (x, y, width, height) => {
    let orig = [];

    return {
        isinit(){
            return orig.length > 0;
        },
        setOriginal(image, cb){
            if (!width) {
                Jimp.read(image).then(img => {
                    orig = img;
                    cb(null, orig);
                });

            } else {
                Jimp.read(image)
                    .then(img => {
                        orig = img.crop(x, y, width, height);
                        cb(null, orig);
                    })
                    .catch(err => cb(err));
            }

        },

        comparePixels: function (pixels) {
            var dist = Jimp.distance(orig, pixels);
            var diff = Jimp.diff(orig, pixels);

            if(dist < 0.15 || diff.percent < 0.15) {
                // Match
                return true
            } else {
                return false;
            }
        }, compare(image, cb){
            if (!width) {
                Jimp.read(image).then(img => {
                    const res = this.comparePixels(img);
                    cb(null, res);
                });
            } else {
                Jimp.read(image)
                    .then(img => {
                        const res = this.comparePixels(img.crop(x, y, width, height));
                        cb(null, res);
                    })
                    .catch(err => cb(err));
            }
        }
    };
};