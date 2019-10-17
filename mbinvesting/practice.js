


const res = require('./fullResponseCoCaBs.json')

//var result =



//console.log(result)

var stockList = ["PG", "VZ", "MRK", "CMCSA", "ORCL", "NKE", "AMGN", "SBUX", "DHR", "BMY", "SYK", "MS", "CELG", "CI", "TGT", "AEP", "BIIB", "FISV", "DAL", "MFC", "ALL", "TRI", "HSY", "IQV", "LUV", "RACE", "DFS", "MCK", "ALXN", "FNMA", "CERN", "HIG", "SNPS", "KEYS", "CPRT", "CDNS", "CHD", "CDW", "HEI", "OMC", "LH", "HBAN", "HAS", "DISCA", "HOLX", "ALLY", "WRB", "LDOS", "FNF", "ARNC", "ZBRA", "OTEX", "RNG", "EQH", "WST", "URI", "BAH", "DVA", "AZPN", "ARCC", "VOYA", "AER", "HUBS", "FAF", "HAE", "CIEN", "ICL", "INXN", "ALSN", "MDU", "IART", "BPOP", "OMF", "EV", "FHN", "JBLU", "MTZ", "ESNT", "RDN", "AWI", "TTEK", "AGO", "FTDR", "SEDG", "AAN", "FCN", "SF", "FNB", "UMPQ", "JJSF", "LM", "GLOB", "ENPH", "FII", "CRUS", "MEDP", "HLI", "WAFD", "CATY", "FULT", "BAC", "BHC", "DFS", "ENTG", "FENY", "FHLC", "FITB", "FREL", "FUTY", "GM", "HUM", "IGLB", "IJR", "INTC", "PFE", "ROST"]


//console.log(result)

//for loop for company to output the javascript that gets the data and formats it as a sql insert statement
/*
for (let prop in stockList)
{
    if(prop == 0)
    {
        var result = 'INSERT INTO companyiex(symbol, companyName, exchange, industry, sector, CEO, securityName) VALUES(\'${res.' + stockList[prop] + '.company.symbol}\', \'${res.' + stockList[prop] + '.company.companyName}\', \'${res.' + stockList[prop] + '.company.exchange}\',\'${res.' + stockList[prop] + '.company.industry}\', \'${res.' + stockList[prop] + '.company.sector}\', \'${res.' + stockList[prop] + '.company.CEO}\', \'${res.' + stockList[prop] + '.company.securityName}\'),'
    }
    else if (prop == stockList.length-1)
    {
        var result = '(\'${res.' + stockList[prop] + '.company.symbol}\', \'${res.' + stockList[prop] + '.company.companyName}\', \'${res.' + stockList[prop] + '.company.exchange}\',\'${res.' + stockList[prop] + '.company.industry}\', \'${res.' + stockList[prop] + '.company.sector}\', \'${res.' + stockList[prop] + '.company.CEO}\', \'${res.' + stockList[prop] + '.company.securityName}\')'
    }
    else
    {
        var result = '(\'${res.' + stockList[prop] + '.company.symbol}\', \'${res.' + stockList[prop] + '.company.companyName}\', \'${res.' + stockList[prop] + '.company.exchange}\',\'${res.' + stockList[prop] + '.company.industry}\', \'${res.' + stockList[prop] + '.company.sector}\', \'${res.' + stockList[prop] + '.company.CEO}\', \'${res.' + stockList[prop] + '.company.securityName}\'),'
    }
   console.log(result)
}*/

for(let prop in stockList)
{
    
    if (prop == 0)
    {
        var result = 'INSERT INTO cashflowiex(symbol, reportDate, netincome, depreciation, changesinreceivables, changesininventories, cashchange, cashflow, capitalexpenditures, investments, investingactivityother, totalinvestingcashflows, dividendspaid, netborrowings, otherfinancingcashflows, cashflowfinancing, exchangerateeffect), VALUES(\'${res.' + stockList[prop] + '.cashflowed.symbol}\', ${res.' + stockList[prop] + '.cashflowed.cashflow[0].reportDate}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].netIncome}, ${res.' + stockList[prop] + '.cashflowed.cashflow.depreciation}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].changesInReceivables}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].changesInInventories}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].cashChange}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].cashFlow}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].capitalExpenditures}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].investments}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].investingActivityOther}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].totalInvestingCashFlows}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].dividendsPaid}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].netBorrowings}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].otherFinancingCashFlows}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].cashFlowFinancing}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].exchangeRateEffect}),'
    }
    else if(prop == stockList.length-1)
    {
        var result = '(\'${res.' + stockList[prop] + '.cashflowed.symbol}\', \'${res.' + stockList[prop] + '.cashflowed.cashflow[0].reportDate}\', ${res.' + stockList[prop] + '.cashflowed.cashflow[0].netIncome}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].depreciation}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].changesInReceivables}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].changesInInventories}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].cashChange}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].cashFlow}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].capitalExpenditures}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].investments}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].investingActivityOther}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].totalInvestingCashFlows}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].dividendsPaid}, ${res.' + stockList[prop] + '.cashflowed.netBorrowings}, ${res.' + stockList[prop] + '.cashflowed.otherFinancingCashFlows}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].cashFlowFinancing}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].exchangeRateEffect})'
    }
    else{
        var result = '(\'${res.' + stockList[prop] + '.cashflowed.symbol}\', \'${res.' + stockList[prop] + '.cashflowed.cashflow[0].reportDate}\', ${res.' + stockList[prop] + '.cashflowed.cashflow[0].netIncome}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].depreciation}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].changesInReceivables}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].changesInInventories}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].cashChange}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].cashFlow}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].capitalExpenditures}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].investments}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].investingActivityOther}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].totalInvestingCashFlows}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].dividendsPaid}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].netBorrowings}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].otherFinancingCashFlows}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].cashFlowFinancing}, ${res.' + stockList[prop] + '.cashflowed.cashflow[0].exchangeRateEffect}),'
    }
    console.log(result)
}


