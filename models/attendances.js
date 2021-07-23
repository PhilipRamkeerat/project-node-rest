const connection = require("../infrastructure/connection");
const moment = require('moment')
class Attendance {
  add(attendance, res) {
    const dateCreate = moment().format('YYYY-MM-DD HH:MM:SS')
    const dateCurrent = moment(attendance.dateCurrent, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
    const attendanceWithDate = { ...attendance, dateCreate, dateCurrent }
    const sql = `INSERT INTO Attendances SET ?`;

    connection.query(sql, attendanceWithDate, (error, response) => {
      if (error) {
        res.status(400).json(error);
      } else {
        res.status(201).json(response);
      }
    });
  }
}

module.exports = new Attendance();
