require('dotenv').config();
const mysql = require('mysql');
const fs = require('fs');

const { DB_HOST } = process.env;
const { DB_USER } = process.env;
const { DB_PASS } = process.env;
const { DB_NAME } = process.env;

const DATABASE = {
  host: DB_HOST || '127.0.0.1',
  user: DB_USER || 'root',
  password: DB_PASS,
  database: DB_NAME,
  multipleStatements: true,
};

const con = mysql.createConnection(process.env.CLEARDB_DATABASE_URL || DATABASE);

con.connect((err) => {
  if (err) throw err;
  console.log('Connected!');

  const sql = fs.readFileSync(`${__dirname}/init_db.sql`).toString();
  con.query(sql, (error) => {
    if (error) throw error;
    console.log('Tables creation was successful!');
    console.log('Closing...');
  });

  con.end();
});
