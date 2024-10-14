CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(20),
  "name" VARCHAR(30),
  last_name VARCHAR(255),
  email VARCHAR(60),
  roles VARCHAR(20)[],
  "password" VARCHAR(255)
);

CREATE TABLE documents (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  "number" INTEGER,
  author_id INTEGER,
  content VARCHAR(255),
  type_id INTEGER,
  available_for INTEGER[],
  public_document BOOLEAN,
  creation_date TIMESTAMP,
  update_date TIMESTAMP,
  FOREIGN KEY (author_id) REFERENCES users (id)
);


