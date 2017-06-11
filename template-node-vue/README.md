# template-node-vue

> install

``` bash
# install dependencies
npm install
```


## Backend

Sourcce dans `server`.
Server on port 9000.

``` bash
# start the node server (without webpack build)
npm run server
```

### Define rest API

Fichier Exemple `api-rest.js`

in App.js
``` js
const apiTest = require('./api-test');
...
app.use('/api/test', apiTest);
```


in api-test.js
``` js
const express = require('express');
const router = express.Router();
...
// example GET - /api/test
router.get('/', function (req, resp) {
    ...
    resp.json({attr:'value'});
});
...
// example POST - - /api/test
router.post('/', function (req, resp) {
    ...
    resp.sendStatus(204);
});
```



### Call rest API
``` js
const ws = require('./ws');
...
// example GET 
ws.get('https://api.github.com/users/github')
        .then(json => {
             // do things   
        })
        .catch(err => {
                     // do things   
        });
// example POST 
ws.post('https://url/to/post',{attr:2})
        .then(json => {
             // do things   
        })
        .catch(err => {
                     // do things   
        });
```

### Session

La session est activée.

``` js
req.session
```

### url par défaut

Dans le cas où aucune url matche, alors par défaut le index.html est envoyé.

### debug intellij

Créé une tache node pointant sur `server/index.js`

## Front dev

Server on port 8080. 

``` bash

# serve with hot reload at localhost:8080
npm run front
```
Y a un exemple d'appel à un service rest + d'utilisation de vue-router (surement du code crade comme je ne connais pas vue ...)

Le script :
* Compile les sources du répertoire `client` (.js,.vue, .css, image, font) à partir du fichier `main.js`
* Génère la page d'index à partir du fichier `client/index.html`. (Rajoute automatiquement le script généré)
* Lance un webpack dev server avec le hot reload.
* Lance un navigateur.
* Proxifie the '/api/' to 'http://localhost:9000/api/'

PS : penser à supprimer le safe-write si utilisation de intellij

``` bash
# build for production with minification
npm run build
```

Cette commande en plus : 
* crée un répertoire `build` avec l'ensemble des source
* minifie les sources JS + css
* Ajoute un hash au nom du fichier.

### Envoie du cookie session via rest

Pour rappel, pour l'envoie du cookie de session via fetch

```
 fetch('/api/test/session', {
            credentials: 'same-origin'
        })...
```

## Start for production
``` bash
# build front and run production server
npm start
```

Lance `npm run build` + lance le serveur sur le port 9000.
