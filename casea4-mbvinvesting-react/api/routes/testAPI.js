var express = require("express");
var router = express.Router();

const axios = require("axios");

const baseUrl = "https://www.alphavantage.co/";
const apiId = "&apikey=RTGK5S6UGWG7SVEL";
const companyIEXpath = "query?function=TIME_SERIES_DAILY&symbol=";
const AlphaVantageSymbol = "MSFT";

const urlBuilder = (url1, path, symbol, key) => {
  let newUrl = url1 + path + symbol + key;
  return newUrl;
};

const companyapiUrl = urlBuilder(
  baseUrl,
  companyIEXpath,
  AlphaVantageSymbol,
  apiId
);
const todayDate = '2020-01-15';
const jsonTag = 'Time Series (Daily)'
router.get("/", async(req, res, next) => {
  //res.setHeader("Content-Type", "application/json");
  try {
  axios.get(companyapiUrl)
  //.then(res.send("youre a dick head react and express"))
  //.then(data => res.send(data.data[jsonTag][todayDate]))
  }
catch (error) {
    console.log("I made an error :(")
}
res.send("do i need to be out here")
});

module.exports = router;
