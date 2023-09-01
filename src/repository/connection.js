import mysql2 from 'mysql2/promise';

let con = await mysql2.createConnection({
    host: process.env.HOST,
    database: process.env.DB,
    user: process.env.USER,
    password: process.env.PWD,
});

console.log('BD conectado!');
export default con;