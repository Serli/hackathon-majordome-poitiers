import express from 'express';
import { fetchService, HTTP } from './service';
import { isChild } from './child-recognition';

const router = express.Router();

/* Test Picture */
router.get('/test', async (req, res, next) => {
    const pictureBase64 =  "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";
    const result = await isChild(pictureBase64); // result = true || false
    res.send(result);
});

/* Simple Get */
router.get('/es', async (req, res, next) => {
    const result = await fetchService('/');
    res.send(result);
});

/* ES: GET ALL */
router.get('/es/:index/:type/all', async (req, res, next) => {
    const index = req.params.index;
    const type = req.params.type;
    const body = '{\"query\": {\"match_all\": {}}}';
    const log = `Ìndex : ${index} - Type : ${type}`;
    console.log(log);

    const result = await fetchService(`/${index}/${type}/_search`, HTTP.POST, JSON.parse(body));
    res.send(result);
});

/* ES: GET BY _ID */
router.get('/es/:index/:type/:id', async (req, res, next) => {
    const index = req.params.index;
    const type = req.params.type;
    const id = req.params.id;

    const log = `Ìndex : ${index} - Type : ${type} - Id : ${id}`;
    console.log(log);

    const result = await fetchService(`/${index}/${type}/${id}`);
    res.send(result);
});


/* ES: SEARCH BY ANY FIELD */
router.post('/es/:index/:type/_search', async (req, res, next) => {
    const index = req.params.index;
    const type = req.params.type;
    const body = JSON.stringify(req.body);
    const query = `{\"query\": {\"term\": ${body}}}`;

    const log = `Ìndex : ${index} - Type : ${type} Body : ${body} - Query : ${query}`;
    console.log(log);

    const result = await fetchService(`/${index}/${type}/_search`, HTTP.GET, JSON.parse(query));
    res.send(result);
});

/* ES: POST  */
router.post('/es/:index/:type', async (req, res, next) => {
    const index = req.params.index;
    const type = req.params.type;
    const body = req.body;

    const log = `Ìndex : ${index} - Type : ${type} - Body : ${JSON.stringify(body)}`;
    console.log(log);

    const result = await fetchService(`/${index}/${type}`, HTTP.POST, body);
    res.send(result);
});

/* ES: PUT  */
router.put('/es/:index/:type/:id', async (req, res, next) => {
    const index = req.params.index;
    const type = req.params.type;
    const id = req.params.id;
    const body = req.body;

    const log = `Ìndex : ${index} - Type : ${type} - Id : ${id} - Body : ${JSON.stringify(body)}`;
    console.log(log);

    const result = await fetchService(`/${index}/${type}/${id}`, HTTP.PUT, body);
    res.send(result);
});


/* GET index page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});

export default router;
