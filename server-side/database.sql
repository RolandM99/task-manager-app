CREATE DATABASE taskmanage;

CREATE TABLE todo (
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(300)
);