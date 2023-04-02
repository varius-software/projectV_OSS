"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserPost = void 0;
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'dbuser',
    host: 'localhost',
    database: 'mydb',
    password: 'secretpassword',
    port: 5432,
});
const createUserPost = async ({ req, res }) => {
    const { name, email } = req.body;
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const queryText = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *';
        const values = [name, email];
        const { rows } = await client.query(queryText, values);
        await client.query('COMMIT');
        return res.status(201).send(rows[0]);
    }
    catch (e) {
        await client.query('ROLLBACK');
        throw e;
    }
    finally {
        client.release();
    }
};
exports.createUserPost = createUserPost;
