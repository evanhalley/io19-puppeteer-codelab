'use strict';

const express = require('express');
const puppeteer = require('puppeteer');

const PORT = 8080;
const CODELAB_URL = 'https://codelabs.developers.google.com/';

let app = express();

app.get('/codelab', async (req, res) => {
    let filter, query;

    if (req.query.title) {
        filter = 'title';
        query = req.query.title;
    } else if (req.query.duration_gt) {
        filter = 'duration';
        query = req.query.duration;
    }  else if (req.query.duration_lt) {
        filter = 'duration';
        query = req.query.duration;
    } else if (req.query.category) {
        filter = 'category';
        query = req.query.category;
    }
    let results = await search({ filter: filter, query: query })
    res.json(results);
});

async function search(query) {
    let results = [];
    
    // TODO: use puppeteer to get the codelabs from the codelabs webpage

    results.push({"title":"This is just a title","duration":"79","category":"IoT","url":"http://google.com/linktocodelab"});

    // filter and return results
    return results.filter(codelab => {

        if (query.filter && query.query) {
            if (query.filter === 'title' || query.filter === 'category') {
                return codelab[query.filter].toLowerCase().indexOf(query.query.toLowerCase()) > -1;
            } else if (query.filter === 'duration_lt') {
                return codelab['duration'] < query.query;
            } else if (query.filter === 'duration_gt') {
                return codelab['duration'] > query.query;
            }
        }
        return true;
    });
}

app.listen(PORT, () => console.log(`App is listening on port ${PORT}!`));