const rawData = require('./practice.json');
//const parsedData = JSON.parse(rawData);
//console.log(rawData);
function returnData (parsedData){
    //rawData.forEach((chart) =>{
        //const {symbol, companyName, primaryExchange} 
        var result;
        var date = new Date();
        //date = date.split('T');
        result += `INSERT INTO chart (symbol, companyName, date, open, close, high, low, change, changepercent, volume, sector) VALUES (${parsedData.data.symbol}, ${date}, ${parsedData.data.companyName}, ${parsedData.data.open}},${parsedData.data.close}},${parsedData.data.high}},${parsedData.data.low}},${parsedData.data.change}},${parsedData.data.changePercent}, ${parsedData.data.volume},${parsedData.data.primaryExchange})`

        console.log(date);
        console.log(result);
    //})
};
returnData(rawData);













//const fetch = require("node-fetch");
/*
fetch('practice.json').then(function (res) {
    return res.json();
    
})

.then(function (data){
    let result = `<h2>Chart Info from jsonObj</h2>`;
    data.forEach((chart) =>{
        const {symbol, companyName, primaryExchange} = chart
        result+=
        `<div>
        <h5 symbol: ${symbol} </h5>
        <ul>
            <li> companyName: ${companyName}</li>
            <li> primaryExchange: ${primaryExchange} </li>
        </ul>
        </div>`;

        document.getElementById('result').innerHTML = result;
    })
    
})*/