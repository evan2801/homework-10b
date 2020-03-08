DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(225) NOT NULL,
    eaten BOOLEAN DEFAULT false NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO burgers
(burger_name)
VALUES
('Cheese Burger'),
('Breakfast Burger'),
('Double Stacked Burger');

SELECT * FROM burgers;