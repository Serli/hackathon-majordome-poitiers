
import fetch from 'node-fetch';

const URL = "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBI9A9weOY6V0bnrh2gHCzAVJR6p4e-UuQ";

export async function isChild(base64) {
    const body = `{
    "requests": [
        {
            "image": {
                "content": "${base64}"
            },
            "features": [
                {
                    "type": "LABEL_DETECTION"
                }
            ]
        }
    ]
    }`;
   const result = await fetch(URL,{method: 'POST', body});
   const json = await result.json();
   console.log('result : ', json);

   if(json) {
       json.responses[0].labelAnnotations.map(label => console.log(label))
       const isChild = json.responses[0].labelAnnotations.some(label => label.description === 'infant' ||
                                                                            label.description === 'child' ||
                                                                            label.description === 'pink' ||
                                                                            label.description === 'red');
       console.log('Is child ? : ', isChild);
       return isChild;
   }

   return "RESULT ERROR : " + result;
}