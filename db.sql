CREATE TABLE IF NOT EXISTS users (
    id      int NOT NULL AUTO_INCREMENT,
    names   VARCHAR(255),
    lnames  VARCHAR(255),
    email   VARCHAR(255),
    pswrd   VARCHAR(10),
    active  CHAR(1) DEFAULT "A",
    PRIMARY KEY (id)
)

DROP TABLE users