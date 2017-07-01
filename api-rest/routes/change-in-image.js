const Jimp = require("jimp");
const getPixels = require("get-pixels");
import { isChild } from "./child-recognition";


module.exports = (x, y, w, h) => {
    let orig = null;

    return {
        isinit(){
            return orig != null;
        },
        setOriginal(image, cb){
            if (!w) {
                console.log('Set first time');
                console.log('x :' + x + ' y :' + y + ' width: ' + w + 'height: ' + h);
                Jimp.read(image).then(img => {
                    orig = img;
                    cb(null, orig);
                });

            } else {
                console.log('Crop');
                console.log('x :' + x + ' y :' + y + ' width: ' + w + 'height: ' + h);
                Jimp.read(image)
                    .then(img => {
                        orig = img.crop(x, y, w, h);
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
                console.log('Same pix');
                return true
            } else {
                return false;
            }
        }, compare(image, cb){
            if (!w) {
                Jimp.read(image).then(img => {
                    const res = this.comparePixels(img);
                    if(!res) {
                        // Check if pix has children
                        console.log('check')
                        console.log('x :' + x + ' y :' + y + ' width: ' + w + 'height: ' + h);
                        img.getBuffer('image/png', (err,buffer) => {
                            const base64 = buffer.toString('base64');
                            isChild(base64).then(isChildData => {
                                if(isChildData) {
                                    console.log('IS CHILD !');
                                    cb(null, isChildData);
                                } else {
                                    console.log("not children");
                                    cb(null, isChildData);
                                }
                            });
                        });
                    }
                });
            } else {
                Jimp.read(image)
                    .then(img => {
                        console.log('ELSE')
                        console.log('x :' + x + ' y :' + y + ' width: ' + w + 'height: ' + h);
                        const res = this.comparePixels(img.crop(x, y, w, h));
                        if(!res) {
                            // Check if pix has children
                            console.log('check')
                            img.getBuffer('image/png', (err,buffer) => {
                                const base64 = buffer.toString('base64');
                                isChild(base64).then(isChildData => {
                                    if(isChildData) {
                                        console.log('IS CHILD !');
                                        cb(null, isChildData);
                                    } else {
                                        console.log("not children");
                                        cb(null, isChildData);
                                    }
                                });
                            });
                        }
                    })
                    .catch(err => cb(err));
            }
        }
    };
};