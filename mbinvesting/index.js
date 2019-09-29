const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require("node-fetch")
const { pool } = require('./config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const getChart = (request, response) => {
    pool.query("SELECT * FROM quoteiex", (error, results) => {
        if (error) {
            throw error
        }
        //console.log('here I am')
        response.status(200).json(results.rows)
    })
}
const getCompany = (request, response) => {
    pool.query("SELECT * FROM companyiex", (error, results) => {
        if (error) {
            throw error
        }
        //console.log('here I am')
        response.status(200).json(results.rows)
    })
}
app.get('/financial/companyiex', (req, res) => {
    const baseUrl = 'https://cloud.iexapis.com';
    const apiId = '?token=pk_10651120478d4b44a4f431c33e678d40';
    const companyIEXpath = '/stable/stock/aapl/company';
    const userLocation = (url1, path, key) => {
        let newUrl = url1 + path + key;
        return newUrl;
    };
    const companyapiUrl = userLocation(baseUrl, companyIEXpath, apiId);
    console.log(companyapiUrl);

    fetch(companyapiUrl)
        .then(res => res.json())
        .then(res => {
            pool.query(`INSERT INTO companyiex(symbol, companyName, exchange, industry, sector, ceo, securityName) VALUES('${res.symbol}', '${res.companyName}', '${res.exchange}','${res.industry}', '${res.sector}', '${res.ceo}', '${res.securityName}')`, (error, results) => {
                if (error) {
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
    res.send("IEX connected successfully and inserted the row for the companyiex table")
})
app.get('/financial/quoteiex', (req, res) => {
    //const symbolList = new Array ('appl', 'msft', 'amzn')
    const baseUrl = 'https://cloud.iexapis.com';

    const apiId = '?token=pk_10651120478d4b44a4f431c33e678d40';


    symbolList.forEach(function(symbol)  {


        const quoteIEXpath = `'/stable/stock/aapl/quote`;


        const userLocation = (url1, path, key) => {
            let newUrl = url1 + path + key;
            return newUrl;
        };
        const quoteapiUrl = userLocation(baseUrl, quoteIEXpath, apiId);
        console.log(quoteapiUrl);
        fetch(quoteapiUrl)
            .then(res => res.json())

            .then(res => {
                pool.query(`INSERT INTO quoteiex(symbol, open, close, previousClose, high, low, volume, change, changePercent, latestPrice, week52high, week52low, latestSource, lastUpdated) VALUES('${res.symbol}', ${res.open},${res.close},${res.previousClose},${res.high},${res.low},${res.volume}, ${res.change},${res.changePercent}, ${res.latestPrice}, ${res.week52High}, ${res.week52Low}, '${res.latestSource}', '${res.latestTime}') `, (error, results) => {
                    if (error) {
                        console.log(error);
                        throw error
                    }
                    //console.log("IEX successfully connected")
                })
            })
            .catch(err => {
                //console.log(res)
                res.redirect('/error'); 
            });
        res.send("IEX connected successfully and inserted the row for the quoteiex table")
    })

})

app
    .route('/chart')
    .get(getChart);
app
    .route('/company')
    .get(getCompany);
app.get('/working', function (req, res) {
    res.send('Working page');
})
app.get('/error', function (req, res) {
    res.send('IEX request did not work');
})


app.listen(process.env.PORT || 3000, () => {
    console.log('Server listening')
});