const express = require('express');
const router = express.Router();
const http = require('http');
var mysql = require('mysql');

var con = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: '',
    insecureAuth: true,
    multipleStatements: true
});

module.exports = router;