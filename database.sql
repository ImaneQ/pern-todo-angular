-- create this file on server directory

create DATABASE pern_todo;

create TABLE todo(
-- make the To do uniques
--! SERIAL PRIMARY KEY: it indicates that the todo will be unique
todo_id SERIAL PRIMARY KEY,
-- max character
description VARCHAR(255)
-- 255 max character
);


