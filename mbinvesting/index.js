const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require("node-fetch");
const { pool } = require('./config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

const getChart = (request, response) => {
    pool.query("SELECT * FROM chart", (error, results) => {
        if (error) {
            throw error
        }
        //console.log('here I am')
        response.status(200).json(results.rows)
    })
}

app.get('/financial', (req, res) => {
    //build api URL with user zip
    const baseUrl = 'https://cloud.iexapis.com';
    //ENTER YOUR API KEY HERE (make sure to no include < >)
    const apiId = '?token=pk_10651120478d4b44a4f431c33e678d40';
    const path = '/stable/stock/aapl/quote';

    const userLocation = (url1, path, key) => {
       let newUrl = url1 + path + key;
       return newUrl;
    };

    const apiUrl = userLocation(baseUrl, path, apiId);

    fetch(apiUrl) 
     .then(res => res.json())
     .then(data => {
       res.send({ data });
     })
    //res.status(200).json()
    .catch(err => {
       res.redirect('/error');
    });
 })

app
    .route('/chart')
    .get(getChart);

    app.get('/working', function(req, res) {
    res.send('Working page');
})
    app.get('/error', function(req, res) {
        res.send('IEX request did not work');
    })

app.listen(process.env.PORT || 3000, () => {
    console.log('Server listening')
});