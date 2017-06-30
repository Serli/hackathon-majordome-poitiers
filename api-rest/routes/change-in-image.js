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
                getPixels(image, (err, pixels) => {
                    if (err) {
                        cb(err, false);
                        return;
                    }

                    orig = pixels.data;
                    cb(null, orig);
                });
            } else {
                Jimp.read(image)
                    .then(img => {
                        img.crop(x, y, width, height)
                            .getBuffer(Jimp.MIME_JPEG, (err, buf) => {
                                if (err) {
                                    cb(err);
                                    return;
                                }
                                getPixels(buf, Jimp.MIME_JPEG, (err, pixels) => {
                                    if (err) {
                                        cb(err, false);
                                        return;
                                    }
                                    orig = pixels.data;
                                    cb(null, orig);
                                });
                            });
                    })
                    .catch(err => cb(err));
            }

        },

        comparePixels: function (pixels) {
            // on s'arrète au premier pixel qui ne match pas
            const res = pixels.data.some((p, index) => {
                return orig[index] !== p;
            });
            return !res;
        }, compare(image, cb){
            if (!width) {
                getPixels(image, (err, pixels) => {
                    if (err) {
                        cb(err, false);
                        return;
                    }


                    const res = this.comparePixels(pixels);

                    cb(null, res);
                });
            } else {
                Jimp.read(image)
                    .then(img => {
                        img.crop(x, y, width, height)
                            .getBuffer(Jimp.MIME_JPEG, (err, buf) => {
                                if (err) {
                                    cb(err);
                                    return;
                                }

                                getPixels(buf, Jimp.MIME_JPEG, (err, pixels) => {
                                    if (err) {
                                        cb(err, false);
                                        return;
                                    }
                                    const res = this.comparePixels(pixels);
                                    cb(null, res);
                                });
                            });
                    })
                    .catch(err => cb(err));
            }
        }
    };
};