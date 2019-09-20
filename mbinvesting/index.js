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
    
    const baseUrl = 'https://cloud.iexapis.com';
    
    const apiId = '?token=pk_10651120478d4b44a4f431c33e678d40';
    const path = '/stable/stock/aapl/quote';
    
    const userLocation = (url1, path, key) => {
       let newUrl = url1 + path + key;
       return newUrl;
    };

    const apiUrl = userLocation(baseUrl, path, apiId);
    console.log(apiUrl);
    fetch(apiUrl) 
     .then(res => res.json())
     
     .then(res => {
        pool.query(`INSERT INTO chart(id, companysymbol, date, open, close, high, low, change, changepercent, volume, sector) VALUES(124, '${res.symbol}', '2019-09-19', ${res.open},${res.close},${res.high},${res.low},${res.change},${res.changePercent}, ${res.volume},'${res.primaryExchange}') `, (error, results) => {
            if(error) {
                console.log(error);
                throw error
            }
            console.log("IEX successfully connected")
        })
     })
    
    .catch(err => {
        //console.log(res)
       res.redirect('/error');
    });
    res.send("IEX connected successfully and inserted the row")
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