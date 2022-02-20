/* Author: Danhiel
 * Last updated: 02/19/2022
 * Project: ConnectU
 * Backend for connectU containing API access to our database.
 */ 

"use strict";

// Set up
const express = require('express');
const app = express();
const {Pool} = require('pg');
const multer = require("multer");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(multer().none());

const INVALID_PARAM_ERROR = 400;
const SERVER_ERROR = 500;
const SERVER_ERROR_MSG = {error: "A database error occurred. Please try again later."};

// Database connection
const db = new Pool ({
    host: process.env.DB_URL || 'connectu-backend-postgre.postgres.database.azure.com',
    port: process.env.DB_PORT || '5432',
    user: process.env.DB_USERNAME || 'CSNerds@connectu-backend-postgre',
    password: process.env.DB_PASSWORD || 'SUHack22*',
    database: process.env.DB_NAME || 'connectu'
});

/**
 * Returns a JSON response with event ID.
 */
app.get("/home", async function(req, res) {
    try {
        let sql = await db.query("SELECT * FROM events ORDER BY begin_date LIMIT 3;");
        res.json(sql.rows);
    } catch (error) {
        res.status(SERVER_ERROR).json(SERVER_ERROR_MSG);
    }
});

/**
 * Returns a JSON response with profile user ID and user profile pic.
 */
app.get("/events", async function(req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        let sql = await db.query(
            "SELECT events.*, user_table.first_name, user_table.last_name FROM events " +
            "LEFT JOIN user_table ON events.user_id = user_table.user_id;");
        res.json(sql.rows);
    } catch (error) {
        res.status(SERVER_ERROR).json(SERVER_ERROR_MSG);
    }
});

/**
 * Updates the number of interested in the events database.
 */
app.post("/discover/insert", async function(req, res) {
    let update = req.query.update;
    let event_id = req.query.event_id;
    if (update && event_id) {
        try {
            let update = req.params.update;
            let interested = "SELECT interested FROM events WHERE event_id = " + event_id + ";";
            let sql = "UPDATE events SET interested=? WHERE event_id = " + event_id + ";";
            await db.query(sql, parseInt(interested));
            res.json({success: "Number of interested in event updated!"});
        } catch (error) {
            res.status(SERVER_ERROR).json(SERVER_ERROR_MSG);
        }
    } else {
        res.status(INVALID_PARAM_ERROR).json({error: "Missing update or event_id parameter"});
    }
});

/**
 * Returns JSON response with user information 
 */
app.get("/profile", async function(req, res) {
    try {
        let user_id = req.params.user_id;
        let sql = "SELECT * FROM user_table INNER JOIN events ON user_table.user_id=events.user_id";
        res.status(SERVER_ERROR).json(await db.query(sql, user_id));
    } catch (error) {
        res.status(SERVER_ERROR).json(SERVER_ERROR_MSG);
    }
});

/**
 * Creates event and posts it to the database.
 */
app.post("/event/create", async function(req, res) {
    let user_id = req.params.user_id;
    let event_name = req.params.name;
    let start_time = req.params.start_time;
    let end_time = req.params.end_time;
    let begin_date = req.params.begin_date;
    let end_date = req.params.end_date;
    let location = req.params.location;
    let image_url = req.params.image_url;
    if (user_id && event_name && start_time && end_time &&
        begin_date && end_date && location && image_url) {
        try {
            let sql = "INSERT INTO events VALUES (0, ?, ?, ?, ?, ?, ?, ?)";
            await db.query(sql, [user_id, event_name, start_time, end_time,
                begin_date, end_date, location, image_url]);
            res.json({success: "Database created!"});
        } catch (error) {
            res.status(SERVER_ERROR).json(SERVER_ERROR_MSG)
        }
    } else {
        res.status(INVALID_PARAM_ERROR).json({error: "Missing one or more parameters"});
    }
 });

app.use(express.static("public"));
const PORT = process.env.PORT || 8000;
app.listen(PORT);
