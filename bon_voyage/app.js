const fs = require('fs');
const cors = require('cors');
const express = require('express');
const app = express();
const api_route = require('./Route/rt_route');

app.use(cors());
app.use(api_route);

app.all('*', (req, res, next) => {
    // res.status(404).json({
    //     status: 'fail',
    //     message: `Cannot find ${req.originalUrl} on this server.`
    // });
    const err = new Error(`Can't find ${req.originalUrl} on this server.`);
    err.status = 'fail';
    err.statusCode = 404;
    next(err);
});

app.use((err, req, res, next) => {
    // This is stack trace of error and every error has its own stack
    // console.log(err.stack);
    console.log(req.query)
    err.status = err.status || 'error';
    err.statusCode = err.statusCode || 404;

    console.log('error caught by middleware of app1.js');

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    })
})


module.exports = app;