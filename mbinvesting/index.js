const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { pool } = require('./config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

const getChart = (request, response) => {
    pool.query("SELECT * FROM chart", (error, results) => {
        if (error) {
            throw error
        }
        //console.log('here I am')
        response.status(200).json(results.rows)
    })
}


app
    .route('/chart')
    .get(getChart);

    app.get('/working', function(req, res) {
    res.send('Working page');
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server listening')
});