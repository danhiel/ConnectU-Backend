-- Author: Zach, Danhiel
-- Last updated: 02/19/2022
-- Project: ConnectSU
-- Creates a new database for the ConnectSU application, dropping the old one if it exists.

DROP DATABASE IF EXISTS connectu;
CREATE DATABASE connectu;
USE connectu;

DROP TABLE IF EXISTS Groups;
CREATE TABLE Groups (
  group_name VARCHAR (30) PRIMARY KEY
);

DROP TABLE IF EXISTS Users;
CREATE TABLE Users (
  student_id INT PRIMARY KEY,
  student_name VARCHAR (30)
); 

DROP TABLE IF EXISTS Tags;
CREATE TABLE Tags (
  tag_name VARCHAR (30) PRIMARY KEY
);

DROP TABLE IF EXISTS User_Groups;
CREATE TABLE User_Groups (
  student_id INT,
  group_name VARCHAR (30)
);

DROP TABLE IF EXISTS Tags_Users;
CREATE TABLE Tags_Users (
    student_id INT,
    tag VARCHAR (30)
);

DROP TABLE IF EXISTS Tags_Groups;
CREATE TABLE Tags_Groups (
    group_name INT,
    tag VARCHAR (30)
);