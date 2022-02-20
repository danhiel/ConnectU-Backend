"use strict";

const express = require('express');
const app = express();
const {Pool} = require('pg');
const multer = require("multer");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(multer().none());

const db = new Pool ({
    host: process.env.DB_URL || 'connectu-backend-postgre.postgres.database.azure.com',
    port: process.env.DB_PORT || '5432',
    user: process.env.DB_USERNAME || 'CSNerds@connectu-backend-postgre',
    password: process.env.DB_PASSWORD || 'SUHack22*',
    database: process.env.DB_NAME || 'connectu'
});

app.use(express.static("public"));
const PORT = process.env.PORT || 8000;
app.listen(PORT);
