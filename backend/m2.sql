-- REFRESH DATABASE
-- DROP DATABASE IF EXISTS turfplex; 
-- CREATE DATABASE turfplex;

USE turfplex;

-- CREATE TABLE
DROP TABLE IF EXISTS players;
CREATE TABLE players (
    id int NOT NULL AUTO_INCREMENT,
    username varchar(45) NOT NULL,
    email varchar(45) NOT NULL,
    passwd varchar(45) NOT NULL,
    `address` varchar(45) NOT NULL,
    gender varchar(45) NOT NULL,
    active boolean NOT NULL default 1,
    PRIMARY KEY (id)
);