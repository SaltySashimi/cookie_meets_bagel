const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "",
  database: 'snorlax'
})

connection.connect((err) => {
  if (err) {
    console.log('Connection to db failed!');
    console.error(err);
    return;
  }
  console.log('Connection to db established!');
  connection.query('USE snorlax');
});

// connection.end((err) => {
//   // The connection is terminated gracefully
//   // Ensures all previously enqueued queries are still
//   // before sending a COM_QUIT packet to the MySQL server.
// });

module.exports = connection;
