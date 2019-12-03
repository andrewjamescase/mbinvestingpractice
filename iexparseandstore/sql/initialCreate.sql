CREATE TABLE CompanyIEX
(
    symbol varchar(6),
    companyName varchar(255),
    exchange varchar (20),
    industry varchar (255),
    sector varchar (255),
    ceo varchar (100),
    securityName varchar (255)
);

CREATE TABLE KeyStatsIEX
(
    symbol varchar(6),
    marketcap bigint,
    week52high float,
    week52low float,
    week52change float,
    sharesOutstanding bigint,
    "float" bigint,
    avg10Volume bigint,
    avg30Volume bigint,
    day200MovingAvg float,
    day50MovingAvg float,
    employees bigint,
    ttmEPS float,
    ttmDividendRate float,
    dividendYield float,
    nextDividendDate date,
    exDividendDate date,
    nextEarningsDate date,
    peRatio float,
    beta float,
    maxChangePercent float,
    year5ChangePercent float,
    year2ChangePercent float,
    year1ChangePercent float,
    ytdChangePercent float,
    month6ChangePercent float,
    month3ChangePercent float
);

CREATE TABLE IncomeStatementIEX
(
    symbol varchar(6),
    reportDate date,
    totalRevenue bigint,
    costOfRevenue bigint,
    grossProfit bigint,
    researchAndDevelopment bigint,
    sellingGeneralandAdmin bigint,
    operatingExpense bigint,
    operatingIncome bigint,
    otherIncomeExpenseNet bigint,
    ebit bigint,
    interestIncome bigint,
    pretaxIncome bigint,
    incomeTax bigint,
    minorityInterest bigint,
    netIncome bigint,
    netIncomeBasic bigint
);

CREATE TABLE QuoteIEX
(
    symbol varchar(6),
    "open" float,
    "close" float,
    previousClose float,
    high float,
    low float,
    volume bigint,
    change float,
    changePercent float,
    latestPrice float,
    week52high float,
    week52low float,
    latestSource varchar(255),
    lastUpdated varchar(255)
);

CREATE TABLE EarningsIEX
(
    symbol varchar(6),
    EPSreportDate date,
    actualEPS float,
    consensusEPS float,
    EPSSurpriseDollar float,
    fiscalPeriod varchar(255),
    fiscalEndDate date,
    yearAgo float,
    yearAgoChangePercent float
);

CREATE TABLE CashFlowIEX
(
    symbol varchar(6),
    reportDate date,
    netIncome bigint,
    depreciation bigint,
    changesInReceivables bigint,
    changesInInventories bigint,
    cashChange bigint,
    cashFlow bigint,
    capitalExpenditures bigint,
    investments bigint,
    investingActivityOther bigint,
    totalinvestingcashflows bigint,
    dividendsPaid bigint,
    netBorrowings bigint,
    otherFinancingCashFLows bigint,
    cashFlowFInancing bigint,
    exchangeRateEffect bigint
);

CREATE TABLE BalanceSheetIEX
(
    symbol varchar(6),
    reportDate date,
    currentCash bigint,
    shortTermInvestments bigint,
    receivables bigint,
    inventory bigint,
    otherCurrentAssets bigint,
    currentAssets bigint,
    longTermInvestments bigint,
    propertyPlantEquipment bigint,
    goodwill bigint,
    intangibleAssets bigint,
    otherAssets bigint,
    totalAssets bigint,
    accountsPayable bigint,
    currentLongTermDebt bigint,
    otherCurrentLiabilities bigint,
    totalCurrentLiabilities bigint,
    longTermDebt bigint,
    otherLiabilities bigint,
    minorityInterest bigint,
    totalLiabilities bigint,
    commonStock bigint,
    retainedEarnings bigint,
    treasuryStock bigint,
    capitalSurplus bigint,
    shareholderEquity bigint,
    netTangibleAssets bigint
);

CREATE TABLE WeeklyAV
(
    symbol varchar(6),
    priceDate date,
    "open" float,
    "close" float,
    high float,
    low float,
    volume bigint
);

CREATE TABLE AveragesAV
(
    symbol varchar(6),
    avgType varchar(10),
    avgDate date,
    avgValue float,
    TimeInterval varchar(255)
);