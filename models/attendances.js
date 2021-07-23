const connection = require("../infrastructure/connection");
class Attendance {
  add(attendance) {
    const sql = `INSERT INTO Attendances SET ?`;

    connection.query(sql, attendance, (error, response) => {
      if (error) {
        console.log(error);
      } else {
        console.log(response);
      }
    });
  }
}

module.exports = new Attendance
