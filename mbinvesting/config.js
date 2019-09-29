//require('dotenv').config()

const{Pool} = require('pg')
const isProduction = process.env.NODE_ENV === 'production'

//connection string only works if it's hardcoded. Not sure why it doesn't work with variables

const connectionString = 
//'postgresql://postgres:local@localhost:5432/mbinvesting'
//`postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
'postgresql://mixgahmoptdeip:f4adc72a8bab66d8a1740bc73c1cc4fb3335d47d3b7b4e613e5bb2571fa83b01@ec2-107-20-198-176.compute-1.amazonaws.com:5432/dd0218nnurqbft'
const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
    ssl: isProduction,
})

module.exports = { pool }

