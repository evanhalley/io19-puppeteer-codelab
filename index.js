'use strict';

const express = require('express');
const puppeteer = require('puppeteer');

const PORT = 8080;
const CODELAB_URL = 'https://codelabs.developers.google.com/';

let app = express();

app.get('/codelab', async (req, res) => {
    let key, value;

    if (req.param.title) {
        key = 'title';
        value = req.param.title;
    } else if (req.param.duration) {
        key = 'duration';
        value = req.param.duration;
    } else if (req.param.category) {
        key = 'category';
        value = req.param.category;
    }

    let results = {
        title: 'This is just a title',
        duration: '79',
        category: 'IoT',
        url: 'http://google.com/linktocodelab'
    };
    res.json(results);
});

async function search(query) {

}

app.listen(PORT, () => console.log(`App is listening on port ${PORT}!`));