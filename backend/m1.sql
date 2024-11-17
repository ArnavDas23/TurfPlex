-- CREATE DATABASE
DROP DATABASE IF EXISTS turfplex; 
CREATE DATABASE turfplex;

-- CREATE USER
DROP USER IF EXISTS 'turfplex'@'localhost';
CREATE USER 'turfplex'@'localhost';
SET PASSWORD FOR 'turfplex'@'localhost' = PASSWORD("secret");

-- GRANT PRIVILEGES
GRANT ALL ON turfplex.* TO 'turfplex'@'localhost';
FLUSH PRIVILEGES;