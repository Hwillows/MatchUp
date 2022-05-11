DROP TABLE IF EXISTS notes;
CREATE TABLE notes (
notes_id
INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
docname
VARCHAR(100) NOT NULL,
purpose
VARCHAR(100) NOT  NULL
);

INSERT INTO notes(docname, 
purpose)
VALUES ("helper.js", 
"connect server to db with credentials"
);