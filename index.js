const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.json({data:'Hello World!'});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

