import React, {useState, useEffect} from 'react';
import axios from "axios";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine, ReferenceArea,
  ReferenceDot, Tooltip, CartesianGrid, Legend, Brush, ErrorBar, AreaChart, Area,
  Label, LabelList } from 'recharts';


function DailyPrice() {
    const [dailyPriceResponse, setDailyPriceResponse] = useState({});
    useEffect(() => {
        const responseVar = axios.get(companyapiUrl);
        setDailyPriceResponse(responseVar)
        console.log(responseVar)
    }, []);

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
        //, high: "142.231", volume: "246454667"
      const data = [
        {date: "2019-12-12", open: "142.23"},
        {date: "2019-12-13", open: "122.23"}
      ]
    return (
      <div>
      
        <h1>Hello World</h1>
        <LineChart
        width={400} height={400} data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="stepAfter" dataKey="weather" stroke="#ff7300" />
      </LineChart>
      </div>
    )
}

export default DailyPrice;

