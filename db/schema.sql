/* Create a database after connecting to the database server */

CREATE DATABASE IF NOT EXISTS snorlax;
USE snorlax;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  id INT NOT NULL AUTO_INCREMENT,
  username varchar(20),
  firstname varchar(20),
  lastname varchar(20),
  dob DATE,
  sex CHAR(1),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE now(),
  PRIMARY KEY(id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;


-- /* Create other tables and define schemas for them here! */
-- CREATE TABLE ratings (
--   id int NOT NULL AUTO_INCREMENT,
--   activityLevel int NOT NULL,
--   spendingLevel int NOT NULL,
--   partyingLevel int NOT NULL,
--   nerdyLevel int NOT NULL,
--   talkativeLevel int NOT NULL,
--   raterId int NOT NULL,
--   ratedId int NOT NULL,
--   comment varchar(256),
--   PRIMARY KEY(id),
--   FOREIGN KEY (raterId)
--     REFERENCES rater(raterId)
--       ON DELETE CASCADE,
--   FOREIGN KEY (ratedId)
--     REFERENCES rated(ratedId)
--       ON DELETE CASCADE
-- );
--
--


/*  Execute this file from the command line by typing:
 *    mysql -u root < db/schema.sql
 *  to create the database and the tables.*/
