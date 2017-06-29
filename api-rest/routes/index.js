import express from 'express';
import { fetchService, HTTP } from './service';

const router = express.Router();

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
