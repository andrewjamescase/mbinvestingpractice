const rawData = require('./practice.json');
//const parsedData = JSON.parse(rawData);
//console.log(rawData);
function returnData (parsedData){
    //rawData.forEach((chart) =>{
        //const {symbol, companyName, primaryExchange} 
        var result;
        result+=
        `<div>
        <h5 symbol: ${parsedData.data.symbol} </h5>
        <ul>
            <li> companyName: ${parsedData.data.companyName}</li>
            <li> primaryExchange: ${parsedData.data.primaryExchange} </li>
        </ul>
        </div>`;
        `INSERT INTO chart (symbol, companyName, primaryExchange)`

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