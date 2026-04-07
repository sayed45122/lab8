CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL
);

INSERT INTO tasks (name, status) VALUES ('Buy milk', 'pending');
INSERT INTO tasks (name, status) VALUES ('Do laundry', 'done');
