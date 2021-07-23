const connection = require("../infrastructure/connection");
const moment = require("moment");
class Attendance {
  add(attendance, res) {
    const dateCreate = moment().format("YYYY-MM-DD HH:MM:SS");
    const dateCurrent = moment(attendance.dateCurrent, "DD/MM/YYYY").format(
      "YYYY-MM-DD HH:MM:SS"
    );

    const dateIsValid = moment(dateCurrent).isSameOrAfter(dateCreate);
    const validClient = attendance.client.length >= 5;

    const validations = [
      {
        name: "data",
        valid: dateIsValid,
        message: "Date must be greater or equals than current date",
      },
      {
        name: "client",
        valid: validClient,
        message: "Customer must be at least five characters long",
      },
    ];

    const errors = validations.filter((field) => !field.valid);
    const existErrors = errors.length;

    if (existErrors) {
      res.status(400).json(errors);
    } else {
      const attendanceWithDate = { ...attendance, dateCreate, dateCurrent };
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
}

module.exports = new Attendance();
