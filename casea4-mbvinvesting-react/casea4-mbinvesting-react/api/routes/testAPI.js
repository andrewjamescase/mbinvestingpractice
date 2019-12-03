var express = require("express");
var router = express.Router();
const fetch = require("node-fetch")
router.get("/", function(req, res, next) {
        const baseUrl = 'https://www.alphavantage.co/';
        const apiId = '&apikey=XQHAAAAQSH57464K';
        const companyIEXpath = 'query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=';
        const AlphaVantageSymbol = 'MSFT';
        const urlBuilder = (url1, path, symbol, key ) => {
            let newUrl = url1 + path + key + symbol;
            return newUrl;
        };
        const companyapiUrl = urlBuilder(baseUrl, companyIEXpath, AlphaVantageSymbol, apiId);
        //res.send(companyapiUrl);
    
        fetch(companyapiUrl)
            .then(res => res.json())
            .then(res => {
               console.log(res);
            })
            .catch(err => {
                //console.log(res)
                res.redirect('/error');
            });
        res.send("connected successfully to alpha vantage")
    
});

module.exports = router;
