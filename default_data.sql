-- Author: Zach, Danhiel
-- Last updated: 02/19/2022
-- Project: ConnectSU
-- Populate the database with fake data.

INSERT INTO Groups VALUES ('Volleyball Club');
INSERT INTO Groups VALUES ("Men's Volleyball Club");
INSERT INTO Groups VALUES ('ACM Club');
INSERT INTO Groups VALUES ('Biology Club');

INSERT INTO Users VALUES (1, 'Danhiel');
INSERT INTO Users VALUES (2, 'Zach');
INSERT INTO Users VALUES (3, 'Katie');
INSERT INTO Users VALUES (4, 'Jordan');
INSERT INTO Users VALUES (5, 'Varun');
INSERT INTO Users VALUES (6, 'Raymond');
INSERT INTO Users VALUES (7, 'Martin');
INSERT INTO Users VALUES (8, 'Claire');

INSERT INTO Tags VALUES ('Sports');
INSERT INTO Tags VALUES ('Computer Science');
INSERT INTO Tags VALUES ('Biology');
INSERT INTO Tags VALUES ('Volleyball');

INSERT INTO User_Groups VALUES (1, 'Men''s Volleyball Club');
INSERT INTO User_Groups VALUES (1, 'ACM Club');

INSERT INTO User_Groups VALUES (2, 'Men''s Volleyball Club');
INSERT INTO User_Groups VALUES (2, 'ACM Club');

INSERT INTO User_Groups VALUES (3, 'Volleyball Club');
INSERT INTO User_Groups VALUES (3, 'ACM Club');

INSERT INTO User_Groups VALUES (4, 'ACM Club');

INSERT INTO User_Groups VALUES (6, 'Men''s Volleyball Club');
INSERT INTO User_Groups VALUES (6, 'ACM Club');

INSERT INTO User_Groups VALUES (7, 'Men''s Volleyball Club');
INSERT INTO User_Groups VALUES (7, 'ACM Club');

INSERT INTO User_Groups VALUES (8, 'Volleyball Club');
INSERT INTO User_Groups VALUES (8, 'Biology Club');