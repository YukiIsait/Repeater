const express = require('express')
const proxy = require('express-http-proxy')
const { getTarget, getPort } = require('./environment_util.cjs')

const app = express()

app.get('/', (_, res) => {
    res.send('<h1>An HTTP Repeater</h1>')
})
app.use('/proxy', proxy(getTarget()))
app.listen(getPort(), error => console.log(error ? error : 'Server started'))

module.exports = app
