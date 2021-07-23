const Attendance = require('../models/attendances')
module.exports = app => {
    app.get("/attendances", (req, res) => res.send('You are on attendances GET'));

    app.post('/attendances', (req, res) => {
        const attendance = req.body
        Attendance.add(attendance)
        res.send('Make attendances POST');
    });
}
