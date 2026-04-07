const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// إعداد الاتصال بقاعدة البيانات باستخدام Environment Variables
const pool = new Pool({
    host: process.env.DB_HOST || 'db',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'mysecretpassword',
    database: process.env.DB_NAME || 'tasksdb',
    port: 5432,
});

app.get('/tasks', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM tasks ORDER BY id ASC');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving tasks from database');
    }
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
