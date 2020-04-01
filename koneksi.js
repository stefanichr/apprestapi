var mysql = require('mysql');

//nuat koneksi database
const conn =  mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'db_apprestapi' 
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql terkoneksi');
});

module.exports = conn;