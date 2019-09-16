//require('dotenv').config()

const{Pool} = require('pg')
const isProduction = process.env.NODE_ENV === 'production'

//connection string only works if it's hardcoded. Not sure why it doesn't work with variables

const connectionString = 
'postgresql://postgres:local@localhost:5432/mbinvesting'
//`postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
    ssl: isProduction,
})

module.exports = { pool }

